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
- 94 new questions: one 1-mark and one 2-mark question for each of the 47 topics, in MCQ, MSQ and NAT styles.
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

## Repo layout
```
GATE2027/
├── GATE_CS_Important_Topics.md
├── GATE_CS_Topicwise_Questions.md
├── GATE_CS_Practice_Questions.md
├── GATE_CS_Engineering_Maths.pdf
├── GATE_CS_Engineering_Maths_Notes.pdf
├── workdone.md
└── pAPER/
    ├── CS_GATE2027_Syllabus.pdf
    └── 2016 … 2026/   (CS papers by year)
```

## Possible next steps
- Replace the three textbook-style practice questions with fresh ones.
- Add more practice questions for Tier 1 topics.
- Make the same question PDF and notes for the other 9 subjects.
- Build full-length mock papers of 65 questions that follow the real GATE mark distribution.
- Fix the OCR gaps in 2019 and 2021 so every paper totals 85 marks.
