import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import io,contextlib,itertools,networkx as nx,math
L=lambda s:[int(v) for v in re.findall(r'-?\d+',s)]
def bst(keys):
    T={}
    root=keys[0];T[root]=[None,None]
    for k in keys[1:]:
        c=root
        while True:
            i=0 if k<c else 1
            if T[c][i] is None: T[c][i]=k;T[k]=[None,None];break
            c=T[c][i]
    return root,T
def pre(r,T): return [] if r is None else [r]+pre(T[r][0],T)+pre(T[r][1],T)
def post(r,T): return [] if r is None else post(T[r][0],T)+post(T[r][1],T)+[r]
def ino(r,T): return [] if r is None else ino(T[r][0],T)+[r]+ino(T[r][1],T)
def lvl(r,T):
    out=[];Q=[r]
    while Q:
        c=Q.pop(0); out.append(c); Q+= [x for x in T[c] if x is not None]
    return out
def build(pr,io_):
    if not pr: return []
    r=pr[0];i=io_.index(r); return build(pr[1:i+1],io_[:i])+build(pr[i+1:],io_[i+1:])+[r]
def msort(a):
    if len(a)<=1: return a,0
    m=len(a)//2; l,c1=msort(a[:m]); r,c2=msort(a[m:]); o=[];c=0;i=j=0
    while i<len(l) and j<len(r):
        c+=1
        if l[i]<=r[j]: o.append(l[i]);i+=1
        else: o.append(r[j]);j+=1
    return o+l[i:]+r[j:],c1+c2+c
