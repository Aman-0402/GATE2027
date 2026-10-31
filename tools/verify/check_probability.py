import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
from fractions import Fraction as Fr
from math import comb,exp,factorial,sqrt
from scipy.stats import norm
import statistics as st
def N(s): return [Fr(v) for v in re.findall(r'-?\d+(?:\.\d+)?(?:/\d+)?',s)]
ok=bad=0;skip=[];bads=[]
for q in ALL['ps']:
    t=re.sub(r'\s+',' ',text(q['question'])); r=None; n=N(t)
    def g(p): 
        m=re.search(p,t); return m
    if g(r'independent with P\(A\) = .* Then P\(A ∪ B\)'): a,b=n[:2]; r=a+b-a*b
    elif g(r'mutually exclusive with P\(A\)'): a,b=n[:2]; r=1-a-b
    elif g(r'disease affects'): p,s,f=n[0]/100,n[1]/100,n[2]/100; r=p*s/(p*s+(1-p)*f)
    elif g(r'Urn 1 has'): r1,b1,r2,b2=n[1],n[2],n[4],n[5]; a=r1/(r1+b1);c=r2/(r2+b2); r=a/(a+c)
    elif g(r'biased coin'): p=n[0];k=int(n[1]) ;N_=int(n[1]);
    if g(r'biased coin'):
        m=re.search(r'P\(head\) = ([\d/]+)\. It is tossed (\d+) times\. The probability of exactly (\d+)',t); p=Fr(m.group(1));nn=int(m.group(2));k=int(m.group(3)); r=comb(nn,k)*p**k*(1-p)**(nn-k)
    elif g(r'Binomial\(n = (\d+), p = ([\d/.]+)\)\. The variance'): m=g(r'n = (\d+), p = ([\d/.]+)'); r=int(m.group(1))*Fr(m.group(2))*(1-Fr(m.group(2)))
    elif g(r'Binomial\(n = (\d+), p = ([\d/.]+)\)\. The mean'): m=g(r'n = (\d+), p = ([\d/.]+)'); r=int(m.group(1))*Fr(m.group(2))
    elif g(r'Poisson distribution with mean (\d+)\. The probability of exactly (\d+)'): m=g(r'mean (\d+)\. The probability of exactly (\d+)'); l,k=int(m.group(1)),int(m.group(2)); r=exp(-l)*l**k/factorial(k)
    elif g(r'rate (\d+) per minute. The probability that no request arrives in a (\d+)-minute'): m=g(r'rate (\d+) per minute. The probability that no request arrives in a (\d+)'); r=exp(-int(m.group(1))*int(m.group(2)))
    elif g(r'Poisson random variable X with E\[X\] = (\d+)'): l=n[0]; r=l+l*l
    elif g(r'expected number of trials'): r=1/n[0]
    elif g(r'Given that the sum is (\d+), the probability that the first die shows (\d+)'):
        m=g(r'sum is (\d+), the probability that the first die shows (\d+)'); s,d=int(m.group(1)),int(m.group(2))
        pairs=[(a,b) for a in range(1,7) for b in range(1,7) if a+b==s]; r=Fr(sum(1 for a,b in pairs if a==d),len(pairs))
    elif g(r'standard pack of 52'):
        kind={'face card':12,'ace':4,'heart':13,'king':4,'spade':13,'red card':26}
        k=[v for kk,v in kind.items() if 'is a '+kk in t or 'is an '+kk in t][0]; r=Fr(k-1,51)
    elif g(r'A team of (\d+) is chosen at random from (\d+) people'): m=g(r'team of (\d+) is chosen at random from (\d+)'); k,nn=int(m.group(1)),int(m.group(2)); r=Fr(comb(nn-2,k-2),comb(nn,k))
    elif g(r'fair coin is tossed (\d+) times. The probability of getting at least 1 head'): r=1-Fr(1,2**int(n[0]))
    elif g(r'arranged in a row at random. The probability that two particular'): r=Fr(2,int(n[0]))
    elif g(r'The points \(x, y\) are'):
        pts=re.findall(r'\((-?\d+), (-?\d+)\)',t); xs=[int(a) for a,b in pts]; ys=[int(b) for a,b in pts]; r=round(st.correlation(xs,ys),6)
    elif g(r'paired data'):
        pts=re.findall(r'\((-?\d+),(-?\d+)\)',t); xs=[Fr(a) for a,b in pts]; ys=[Fr(b) for a,b in pts]; mx=sum(xs)/len(xs);my=sum(ys)/len(ys); r=sum((a-mx)*(b-my) for a,b in zip(xs,ys))/len(xs)
    elif g(r'If Cov\(X, Y\) = (-?\d+), then Cov\((\d+)X, (\d+)Y\)'): r=n[0]*n[1]*n[2]
    elif g(r'Var\(X\) = (\d+), Var\(Y\) = (\d+) and Cov\(X, Y\) = (-?\d+). Then Var\(X \+ Y\)'): r=n[0]+n[1]+2*n[2]
    elif g(r'The (median|mean|population variance) of the data'):
        d=[Fr(v) for v in re.findall(r'-?\d+',t.split('data')[1].split('(')[0].split(' is')[0])]
        r=st.median(d) if 'median' in t else (sum(d)/len(d) if 'mean of' in t else st.pvariance(d))
    elif g(r'has the distribution P\(X='):
        pr=[(Fr(a),Fr(b)) for a,b in re.findall(r'P\(X=(-?\d+)\) = (\d+(?:\.\d+)?)',t)]; E=sum(a*b for a,b in pr); r=E if 'expected value' in t else sum(a*a*b for a,b in pr)-E*E
    elif g(r'If Var\(X\) = (\d+), then Var\((\d+)X [+−-] (\d+)\)'): r=n[0]*n[1]**2
    elif g(r'If E\[X\] = (-?\d+), then E\[(\d+)X [−+-] (\d+)\]'):
        m=g(r'E\[X\] = (-?\d+), then E\[(\d+)X ([−+]) (\d+)\]'); r=int(m.group(2))*int(m.group(1))+(1 if m.group(3)=='+' else -1)*int(m.group(4))
    elif g(r'independent with Var\(X\) = (\d+) and Var\(Y\) = (\d+). Then Var\((\d+)X [−+] (\d+)Y\)'):
        m=g(r'Var\(X\) = (\d+) and Var\(Y\) = (\d+). Then Var\((\d+)X [−+] (\d+)Y\)'); a,b,c,d=map(int,m.groups()); r=c*c*a+d*d*b
    elif g(r'(\d+) fair dice are rolled. The expected value of the sum'): r=Fr(7,2)*n[0]
    elif g(r'Having already waited'): m=g(r'mean (\d+) minutes.*more than (\d+) further'); r=exp(-int(m.group(2))/int(m.group(1)))
    elif g(r'exponentially distributed with rate λ = (\d+). Its mean and variance'): l=int(n[0]); r=f'1/{l} and 1/{l*l}'
    elif g(r'exponentially distributed with mean (\d+) years. The probability that it lasts more than (\d+)'): r=exp(-n[1]/n[0])
    elif g(r'Uniform\((-?\d+), (\d+)\). The variance'): r=(n[1]-n[0])**2/12
    elif g(r'Uniform\((-?\d+), (\d+)\). E\[X\]'): r=(n[1]+n[0])/2
    elif g(r'Uniform\((-?\d+), (\d+)\). P\(X ≤ (\d+)\)'): r=(n[2]-n[0])/(n[1]-n[0])
    elif g(r'joint distribution of X, Y'):
        P={(int(a),int(b)):Fr(c) for a,b,c in re.findall(r'P\(X=(\d),Y=(\d)\) = (\d+(?:\.\d+)?)',t)}
        tail=t.split('0.')[-1]; m=re.search(r'\) (?:is|= )?.*?(P\(X = 1\)|P\(Y = 1\)|E\[X\]|E\[Y\]|E\[XY\]|P\(X = 1 \| Y = 1\)|P\(Y = 1 \| X = 1\))',t)
        px=P[1,0]+P[1,1];py=P[0,1]+P[1,1]
        if 'independent?' in t: r=('Yes' if all(P[a,b]==(px if a else 1-px)*(py if b else 1-py) for a in (0,1) for b in (0,1)) else 'No')
        else:
         w=re.findall(r'(P\(X = 1\)|P\(Y = 1\)|E\[XY\]|E\[X\]|E\[Y\]|P\(X = 1 \| Y = 1\)|P\(Y = 1 \| X = 1\)|Cov\(X, Y\)|P\(X = Y\))',t)[-1]
         r={'P(X = 1)':px,'P(Y = 1)':py,'E[X]':px,'E[Y]':py,'E[XY]':P[1,1],'P(X = 1 | Y = 1)':P[1,1]/py,'P(Y = 1 | X = 1)':P[1,1]/px,'Cov(X, Y)':P[1,1]-px*py,'P(X = Y)':P[0,0]+P[1,1]}[w]
    elif g(r"With probability ([\d/]+), a worker"): p=n[0]; r=p*n[1]+(1-p)*n[2]
    elif g(r'Normal\(μ = (\d+), σ = (\d+)\). P\(X ≤ (\d+)\)'): r=norm.cdf(float((n[2]-n[0])/n[1]))
    elif g(r'Normal\(μ = (\d+), σ = (\d+)\). P\(X ≥ (\d+)\)') or g(r'P\(X > (\d+)\)'): r=1-norm.cdf(float((n[2]-n[0])/n[1]))
    elif g(r'z-score of the value'): r=(n[2]-n[0])/n[1]
    elif g(r'standard deviation of the sample mean'): r=n[1]/sqrt(n[2])
    elif g(r'confidence interval'):
        m=g(r'size (\d+) .*σ = (\d+) has mean (\d+)'); nn,s,mu=map(int,m.groups()); r=mu+(1 if 'upper' in t else -1)*1.96*s/sqrt(nn)
    elif g(r'z statistic'): m=g(r'μ = (\d+) against.*size (\d+) with known σ = (\d+) has mean (\d+)'); mu,nn,s,xb=map(int,m.groups()); r=(xb-mu)/(s/sqrt(nn))
    elif g(r't statistic'): m=g(r'size (\d+) has mean (\d+) and sample standard deviation (\d+). The t statistic for H0: μ = (\d+)'); nn,xb,s,mu=map(int,m.groups()); r=(xb-mu)/(s/sqrt(nn))
    if r is None: skip.append(q['id']); continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<=0.0051 or (q['range'][0]-1e-9<=round(float(r),6)<=q['range'][1]+1e-9) or abs(float(r)-float(q['answer']))<=0.5*10**-len(str(q['answer']).split('.')[-1])+1e-9
    else:
        def eq(o):
            o=html.unescape(o).replace('−','-')
            if isinstance(r,str): return o==r
            try: return abs(float(Fr(o))-float(r))<6e-4
            except: return False
        good=[o['k'] for o in q['options'] if eq(o['t'])]==q['answer']
    if good: ok+=1
    else: bad+=1; bads.append((q['id'],float(r) if not isinstance(r,str) else r,q['answer'],t[:200]))
print('ok',ok,'bad',bad,'skip',len(skip),skip)
for b in bads: print(b)
