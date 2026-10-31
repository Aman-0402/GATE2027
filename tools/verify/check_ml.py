import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import numpy as np,math
from collections import Counter
def H(c): n=sum(c); return -sum(x/n*math.log2(x/n) for x in c if x)
I=lambda s:[int(v) for v in re.findall(r'-?\d+',s)]
ok=bad=0;skip=[];bads=[]
for q in ALL['ml']:
    t=re.sub(r'\s+',' ',text(q['question'])); r=None
    try:
      if 'clustered by k-means' in t:
        d=I(re.search(r'\[(.*?)\]',t).group(1)); c=[float(v) for v in re.search(r'centroids ([-\d.]+) and ([-\d.]+)',t).groups()]
        g=[[x for x in d if abs(x-c[0])<=abs(x-c[1])],[x for x in d if abs(x-c[0])>abs(x-c[1])]]
        if 'sum of squared' in t: r=sum(sum((x-np.mean(G))**2 for x in G) for G in g)
        else: r=np.mean(g[0] if 'first centroid' in t else g[1])
      elif 'Single-linkage' in t or 'Complete-linkage' in t:
        d=sorted(I(re.search(r'\[(.*?)\]',t).group(1))); cl=[[x] for x in d]; ms=[]
        f=min if 'Single' in t else max
        while len(cl)>1:
            best=min(((f(abs(a-b) for a in cl[i] for b in cl[j]),i,j) for i in range(len(cl)) for j in range(i+1,len(cl))))
            ms.append(best[0]); i,j=best[1:]; cl[i]+=cl[j]; del cl[j]
        k=int(re.search(r'(\d+)(st|nd|rd|th) merge',t).group(1)); r=ms[k-1]
      elif 'covariance matrix of a 2-D dataset' in t:
        M=np.array([[float(v) for v in row.split()] for row in re.search(r'\[([-\d .;]+)\]',t).group(1).split(';')]); ev=np.linalg.eigvalsh(M)
        r=100*ev[-1]/ev.sum() if 'percentage' in t else ev[-1] if 'first principal' in t else (ev[-1]/ev.sum() if 'fraction' in t or 'proportion' in t else (ev[0] if 'second' in t else None))
      elif 'run of' in t and 'fold cross-validation trains' in t: r=I(t)[1] if False else int(re.search(r'(\d+)-fold',t).group(1))
      elif 'fold cross-validation is used on' in t: k,n=map(int,re.search(r'(\d+)-fold cross-validation is used on (\d+)',t).groups()); r=n-n//k if 'training' in t else n//k
      elif 'held out as a test set. Leave-one-out' in t: n,h=map(int,re.search(r'of (\d+) samples has (\d+)',t).groups()); r=n-h
      elif 'Leave-one-out cross-validation is used on a dataset of' in t: r=int(re.search(r'of (\d+) samples',t).group(1))
      elif 'Its entropy' in t: r=H(I(t.split('Its')[0]))
      elif 'Gini impurity' in t: c=I(t.split('Its')[0]); c=[c[0],c[2]] if 'class 1' in t else c; n=sum(c); r=1-sum((x/n)**2 for x in c)
      elif 'information gain' in t:
        p,n_=map(int,re.search(r'has (\d+) positive and (\d+) negative',t).groups()); (a,b),(c_,d_)=[tuple(map(int,x)) for x in re.findall(r'\((\d+) positive, (\d+) negative\)',t)]; N=p+n_; r=H([p,n_])-((a+b)/N*H([a,b])+(c_+d_)/N*H([c_,d_]))
      elif 'logistic regression model has P' in t:
        if 'decision boundary' in t:
            w,b=[float(v) for v in re.search(r'w = (-?[\d.]+), b = (-?[\d.]+)',t).groups()]; r=-b/w
        else:
         w,b,x=[float(v) for v in re.search(r'w = (-?[\d.]+), b = (-?[\d.]+). For x = (-?[\d.]+)',t).groups()]; r=1/(1+math.exp(-(w*x+b)))
      elif 'A classifier has TP' in t:
        TP,FP,FN,TN=I(t)[:4]; P=TP/(TP+FP);R=TP/(TP+FN)
        m=re.search(r'Its (\w[\w -]*?) is',t).group(1)
        r={'recall':R,'precision':P,'accuracy':(TP+TN)/(TP+FP+FN+TN),'F1 score':2*P*R/(P+R),'F1-score':2*P*R/(P+R),'specificity':TN/(TN+FP),'false positive rate':FP/(FP+TN)}[m]
      elif 'naive Bayes classifier for 2 classes uses' in t: n=int(re.search(r'uses (\d+) binary',t).group(1)); r=2*n+1
      elif 'free parameters a naive Bayes' in t: k,n=map(int,re.search(r'with (\d+) classes and (\d+) binary',t).groups()); r=k-1+k*n
      elif 'naive Bayes model with two binary features' in t:
        v=[float(x) for x in re.findall(r'= (\d+(?:\.\d+)?)',t)]; py,a1,a2,b1,b2=v[:5]; num=py*a1*a2; r=num/(num+(1-py)*b1*b2)
        if 'x₁ = 1 and x₂ = 0' in t: num=py*a1*(1-a2); r=num/(num+(1-py)*b1*(1-b2))
        if 'x₁ = 0 and x₂ = 1' in t: num=py*(1-a1)*a2; r=num/(num+(1-py)*(1-b1)*b2)
        if 'x₁ = 0 and x₂ = 0' in t: num=py*(1-a1)*(1-a2); r=num/(num+(1-py)*(1-b1)*(1-b2))
      elif 'fully connected feed-forward network has layers' in t:
        L=I(re.search(r'sizes ([\d →]+)',t).group(1)); r=sum(L[i]*L[i+1]+(L[i+1] if 'no biases' not in t else 0) for i in range(len(L)-1))
      elif 'A neuron computes' in t:
        w1,w2,b,x1,x2=[float(v) for v in re.findall(r'= (-?[\d.]+)',t)][:5]; z=w1*x1+w2*x2+b
        r=max(0,z) if 'ReLU' in t else 1/(1+math.exp(-z))
      elif 'Ridge regression (no intercept)' in t:
        x=np.array(I(re.search(r'x = \[(.*?)\]',t).group(1)));y=np.array(I(re.search(r'y = \[(.*?)\]',t).group(1))); l=float(re.search(r'λ = ([\d.]+)',t).group(1)); r=(x@y)/(x@x+l)
      elif 'Least-squares line' in t:
        P=np.array(eval(re.search(r'points (\[.*?\])\.',t).group(1))); m,c=np.polyfit(P[:,0],P[:,1],1); r=m if 'slope' in t else c
      elif 'mean squared error' in t or 'mean absolute error' in t:
        a=np.array(I(re.search(r'True values are \[(.*?)\]',t).group(1)));b=np.array(I(re.search(r'predictions are \[(.*?)\]',t).group(1)))
        r=np.mean((a-b)**2) if 'squared' in t else np.mean(abs(a-b))
      elif 'one gradient-descent step' in t:
        x=np.array(I(re.search(r'x = \[(.*?)\]',t).group(1)),float);y=np.array(I(re.search(r'y = \[(.*?)\]',t).group(1)),float)
        lr=float(re.search(r'learning rate ([\d.]+)',t).group(1)); w=float(re.search(r'from w = (-?[\d.]+)',t).group(1)); g=2*np.mean((w*x-y)*x); r=w-lr*g
      elif 'linear SVM has weight vector' in t: w=np.array(I(re.search(r'w = \((.*?)\)',t).group(1))); r=2/np.linalg.norm(w)
      elif 'k-nearest-neighbour classifier' in t:
        pts=[(int(a),b) for a,b in re.findall(r'(-?\d+):([AB])',t)]; k=int(re.search(r'k = (\d+)',t).group(1)); qp=int(re.search(r'query point (-?\d+)',t).group(1))
        ds=sorted(pts,key=lambda p:abs(p[0]-qp)); 
        if k<len(ds) and abs(ds[k-1][0]-qp)==abs(ds[k][0]-qp): r='AMBIG'
        else:
            c=Counter(b for a,b in ds[:k]).most_common(); r='Tie' if len(c)>1 and c[0][1]==c[1][1] else c[0][0]
    except Exception as e: bads.append((q['id'],'EXC',repr(e),t[:200]));continue
    if r is None: skip.append(q['id']);continue
    if q['type']=='NAT': good=abs(float(r)-float(q['answer']))<=0.0051 or (q['range'][0]-1e-9<=round(float(r),6)<=q['range'][1]+1e-9) or abs(float(r)-float(q['answer']))<=0.5*10**-len(str(q['answer']).split('.')[-1])+1e-9
    else: good=[o['k'] for o in q['options'] if o['t']==str(r)]==q['answer']
    if good: ok+=1
    else: bad+=1;bads.append((q['id'],r,q['answer'],[o['t'] for o in q['options']],t[:260]))
print('ok',ok,'bad',bad,'skip',len(skip),skip)
for b in bads: print(b)
