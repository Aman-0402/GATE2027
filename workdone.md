# Work Done — GATE 2027 Repo

Log of everything completed so far, in order.

## 1. Repo check
- Reviewed `Aman-0402/GATE2027` (public). It held the GATE CS papers and the 2027 syllabus PDF.

## 2. Papers organised year-wise
Commit `5a4bc56`
- Created one folder per year under `pAPER/` (2016–2026) and moved each paper into it.
- 2017 has `2017_CS1.pdf` and `2017_CS2.pdf`. Later years have CS1 and CS2 sets as well.
- `pAPER/CS_GATE2027_Syllabus.pdf` stays at the top level of `pAPER/`.

## 3. Important-topics analysis
Commit `22db0e9` — `GATE_CS_Important_Topics.md`
- Text extracted with `pdftotext`. Scanned papers (2017 CS1/CS2, 2019, 2020, 2021) were OCR'd with tesseract.
- 818 technical questions were tagged by hand into 47 topics across 10 subjects.
- Contents: method and coverage notes, subject weightage, marks-per-paper matrix, top-20 topics, Tier 1/2/3 ranking, per-subject guidance, rising and falling trends.
- Tier rule (average marks per paper): Tier 1 ≥ 2.5, Tier 2 1.5–2.5, Tier 3 < 1.5.
- Subject weights (average marks per paper): Engineering Maths 14.8, PDS 10.7, OS 8.5, CN 8.1, TOC 7.7, COA 7.5, Algorithms 7.3, DBMS 7.0, Digital Logic 6.9, Compiler Design 5.9.
- Coverage caveat: marks do not total 85 for every paper. 2019 totals 84 and 2021 totals 75, because of OCR and parsing gaps.

## 4. Topic-wise past questions
Commit `bb4105e` — `GATE_CS_Topicwise_Questions.md`
- All 818 past questions listed by subject, then topic, newest first, with a contents list.
- Each entry is formatted as `year · set · question number · marks — question text`.

