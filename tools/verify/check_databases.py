import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import itertools,statistics as st,math
def fds(t): 
    out=[]
    for l,r in re.findall(r'([A-E]+) → ([A-E]+)',t.split('dependencies')[1]): out.append((set(l),set(r)))
    return out
def clo(X,F):
    X=set(X)
    while True:
        n=set(X)
        for l,r in F:
            if l<=X: n|=r
        if n==X: return X
        X=n
def keys(U,F):
    ks=[]
    for k in range(1,len(U)+1):
        for c in itertools.combinations(sorted(U),k):
            if clo(c,F)==U and not any(set(x)<=set(c) for x in ks): ks.append(c)
    return ks
def nf(U,F):
    ks=keys(U,F); prime=set(''.join(''.join(k) for k in ks))
    # all nontrivial FDs implied with single RHS, LHS any subset
    imp=[(set(X),a) for k in range(1,len(U)) for X in itertools.combinations(sorted(U),k) for a in clo(X,F)-set(X)]
    sk=lambda X: clo(X,F)==U
    if all(sk(X) for X,a in imp): return 'BCNF'
    if all(sk(X) or a in prime for X,a in imp): return '3NF'
    # 2NF: no non-prime attribute partially dependent on a candidate key
    if all(not(a not in prime and any(X<set(k) for k in ks)) for X,a in imp): return '2NF'
    return '1NF'
ok=bad=0;skip=[];bads=[]
for q in ALL['db']:
    if q['topic'] in ('SQL',): continue
    t=re.sub(r'\s+',' ',text(q['question'])); r=None
    m=re.search(r'R\(([A-E, ]+)\)',t)
    if m and 'dependencies' in t:
        U=set(m.group(1).replace(', ','')); F=fds(t)
        if 'closure' in t: X=re.search(r'closure ([A-E]+)⁺',t).group(1); r=''.join(sorted(clo(X,F)))
        elif 'number of candidate keys' in t: r=len(keys(U,F))
        elif 'smallest candidate key' in t: r=min(len(k) for k in keys(U,F))
        elif 'highest normal form' in t: r=nf(U,F)
    elif 'concept hierarchies have' in t: r=math.prod(int(v)+1 for v in re.search(r'have ([\d, ]+) levels',t).group(1).split(','))
    elif 'no concept hierarchies' in t: r=2**int(re.search(r'has (\d+) dim',t).group(1))
    elif 'z-score of' in t:
        d=[int(v) for v in re.search(r'\[([\d, ]+)\]',t).group(1).split(',')]; x=int(re.search(r'z-score of (\d+)',t).group(1)); r=(x-st.mean(d))/st.pstdev(d)
    elif 'Min-max' in t:
        d=[int(v) for v in re.findall(r'\[([\d, ]+)\]',t)[1].split(',')]; x=int(re.search(r'value of (\d+)',t).group(1)); r=(x-min(d))/(max(d)-min(d))
    elif 'stored unspanned in disk blocks' in t:
        n,s,b=map(int,re.search(r'has (\d+) fixed-length records of (\d+) bytes each, stored unspanned in disk blocks of (\d+)',t).groups()); r=math.ceil(n/(b//s))
    elif 'records per block is' in t: b,s=map(int,re.search(r'block is (\d+) bytes.*records of (\d+) bytes',t).groups()); r=b//s
    elif 'maximum number of pointers in an internal node' in t:
        B,K,P=map(int,re.search(r'block of (\d+) bytes. A key is (\d+) bytes and a block pointer is (\d+)',t).groups()); r=(B+K)//(P+K)
    elif 'B+ tree in which a leaf holds' in t:
        ks=[int(v) for v in re.search(r'Keys \[([\d, ]+)\]',t).group(1).split(',')]; cap=int(re.search(r'holds at most (\d+)',t).group(1))
        leaves=[[]]
        for k in ks:
            i=max([j for j,l in enumerate(leaves) if not l or l[0]<=k] or [0])
            if leaves[i] and k<leaves[i][0]: i=0
            leaves[i]=sorted(leaves[i]+[k])
            if len(leaves[i])>cap:
                l=leaves[i]; c=math.ceil(len(l)/2); leaves[i:i+1]=[l[:c],l[c:]]
        r=len(leaves)
    elif 'dense primary index' in t:
        n,e=map(int,re.search(r'has (\d+) records.*?(\d+) index entries fit',t).groups()); r=math.ceil(n/e)
    elif 'sparse' in t and 'index' in t and 'blocks in the index' in t:
        n,rb,e=map(int,re.search(r'has (\d+) records, (\d+) records per block.*?(\d+) index entries',t).groups()); r=math.ceil(math.ceil(n/rb)/e)
    elif 'The relations A and B are shown' in t:
        A=set(eval('['+re.search(r'A\(x, y\) = \[(.*?)\]',t).group(1)+']')); B=set(eval('['+re.search(r'B\(x, y\) = \[(.*?)\]',t).group(1)+']'))
        op=re.search(r'tuples in A (.) B',t).group(1); r={'⋈':len(A&B),'∪':len(A|B),'−':len(A-B),'∩':len(A&B),'×':len(A)*len(B)}[op]
    elif 'Relation A(x, y, z) contains' in t:
        A=eval(re.search(r'tuples (\[.*?\])\.',t).group(1)); m=re.search(r'π_([xyz,]+)\(A\)',t)
        if m: idx=['xyz'.index(c) for c in m.group(1).split(',')]; r=len({tuple(a[i] for i in idx) for a in A})
        m=re.search(r'σ_(.+?)\(A\)',t)
        if m and 'π' not in t: 
            cond=m.group(1).replace('=','==').replace('∧',' and ').replace('<==','<=').replace('>==','>='); r=sum(1 for x,y,z in A if eval(cond))
    if r is None: skip.append(q['id']);continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<=0.0051
    else: good=[o['k'] for o in q['options'] if o['t'].replace(' ','')==str(r)]==q['answer']
    if good: ok+=1
    else: bad+=1;bads.append((q['id'],r,q['answer'],[o['t'] for o in q['options']],t[:260]))
print('ok',ok,'bad',bad,'skip',len(skip),skip)
for b in bads: print(b)
