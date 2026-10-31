"""Loads the question banks from assets/data/ for the checkers."""
import json, re, html, os
R = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'assets', 'data') + os.sep
def load(f):
    s = open(R + f + "_questions.js", encoding="utf-8").read()
    if 'DA_EXTRA, ' in s: return json.loads(s[s.index('(window.DA_EXTRA, ') + 18:s.rindex(');')])
    return json.loads(s[s.index('['):s.rindex(']') + 1])
def text(h):
    h = re.sub(r'<br\s*/?>', '\n', h); h = re.sub(r'</(p|tr|li|pre)>', '\n', h); h = re.sub(r'</t[dh]>', ' | ', h)
    return html.unescape(re.sub(r'<[^>]+>', '', h))
ALL = {f: load(f) for f in ["ga", "ps", "pd", "db", "la", "co", "ml", "ai"]}