## 5. Practice questions
Commit `440de14` — `GATE_CS_Practice_Questions.md`
- 95 new questions: one 1-mark and one 2-mark question for each of the 47 topics (Dynamic programming has a third), in MCQ, MSQ and NAT styles.
- Answers and short solutions are in collapsible blocks.
- Numerical and program-output answers were checked by running code.
- The questions are my own and follow the past-paper patterns. Three are standard textbook examples: Huffman frequencies, the Banker's algorithm table and job sequencing.
- Web research gave context only, not question text. It covered the reported exam dates (6, 7, 13, 14, 20 and 21 February 2027) and the areas coaching blogs called hardest in 2026. Confirm the dates against the official GATE 2027 brochure.
- Sources: [Careers360](https://engineering.careers360.com/articles/gate-2027), [GATE CS 2026 analysis](https://gateatzeal.com/blogs/?p=2057), [PW Live](https://www.pw.live/exams/gate/gate-cs-important-topics/).

## 6. Engineering Mathematics question PDF
Commit `1862e5d` — `GATE_CS_Engineering_Maths.pdf` (22 pages)
- All 150 past Engineering Mathematics questions (2016–2026, 222 marks) grouped by the 7 topics, newest first.
- The 14 new practice questions (2 per topic) with step-by-step solutions.
- Past questions have no answer key. Text came from extraction and OCR, so fractions and figures may be garbled. Entries from scanned papers are marked `[OCR]`.

## 7. Engineering Mathematics study notes
Commit `ce3df2b` — `GATE_CS_Engineering_Maths_Notes.pdf` (13 pages)
- Notes for all 7 topics: formulas, theorems, shortcuts, common traps, exam strategy and a revision checklist.
- Written from my own knowledge, not checked line by line against a textbook. Check the less common formulas before relying on them.

## 8. Question PDFs for the other 9 subjects
Commit `157101f` — one PDF per subject, each with past questions grouped by topic (most marks first) plus the new practice questions with solutions:
`GATE_CS_Programming_and_Data_Structures.pdf`, `GATE_CS_Algorithms.pdf`, `GATE_CS_Theory_of_Computation.pdf`, `GATE_CS_Compiler_Design.pdf`, `GATE_CS_Operating_System.pdf`, `GATE_CS_Computer_Networks.pdf`, `GATE_CS_Computer_Organization.pdf`, `GATE_CS_Databases.pdf`, `GATE_CS_Digital_Logic.pdf`.
- The practice questions are the same ones as in `GATE_CS_Practice_Questions.md`, with the short solutions given there.
- Past questions have no answer key. Code, tables and figures may be flattened by text extraction; scanned-paper entries are marked `[OCR]`.

## 9. Study notes for the other 9 subjects
One notes PDF per subject, named `GATE_CS_<Subject>_Notes.pdf` (same subjects as above): key formulas, concepts, shortcuts, common traps, exam strategy and a revision checklist.
- Written from my own knowledge, not checked line by line against a textbook. Check the less common facts before relying on them.

## 10. Study plan
`STUDY_PLAN.md` — a 14-week plan from 2 Nov 2026 (subject-by-subject learning, full past papers, mocks and final revision). Assumes about 27 hours per week.

## 11. Practice website
`index.html` + `assets/` (plain HTML, CSS and JavaScript, no build step). Open `index.html` in a browser, or publish the repo root with GitHub Pages.
- 95 questions (MCQ, MSQ, NAT) with answers and solutions, from `GATE_CS_Practice_Questions.md`. Data is in `assets/questions.js`.
- Practice mode with instant feedback; timed test mode with GATE-style marking (−⅓ / −⅔ for wrong MCQs; no negative marking for MSQ and NAT).
- Filters by subject, topic, type and status (unattempted, wrong last time, bookmarked); bookmarks; progress by subject and weakest topics; dark mode.
- Progress is saved in the browser only (localStorage). A Resources page links the PDFs and the study plan.
- The 818 past questions are not in the quiz yet because they have no answer keys.

## 12. Switch to the DA paper and repo reorganisation
- You are taking the **GATE DA (Data Science & AI)** paper, not CS. All material above is for CS. Overlap with DA: databases, data structures and algorithms, probability, linear algebra, calculus. Not needed for DA: OS, networks, theory of computation, compiler design, computer organization, digital logic, discrete maths.
- Machine Learning and AI (about 22 of 100 marks) are not covered yet.
- The repo is now split into `CS/` and `DA/`. Files were moved, not changed, so the commit history is preserved. The website's Resources links were updated to the new paths.
- The DA papers could not be downloaded from this session. They are to be uploaded to `DA/papers/`.

## 13. DA papers added
`DA/papers/` now holds the GATE DA papers for 2024 (IISc Bengaluru, Set 1), 2025 (IIT Roorkee) and 2026 (IIT Guwahati), plus the official GATE 2027 DA syllabus (organising institute IIT Madras). Each paper has 65 questions (10 General Aptitude for 15 marks, 55 technical for 85 marks) and is text-extractable, so no OCR is needed. The 2026 official answer key (`2026_DA_Key.pdf`, plus a parsed `2026_DA_key.json`) was added later. The 2024 key (`DA/papers/2024/2024_DA_key.json`) was read from the IIT Guwahati-hosted `DAFinalAnswerKey.pdf` via a summarising fetch tool, not the raw PDF. Only Q1–Q5 were checked against the paper (all matched), so confirm it against the official PDF before relying on it. The 2025 key is still missing; its PDF is behind the GATE 2025 candidate login.

## 14. DA website, study plan, notes and analysis
- **Website:** now opens in **DA mode** (the "Switch to CS/DA" button in the header toggles; the choice is saved in the browser). DA mode holds **129 real past questions** from GATE DA 2026 (65, official key) and 2024 (64, key not yet double-checked; Q59 is left out because it is marks-to-all). Each question is shown as an image cropped from the paper (so figures, tables and maths are exact), answered by option letter or number, with GATE-style marking. NAT keys are ranges and are checked as ranges. Section filter: Probability & Statistics, Linear Algebra, Calculus & Optimisation, Programming/DSA, Databases & Warehousing, Machine Learning, AI, General Aptitude; the topic filter selects the paper year. Sections were tagged by hand from the question text, so a few may be debatable.
- **2024 key:** `DA/papers/2024/2024_DA_key.json`, read from the IIT Guwahati-hosted PDF through a summarising fetch. Q1–Q5, Q30 (2026) and Q62 were solved by hand and matched; the rest are unchecked. The 2025 key is still missing, so 2025 is not in the quiz.
- **Files:** `assets/da_questions.js`, `assets/img/da2026/`, `assets/img/da2024/`.
- **Study plan:** `DA/STUDY_PLAN.md` (14 weeks from 2 Nov 2026, weighted by the paper analysis).
- **Paper analysis:** `DA/analysis/GATE_DA_Paper_Analysis.md` (marks per section for 2026 and 2024).
- **Notes:** `DA/notes/GATE_DA_Notes_ML_AI.pdf` and `GATE_DA_Notes_Maths_Programming_DB.pdf`, written from my own knowledge against the official syllabus; check the less common facts.

- **Layout fixes:** below 760px the header shows a hamburger menu (Home, Practice, Progress, Resources, Switch DA/CS); the stat tiles are two per row; question images can be tapped to enlarge; images are trimmed of blank margins; the left question column scrolls if taller than the screen. Checked at 320, 390, 768, 1100, 1450 and 1920 px with no horizontal overflow.

## 15. General Aptitude practice bank (480 questions)
- 480 original MCQs with answers and solutions: 315 quantitative and reasoning (percentages, profit and loss, interest, ratio, time and work, speed, averages, ages, number system, series, probability, permutations, calendar and clocks, mensuration, code, direction, Venn, data interpretation) and 165 verbal (synonyms, antonyms, analogies, sentence completion and grammar, odd one out, syllogisms).
- Quantitative answers were computed by code as the questions were generated, and 54 of them were re-checked by an independent brute-force script with no mismatches. Verbal answers were written by hand and reviewed once; a few words have close alternatives, so tell me if an answer looks arguable.
- On the website: DA mode → Practice → "GA – Quantitative & Reasoning" or "GA – Verbal". Files: `assets/ga_questions.js` and `DA/questions/GATE_DA_General_Aptitude_Practice.md` (questions, answer key and solutions).

## 16. Probability & Statistics practice (161 questions)
- 161 original questions (94 MCQ, 57 NAT, 10 MSQ) with solutions: Bayes, conditional and basic probability, counting, expectation and variance, binomial, Poisson, geometric, exponential, uniform, normal and CLT, confidence intervals and z/t statistics, descriptive statistics, covariance and correlation, joint distributions, and true/false concept statements.
- Numerical answers were computed by code; a sample of NAT answers (18) was re-checked against scipy with no mismatches, and the Bayes questions against an independent calculation. NAT answers are accepted within half a unit of the last decimal.
- Site: DA mode → Practice → Probability & Statistics (it shares this section with the real 2026/2024 questions; the topic filter separates them). Files: `assets/ps_questions.js`, `DA/questions/GATE_DA_Probability_Practice.md`.

## 17. Practice sets for the remaining DA sections (1,044 questions)
- Programming, DSA & Algorithms 279; Databases & Warehousing 146; Linear Algebra 125; Calculus & Optimisation 89; Machine Learning 129; Artificial Intelligence 116. All original, with solutions.
- Answers were computed by code while generating (Python execution, SQLite, SymPy, NumPy/SciPy, NetworkX). A final check confirmed every question has valid options, one answer for MCQ, NAT answers inside their ranges, and no duplicate IDs.
- With sections 15 and 16 the DA quiz now has 1,654 questions (129 real past + 1,525 original). Tested at 390 px and 1450 px: all sections start a quiz, no overflow, no console errors.
- Files: `assets/{pd,db,la,co,ml,ai}_questions.js`, `DA/questions/GATE_DA_*_Practice.md`.

## 18. Answer re-verification and site redesign (1 November 2026)
- **Every answer re-checked with a second, independent method.** Python-tracing questions were re-run from the code as printed (107/107 matched); SQL questions re-run in SQLite from the printed tables (34/34). Every numerical template in Linear Algebra, Calculus, Probability, DSA, Databases, ML, AI and quantitative GA was re-solved by a separate checker that reads the printed question (SymPy, NumPy/SciPy, NetworkX, brute force). One instance of each template, every concept/MSQ question and all 165 verbal GA questions were checked by hand.
- **Result:** 1 wrong answer in 1,525 original questions. GA213 said ₹800 sold for ₹919 is a 15% profit (it is 14.875%); the price is now ₹920. DB24 (one-to-one relationship) now states total participation on both sides, so 1 table is the only right answer. Wording fixes: "3th" → "3rd", "an 5×5", "1x²", "0 < η < 1/1", "1 heads", the analogy prompt ("Choose the word…"), and 6 garbled reversed-text distractors replaced.
- **2024 key now verified:** all 64 scored questions of the 2024 paper were solved independently (figure questions from the paper images) and match the key; the "not double-checked" notice is removed. The site's answers match both key files exactly (2024: 64, 2026: 65).
- **Redesign:** graph-paper "rough sheet" look, navy ink, Bricolage Grotesque headings and Lexend body text. The home page shows the paper to scale (a block per section, sized by average marks, shaded by your progress; tap a block to practise it), a countdown to 6 Feb 2027 (earliest reported exam date), and answer options as answer-sheet bubbles. Checked at 390 px and 1450 px, light and dark, with no overflow or console errors.

## 19. Repo reorganised (1 November 2026)
- Website files split by kind: `assets/css/`, `assets/js/`, `assets/data/` (question banks), `assets/img/`. The site stays at the repo root, so the GitHub Pages address is unchanged.
- DA notes sources moved to `DA/notes/source/`. Answer-check scripts added in `tools/verify/` (`bash tools/verify/run_all.sh`; all report 0 mismatches).
- README files rewritten: root (start-here table and full layout), `DA/`, `DA/papers/`, `CS/` (new), `tools/verify/`. `CS/STUDY_PLAN.md` now points to the DA plan. Added `.gitignore`.
- Checked: every relative link in the 24 Markdown files, the site and the 129 question images resolves; site tested at 390 px and 1450 px.

## Repo layout
```
GATE2027/
├── README.md, workdone.md, .gitignore
├── index.html, .nojekyll           practice website
├── assets/  css/  js/  data/  img/
├── DA/      STUDY_PLAN.md  papers/  questions/  notes/ (+ source/)  analysis/
├── CS/      STUDY_PLAN.md  papers/  questions/  notes/  analysis/
└── tools/verify/                    answer-check scripts
```
Note: earlier sections name some files by their old locations (for example `assets/app.js`, or CS files before they moved into `CS/`); the layout above is current.

## Possible next steps
- Add the 2025 DA paper to the quiz once its answer key is attached; double-check the 2024 key against the official PDF.
- Full-length timed DA mock from the 129 questions (65 questions, 3 hours).
- CS: answer keys for the past questions (for your friend); OCR fixes for 2019 and 2021.
