import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import sympy as sp
x=sp.symbols('x'); 
def P(s): 
    s=s.replace('^','**').replace('−','-').replace('ln','log')
    s=re.sub(r'(\d)(x|sin|cos|e|\()',r'\1*\2',s); s=s.replace('e**','exp').replace('exp(','exp(')
    return sp.sympify(s.replace('exp','E**') if False else s,locals={'e':sp.E})
ok=bad=skip=0;bads=[]
def cmp(q,r):
    if q['type']=='NAT': return abs(float(r)-float(q['answer']))<=max(0.006,1e-9)
    ks=[o['k'] for o in q['options'] if sp.simplify(sp.sympify(o['t'].replace('−','-'))-r)==0]
    return ks==q['answer']
for q in ALL['co']:
    t=re.sub(r'\s+',' ',text(q['question'])); r=None
    try:
        m=re.search(r'f\(x\) = (.+?), the value of f′\((-?\d+)\)',t)
        if m: r=sp.diff(P(m.group(1)),x).subs(x,int(m.group(2)))
        m=re.search(r'f\(x\) = (.+?), the second derivative f″\((-?\d+)\)',t)
        if m: r=sp.diff(P(m.group(1)),x,2).subs(x,int(m.group(2)))
        m=re.search(r'f\(x\) = (cos|sin)\((\d)x\), the value of f″\(0\)',t)
        if m: r=sp.diff(getattr(sp,m.group(1))(int(m.group(2))*x),x,2).subs(x,0)
        m=re.search(r'Maclaurin series of (.+?), the coefficient of x(.)',t) or re.search(r'coefficient of x(.) in the Maclaurin series of (.+?) is',t)
        if m:
            if t.startswith('In'): fs,p=m.group(1),m.group(2)
            else: p,fs=m.group(1),m.group(2)
            p='⁰¹²³⁴⁵⁶'.index(p); fs=fs.replace('e^(','exp(').replace('−','-')
            f=sp.sympify(re.sub(r'(\d)x',r'\1*x',fs)); r=sp.series(f,x,0,p+1).removeO().coeff(x,p)
        m=re.search(r'step size ([\d/.]+) is applied to f\(x\) = (\d*)x², starting at x₀ = (-?[\d.]+)\. After (\d+) updates',t)
        if m:
            eta=sp.Rational(m.group(1)); a=int(m.group(2) or 1); xv=sp.Rational(m.group(3))
            for _ in range(int(m.group(4))): xv=xv-eta*2*a*xv
            r=xv
        m=re.search(r'f\(x\) = (\d*)x² converges',t)
        if m: a=int(m.group(1) or 1); r=('0<η<'+str(sp.Rational(1,a)))
        m=re.search(r'lim_\{x→(0|∞)\} (.+?) is',t)
        if m:
            e=m.group(2).replace('e^(','exp(').replace('−','-').replace('ln','log')
            e=re.sub(r'(\d)(x|sin|cos|\()',r'\1*\2',e); e=e.replace('^','**').replace('x³','x**3').replace('x²','x**2')
            r=sp.limit(sp.sympify(e),x,0 if m.group(1)=='0' else sp.oo)
        m=re.search(r'f\(x\) = (\d+)x \+ k for x < (\d+), and f\(x\) = x² for x ≥ \d+, is continuous',t)
        if m: a,c=int(m.group(1)),int(m.group(2)); r=c*c-a*c
        m=re.search(r'f\(x\) = ax \+ k for x < (\d+).*differentiable',t)
        if m: c=int(m.group(1)); a=2*c; r=a+(c*c-a*c)
        m=re.search(r'(local minimum|local maximum) (value of|at x = ).*?f\(x\) = (.+?) (is|has)',t) or re.search(r'f\(x\) = (.+?) has a (local minimum|local maximum) at x',t)
        m1=re.search(r'The local (minimum|maximum) value of f\(x\) = (.+?) is',t); m2=re.search(r'f\(x\) = (.+?) has a local (minimum|maximum) at x',t)
        mm=m1 or m2
        if mm:
            kind,fs=(m1.group(1),m1.group(2)) if m1 else (m2.group(2),m2.group(1)); f=P(fs)
            cs=[c for c in sp.solve(sp.diff(f,x),x) if c.is_real]
            pick=[c for c in cs if (sp.diff(f,x,2).subs(x,c)>0)==(kind=='minimum')]
            assert len(pick)==1; r=f.subs(x,pick[0]) if m1 else pick[0]
        m=re.search(r'number of critical points .* of f\(x\) = (.+?) is',t)
        if m: r=len([c for c in sp.solve(sp.diff(P(m.group(1)),x),x) if c.is_real])
        m=re.search(r'The (minimum|maximum) (value of|of) f\(x\) = (.+?) over all real x (is|occurs)',t)
        if m:
            f=P(m.group(3)); c=sp.solve(sp.diff(f,x),x)[0]; r=f.subs(x,c) if m.group(2)=='value of' else c
        m=re.search(r'The (minimum|maximum) value of f\(x\) = (.+?) on the closed interval \[(-?\d+), (-?\d+)\]',t)
        if m:
            f=P(m.group(2)); a,b=int(m.group(3)),int(m.group(4)); pts=[a,b]+[c for c in sp.solve(sp.diff(f,x),x) if c.is_real and a<=c<=b]
            vals=[f.subs(x,p) for p in pts]; r=min(vals) if m.group(1)=='minimum' else max(vals)
        m=re.search(r'f\(x\) = x \+ (\d+)/x for x > 0',t)
        if m: r=2*sp.sqrt(int(m.group(1)))
        m=re.search(r'infinite series (\d+) \+ \d+/(\d+) \+',t)
        if m: a,d=int(m.group(1)),int(m.group(2)); r=sp.Rational(a)/(1-sp.Rational(1,d))
        m=re.search(r'The function f\(x\) = (.+?) is$',t.strip())
        if m:
            f=P(m.group(1)); s2=sp.diff(f,x,2); r='convex' if s2.is_number and s2>0 else ('concave' if s2.is_number and s2<0 else None)
    except Exception as e: bads.append((q['id'],'EXC',repr(e),t)); continue
    if r is None: skip+=1; print('SKIP',q['id'],t[:80]); continue
    if isinstance(r,str):
        if r.startswith('0<η'):
            good=[o['k'] for o in q['options'] if sp.sympify(html.unescape(o['t']).split('<')[-1]) ==sp.sympify(r.split('<')[-1]) and o['t'].startswith('0')]==q['answer']
        else: good=[o['k'] for o in q['options'] if o['t']==r]==q['answer']
    else: good=cmp(q,r)
    if good: ok+=1
    else: bad+=1; bads.append((q['id'],r,q['answer'],t))
print('ok',ok,'bad',bad,'skip',skip)
for b in bads: print(b)
