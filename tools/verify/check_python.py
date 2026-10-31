import os,sys; sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from load import *
import io,contextlib,collections
bad=[];n=0;rev=0
for q in ALL['pd']:
    m=re.search(r'<pre><code>(.*?)</code></pre>',q['question'],re.S)
    if not m or q['topic']!='Python tracing': continue
    code=html.unescape(m.group(1)); buf=io.StringIO()
    try:
        with contextlib.redirect_stdout(buf): exec(code,{})
    except Exception as e: bad.append((q['id'],'EXC',str(e)));continue
    out=buf.getvalue().strip() or repr(eval(code,{})); n+=1
    norm=lambda s:' | '.join(x.strip() for x in html.unescape(s).replace('\n',' | ').split(' | '))
    o=norm(out)
    if q['type']=='NAT':
        try: ok=abs(float(o)-float(q['answer']))<1e-6
        except: ok=False; 
        if not ok: bad.append((q['id'],'NAT',o,q['answer']))
        continue
    corr=[x for x in q['options'] if norm(x['t'])==o]
    if [x['k'] for x in corr]!=q['answer']: bad.append((q['id'],'MCQ',o,q['answer'],[x['t'] for x in q['options']]))
    for x in q['options']:
        if re.match(r'^\s*\]',x['t']) or x['t'].strip().endswith('['): rev+=1
print('checked',n,'mismatch',len(bad),'reversed-looking distractors',rev)
for b in bad[:20]: print(b)
