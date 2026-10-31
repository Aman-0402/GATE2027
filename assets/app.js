(function () {
  "use strict";
  var DS = "DA";
  try { DS = localStorage.getItem("gate27.ds") || "DA"; } catch (e) {}
  if (DS !== "CS" && DS !== "DA") DS = "DA";
  var Q = (DS === "CS" ? window.QUESTIONS : (window.DA_QUESTIONS || []).concat(window.GA_QUESTIONS || [])) || [];
  var ALLQ = (window.QUESTIONS || []).concat(window.DA_QUESTIONS || [], window.GA_QUESTIONS || []);
  var BYID = {}; ALLQ.forEach(function (q) { BYID[q.id] = q; });
  var KEY = "gate27.v1";
  var app = document.getElementById("app");
  var SUBJECTS = [];
  Q.forEach(function (q) { if (!SUBJECTS.some(function (s) { return s.id === q.subject; })) SUBJECTS.push({ id: q.subject, name: q.subjectName }); });

  /* ---------- storage ---------- */
  function load() {
    try { var d = JSON.parse(localStorage.getItem(KEY)); if (d && d.stats) return d; } catch (e) {}
    return { stats: {}, marked: {}, tests: [] };
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function setTheme(t) {
    if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
    try { if (t) localStorage.setItem("gate27.theme", t); } catch (e) {}
  }
  try { var th = localStorage.getItem("gate27.theme"); if (th) setTheme(th); } catch (e) {}
  document.getElementById("themeBtn").onclick = function () {
    var cur = document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(cur === "dark" ? "light" : "dark");
  };

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function topicsOf(subj) {
    var out = [];
    Q.forEach(function (q) { if ((!subj || q.subject === subj) && out.indexOf(q.topic) < 0) out.push(q.topic); });
    return out;
  }
  function decimals(s) { var m = String(s).match(/\.(\d+)$/); return m ? m[1].length : 0; }
  function isCorrect(q, a) {
    if (a === undefined || a === null) return false;
    if (q.type === "NAT") {
      var x = parseFloat(String(a).replace(",", ".")); if (isNaN(x)) return false;
      if (q.range) return x >= q.range[0] - 1e-9 && x <= q.range[1] + 1e-9;
      var y = parseFloat(q.answer); var tol = 0.5 * Math.pow(10, -decimals(q.answer)) + 1e-9;
      return Math.abs(x - y) <= tol;
    }
    var sel = (a || []).slice().sort().join(""); return sel === q.answer.slice().sort().join("");
  }
  function answered(q, a) {
    if (q.type === "NAT") return a !== undefined && String(a).trim() !== "";
    return a && a.length > 0;
  }
  function record(q, ok) {
    var s = S.stats[q.id] || { a: 0, c: 0 };
    s.a++; if (ok) s.c++; s.last = ok; s.ts = Date.now(); S.stats[q.id] = s; save();
  }
  function score(q, a) { // GATE-style marks
    if (!answered(q, a)) return 0;
    if (isCorrect(q, a)) return q.marks;
    return q.type === "MCQ" ? -q.marks / 3 : 0;
  }
  function fmtAnswer(q) { return q.type === "NAT" ? String(q.answer) : q.answer.join(", "); }

  /* ---------- views ---------- */
  var view = "home", sess = null;
  var setup = { subject: "", topic: "", type: "", status: "", count: 10, mode: "practice" };

  function nav(v) {
    view = v;
    Array.prototype.forEach.call(document.querySelectorAll("nav button"), function (b) { b.classList.toggle("on", b.getAttribute("data-nav") === v); });
    render(); window.scrollTo(0, 0);
  }
  document.addEventListener("click", function (e) {
    var im = e.target.closest(".qimg"); if (im) { window.open(im.getAttribute("src"), "_blank", "noopener"); return; }
    var n = e.target.closest("[data-nav]");
    if (n) { e.preventDefault(); if (sess && sess.mode === "test" && !sess.done && !confirm("Leave this test? Your answers will be lost.")) return; clearTimer(); sess = null; nav(n.getAttribute("data-nav")); }
  });

  function render() {
    if (sess && !sess.done && view === "quiz") return renderQuiz();
    if (sess && sess.done && view === "results") return renderResults();
    ({ home: renderHome, practice: renderSetup, progress: renderProgress, resources: renderResources, quiz: renderHome, results: renderHome }[view] || renderHome)();
  }

  function overall() {
    var att = 0, cor = 0, seen = 0;
    Q.forEach(function (q) { var s = S.stats[q.id]; if (s) { seen++; att += s.a; cor += s.c; } });
    var wrong = Q.filter(function (q) { var s = S.stats[q.id]; return s && s.last === false; }).length;
    return { seen: seen, att: att, cor: cor, wrong: wrong };
  }

  function renderHome() {
    var o = overall(), marked = Object.keys(S.marked).filter(function (k) { return S.marked[k] && BYID[k]; }).length;
    app.innerHTML =
      (DS === "DA" ? "<h1>GATE DA 2027 practice</h1><p class='sub'>" + Q.length + " questions across " + SUBJECTS.length + " sections: 129 real past-paper questions (2026 and 2024, shown as in the paper, official key; the 2024 key is not fully verified) plus " + (window.GA_QUESTIONS || []).length + " original General Aptitude practice questions with solutions.</p>" : "<h1>GATE CS 2027 practice</h1><p class='sub'>" + Q.length + " original questions across " + SUBJECTS.length + " subjects, modelled on the 2016–2026 papers. MCQ, MSQ and NAT, with solutions.</p>") +
      "<div class='grid'>" +
      "<div class='stat'><b>" + o.seen + "/" + Q.length + "</b><span>questions attempted</span></div>" +
      "<div class='stat'><b>" + pct(o.cor, o.att) + "%</b><span>accuracy (" + o.cor + "/" + o.att + ")</span></div>" +
      "<div class='stat'><b>" + o.wrong + "</b><span>to revise (last attempt wrong)</span></div>" +
      "<div class='stat'><b>" + marked + "</b><span>bookmarked</span></div></div>" +
      "<h2>Quick start</h2><div class='btns'>" +
      "<button class='btn' data-quick='mixed'>10 mixed questions</button>" +
      "<button class='btn ghost' data-quick='test'>Timed mini test (20 questions)</button>" +
      "<button class='btn ghost' data-quick='wrong'" + (o.wrong ? "" : " disabled") + ">Revise mistakes (" + o.wrong + ")</button>" +
      "<button class='btn ghost' data-quick='new'>Unattempted only</button></div>" +
      "<h2>Practice by subject</h2><div class='card cols'>" + SUBJECTS.map(function (s) {
        var qs = Q.filter(function (q) { return q.subject === s.id; });
        var seen = qs.filter(function (q) { return S.stats[q.id]; }).length;
        return "<div class='tr'><div class='n'><a href='#' data-subj='" + s.id + "'>" + esc(s.name) + "</a><br><small>" + seen + "/" + qs.length + " attempted</small></div><div class='p'><div class='bar2'><i style='width:" + pct(seen, qs.length) + "%'></i></div></div></div>";
      }).join("") + "</div>" +
      "<p class='sub'>Marking in timed tests follows GATE: MCQ −⅓ mark per wrong 1-mark answer (−⅔ for 2 marks); MSQ and NAT have no negative marking.</p>";
  }

  function renderSetup() {
    var opts = function (arr, sel, all) { return "<option value=''>" + all + "</option>" + arr.map(function (a) { return "<option value='" + esc(a.v) + "'" + (a.v === sel ? " selected" : "") + ">" + esc(a.t) + "</option>"; }).join(""); };
    var pool = filtered();
    app.innerHTML =
      "<h1>Practice</h1><p class='sub'>Choose what to practise.</p><div class='card'>" +
      "<div class='row'><div><label class='f'>Subject</label><select id='fSubject'>" + opts(SUBJECTS.map(function (s) { return { v: s.id, t: s.name }; }), setup.subject, "All subjects") + "</select></div>" +
      "<div><label class='f'>Topic</label><select id='fTopic'>" + opts(topicsOf(setup.subject).map(function (t) { return { v: t, t: t }; }), setup.topic, "All topics") + "</select></div></div>" +
      "<div class='row'><div><label class='f'>Type</label><select id='fType'>" + opts([{ v: "MCQ", t: "MCQ (one answer)" }, { v: "MSQ", t: "MSQ (one or more)" }, { v: "NAT", t: "NAT (numerical)" }], setup.type, "All types") + "</select></div>" +
      "<div><label class='f'>Status</label><select id='fStatus'>" + opts([{ v: "new", t: "Unattempted" }, { v: "wrong", t: "Wrong last time" }, { v: "marked", t: "Bookmarked" }], setup.status, "All") + "</select></div></div>" +
      "<div class='row'><div><label class='f'>Mode</label><select id='fMode'><option value='practice'" + (setup.mode === "practice" ? " selected" : "") + ">Practice (instant feedback)</option><option value='test'" + (setup.mode === "test" ? " selected" : "") + ">Timed test (feedback at the end)</option></select></div>" +
      "<div><label class='f'>Number of questions</label><input id='fCount' type='number' min='1' max='" + Math.max(pool.length, 1) + "' value='" + Math.min(setup.count, Math.max(pool.length, 1)) + "'></div></div>" +
      "<p class='sub' style='margin:12px 0 0'>" + pool.length + " question" + (pool.length === 1 ? "" : "s") + " match.</p>" +
      "<div class='btns'><button class='btn' id='goBtn'" + (pool.length ? "" : " disabled") + ">Start</button></div></div>";
    var bind = function (id, key, reset) { document.getElementById(id).onchange = function (e) { setup[key] = e.target.value; if (reset) setup.topic = ""; renderSetup(); }; };
    bind("fSubject", "subject", true); bind("fTopic", "topic"); bind("fType", "type"); bind("fStatus", "status"); bind("fMode", "mode");
    document.getElementById("fCount").onchange = function (e) { setup.count = Math.max(1, parseInt(e.target.value, 10) || 10); };
    document.getElementById("goBtn").onclick = function () {
      setup.count = Math.max(1, parseInt(document.getElementById("fCount").value, 10) || 10);
      start(shuffle(filtered()).slice(0, setup.count), setup.mode);
    };
  }
  function filtered() {
    return Q.filter(function (q) {
      if (setup.subject && q.subject !== setup.subject) return false;
      if (setup.topic && q.topic !== setup.topic) return false;
      if (setup.type && q.type !== setup.type) return false;
      var s = S.stats[q.id];
      if (setup.status === "new" && s) return false;
      if (setup.status === "wrong" && !(s && s.last === false)) return false;
      if (setup.status === "marked" && !S.marked[q.id]) return false;
      return true;
    });
  }

  document.addEventListener("click", function (e) {
    var qk = e.target.closest("[data-quick]"), sj = e.target.closest("[data-subj]");
    if (sj) { e.preventDefault(); setup = { subject: sj.getAttribute("data-subj"), topic: "", type: "", status: "", count: 10, mode: "practice" }; nav("practice"); return; }
    if (!qk) return;
    var k = qk.getAttribute("data-quick"), pool;
    if (k === "mixed") start(shuffle(Q).slice(0, 10), "practice");
    if (k === "test") start(shuffle(Q).slice(0, 20), "test");
    if (k === "wrong") { pool = Q.filter(function (q) { var s = S.stats[q.id]; return s && s.last === false; }); start(shuffle(pool), "practice"); }
    if (k === "new") { pool = Q.filter(function (q) { return !S.stats[q.id]; }); start(shuffle(pool).slice(0, 10), "practice"); }
  });

  /* ---------- quiz ---------- */
  var timerId = null;
  function clearTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
  function start(qs, mode) {
    if (!qs.length) { alert("No questions match."); return; }
    var marks = qs.reduce(function (a, q) { return a + q.marks; }, 0);
    sess = { qs: qs, i: 0, mode: mode, ans: {}, checked: {}, done: false, endAt: mode === "test" ? Date.now() + Math.round(marks * 1.5 * 60000) : 0, started: Date.now() };
    clearTimer();
    if (mode === "test") timerId = setInterval(tick, 1000);
    view = "quiz"; nav("quiz");
  }
  function tick() {
    var el = document.getElementById("timer"); if (!sess || sess.done) return clearTimer();
    if (sess.mode !== "test") return;
    var left = Math.max(0, Math.round((sess.endAt - Date.now()) / 1000));
    if (el) el.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0");
    if (left <= 0) finish();
  }
  function renderQuiz() {
    var q = sess.qs[sess.i], n = sess.qs.length, a = sess.ans[q.id], chk = !!sess.checked[q.id], test = sess.mode === "test";
    var h = "<div class='prog'><span>Question " + (sess.i + 1) + " of " + n + "</span>" + (test ? "<span class='timer' id='timer'></span>" : "<span>" + esc(q.subjectName) + "</span>") + "</div>" +
      "<div class='bar2'><i style='width:" + pct(sess.i + (chk ? 1 : 0), n) + "%'></i></div>" +
      "<div class='card q qgrid'><div class='qleft'><div class='meta'><span class='chip t'>" + q.type + "</span><span class='chip'>" + q.marks + " mark" + (q.marks > 1 ? "s" : "") + "</span><span class='chip'>" + esc(q.topic) + "</span></div>" +
      (q.context ? q.context : "") + q.question + (q.paper ? "<p class='sub hint'>Tap the image to enlarge.</p>" : "") + (q.unverified ? "<p class='sub'>Key from the 2024 answer sheet, not yet double-checked.</p>" : "") + "</div><div class='qright'>";
    if (q.type === "NAT") {
      h += "<div class='nat'><label class='f'>Your answer (number)</label><input id='natIn' type='text' inputmode='decimal' autocomplete='off' value='" + esc(a === undefined ? "" : a) + "'" + (chk ? " disabled" : "") + "></div>";
    } else {
      if (q.type === "MSQ") h += "<p class='sub'>Select all that apply.</p>";
      h += q.options.map(function (o) {
        var sel = a && a.indexOf(o.k) >= 0, cls = "opt" + (sel ? " sel" : "");
        if (chk) { var right = q.answer.indexOf(o.k) >= 0; if (right) cls += " ok"; else if (sel) cls += " no"; }
        return "<label class='" + cls + "'><input type='" + (q.type === "MSQ" ? "checkbox" : "radio") + "' name='opt' value='" + o.k + "'" + (sel ? " checked" : "") + (chk ? " disabled" : "") + "><span class='k'>" + o.k + ".</span><span>" + o.t + "</span></label>";
      }).join("");
    }
    if (chk) {
      var ok = isCorrect(q, a);
      h += "<div class='fb " + (ok ? "ok" : "no") + "'><h3>" + (ok ? "Correct" : answered(q, a) ? "Not quite" : "Not answered") + "</h3><p><b>Answer: " + esc(fmtAnswer(q)) + "</b></p>" + q.explanation + "</div>";
    }
    h += "<div class='btns'>";
    if (!test && !chk) h += "<button class='btn' id='checkBtn'>Check answer</button>";
    if (sess.i > 0 && test) h += "<button class='btn ghost' id='prevBtn'>Previous</button>";
    if (test || chk) h += (sess.i < n - 1 ? "<button class='btn' id='nextBtn'>Next</button>" : "<button class='btn' id='finBtn'>Finish</button>");
    if (test && sess.i < n - 1) h += "<button class='btn ghost' id='finBtn'>Submit test</button>";
    h += "<button class='btn ghost' id='markBtn'>" + (S.marked[q.id] ? "★ Bookmarked" : "☆ Bookmark") + "</button></div></div></div>";
    app.innerHTML = h; tick();
    var nat = document.getElementById("natIn");
    if (nat) { nat.oninput = function () { sess.ans[q.id] = nat.value; }; nat.onkeydown = function (ev) { if (ev.key === "Enter") { var b = document.getElementById("checkBtn") || document.getElementById("nextBtn"); if (b) b.click(); } }; if (!chk) nat.focus(); }
    Array.prototype.forEach.call(app.querySelectorAll("input[name=opt]"), function (inp) {
      inp.onchange = function () {
        var vals = Array.prototype.filter.call(app.querySelectorAll("input[name=opt]"), function (x) { return x.checked; }).map(function (x) { return x.value; });
        sess.ans[q.id] = vals;
        Array.prototype.forEach.call(app.querySelectorAll(".opt"), function (l) { l.classList.toggle("sel", l.querySelector("input").checked); });
      };
    });
    var bind = function (id, fn) { var el = document.getElementById(id); if (el) el.onclick = fn; };
    bind("checkBtn", function () {
      if (!answered(q, sess.ans[q.id])) { alert("Choose or enter an answer first."); return; }
      sess.checked[q.id] = true; record(q, isCorrect(q, sess.ans[q.id])); renderQuiz();
    });
    bind("nextBtn", function () { sess.i++; renderQuiz(); window.scrollTo(0, 0); });
    bind("prevBtn", function () { sess.i--; renderQuiz(); window.scrollTo(0, 0); });
    bind("finBtn", function () { if (test && !confirm("Submit the test now?")) return; finish(); });
    bind("markBtn", function () { S.marked[q.id] = !S.marked[q.id]; save(); renderQuiz(); });
  }
  function finish() {
    clearTimer(); if (!sess || sess.done) return;
    sess.done = true;
    if (sess.mode === "test") sess.qs.forEach(function (q) { if (answered(q, sess.ans[q.id])) record(q, isCorrect(q, sess.ans[q.id])); });
    var total = sess.qs.reduce(function (a, q) { return a + q.marks; }, 0);
    var got = sess.qs.reduce(function (a, q) { return a + score(q, sess.ans[q.id]); }, 0);
    var right = sess.qs.filter(function (q) { return isCorrect(q, sess.ans[q.id]); }).length;
    sess.result = { total: total, got: got, right: right };
    S.tests.push({ ts: Date.now(), mode: sess.mode, n: sess.qs.length, right: right, got: Math.round(got * 100) / 100, total: total }); save();
    view = "results"; nav("results");
  }
  function renderResults() {
    var r = sess.result, n = sess.qs.length, test = sess.mode === "test";
    app.innerHTML = "<h1>" + (test ? "Test" : "Session") + " complete</h1>" +
      "<div class='grid'><div class='stat'><b>" + right2(r.right, n) + "</b><span>correct</span></div>" +
      (test ? "<div class='stat'><b>" + (Math.round(r.got * 100) / 100) + " / " + r.total + "</b><span>marks (with negative marking)</span></div>" : "") +
      "<div class='stat'><b>" + pct(r.right, n) + "%</b><span>accuracy</span></div></div>" +
      "<h2>Review</h2><div class='card cols'>" + sess.qs.map(function (q, i) {
        var a = sess.ans[q.id], ok = isCorrect(q, a), sk = !answered(q, a);
        return "<div class='tr'><div class='n'><b>" + (i + 1) + ".</b> " + esc(q.topic) + "<br><small>" + q.type + " · " + q.marks + "m · " + (sk ? "skipped" : ok ? "correct" : "wrong") + " · answer: " + esc(fmtAnswer(q)) + "</small></div><button class='btn ghost' data-rev='" + i + "'>View</button></div>";
      }).join("") + "</div><div class='btns'><button class='btn' data-nav='practice'>New session</button><button class='btn ghost' data-nav='home'>Home</button></div><div id='revBox'></div>";
    Array.prototype.forEach.call(app.querySelectorAll("[data-rev]"), function (b) {
      b.onclick = function () {
        var q = sess.qs[+b.getAttribute("data-rev")], a = sess.ans[q.id];
        document.getElementById("revBox").innerHTML = "<div class='card q'><div class='meta'><span class='chip t'>" + q.type + "</span><span class='chip'>" + esc(q.topic) + "</span></div>" + (q.context || "") + q.question +
          (q.options.length ? "<ul>" + q.options.map(function (o) { return "<li" + (q.answer.indexOf(o.k) >= 0 ? " style='font-weight:700'" : "") + ">" + o.k + ". " + o.t + (a && a.indexOf(o.k) >= 0 ? " ← your choice" : "") + "</li>"; }).join("") + "</ul>" : "<p>Your answer: " + esc(a === undefined || a === "" ? "—" : a) + "</p>") +
          "<div class='fb " + (isCorrect(q, a) ? "ok" : "no") + "'><p><b>Answer: " + esc(fmtAnswer(q)) + "</b></p>" + q.explanation + "</div></div>";
        document.getElementById("revBox").scrollIntoView({ behavior: "smooth" });
      };
    });
  }
  function right2(a, b) { return a + " / " + b; }

  /* ---------- progress ---------- */
  function renderProgress() {
    var o = overall();
    var rows = SUBJECTS.map(function (s) {
      var qs = Q.filter(function (q) { return q.subject === s.id; }), at = 0, co = 0, seen = 0;
      qs.forEach(function (q) { var st = S.stats[q.id]; if (st) { seen++; at += st.a; co += st.c; } });
      return { s: s, seen: seen, tot: qs.length, acc: pct(co, at), at: at };
    });
    var weak = [];
    topicsOf("").forEach(function (t) {
      var qs = Q.filter(function (q) { return q.topic === t; }), at = 0, co = 0;
      qs.forEach(function (q) { var st = S.stats[q.id]; if (st) { at += st.a; co += st.c; } });
      if (at) weak.push({ t: t, acc: pct(co, at), at: at });
    });
    weak.sort(function (a, b) { return a.acc - b.acc; });
    app.innerHTML = "<h1>Progress</h1><div class='grid'>" +
      "<div class='stat'><b>" + o.seen + "/" + Q.length + "</b><span>attempted</span></div><div class='stat'><b>" + pct(o.cor, o.att) + "%</b><span>overall accuracy</span></div><div class='stat'><b>" + S.tests.length + "</b><span>sessions finished</span></div></div>" +
      "<h2>By subject</h2><div class='card cols'>" + rows.map(function (r) {
        return "<div class='tr'><div class='n'>" + esc(r.s.name) + "<br><small>" + r.seen + "/" + r.tot + " attempted · " + (r.at ? r.acc + "% accuracy" : "no attempts") + "</small></div><div class='p'><div class='bar2'><i style='width:" + (r.at ? r.acc : 0) + "%'></i></div></div></div>";
      }).join("") + "</div>" +
      "<h2>Weakest topics</h2><div class='card'>" + (weak.length ? weak.slice(0, 8).map(function (w) { return "<div class='tr'><div class='n'>" + esc(w.t) + "<br><small>" + w.at + " attempts</small></div><b>" + w.acc + "%</b></div>"; }).join("") : "<p class='sub' style='margin:0'>Attempt some questions to see your weak topics.</p>") + "</div>" +
      "<h2>Recent sessions</h2><div class='card'>" + (S.tests.length ? S.tests.slice(-8).reverse().map(function (t) {
        return "<div class='tr'><div class='n'>" + new Date(t.ts).toLocaleString() + "<br><small>" + (t.mode === "test" ? "Timed test" : "Practice") + "</small></div><b>" + t.right + "/" + t.n + (t.mode === "test" ? " · " + t.got + "/" + t.total + " marks" : "") + "</b></div>";
      }).join("") : "<p class='sub' style='margin:0'>No finished sessions yet.</p>") + "</div>" +
      "<div class='btns'><button class='btn ghost' id='resetBtn'>Reset all progress</button></div>";
    document.getElementById("resetBtn").onclick = function () { if (confirm("Delete all saved progress in this browser?")) { S = { stats: {}, marked: {}, tests: [] }; save(); renderProgress(); } };
  }

  /* ---------- resources ---------- */
  var PDFS = [["Engineering_Maths", "Engineering Mathematics"], ["Programming_and_Data_Structures", "Programming & Data Structures"], ["Algorithms", "Algorithms"], ["Theory_of_Computation", "Theory of Computation"], ["Compiler_Design", "Compiler Design"], ["Operating_System", "Operating System"], ["Computer_Networks", "Computer Networks"], ["Computer_Organization", "Computer Organization & Architecture"], ["Databases", "Databases"], ["Digital_Logic", "Digital Logic"]];
  function renderResources() {
    if (DS === "DA") {
      app.innerHTML = "<h1>Resources — GATE DA</h1><p class='sub'>Files from the repo.</p>" +
        "<h2>Past papers</h2><div class='card res'><a href='DA/papers/2026/2026_DA.pdf' target='_blank' rel='noopener'>2026 paper (IIT Guwahati)</a><a href='DA/papers/2026/2026_DA_Key.pdf' target='_blank' rel='noopener'>2026 official answer key</a><a href='DA/papers/2025/2025_DA.pdf' target='_blank' rel='noopener'>2025 paper (IIT Roorkee) — key not added yet</a><a href='DA/papers/2024/2024_DA_Set1.pdf' target='_blank' rel='noopener'>2024 paper (IISc, Set 1)</a><a href='DA/papers/DA_GATE2027_Syllabus.pdf' target='_blank' rel='noopener'>GATE 2027 DA syllabus</a></div>" +
        "<h2>Plan and notes</h2><div class='card res'><a href='DA/STUDY_PLAN.md' target='_blank' rel='noopener'>14-week DA study plan</a><a href='DA/notes/GATE_DA_Notes_ML_AI.pdf' target='_blank' rel='noopener'>Machine Learning and AI notes</a><a href='DA/notes/GATE_DA_Notes_Maths_Programming_DB.pdf' target='_blank' rel='noopener'>Maths, Programming and Databases notes</a><a href='DA/analysis/GATE_DA_Paper_Analysis.md' target='_blank' rel='noopener'>DA paper analysis (2024–2026)</a></div>" +
        "<h2>CS material that overlaps with DA</h2><div class='card res'><a href='CS/questions/GATE_CS_Databases.pdf' target='_blank' rel='noopener'>Databases questions</a><a href='CS/questions/GATE_CS_Algorithms.pdf' target='_blank' rel='noopener'>Algorithms questions</a><a href='CS/questions/GATE_CS_Programming_and_Data_Structures.pdf' target='_blank' rel='noopener'>Programming and data structures questions</a><a href='CS/questions/GATE_CS_Engineering_Maths.pdf' target='_blank' rel='noopener'>Engineering maths questions</a></div>";
      return;
    }
    app.innerHTML = "<h1>Resources</h1><p class='sub'>PDFs from the repo. Past questions have no answer key; check them against the official GATE answer keys.</p>" +
      "<h2>Past questions + practice by subject</h2><div class='card res'>" + PDFS.map(function (p) { return "<a href='CS/questions/GATE_CS_" + p[0] + ".pdf' target='_blank' rel='noopener'>" + p[1] + "</a>"; }).join("") + "</div>" +
      "<h2>Study notes</h2><div class='card res'>" + PDFS.map(function (p) { return "<a href='CS/notes/GATE_CS_" + p[0] + "_Notes.pdf' target='_blank' rel='noopener'>" + p[1] + " — notes</a>"; }).join("") + "</div>" +
      "<h2>Other</h2><div class='card res'><a href='CS/STUDY_PLAN.md' target='_blank' rel='noopener'>14-week study plan</a><a href='CS/analysis/GATE_CS_Important_Topics.md' target='_blank' rel='noopener'>Important-topics analysis</a><a href='CS/analysis/GATE_CS_Topicwise_Questions.md' target='_blank' rel='noopener'>All past questions by topic</a></div>";
  }

  var mb = document.getElementById("menuBtn"), mn = document.getElementById("mainNav");
  function menu(open) { mn.classList.toggle("open", open); mb.setAttribute("aria-expanded", open ? "true" : "false"); }
  mb.onclick = function (e) { e.stopPropagation(); menu(!mn.classList.contains("open")); };
  mn.addEventListener("click", function () { menu(false); });
  document.addEventListener("click", function (e) { if (!e.target.closest(".top")) menu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") menu(false); });
  window.addEventListener("resize", function () { if (innerWidth >= 760) menu(false); });
  var sw = document.getElementById("dsBtn");
  if (sw) {
    sw.textContent = DS === "DA" ? "Switch to CS" : "Switch to DA";
    var nd = document.getElementById("navDs"); if (nd) { nd.textContent = sw.textContent; nd.onclick = function () { sw.onclick(); }; }
    sw.onclick = function () { try { localStorage.setItem("gate27.ds", DS === "DA" ? "CS" : "DA"); } catch (e) {} location.reload(); };
  }
  var br = document.getElementById("brand"); if (br) br.innerHTML = "GATE " + DS + " <span>2027</span>";
  document.title = "GATE " + DS + " 2027 Practice";
  nav("home");
})();