ok=bad=0;skip=[];bads=[]
for q in ALL['pd']:
    if q['topic']=='Python tracing': continue
    t=re.sub(r'\s+',' ',text(q['question'])); r=None
    code=re.search(r'<pre><code>(.*?)</code></pre>',q['question'],re.S)
    try:
      if t.startswith('What is printed by this program') or 'searches a sorted array' in t:
        buf=io.StringIO()
        with contextlib.redirect_stdout(buf): exec(html.unescape(code.group(1)),{})
        r=int(buf.getvalue())
      elif 'depth-first traversal' in t or 'breadth-first traversal' in t:
        V=re.search(r'vertices ([A-Z, ]+?) and',t).group(1).split(', '); E=re.findall(r'([A-Z])–([A-Z])',t)
        adj={v:sorted({b for a,b in E if a==v}|{a for a,b in E if b==v}) for v in V}
        s=re.search(r'Starting at ([A-Z])',t).group(1)
        if 'depth' in t:
            seen=[]
            def d(u):
                seen.append(u)
                for w in adj[u]:
                    if w not in seen: d(w)
            d(s)
        else:
            seen=[s];Q=[s]
            while Q:
                u=Q.pop(0)
                for w in adj[u]:
                    if w not in seen: seen.append(w);Q.append(w)
        r=' '.join(seen)
      elif 'shortest path from' in t:
        G=nx.Graph(); [G.add_edge(a,b,weight=int(w)) for a,b,w in re.findall(r'([A-Z])–([A-Z]) \((\d+)\)',t)]
        a,b=re.search(r'from ([A-Z]) to ([A-Z])',t).groups(); r=nx.shortest_path_length(G,a,b,weight='weight')
      elif 'weight of a minimum spanning tree' in t or 'minimum spanning tree' in t:
        G=nx.Graph(); [G.add_edge(a,b,weight=int(w)) for a,b,w in re.findall(r'([A-Z])–([A-Z]) \((\d+)\)',t)]
        r=nx.minimum_spanning_tree(G).size(weight='weight')
      elif 'connected components' in t:
        n=int(re.search(r'vertices 0 to (\d+)',t).group(1)); G=nx.Graph(); G.add_nodes_from(range(n+1)); G.add_edges_from((int(a),int(b)) for a,b in re.findall(r'\((\d+),(\d+)\)',t)); r=nx.number_connected_components(G)
      elif 'topological orderings' in t:
        V=re.search(r'vertices ([A-Z, ]+?) and',t).group(1).split(', '); E=re.findall(r'([A-Z])→([A-Z])',t)
        r=sum(1 for p in itertools.permutations(V) if all(p.index(a)<p.index(b) for a,b in E))
      elif 'maximum number of edges in a simple undirected graph' in t: n=L(t)[0]; r=n*(n-1)//2
      elif 'hash table' in t and 'chaining' in t:
        ks=L(t.split('[')[1].split(']')[0]); m=int(re.search(r'size (\d+)',t).group(1)); c=[0]*m
        for k in ks: c[k%m]+=1
        r=max(c)
      elif 'linear probing' in t:
        ks=L(t.split('[')[1].split(']')[0]); m=int(re.search(r'size (\d+)',t).group(1)); T=[None]*m; cnt=0
        for k in ks:
            h=k%m; i=h
            while T[i] is not None: i=(i+1)%m
            T[i]=k; cnt+= i!=h
        r=cnt if 'other than' in t else None
      elif 'bubble sort below' in t and 'comparisons' in t: n=len(L(t.split('[')[1].split(']')[0])); r=n*(n-1)//2
      elif ('Bubble sort' in t and 'swaps' in t) or 'Insertion sort' in t and 'shifts' in t or 'number of inversions' in t:
        a=L(re.findall(r'\[([-\d, ]+)\]',t)[-1]); r=sum(1 for i in range(len(a)) for j in range(i+1,len(a)) if a[i]>a[j])
      elif 'Selection sort' in t:
        a=L(t.split('[')[1].split(']')[0]); k=int(re.search(r'after (\d+) pass',t).group(1))
        for i in range(k):
            m=min(range(i,len(a)),key=lambda j:a[j]); a[i],a[m]=a[m],a[i]
        r=str(a)
      elif 'binary search makes on a sorted array of' in t: n=int(re.search(r'array of (\d+)',t).group(1)); r=math.floor(math.log2(n))+1
      elif 'partition' in t and 'Lomuto' in t:
        a=L(re.search(r'a = \[([^\]]*)\]',t).group(1)); lo,hi=map(int,re.search(r'partition\(a, (\d+), (\d+)\) on',t).groups())
        p=a[hi];i=lo-1
        for j in range(lo,hi):
            if a[j]<=p: i+=1;a[i],a[j]=a[j],a[i]
        a[i+1],a[hi]=a[hi],a[i+1]; r=i+1 if 'value returned' in t else str(a)
      elif 'merge sort' in t: a=L(t.split('[')[1].split(']')[0]); r=msort(a)[1]
      elif 'postfix expression' in t:
        toks=re.search(r'expression (.+?) is evaluated',t).group(1).split(); S=[]
        for k in toks:
            if re.fullmatch(r'-?\d+',k): S.append(int(k))
            else: b=S.pop();a=S.pop(); S.append({'+':a+b,'-':a-b,'*':a*b,'/':a//b}[k])
        r=S[0]
      elif 'Starting with an empty stack' in t:
        S=[];out=[]
        for op in re.findall(r'push\((\d+)\)|pop',t.split('operations')[1]):
            pass
        for m in re.finditer(r'push\((\d+)\)|pop',t.split('operations')[1].split('are performed')[0]):
            if m.group(1): S.append(int(m.group(1)))
            else: out.append(S.pop())
        r=str(out) if 'returned by pop' in t else str(S)
      elif 'Starting with an empty queue' in t:
        Q=[];out=[]
        for m in re.finditer(r'enqueue\((\d+)\)|dequeue',t.split('are performed')[0]):
            if m.group(1): Q.append(int(m.group(1)))
            else: out.append(Q.pop(0))
        r=str(Q) if 'contents' in t else str(out)
      elif 'different output sequences' in t: n=int(re.search(r'…, (\d+)',t).group(1)); r=math.comb(2*n,n)//(n+1)
      elif 'binary search tree' in t and '[' in t:
        ks=L(t.split('[')[1].split(']')[0]); rt,T=bst(ks)
        if 'preorder traversal is' in t: r=str(pre(rt,T))
        elif 'postorder traversal is' in t: r=str(post(rt,T))
        elif 'level-order' in t: r=str(lvl(rt,T))
        elif 'leaf nodes' in t: r=sum(1 for k in T if T[k]==[None,None])
        elif 'height' in t:
            def h(x): return -1 if x is None else 1+max(h(T[x][0]),h(T[x][1]))
            r=h(rt)
      elif 'preorder traversal of a binary tree is' in t:
        pr=L(t.split('is [')[1].split(']')[0]); io_=L(t.split('inorder traversal is [')[1].split(']')[0]); r=str(build(pr,io_))
      elif 'minimum possible height of a binary tree with' in t: n=L(t)[0]; r=math.floor(math.log2(n))
      elif 'maximum number of nodes in a binary tree of height' in t: h=L(t)[0]; r=2**(h+1)-1
      elif 'full binary tree' in t: r=int(re.search(r'has (\d+) leaf',t).group(1))-1
      elif re.search(r'A tree with (\d+) nodes has how many edges',t): r=L(t)[0]-1
    except Exception as e: bads.append((q['id'],'EXC',repr(e),t[:150]));continue
    if r is None: skip.append(q['id']);continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<1e-9
    else:
        good=[o['k'] for o in q['options'] if html.unescape(o['t']).replace(' ','')==str(r).replace(' ','')]==q['answer']
    if good: ok+=1
    else: bad+=1;bads.append((q['id'],r,q['answer'],[o['t'] for o in q['options']],t[:250]))
print('ok',ok,'bad',bad,'skip',len(skip),skip)
for b in bads: print(b)
