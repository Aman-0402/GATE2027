import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import itertools,networkx as nx
def F(s):
    s=s.replace('¬',' not ').replace('∧',' and ').replace('∨',' or ')
    return s
def ev(f,env):
    # handle → ↔ ⊕ by sympy-free recursive parse using python with custom ops
    import sympy as sp
    sym={k:sp.Symbol(k) for k in 'pqr'}
    e=f.replace('¬','~').replace('∧','&').replace('∨','|').replace('⊕','^')
    e=e.replace('↔','>>EQ<<')
    # parse implications: use sympy parse with Implies/Equivalent via operator precedence: convert using sympy's parser with rewrite
    e=e.replace('→','>>')
    if 'EQ' in e:
        a,b=e.split('>>EQ<<'); ex=sp.Equivalent(sp.sympify(a.strip(),locals=sym),sp.sympify(b.strip(),locals=sym))
    else: ex=sp.sympify(e,locals=sym)
    return bool(ex.subs({sym[k]:(sp.true if v else sp.false) for k,v in env.items()}))
ok=bad=0;skip=[];bads=[]
for q in ALL['ai']:
    t=re.sub(r'\s+',' ',text(q['question'])); r=None
    try:
      if 'game tree has a MAX root' in t:
        mins=[list(map(int,m.split(','))) for m in re.findall(r'MIN\d: \(([-\d, ]+)\)',t)]
        best=-1e9;cnt=0;vals=[]
        for leaves in mins:
            v=1e9
            for x in leaves:
                cnt+=1; v=min(v,x)
                if v<=best: break
            vals.append(v); best=max(best,v)
        r=cnt if 'leaf nodes evaluated' in t else (best if 'value' in t else None)
      elif 'A → C ← B' in t:
        g=lambda s:float(re.search(re.escape(s)+r' = (\d+(?:\.\d+)?)',t).group(1))
        pa,pb=g('P(A=1)'),g('P(B=1)'); c={(a,b):g(f'P(C=1|A={a},B={b})') for a in (0,1) for b in (0,1)}
        J={(a,b):(pa if a else 1-pa)*(pb if b else 1-pb)*c[a,b] for a in (0,1) for b in (0,1)}
        pc=sum(J.values())
        if 'marginal P(C = 1)' in t: r=pc
        elif 'P(A = 1 | C = 1)' in t: r=(J[1,0]+J[1,1])/pc
        elif 'P(B = 1 | C = 1)' in t: r=(J[0,1]+J[1,1])/pc
        elif 'both A = 1 and B = 1' in t: r=J[1,1]/pc
      elif 'chain A → B → C' in t:
        g=lambda s:float(re.search(re.escape(s)+r' = (\d+(?:\.\d+)?)',t).group(1))
        pa=g('P(A=1)');b1,b0=g('P(B=1|A=1)'),g('P(B=1|A=0)');c1,c0=g('P(C=1|B=1)'),g('P(C=1|B=0)')
        pb=pa*b1+(1-pa)*b0; pc=pb*c1+(1-pb)*c0
        if 'marginal P(C = 1)' in t: r=pc
        elif 'P(A = 1 | C = 1)' in t: r=(pa*(b1*c1+(1-b1)*c0))/pc
        elif 'marginal P(B = 1)' in t: r=pb
      elif 'following in-degrees' in t:
        ds=[int(v) for v in re.findall(r'has (\d+) parent',t)]; r=sum(2**d for d in ds)
      elif 'Is ' in t and 'conditionally independent' in t:
        G=nx.DiGraph(re.findall(r'([A-E])→([A-E])',t)); x,y=re.search(r'Is ([A-E]) conditionally independent of ([A-E])',t).groups()
        Z=set(re.findall(r'[A-E]',t.split('given')[1].split('?')[0])) if '∅' not in t else set()
        for n in 'ABCDE': 
            if n in t.split('edges')[1]: G.add_node(n)
        ind=nx.is_d_separator(G,{x},{y},Z) if hasattr(nx,'is_d_separator') else nx.d_separated(G,{x},{y},Z)
        r='Yes, independent' if ind else 'No, not necessarily independent'
      elif 'Rejection sampling' in t:
        a,b,n=[float(v) for v in re.search(r'P\(A=1\) = ([\d.]+) and P\(B=1\) = ([\d.]+) .*Out of (\d+)',t).groups()]; r=a*b*n
      elif 'satisfying assignments' in t:
        f=re.search(r'formula (.+?) over',t).group(1); r=sum(ev(f,dict(zip('pqr',v))) for v in itertools.product([False,True],repeat=3))
      elif t.startswith('The formula'):
        f=re.search(r'The formula (.+?) is',t).group(1); vs=[ev(f,dict(zip('pqr',v))) for v in itertools.product([False,True],repeat=3)]
        r='Valid (a tautology)' if all(vs) else ('Unsatisfiable (a contradiction)' if not any(vs) else 'Satisfiable but not valid')
      elif 'knowledge base KB' in t:
        kb=re.search(r'KB = \{ (.+?) \}',t).group(1).split(', '); s=re.search(r'sentence (.+?) \?',t).group(1)
        ent=all(ev(s,e) for v in itertools.product([False,True],repeat=3) for e in [dict(zip('pqr',v))] if all(ev(k,e) for k in kb))
        r='Yes, KB entails it' if ent else 'No, KB does not entail it'
      elif 'logically equivalent' in t:
        a,b=re.search(r'formulas (.+?) and (.+?) logically',t).groups()
        eq=all(ev(a,e)==ev(b,e) for v in itertools.product([False,True],repeat=3) for e in [dict(zip('pqr',v))])
        r='Yes, equivalent' if eq else 'No, not equivalent'
      elif 'edges S' in t:
        G=nx.Graph(); [G.add_edge(a,b,weight=int(w)) for a,b,w in re.findall(r'([A-Z])–([A-Z]) \((\d+)\)',t)]
        if 'Uniform-cost search' in t or 'true shortest-path cost' in t: r=nx.shortest_path_length(G,'S','G',weight='weight')
        elif 'admissible' in t:
            h={k:int(v) for k,v in re.findall(r'h\(([A-Z])\) = (\d+)',t)}
            d=nx.single_source_dijkstra_path_length(G,'G'); r=sum(1 for k in 'SABCD' if k in h and h[k]<=d.get(k,1e9))
    except Exception as e: bads.append((q['id'],'EXC',repr(e),t[:150]));continue
    if r is None: skip.append(q['id']);continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<=0.0051
    else: good=[o['k'] for o in q['options'] if o['t']==str(r)]==q['answer']
    if good: ok+=1
    else: bad+=1;bads.append((q['id'],r,q['answer'],[o['t'] for o in q['options']],t[:260]))
print('ok',ok,'bad',bad,'skip',len(skip),skip)
for b in bads: print(b)
