# GATE CS 2027 — Important Topics from Past Papers (2016–2026)

Analysis of the 15 question papers in `pAPER/` (2016, 2017 ×2, 2018–2023, 2024 ×2, 2025 ×2, 2026 ×2), mapped to the 10 technical sections of the GATE 2027 CS syllabus.

**Method.** Every technical question (55 per paper, 85 marks; General Aptitude's 15 marks excluded) was tagged with a subject and topic. Numbers below are **average marks per paper** unless stated.

**Coverage.** 2017, 2019, 2020 and 2021 are scanned PDFs, so they were read by OCR. 2019 has 54 of 55 technical questions recovered and 2021 has 49 of 55, so those two papers slightly understate every topic. For 2016 only the first set in the PDF was analysed. Topic tags were assigned by reading each question, so a few borderline questions could reasonably sit in a neighbouring topic. Treat subject totals as solid and topic figures as accurate to roughly ±0.5 marks.

---

## 1. Subject-wise weightage

| Subject | Avg marks / paper | Share | 2022–26 avg | 2016–21 avg | Min–Max |
|---|---|---|---|---|---|
| Engineering Mathematics | 14.8 | 18% | 14.8 | 14.9 | 12–18 |
| Programming & Data Structures | 10.7 | 13% | 10.1 | 11.4 | 6–15 |
| Operating System | 8.5 | 10% | 8.9 | 8.0 | 6–10 |
| Computer Networks | 8.1 | 10% | 8.1 | 8.0 | 6–10 |
| Theory of Computation | 7.7 | 9% | 7.1 | 8.3 | 5–10 |
| Computer Organization & Architecture | 7.5 | 9% | 8.2 | 6.6 | 4–9 |
| Algorithms | 7.3 | 9% | 7.4 | 7.3 | 4–10 |
| Databases | 7.0 | 8% | 7.1 | 6.9 | 5–9 |
| Digital Logic | 6.9 | 8% | 7.1 | 6.6 | 5–9 |
| Compiler Design | 5.9 | 7% | 6.1 | 5.6 | 4–8 |

Engineering Mathematics plus Programming & Data Structures alone account for about 25 marks per paper (30% of the technical marks). Subject weights have been very stable across the decade, so no subject can be safely skipped. Computer Organization has grown the most (6.6 → 8.2), with Operating System up slightly (8.0 → 8.9).

### Marks per subject in each paper

`17a/17b`, `24a/24b`, etc. are Set 1 / Set 2. `*` marks a paper with a few unreadable questions.

| Subject | 16 | 17a | 17b | 18 | 19* | 20 | 21* | 22 | 23 | 24a | 24b | 25a | 25b | 26a | 26b |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| EM | 13 | 15 | 15 | 16 | 17 | 13 | 15 | 17 | 18 | 14 | 14 | 15 | 12 | 15 | 13 |
| PDS | 11 | 12 | 15 | 12 | 12 | 12 | 6 | 9 | 11 | 8 | 10 | 9 | 12 | 12 | 10 |
| OS | 9 | 6 | 6 | 9 | 10 | 10 | 6 | 10 | 9 | 10 | 10 | 8 | 7 | 8 | 9 |
| CN | 10 | 8 | 7 | 7 | 9 | 6 | 9 | 10 | 8 | 9 | 9 | 6 | 6 | 8 | 9 |
| TOC | 9 | 10 | 9 | 8 | 5 | 9 | 8 | 8 | 8 | 7 | 7 | 8 | 7 | 6 | 6 |
| CO | 5 | 9 | 6 | 8 | 4 | 9 | 5 | 7 | 8 | 8 | 8 | 8 | 9 | 9 | 9 |
| ALG | 9 | 6 | 6 | 8 | 6 | 8 | 8 | 8 | 4 | 7 | 5 | 9 | 8 | 8 | 10 |
| DB | 5 | 8 | 8 | 6 | 8 | 8 | 5 | 7 | 5 | 8 | 8 | 8 | 9 | 6 | 6 |
| DL | 7 | 5 | 9 | 6 | 7 | 6 | 6 | 5 | 8 | 6 | 6 | 8 | 9 | 8 | 7 |
| CD | 7 | 6 | 4 | 5 | 6 | 4 | 7 | 4 | 6 | 8 | 8 | 6 | 6 | 5 | 6 |

---

## 2. Top 20 topics

| # | Topic | Subject | Avg marks / paper | In papers (of 15) | 2022–26 avg | 2016–21 avg |
|---|---|---|---|---|---|---|
| 1 | C programming: pointers, recursion, output prediction | PDS | 6.2 | 15 | 4.8 | 7.9 |
| 2 | Graph algorithms: MST, shortest path, BFS/DFS | ALG | 3.7 | 14 | 3.8 | 3.7 |
| 3 | CFG / PDA / CFL | TOC | 3.6 | 15 | 3.6 | 3.6 |
| 4 | Cache & memory hierarchy | CO | 3.3 | 13 | 3.5 | 3.1 |
| 5 | Probability & statistics | EM | 3.3 | 14 | 3.0 | 3.6 |
| 6 | Trees, BST, heaps | PDS | 2.9 | 15 | 3.4 | 2.4 |
| 7 | Linear algebra | EM | 2.8 | 15 | 2.9 | 2.7 |
| 8 | Regular languages, DFA/NFA, regex | TOC | 2.7 | 15 | 3.0 | 2.3 |
| 9 | Parsing (LL/LR, FIRST/FOLLOW) | CD | 2.5 | 14 | 2.4 | 2.7 |
| 10 | Boolean algebra & K-map | DL | 2.5 | 13 | 2.4 | 2.6 |
| 11 | Memory management, paging, virtual memory | OS | 2.5 | 13 | 3.0 | 1.9 |
| 12 | Number representation, IEEE-754, arithmetic | DL | 2.3 | 15 | 2.4 | 2.3 |
| 13 | Sets, relations, functions, groups, lattices | EM | 2.3 | 13 | 2.4 | 2.3 |
| 14 | SQL, relational algebra & calculus | DB | 2.3 | 13 | 2.2 | 2.4 |
| 15 | Graph theory (counting, colouring, matching) | EM | 2.3 | 12 | 3.2 | 1.3 |
| 16 | IP: addressing, CIDR, fragmentation, NAT | CN | 2.2 | 14 | 2.8 | 1.6 |
| 17 | Data link: MAC, error detection, sliding window | CN | 2.1 | 12 | 1.8 | 2.6 |
| 18 | Pipelining, hazards, CPI / speed-up | CO | 2.0 | 12 | 2.2 | 1.7 |
| 19 | Application layer, layering, DNS/HTTP | CN | 1.9 | 14 | 1.5 | 2.3 |
| 20 | Normalization & functional dependencies | DB | 1.8 | 13 | 2.0 | 1.6 |

---

## 3. Priority tiers

| Tier | Rule | Topics | Combined weight |
|---|---|---|---|
| **Tier 1 – Core** | ≥ 2.5 marks / paper | 9 topics (rows 1–9 above) | ~31 marks per paper (37%) |
| **Tier 2 – High** | 1.5 – 2.5 marks / paper | 17 topics | ~34 marks per paper (40%) |
| **Tier 3 – Medium/Low** | < 1.5 marks / paper | 21 topics | ~20 marks per paper (23%) |

**Tier 1:** C programming and recursion · MST / shortest path / DFS-BFS · CFG, PDA, CFL · cache · probability · trees, BST, heaps · linear algebra · DFA/NFA/regex · LL/LR parsing.

**Tier 2:** K-maps and Boolean algebra · paging and virtual memory · number representation / IEEE-754 · sets, relations, groups · SQL and relational algebra · graph-theory counting · IP addressing and subnetting · data link layer · pipelining · application layer · normalization · stacks, queues, linked lists · intermediate code and data-flow · combinatorics and recurrences · instruction set and data path · transactions and serializability · asymptotics and recurrences.

**Tier 3:** file systems and disk · TCP · Turing machines and decidability · CPU scheduling · synchronization · propositional/first-order logic · calculus · sequential circuits · syntax-directed translation · processes and threads · sorting · indexing / B+ trees · combinational circuits · deadlock · DMA/interrupts · lexical analysis · hashing · ER model · routing · dynamic programming · greedy.

Tier 1 and Tier 2 together make up about 77% of all technical marks. Tiers use unrounded averages, so a topic shown as 1.5 can fall on either side of the Tier 2/3 line.

---

## 4. What gets asked, subject by subject

Figures are average marks per paper, with the number of papers (out of 15) in which the topic appeared.

### Engineering Mathematics (14.8)
- **Probability & statistics — 3.3 (14).** Conditional probability and Bayes, expectation and variance, PDFs, dice/coin/urn problems, Poisson and uniform distributions.
- **Linear algebra — 2.8 (15).** Eigenvalues and eigenvectors, rank and determinant properties, systems of equations, LU decomposition.
- **Sets, relations, functions, groups — 2.3 (13).** Partial orders and lattices, equivalence relations, counting onto/one-one functions, subgroups.
- **Graph theory — 2.3 (12).** Counting spanning trees and matchings, chromatic number, planar graphs, degree and edge bounds, adjacency-matrix properties.
- **Combinatorics & recurrences — 1.5 (12).** Counting, inclusion–exclusion, generating functions.
- **Logic — 1.3 (12)** and **Calculus — 1.3 (15).** Predicate-logic translation; limits, maxima/minima, definite integrals.

### Programming & Data Structures (10.7)
- **C programming — 6.2 (15).** Output of programs with pointers, `static` variables, recursion, arrays and strings. The single highest-weight topic.
- **Trees, BST, heaps — 2.9 (15).** Traversals, BST properties, heap construction and Extract-Max.
- **Stacks, queues, linked lists — 1.6 (13).**

### Operating System (8.5)
- **Memory management — 2.5 (13).** Multi-level page-table sizes, TLB and effective access time, page replacement (FIFO/LRU/Optimal).
- **File system & disk — 1.5 (12).** Disk scheduling, disk access time, inode and linked allocation.
- **CPU scheduling — 1.3 (13)**, **synchronization — 1.3 (11)**, **processes & threads — 1.1 (11)**, **deadlock — 0.8 (6).**

### Computer Networks (8.1)
- **IP addressing — 2.2 (14).** Subnetting/CIDR, forwarding-table lookup, fragmentation, NAT.
- **Data link layer — 2.1 (12).** Sliding window and stop-and-wait, CRC/Hamming, CSMA/Ethernet.
- **Application layer & layering — 1.9 (14)**, **TCP — 1.5 (12)**, **routing — 0.4 (5).**

### Theory of Computation (7.7)
- **CFG / PDA / CFL — 3.6 (15).** Classifying languages as CFL or not, PDA/DPDA, ambiguity, closure properties.
- **Regular languages — 2.7 (15).** Minimal DFA state counts, regex ↔ DFA, closure properties, pumping lemma.
- **Turing machines & decidability — 1.4 (9).** Rarely asked recently (see trends).

### Computer Organization & Architecture (7.5)
- **Cache & memory hierarchy — 3.3 (13).** Tag/index/offset breakdown, mapping types, average memory access time, multi-level caches, write policies.
- **Pipelining — 2.0 (12)**, **instruction set & data path — 1.5 (10)**, **I/O (DMA, interrupts) — 0.6 (8).**

### Algorithms (7.3)
- **Graph algorithms — 3.7 (14).** MST properties (uniqueness, edge in every MST, effect of weight changes), number of MSTs, DFS/BFS, shortest paths.
- **Asymptotics & recurrences — 1.5 (10)**, **sorting/searching — 0.9 (8)**, **hashing — 0.5 (6)**, **dynamic programming — 0.3 (3)**, **greedy — 0.3 (3).**

### Databases (7.0)
- **SQL / relational algebra / calculus — 2.3 (13).**
- **Normalization — 1.8 (13).** Candidate keys, closure, BCNF/3NF, dependency preservation.
- **Transactions — 1.5 (12).** Conflict serializability, 2PL, ACID.
- **Indexing / B+ trees — 0.9 (9)**, **ER model — 0.4 (6).**

### Digital Logic (6.9)
- **Boolean algebra & K-map — 2.5 (13).**
- **Number representation — 2.3 (15).** 2's complement, IEEE-754, radix conversion, overflow.
- **Sequential circuits — 1.2 (9)**, **combinational circuits — 0.9 (6).**

### Compiler Design (5.9)
- **Parsing — 2.5 (14).** FIRST/FOLLOW, LL(1), LR(0)/SLR/LALR item sets and conflicts.
- **Intermediate code, optimisation, data-flow — 1.6 (10).** Three-address code, basic blocks, liveness.
- **Syntax-directed translation — 1.2 (10)**, **lexical analysis — 0.5 (7).**

---

## 5. Trends (2022–26 vs 2016–21, average marks per paper)

**Rising**
- Graph-theory counting: 1.3 → 3.2
- IP addressing and subnetting: 1.6 → 2.8
- Memory management / paging: 1.9 → 3.0
- Trees, BST, heaps: 2.4 → 3.4
- Stacks, queues, linked lists: 1.1 → 2.0
- Intermediate code / data-flow: 1.1 → 2.0

**Falling**
- C programming (still the biggest topic): 7.9 → 4.8
- Turing machines / decidability: 2.4 → 0.5
- Propositional and first-order logic: 1.9 → 0.8
- Combinatorics and recurrences: 2.0 → 1.1
- Data link layer: 2.6 → 1.8
- Layering / application layer: 2.3 → 1.5

Recent papers lean toward data structures, memory management, IP addressing and graph counting, and away from Turing machines, logic and C output questions.

---

## 6. Outside the current syllabus

Cryptography (digital signatures, RSA) appeared four times in 2016–2019, and token-bucket traffic shaping once in 2016. Neither is listed in the GATE 2027 syllabus, so no need to prepare them.

---

## 7. Suggested use

1. Finish all of Tier 1 first, using the matching questions from the papers in `pAPER/` as practice.
2. Cover Tier 2 next, giving extra time to the rising topics in section 5.
3. Take Tier 3 topics last, but skim the basics, because every subject appears in every paper.
4. Treat 2025–2026 papers as the closest guide to the current style, and keep a few full papers aside for timed mock tests.
