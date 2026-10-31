import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import sqlite3
bad=[];n=0
def norm(s):
    s=s.replace(' ','').lower()
    try: return str(float(s))
    except: return s.replace('none','null')
for q in ALL['db']:
    if q['topic']!='SQL': continue
    t=text(q['question'])
    sql=html.unescape(re.search(r'<code>(.*?)</code>',q['question'],re.S).group(1))
    db=sqlite3.connect(':memory:')
    for m in re.finditer(r'(\w+)\(([^)]*)\):\n((?:  .*\n?)+)',t):
        name,cols,rows=m.group(1),[c.strip() for c in m.group(2).split(',')],m.group(3).strip().split('\n')
        db.execute(f"create table {name}({','.join(cols)})")
        for r in rows:
            vals=[v.strip() for v in r.split(',')]
            vals=[None if v=='NULL' else (int(v) if re.fullmatch(r'-?\d+',v) else (float(v) if re.fullmatch(r'-?\d+\.\d+',v) else v)) for v in vals]
            db.execute(f"insert into {name} values({','.join('?'*len(vals))})",vals)
    for m in re.finditer(r'(\w+)\(([^)]*)\):((?: \([^)]*\),?)+)',t):
        name,cols=m.group(1),[c.strip() for c in m.group(2).split(',')]
        db.execute(f"create table {name}({','.join(cols)})")
        for r in re.findall(r'\(([^)]*)\)',m.group(3)):
            vals=[v.strip() for v in r.split(',')]
            vals=[None if v=='NULL' else (int(v) if re.fullmatch(r'-?\d+',v) else v) for v in vals]
            db.execute(f"insert into {name} values({','.join('?'*len(vals))})",vals)
    m=re.search(r'T\(x\): ([^\n]*)',t)
    if m:
        db.execute('create table T(x)')
        for v in m.group(1).split(','):
            v=v.strip(); db.execute('insert into T values(?)',[None if v=='NULL' else int(v)])
    res=db.execute(sql).fetchall(); n+=1
    if q['type']=='NAT':
        v=res[0][0]
        if v is None or abs(float(v)-float(q['answer']))>1e-6: bad.append((q['id'],res,q['answer']))
    else:
        o='; '.join(','.join(str(x) for x in r) for r in res)
        if len(res)==1 and len(res[0])==1: o=str(res[0][0])
        corr=[x['k'] for x in q['options'] if norm(x['t'])==norm(o)]
        if corr!=q['answer']: bad.append((q['id'],o,q['answer'],[x['t'] for x in q['options']]))
print('checked',n,'mismatch',len(bad))
for b in bad: print(b)
