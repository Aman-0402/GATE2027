import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
from fractions import Fraction as Fr
import math,datetime,itertools
I=lambda s:[int(v) for v in re.findall(r'\d+',s)]
DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
ok=bad=0;skip=[];bads=[]
for q in ALL['ga']:
    if q['topic'] in ('Analogies','Antonyms','Odd One Out','Sentence Completion & Grammar','Synonyms','Verbal Reasoning'): continue
    t=re.sub(r'\s+',' ',text(q['question'])); r=None; n=I(t); g=lambda p:re.search(p,t)
    try:
      if g(r'is (\d+) times as old as her daughter, who is (\d+) years old. How old will the mother be after (\d+)'): r=n[0]*n[1]+n[2]
      elif g(r'If (\d+)x \+ (\d+) = (\d+), then'): r=Fr(n[2]-n[1],n[0])
      elif g(r'sum of two numbers is (\d+) and their difference is (\d+). The smaller'): r=(n[0]-n[1])//2
      elif g(r'sum of two numbers is (\d+) and their difference is (\d+). The larger'): r=(n[0]+n[1])//2
      elif g(r'sum of the ages of a father and his son is (\d+) years. The father is (\d+) times'): r=Fr(n[0],n[1]+1)
      elif g(r'The average of (\d+) numbers is (\d+). If one number, (\d+), is removed'): r=Fr(n[0]*n[1]-n[2],n[0]-1)
      elif g(r'The average of (\d+) numbers is (\d+). When a new number (\d+) is included'): r=Fr(n[0]*n[1]+n[2],n[0]+1)
      elif g(r'Today is (\w+)day. What day of the week will it be after (\d+) days'): d=g(r'Today is (\w+day)').group(1); r=DAYS[(DAYS.index(d)+n[0])%7]
      elif g(r'smaller angle between the hands of a clock at (\d+):(\d+)'):
        h,m=map(int,g(r'at (\d+):(\d+)').groups()); a=abs(30*h-5.5*m)%360; a=min(a,360-a); r=f"{a:g}°"
      elif g(r'If (\d+) (\w+) (\d+) is a (\w+), then (\d+) (\w+) (\d+) is a'):
        d1,m1,y1,dw,d2,m2,y2=g(r'If (\d+) (\w+) (\d+) is a (\w+), then (\d+) (\w+) (\d+) is a').groups()
        a=datetime.datetime.strptime(f'{d1} {m1} {y1}','%d %B %Y'); b=datetime.datetime.strptime(f'{d2} {m2} {y2}','%d %B %Y')
        assert DAYS[a.weekday()]==dw, ('premise false',dw,DAYS[a.weekday()]); r=DAYS[b.weekday()]
      elif g(r'compound interest on ₹(\d+) for (\d+) years at (\d+)%'): P,T,R=n[:3]; r=f"₹{P*(Fr(100+R,100)**T-1)}"
      elif g(r'simple interest on ₹(\d+) at (\d+)% per annum for (\d+) years'): P,R,T=n[:3]; r=f"₹{Fr(P*R*T,100)}"
      elif g(r'What is the remainder when (\d+)\^(\d+) is divided by (\d+)'): r=pow(n[0],n[1],n[2])
      elif g(r'How many integers from 1 to (\d+) \(inclusive\) are divisible by (\d+) or (\d+)'): N,a,b=n[1],n[2],n[3]; r=N//a+N//b-N//math.lcm(a,b)
      elif g(r'sum of the first (\d+) positive integers'): r=n[0]*(n[0]+1)//2
      elif g(r'The LCM of (\d+) and (\d+)'): r=math.lcm(n[0],n[1])
      elif g(r'The HCF of (\d+) and (\d+)'): r=math.gcd(n[0],n[1])
      elif g(r'What is (\d+)% of (\d+)'): r=Fr(n[0]*n[1],100)
      elif g(r'A price is (increased|decreased) by (\d+)% and then (increased|decreased) by (\d+)%'):
        a,x,b,y=g(r'is (increased|decreased) by (\d+)% and then (increased|decreased) by (\d+)%').groups(); f=(1+(1 if a[0]=='i' else -1)*Fr(int(x),100))*(1+(1 if b[0]=='i' else -1)*Fr(int(y),100))
        c=(f-1)*100; r=f"{abs(c):g}% {'increase' if c>0 else 'decrease'}" if c else 'no change'
        r=f"{float(abs(c)):g}% {'increase' if c>0 else 'decrease'}"
      elif g(r'successive discounts of (\d+)% and (\d+)%'): P=n[0]; r=f"₹{P*Fr(100-n[1],100)*Fr(100-n[2],100)}"
      elif g(r'In how many ways can (\d+) different books'): r=math.factorial(n[0])
      elif g(r'committee of (\d+) members is to be chosen from (\d+) people'): r=math.comb(n[1],n[0])
      elif g(r'How many (\d+)-digit numbers can be formed using the digits ([\d, ]+) if no digit is repeated'): k=n[0]; ds=I(g(r'digits ([\d, ]+) if').group(1)); r=sum(1 for p in itertools.permutations(ds,k) if p[0]!=0)
      elif g(r'Two fair dice are rolled. The probability that the sum of the numbers is (\d+)'): s=n[0]; r=Fr(sum(1 for a in range(1,7) for b in range(1,7) if a+b==s),36)
      elif g(r'fair coin is tossed (\d+) times. The probability of getting exactly (\d+) heads'): r=Fr(math.comb(n[0],n[1]),2**n[0])
      elif g(r'The ratio of the ages of A and B is (\d+):(\d+). If B is (\d+)'): r=Fr(n[0]*n[2],n[1])
      elif g(r'Two numbers are in the ratio (\d+):(\d+) and their sum is (\d+). The larger'): r=Fr(max(n[0],n[1])*n[2],n[0]+n[1])
      elif g(r'Two numbers are in the ratio (\d+):(\d+) and their sum is (\d+). The smaller'): r=Fr(min(n[0],n[1])*n[2],n[0]+n[1])
      elif g(r'(\d+) kg of rice costing ₹(\d+)/kg is mixed with (\d+) kg of rice costing ₹(\d+)/kg'): r=Fr(n[0]*n[1]+n[2]*n[3],n[0]+n[2])
      elif g(r'replaced by the letter (\d+) place'):
        k=n[0]; w=g(r'How is (\w+) written').group(1); r=''.join(chr((ord(c)-65+k)%26+65) for c in w)
      elif g(r'ranks (\d+)\w\w from the top and (\d+)\w\w from the bottom'): r=n[0]+n[1]-1
      elif g(r'In a row of (\d+) students, Ravi is (\d+)\w\w from the left'): r=n[0]-n[1]+1
      elif g(r'In a class of (\d+) students, (\d+) play cricket, (\d+) play football and (\d+) play both'): r=n[0]-(n[1]+n[2]-n[3])
      elif g(r'A man walks (\d+) km (\w+), then (\d+) km (\w+), and then (\d+) km (\w+)'):
        a,d1,b,d2,c,d3=g(r'walks (\d+) km (\w+), then (\d+) km (\w+), and then (\d+) km (\w+)').groups(); x=y=0
        for v,d in [(a,d1),(b,d2),(c,d3)]:
            v=int(v); x+={'east':v,'west':-v}.get(d,0); y+={'north':v,'south':-v}.get(d,0)
        r=math.hypot(x,y); r=int(r) if r==int(r) else None
      elif g(r'goes from P to Q at (\d+) km/h and returns along the same route at (\d+) km/h'): r=Fr(2*n[0]*n[1],n[0]+n[1])
      elif g(r'travels at (\d+) km/h for (\d+) hours'): r=n[0]*n[1]
      elif g(r'Two trains of lengths (\d+) m and (\d+) m run towards each other on parallel tracks at (\d+) km/h and (\d+) km/h'): r=Fr(n[0]+n[1],1)/(Fr(n[2]+n[3])*5/18)
      elif g(r'Two trains of lengths (\d+) m and (\d+) m run in the same direction on parallel tracks at (\d+) km/h and (\d+) km/h'): r=Fr(n[0]+n[1],1)/(Fr(abs(n[2]-n[3]))*5/18)
      elif g(r'still water is (\d+) km/h and the stream flows at (\d+) km/h. The boat goes (\d+) km downstream and returns'): r=Fr(n[2],n[0]+n[1])+Fr(n[2],n[0]-n[1])
      elif g(r'A train (\d+) m long runs at (\d+) km/h. The time it takes to cross a pole'): r=Fr(n[0])/(Fr(n[1])*5/18)
      elif g(r'A train (\d+) m long runs at (\d+) km/h. The time it takes to cross a platform (\d+) m long'): r=Fr(n[0]+n[2])/(Fr(n[1])*5/18)
      elif g(r'A can complete a job in (\d+) days and B in (\d+) days. Working together'): r=Fr(n[0]*n[1],n[0]+n[1])
      elif g(r'A can do a work in (\d+) days. After working for (\d+) days, A leaves. B finishes the remaining work alone in (\d+) days'): r=Fr(n[2])/(1-Fr(n[1],n[0]))
      elif g(r'A tap can fill a tank in (\d+) hours. A leak at the bottom can empty the full tank in (\d+) hours'): r=1/(Fr(1,n[0])-Fr(1,n[1]))
      elif g(r'A man sells a bag at ₹(\d+), incurring a loss of (\d+)%. At what price should it be sold to earn a profit of (\d+)%'): cp=Fr(n[0]*100,100-n[1]); r=f"₹{cp*Fr(100+n[2],100)}"
      elif g(r'profit of ([\d.]+)% by selling an article for ₹(\d+). The cost price'): p=Fr(g(r'profit of ([\d.]+)%').group(1)); r=Fr(int(g(r'for ₹(\d+)').group(1)))/(1+p/100)
      elif g(r'An article bought for ₹(\d+) is sold for ₹(\d+). The (profit|loss) percentage'): r=f"{Fr(abs(n[1]-n[0])*100,n[0])}%"
      elif g(r'The population of a town is (\d+). It increases by (\d+)% every year. After (\d+) years'): r=n[0]*Fr(100+n[1],100)**n[2]
      elif g(r'The value of (\d+)² − (\d+)²'): r=n[0]**2-n[2]**2 if len(n)>3 else n[0]**2-n[1]**2
    except Exception as e: bads.append((q['id'],'EXC',repr(e),t[:160]));continue
    if r is None: skip.append(q['id']);continue
    def eqv(o,r):
        o=html.unescape(o).strip(); rs=str(r)
        if o==rs: return True
        a=re.sub(r'[^\d./]','',o); b=re.sub(r'[^\d./]','',rs)
        try: return bool(a) and Fr(a)==Fr(b) and (('₹' in o)==('₹' in rs) or True) and (('increase' in o)==('increase' in rs))
        except: return False
    good=[x['k'] for x in q['options'] if eqv(x['t'],r)]==q['answer']
    if good: ok+=1
    else: bad+=1;bads.append((q['id'],str(r),q['answer'],[x['t'] for x in q['options']],t[:200]))
print('ok',ok,'bad',bad,'skip',len(skip))
for b in bads: print(b)
