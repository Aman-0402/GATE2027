import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import sympy as sp
from fractions import Fraction as F
def mats(t): return [sp.Matrix([[sp.Rational(x) for x in r.split()] for r in m.split(';')]) for m in re.findall(r'\[([-\d ;.]+)\]',t)]
def vecs(t): return [sp.Matrix([sp.Rational(x) for x in v.split(',')]) for v in re.findall(r'\(([-\d, ]+)\)',t)]
def nums(t): return [sp.Rational(x) for x in re.findall(r'-?\d+(?:\.\d+)?',t)]
def ans(q):
    if q['type']=='NAT': return [sp.Rational(q['answer'])]
    return [x['t'] for x in q['options'] if x['k'] in q['answer']]
def val_opt(q,v):  # MCQ numeric options
    ks=[x['k'] for x in q['options'] if sp.nsimplify(x['t'].replace('−','-'))==v]
    return ks==q['answer']
ok=bad=skip=0;bads=[]
for q in ALL['la']:
    t=re.sub(r'\s+',' ',text(q['question'])); M=mats(t); r=None
    try:
        if t.startswith('The determinant of the matrix'): r=M[0].det()
        elif 'det(3A)' in t or re.search(r'det\(\dA\)',t):
            k,=map(int,re.findall(r'det\((\d)A\)',t)); n=int(re.search(r'(\d)×',t).group(1)); d=nums(t.split('det(A) =')[1])[0]; r=k**n*d
        elif 'det(Aᵀ·A)' in t: d=nums(t.split('det(A) =')[1])[0]; r=d*d
        elif 'det(A⁻¹)' in t: d=nums(t.split('det(A) =')[1])[0]; r=1/d
        elif 'sum of its eigenvalues' in t: r=M[0].trace()
        elif 'smallest eigenvalue' in t: r=min(M[0].eigenvals())
        elif 'largest eigenvalue' in t: r=max(M[0].eigenvals())
        elif 'trace of A⁻¹' in t:
            ev=nums(t.split('eigenvalues')[1].split('(')[0]); mul=nums(t.split('multiplied by')[1])[0]; r=sum(1/e for e in ev)*mul
        elif 'determinant of A +' in t:
            ev=nums(t.split('eigenvalues')[1].split('.')[0]); k=nums(t.split('A +')[1])[0]; r=sp.prod([e+k for e in ev])
        elif 'trace of A³' in t or 'trace of A²' in t:
            ev=nums(t.split('eigenvalues')[1].split('.')[0]); p=3 if '³' in t else 2; r=sum(e**p for e in ev)
        elif 'nullity of the' in t: r=M[0].cols-M[0].rank()
        elif t.startswith('The rank of the matrix'): r=M[0].rank()
        elif 'dimension of its null space' in t:
            m_,n_,k=map(int,re.findall(r'(\d+)×(\d+) matrix of rank (\d+)',t)[0]); r=n_-k
        elif 'the value of x1' in t or 'value of x2' in t or 'value of x3' in t:
            b=vecs(t.split('right-hand side')[1])[0]; i=int(re.search(r'value of x(\d)',t).group(1)); r=M[0].LUsolve(b)[i-1]
        elif 'The system Ax = b' in t:
            b=vecs(t.split('b =')[1])[0]; A=M[0]; ra,rb=A.rank(),A.row_join(b).rank()
            r='No solution' if ra<rb else ('Unique solution' if ra==A.cols else 'Infinitely many solutions')
        elif 'of A⁻¹ for' in t:
            i,j=map(int,re.findall(r'row (\d), column (\d)',t)[0]); r=M[0].inv()[i-1,j-1]
        elif 'squares of the singular values' in t: r=sum(x**2 for x in M[0])
        elif 'largest singular value' in t: r=max(sp.sqrt(e) for e in (M[0].T*M[0]).eigenvals())
        elif 'singular values' in t and 'product' in t: r=abs(M[0].det())
        elif 'LU decomposition' in t: A=M[0]; r=A[1,0]/A[0,0]
        elif 'spanned by the vectors' in t: r=sp.Matrix.hstack(*vecs(t)).rank()
        elif 'in ℝ³ are' in t or 'in ℝ³ are' in t or re.search(r'are$',t) and len(vecs(t))>=3:
            V=vecs(t); r='linearly independent' if sp.Matrix.hstack(*V).rank()==len(V) else 'linearly dependent'
        elif 'orthogonal projection of v' in t:
            v,u=vecs(t)[:2]; r=v.dot(u)/u.dot(u)
        elif 'squared Euclidean norm' in t: v=vecs(t)[0]; r=v.dot(v)
        elif 'dot product of' in t: u,v=vecs(t)[:2]; r=u.dot(v)
        elif 'are orthogonal. The value of t' in t:
            u=vecs(t)[0]; vv=re.search(r'v = \(([^)]*)\)',t).group(1).split(','); s_=sum(u[i]*sp.Rational(vv[i]) for i in range(len(vv)-1)); r=-s_/u[len(vv)-1]
        elif 'quadratic form' in t:
            A=M[0]; ev=[sp.N(e) for e in A.eigenvals()]
            r='Positive definite' if min(ev)>1e-12 else ('Positive semi-definite but not positive definite' if min(ev)>-1e-12 else ('Negative definite' if max(ev)<-1e-12 else 'Not positive semi-definite'))
            if r=='Not positive semi-definite' and max(ev)<1e-12: r=None
        elif 'projection matrix. Its rank' in t: n=int(re.search(r'(\d+)×',t).group(1)); r=n-1
        elif 'u·uᵀ/(uᵀu)' in t: r=1
    except Exception as e: bads.append((q['id'],'EXC',e,t));continue
    if r is None: skip+=1; continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<1e-6
    elif isinstance(r,str): good=[x['k'] for x in q['options'] if x['t']==r]==q['answer']
    else: good=val_opt(q,r)
    if good: ok+=1
    else: bad+=1; bads.append((q['id'],r,q['answer'],t))
print('ok',ok,'bad',bad,'not auto-checked',skip)
for b in bads: print(b)
for q in ALL['la']:
    pass
