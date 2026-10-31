# GATE 2027 preparation

Everything for **GATE 2027 Data Science & AI (DA)**: past papers with answer keys, original practice questions with solutions, notes, a study plan and a practice website. The **CS** material is kept for a friend taking the CS paper, and parts of it overlap with DA (databases, algorithms, probability, linear algebra).

**Practice website:** open `index.html`, or the GitHub Pages site for this repo (Settings → Pages → `main` / root). It opens in DA mode; use the switch in the header for CS.

## Start here (DA)
| What | Where |
|---|---|
| 14-week study plan | [DA/STUDY_PLAN.md](DA/STUDY_PLAN.md) |
| Marks per section in past papers | [DA/analysis/GATE_DA_Paper_Analysis.md](DA/analysis/GATE_DA_Paper_Analysis.md) |
| Notes: ML and AI | [DA/notes/GATE_DA_Notes_ML_AI.pdf](DA/notes/GATE_DA_Notes_ML_AI.pdf) |
| Notes: maths, programming, databases | [DA/notes/GATE_DA_Notes_Maths_Programming_DB.pdf](DA/notes/GATE_DA_Notes_Maths_Programming_DB.pdf) |
| Practice questions with solutions (1,525) | [DA/questions/](DA/questions/) |
| Past papers 2024–2026 and answer keys | [DA/papers/](DA/papers/) |
| 2027 DA syllabus | [DA/papers/DA_GATE2027_Syllabus.pdf](DA/papers/DA_GATE2027_Syllabus.pdf) |

## Repository layout
```
GATE2027/
├── index.html, .nojekyll        practice website (plain HTML/CSS/JS, no build step)
├── assets/
│   ├── css/style.css            site styles
│   ├── js/app.js                site logic (quiz, timed tests, progress)
│   ├── data/                    question banks: da_questions.js (real 2024/2026 questions),
│   │                            ga, ps, pd, db, la, co, ml, ai (_questions.js) and questions.js (CS)
│   └── img/da2024, img/da2026   real paper questions cropped as images
├── DA/                          Data Science & AI (my paper)
│   ├── STUDY_PLAN.md
│   ├── papers/2024, 2025, 2026  papers + keys (2025 key not available yet), syllabus
│   ├── questions/               8 practice files, one per section (questions, answers, solutions)
│   ├── notes/                   2 notes PDFs; Markdown sources in notes/source/
│   └── analysis/                section-wise marks of the past papers
├── CS/                          Computer Science (for the CS paper)
│   ├── STUDY_PLAN.md
│   ├── papers/2016 … 2026       papers by year + syllabus
│   ├── questions/               past questions by topic + practice, one PDF per subject
│   ├── notes/                   one notes PDF per subject
│   └── analysis/                important topics, topic-wise past questions, practice questions
├── tools/verify/                scripts that re-solve every computable practice question
└── workdone.md                  log of all work done, in order
```

## What's in the website (DA mode)
- 129 real questions from GATE DA 2026 and 2024, shown exactly as in the paper, with the official keys.
- 1,525 original questions: General Aptitude 480, Probability & Statistics 161, Programming/DSA 279, Databases 146, Linear Algebra 125, Calculus 89, Machine Learning 129, AI 116.
- Practice mode with instant feedback, timed tests with GATE marking, filters, bookmarks, progress by section. Progress is saved in your browser only.

## Notes
- Answers were re-verified on 1 Nov 2026; see section 18 of [workdone.md](workdone.md). Re-run the checks with `bash tools/verify/run_all.sh`.
- The CS past-question PDFs have no answer keys; check them against the official GATE keys.
- Confirm exam dates, pattern and syllabus on the official GATE 2027 website.
