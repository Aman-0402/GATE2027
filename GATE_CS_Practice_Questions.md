# GATE CS 2027 — Practice Questions by Topic (Model Questions)

Original questions written in the style of the past papers in `pAPER/`. Every topic from `GATE_CS_Topicwise_Questions.md` has two questions, one worth 1 mark and one worth 2 marks. Question types follow GATE: MCQ (one correct option), MSQ (one or more correct options) and NAT (numerical answer). Each answer is hidden under a "Answer" toggle with a short solution. Numerical and program-output answers were checked by running code.

**GATE 2027 context.** [Careers360](https://engineering.careers360.com/articles/gate-2027) lists the exam days as 6, 7, 13, 14, 20 and 21 February 2027, conducted by IIT Madras (dates as reported there; confirm on the official GATE site). A [coaching analysis of GATE CS 2026](https://gateatzeal.com/blogs/?p=2057) reports that the hardest areas were non-standard dynamic programming, a modified Dijkstra question, multi-concept maths (probability with combinatorics), multi-level paging and semaphore questions, decidability, and pipelining/multi-level cache numericals. That is the analysis's own opinion, not official data, but the questions below include extra practice in those areas.

---

## Engineering Mathematics

### Probability & statistics

**1.** (1 mark · NAT) Two fair six-sided dice are rolled. The probability that the sum is a prime number, rounded to 3 decimal places, is ______.

<details><summary>Answer</summary>

**0.417.** Prime sums are 2, 3, 5, 7 and 11, which occur in 1 + 2 + 4 + 6 + 2 = 15 of the 36 outcomes. 15/36 = 0.4167.
</details>

**2.** (2 marks · MCQ) Urn A holds 3 red and 2 blue balls. Urn B holds 1 red and 4 blue balls. An urn is chosen with equal probability and one ball is drawn from it. The ball is red. The probability that it came from urn A is

(A) 1/2  (B) 3/5  (C) 3/4  (D) 4/5

<details><summary>Answer</summary>

**(C).** P(A | red) = (½·3/5) / (½·3/5 + ½·1/5) = 0.3 / 0.4 = 3/4.
</details>

### Linear algebra

**1.** (1 mark · NAT) A 3 × 3 real matrix A has eigenvalues 1, 2 and 4. The trace of A² is ______.

<details><summary>Answer</summary>

**21.** The eigenvalues of A² are 1, 4 and 16, and the trace is their sum.
</details>

**2.** (2 marks · MSQ) Consider the system x + y + z = 3, x + 2y + 3z = 6, 2x + 3y + kz = 9. Which statements are TRUE?

(A) For k = 4 the system has infinitely many solutions.
(B) For k ≠ 4 the system has the unique solution (x, y, z) = (0, 3, 0).
(C) For some value of k the system is inconsistent.
(D) The determinant of the coefficient matrix equals k − 4.

<details><summary>Answer</summary>

**(A), (B), (D).** Row 3 − Row 1 − Row 2 gives (0, 0, k − 4 | 0). For k = 4 this row vanishes, so the rank is 2 and there are infinitely many solutions. For k ≠ 4, z = 0 and then y = 3, x = 0. The right-hand side of that row is always 0, so the system is never inconsistent, which makes (C) false. det = k − 4.
</details>

### Sets, relations, functions, groups

**1.** (1 mark · NAT) The number of equivalence relations on the set {1, 2, 3, 4} is ______.

<details><summary>Answer</summary>

**15.** This is the Bell number B(4), the number of partitions of a 4-element set.
</details>

**2.** (2 marks · NAT) The divisors of 36 are ordered by divisibility. The number of edges in the Hasse diagram of this poset is ______.

<details><summary>Answer</summary>

**12.** 36 = 2²·3², so the poset is a 3 × 3 grid of exponent pairs. A 3 × 3 grid has 6 horizontal and 6 vertical covering edges.
</details>

### Graph theory

**1.** (1 mark · NAT) The number of spanning trees of the labelled complete graph K₅ is ______.

<details><summary>Answer</summary>

**125.** Cayley's formula gives nⁿ⁻² = 5³.
</details>

**2.** (2 marks · NAT) A simple connected planar graph has 10 vertices, and every face (including the outer face) is bounded by exactly 3 edges. The number of edges is ______.

<details><summary>Answer</summary>

**24.** Each face has 3 edges and each edge borders 2 faces, so 3F = 2E. Euler's formula V − E + F = 2 gives 10 − E + 2E/3 = 2, so E = 24.
</details>

### Combinatorics, recurrences, generating functions

**1.** (1 mark · NAT) The number of binary strings of length 6 with no two consecutive 1s is ______.

<details><summary>Answer</summary>

**21.** a(n) = a(n−1) + a(n−2) with a(1) = 2 and a(2) = 3, giving 2, 3, 5, 8, 13, 21.
</details>

**2.** (2 marks · NAT) The number of integer solutions of x₁ + x₂ + x₃ + x₄ = 20 with every xᵢ ≥ 2 and x₁ ≤ 6 is ______.

<details><summary>Answer</summary>

**335.** Put yᵢ = xᵢ − 2, so Σyᵢ = 12 with y₁ ≤ 4. Without the bound there are C(15, 3) = 455 solutions. Those with y₁ ≥ 5 number C(10, 3) = 120. 455 − 120 = 335.
</details>

### Propositional & first-order logic

**1.** (1 mark · MCQ) The formula ¬∀x (P(x) → Q(x)) is logically equivalent to

(A) ∃x (P(x) ∧ ¬Q(x))
(B) ∀x (P(x) ∧ ¬Q(x))
(C) ∃x (¬P(x) ∨ Q(x))
(D) ∀x (¬P(x) ∨ ¬Q(x))

<details><summary>Answer</summary>

**(A).** ¬∀x φ ≡ ∃x ¬φ, and ¬(P → Q) ≡ P ∧ ¬Q.
</details>

**2.** (2 marks · MSQ) Which of the following are valid (true in every interpretation)?

(A) (p → q) → ((q → r) → (p → r))
(B) ((p ∨ q) ∧ ¬p) → q
(C) ∃x ∀y R(x, y) → ∀y ∃x R(x, y)
(D) ∀y ∃x R(x, y) → ∃x ∀y R(x, y)

<details><summary>Answer</summary>

**(A), (B), (C).** (A) is hypothetical syllogism and (B) is disjunctive syllogism. In (C), a single x that works for all y works for each y separately. (D) fails when R(x, y) means "x = y" on a domain with two elements.
</details>

### Calculus

**1.** (1 mark · NAT) lim as x → 0 of (e²ˣ − 1 − 2x) / x² is ______.

<details><summary>Answer</summary>

**2.** e²ˣ = 1 + 2x + 2x² + …, so the numerator behaves like 2x².
</details>

**2.** (2 marks · MCQ) Let f(x) = |x| + |x − 2| + |x − 4|. The number of points at which f is NOT differentiable is

(A) 0  (B) 1  (C) 3  (D) infinite

<details><summary>Answer</summary>

**(C).** Each absolute value has a corner at its zero. The slope jumps by 2 at each of x = 0, 2 and 4, and these jumps cannot cancel.
</details>

---

## Programming & Data Structures

### C programming: pointers, recursion, output prediction

**1.** (1 mark · MCQ) What does the program print?

```c
int a[5] = {10, 20, 30, 40, 50};
int *p = a;
p += 2;
printf("%d %d %ld", *p, p[-1], (long)(&a[4] - p));
```

(A) 30 20 2  (B) 30 20 3  (C) 20 30 2  (D) 30 30 2

<details><summary>Answer</summary>

**(A).** p points to a[2] = 30, p[-1] = a[1] = 20, and &a[4] − p = 2 elements.
</details>

**2.** (2 marks · MCQ) What does the program print?

```c
int c = 0;
int g(int n) {
    c++;
    if (n <= 1) return n;
    return g(n-1) + g(n-2);
}
int main() {
    int v = g(5);
    printf("%d %d", v, c);
}
```

(A) 5 9  (B) 5 15  (C) 8 15  (D) 5 25

<details><summary>Answer</summary>

**(B).** g(5) is the 5th Fibonacci number, 5. The number of calls satisfies calls(n) = 1 + calls(n−1) + calls(n−2) with calls(0) = calls(1) = 1, giving 1, 1, 3, 5, 9, 15.
</details>

### Trees, BST, heaps

**1.** (1 mark · MCQ) The keys 10, 20, 15, 30, 25 are inserted one at a time into an initially empty max-heap, using sift-up on each insertion. The final array is

(A) 30 25 15 10 20
(B) 30 20 25 10 15
(C) 30 25 20 10 15
(D) 30 20 15 10 25

<details><summary>Answer</summary>

**(A).** After 10, 20, 15 the heap is [20, 10, 15]. Inserting 30 gives [30, 20, 15, 10]. Inserting 25 at index 4 swaps it with its parent 20, giving [30, 25, 15, 10, 20].
</details>

**2.** (2 marks · MCQ) A BST is built by inserting 50, 30, 70, 20, 40, 60, 80, 35, 45 in that order. Node 30 is then deleted and replaced by its inorder successor. The preorder traversal of the result is

(A) 50 35 20 40 45 70 60 80
(B) 50 40 20 35 45 70 60 80
(C) 50 35 20 45 40 70 60 80
(D) 50 20 40 35 45 70 60 80

<details><summary>Answer</summary>

**(A).** The inorder successor of 30 is the minimum of its right subtree, which is 35. Node 30 takes the value 35 and the old leaf 35 is removed. The tree is 50 (35 (20, 40 (–, 45)), 70 (60, 80)).
</details>

### Stacks, queues, linked lists

**1.** (1 mark · MCQ) An empty stack undergoes these operations in order: push 1, push 2, push 3, pop, push 4, pop, pop, push 5, pop. The values popped, in order, are

(A) 3 4 2 5  (B) 3 4 1 5  (C) 3 2 4 5  (D) 3 4 2 1

<details><summary>Answer</summary>

**(A).** The pops return 3, then 4, then 2, then 5. The value 1 stays in the stack.
</details>

**2.** (2 marks · NAT) A singly linked list holds 1 → 2 → 3 → 4 → 5. The function below is called with the head. The data in the third node of the returned list is ______.

```c
struct node { int d; struct node *next; };
struct node *g(struct node *h) {
    struct node *a = h, *b;
    if (!a || !a->next) return a;
    b = a->next;
    a->next = g(b->next);
    b->next = a;
    return b;
}
```

<details><summary>Answer</summary>

**4.** The function swaps adjacent pairs, so the result is 2 → 1 → 4 → 3 → 5.
</details>

---

## Algorithms

### Graph algorithms: MST, shortest path, BFS/DFS

**1.** (1 mark · NAT) K₄ is a complete graph on 4 vertices with all 6 edges of equal weight. The number of distinct minimum spanning trees is ______.

<details><summary>Answer</summary>

**16.** Every spanning tree has the same weight, so all 4² = 16 labelled spanning trees are minimum.
</details>

**2.** (2 marks · MSQ) G is a connected undirected graph with distinct positive edge weights. Every weight w is replaced by w². Which statements are TRUE?

(A) The minimum spanning tree stays the same.
(B) The shortest-path tree from any source stays the same.
(C) The shortest-path distance between any two vertices becomes the square of its old value.
(D) The ordering of the edges by weight is unchanged.

<details><summary>Answer</summary>

**(A), (D).** Squaring is increasing on positive numbers, so the edge order and the MST are preserved. Path sums do not behave like that: take s–b with weight 3 and s–a–b with weights 2 and 2. Before squaring the direct edge wins (3 < 4). After squaring the two-edge path wins (4 + 4 = 8 < 9). So (B) and (C) are false.
</details>

### Asymptotics & recurrences

**1.** (1 mark · MCQ) Which option lists the functions in increasing order of asymptotic growth?

(A) (log n)³, n log n, n^1.5, 2^√n
(B) n log n, (log n)³, n^1.5, 2^√n
(C) (log n)³, n^1.5, n log n, 2^√n
(D) (log n)³, n log n, 2^√n, n^1.5

<details><summary>Answer</summary>

**(A).** Polylogarithms grow slower than n log n, which is slower than n^1.5. The function 2^√n beats every polynomial.
</details>

**2.** (2 marks · MCQ) T(n) = 2T(n/2) + n/log n with T(1) = 1. Then T(n) is

(A) Θ(n)  (B) Θ(n log log n)  (C) Θ(n log n)  (D) Θ(n²)

<details><summary>Answer</summary>

**(B).** The Master theorem does not apply. Summing level by level gives n · Σ 1/(log n − i) = n · H(log n) = Θ(n log log n).
</details>

### Sorting, searching, divide & conquer

**1.** (1 mark · NAT) The minimum number of comparisons needed in the worst case to find both the largest and the smallest of 100 distinct numbers, using the best known pairing method, is ______.

<details><summary>Answer</summary>

**148.** ⌈3n/2⌉ − 2 = 150 − 2.
</details>

**2.** (2 marks · NAT) Top-down merge sort is applied to 8 distinct elements. The maximum number of element comparisons is ______.

<details><summary>Answer</summary>

**17.** C(2) = 1, C(4) = 2·1 + 3 = 5, C(8) = 2·5 + 7 = 17.
</details>

### Hashing

**1.** (1 mark · NAT) A table of size 7 uses h(k) = k mod 7 with linear probing. The keys 15, 22, 8, 29 are inserted in that order. The index where 29 is stored is ______.

<details><summary>Answer</summary>

**4.** All four keys hash to index 1, so they fill indices 1, 2, 3 and 4 in order.
</details>

**2.** (2 marks · NAT) A table of size 11 uses double hashing with h₁(k) = k mod 11 and h₂(k) = 1 + (k mod 10). The keys 25, 36, 47 are inserted in that order. The index where 47 is stored is ______.

<details><summary>Answer</summary>

**0.** All three keys have h₁ = 3. Key 25 goes to index 3. Key 36 has h₂ = 7, so it tries 3, then 10 and is stored at 10. Key 47 has h₂ = 8, so it tries 3, then (3 + 8) mod 11 = 0 and is stored at 0.
</details>

### Greedy

**1.** (1 mark · NAT) Huffman coding is applied to symbols with frequencies 5, 9, 12, 13, 16, 45. The weighted code length Σ(frequency × code length) is ______.

<details><summary>Answer</summary>

**224.** The merges cost 14, 25, 30, 55 and 100, and 14 + 25 + 30 + 55 + 100 = 224.
</details>

**2.** (2 marks · NAT) Five unit-time jobs have (profit, deadline) = (100, 2), (19, 1), (27, 2), (25, 1), (15, 3). The maximum total profit from job sequencing with deadlines is ______.

<details><summary>Answer</summary>

**142.** Schedule the 27-profit job in slot 1, the 100-profit job in slot 2 and the 15-profit job in slot 3. The two deadline-1 jobs cannot also fit. 100 + 27 + 15 = 142.
</details>

### Dynamic programming

**1.** (1 mark · NAT) The length of the longest common subsequence of PQRSTQP and QPSRQTP is ______.

<details><summary>Answer</summary>

**4.** One example is Q, S, T, P.
</details>

**2.** (2 marks · NAT) A person climbs a staircase of 10 steps taking 1, 2 or 3 steps at a time. The number of distinct ways to reach the top is ______.

<details><summary>Answer</summary>

**274.** Let a(n) = a(n−1) + a(n−2) + a(n−3) with a(0) = 1. The sequence is 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274.
</details>

**3.** (2 marks · NAT) A 0/1 knapsack has capacity 9 and four items with (weight, value) = (3, 4), (4, 5), (5, 7), (2, 3). The maximum total value is ______.

<details><summary>Answer</summary>

**12.** Items {3, 4, 2} give 4 + 5 + 3 = 12 and items {4, 5} give 5 + 7 = 12. No combination with weight at most 9 does better.
</details>

---

## Theory of Computation

### Context-free grammars, PDA, CFL

**1.** (1 mark · MCQ) Let L = { aⁱ bʲ cᵏ | i = j or j = k }. Which statement is TRUE?

(A) L is regular.
(B) L is context-free but not deterministic context-free.
(C) L is deterministic context-free.
(D) L is not context-free.

<details><summary>Answer</summary>

**(B).** L is the union of two CFLs (aⁿbⁿc* and a*bⁿcⁿ). A PDA must guess which condition to check, and a deterministic PDA cannot make that choice.
</details>

**2.** (2 marks · MSQ) Let L₁ = { aⁿ bⁿ cᵐ | n, m ≥ 0 } and L₂ = { aⁿ bᵐ cᵐ | n, m ≥ 0 }. Which statements are TRUE?

(A) L₁ ∩ L₂ is not context-free.
(B) L₁ ∪ L₂ is context-free.
(C) The complement of L₁ ∩ L₂ is context-free.
(D) Context-free languages are closed under intersection.

<details><summary>Answer</summary>

**(A), (B), (C).** L₁ ∩ L₂ = { aⁿ bⁿ cⁿ }, which is not context-free. The union of two CFLs is a CFL. The complement of { aⁿbⁿcⁿ } is a union of CFLs (strings of the wrong shape, or with unequal counts), so it is context-free. Statement (D) is false, as (A) shows.
</details>

### Regular languages, DFA/NFA, regex

**1.** (1 mark · NAT) Over {a, b}, let L be the set of strings whose third symbol from the right is a. The number of states in the minimal complete DFA for L is ______.

<details><summary>Answer</summary>

**8.** A DFA must remember the last 3 symbols, and all 2³ = 8 histories are pairwise distinguishable.
</details>

**2.** (2 marks · MSQ) Which of the following languages are regular?

(A) { aⁿ bᵐ | n, m ≥ 0 and n + m is even }
(B) { aⁿ bⁿ | n ≥ 0 }
(C) { w ∈ {a, b}* | #ₐ(w) ≡ #_b(w) (mod 3) }
(D) { aⁿ | n is a perfect square }

<details><summary>Answer</summary>

**(A), (C).** A DFA can track the parity of the length while enforcing the a*b* shape for (A), and the value of #ₐ − #_b mod 3 for (C). (B) and (D) fail the pumping lemma.
</details>

### Turing machines & decidability

**1.** (1 mark · MCQ) Which of the following problems is UNDECIDABLE?

(A) Given a DFA M, is L(M) empty?
(B) Given a CFG G, is L(G) empty?
(C) Given a CFG G over Σ, is L(G) = Σ*?
(D) Given a regular expression r, is L(r) infinite?

<details><summary>Answer</summary>

**(C).** Universality of a CFG is undecidable. Emptiness of a DFA or CFG and finiteness of a regular language are decidable.
</details>

**2.** (2 marks · MSQ) Which statements are TRUE?

(A) The complement of a recursively enumerable language that is not recursive is not recursively enumerable.
(B) If L and its complement are both recursively enumerable, then L is recursive.
(C) The set of Turing machines that halt on the empty tape is recursive.
(D) Every subset of a recursive language is recursive.

<details><summary>Answer</summary>

**(A), (B).** (A) follows from (B). (C) is the halting problem on the empty tape, which is undecidable. (D) is false because every language over Σ is a subset of the recursive language Σ*.
</details>

---

## Compiler Design

### Parsing (LL/LR, FIRST/FOLLOW)

**1.** (1 mark · NAT) For the grammar

E → T E′, E′ → + T E′ | ε, T → F T′, T′ → * F T′ | ε, F → ( E ) | id

the number of terminals in FOLLOW(F) is ______.

<details><summary>Answer</summary>

**4.** FOLLOW(F) includes FIRST(T′) minus ε, which is {*}. Because T′ can be empty it also includes FOLLOW(T) = {+, ), $}. The set is {*, +, ), $}.
</details>

**2.** (2 marks · NAT) For the grammar S → C C, C → c C | d, let x be the number of states in the canonical LR(1) automaton and y the number in the LR(0) automaton. The value of x − y is ______.

<details><summary>Answer</summary>

**3.** The LR(1) automaton has 10 states and the LR(0) automaton has 7. The extra 3 come from states that share an LR(0) core but have different lookaheads.
</details>

### Syntax-directed translation

**1.** (1 mark · MCQ) Consider E → E₁ + T {E.val = E₁.val + T.val}, E → T {E.val = T.val}, T → num {T.val = num.lexval}. The attribute val is

(A) inherited, and the definition is L-attributed only
(B) synthesized, and the definition is S-attributed
(C) inherited, and the definition is S-attributed
(D) neither synthesized nor inherited

<details><summary>Answer</summary>

**(B).** Each val is computed from attributes of the children, so it is synthesized, and a definition using only synthesized attributes is S-attributed.
</details>

**2.** (2 marks · NAT) The grammar E → E + T | T, T → T * F | F, F → id has a semantic action on every production, run when that production is reduced. A bottom-up parser parses id + id * id. The number of semantic actions executed is ______.

<details><summary>Answer</summary>

**8.** The rightmost derivation in reverse uses F → id three times, T → F twice, T → T * F once, E → T once and E → E + T once. 3 + 2 + 1 + 1 + 1 = 8.
</details>

### Intermediate code, optimisation, data-flow

**1.** (1 mark · NAT) How many basic blocks does this three-address code contain?

```
1: i = 0
2: s = 0
3: if i >= 10 goto 8
4: t = i * 2
5: s = s + t
6: i = i + 1
7: goto 3
8: print s
```

<details><summary>Answer</summary>

**4.** The leaders are instruction 1 (first), 3 (target of the goto at 7), 4 (follows a conditional jump) and 8 (target of the jump at 3). The blocks are 1–2, 3, 4–7 and 8.
</details>

**2.** (2 marks · NAT) A control flow graph has these blocks. B1: a = 1; b = 2. B2: c = a + b; if c > 5 goto B4. B3: d = c * 2; goto B5. B4: d = a. B5: print d. B2 falls through to B3. The number of variables live at the exit of B2 is ______.

<details><summary>Answer</summary>

**2.** B3 uses c (before defining d) and B4 uses a. So live-out of B2 is {a, c}. Variable b is not used after B2, and d is defined before it is used in both successors.
</details>

### Lexical analysis, symbol table

**1.** (1 mark · NAT) A lexical analyzer using the maximal munch rule reads the C fragment `a+++b`. The number of tokens produced is ______.

<details><summary>Answer</summary>

**4.** The tokens are `a`, `++`, `+` and `b`.
</details>

**2.** (2 marks · MSQ) Which tasks are performed by the lexical analyzer?

(A) Removing comments and white space
(B) Detecting unbalanced parentheses
(C) Producing tokens together with their lexemes or attributes
(D) Checking that operand types match

<details><summary>Answer</summary>

**(A), (C).** Balanced parentheses are checked by the parser, and type checking is done in semantic analysis.
</details>

---

## Operating System

### Memory management, paging, virtual memory

**1.** (1 mark · NAT) A system has 48-bit virtual addresses, 8 KB pages and 8-byte page table entries, and uses a single-level page table. The size of the page table in GB is ______.

<details><summary>Answer</summary>

**256.** The page offset takes 13 bits, leaving 2³⁵ pages. 2³⁵ × 8 bytes = 2³⁸ bytes = 256 GB.
</details>

**2.** (2 marks · NAT) A process with 3 frames references pages 2 3 2 1 5 2 4 5 3 2 5 2. Let F be the number of page faults under FIFO and L the number under LRU, with all frames initially empty. F − L is ______.

<details><summary>Answer</summary>

**2.** FIFO gives 9 faults and LRU gives 7 (optimal replacement would give 6).
</details>

### File system & disk

**1.** (1 mark · NAT) The disk head is at cylinder 40. The queue holds requests for cylinders 12, 90, 55, 30, 70, 5, 100. Under SSTF scheduling the total head movement is ______ cylinders.

<details><summary>Answer</summary>

**130.** The service order is 30, 12, 5, 55, 70, 90, 100, with movements 10 + 18 + 7 + 50 + 15 + 20 + 10 = 130.
</details>

**2.** (2 marks · NAT) A Unix-like inode has 10 direct pointers, 1 single-indirect pointer and 1 double-indirect pointer. The block size is 2 KB and each pointer is 4 bytes. The maximum file size in KB is ______.

<details><summary>Answer</summary>

**525332.** Each indirect block holds 512 pointers. The file can have 10 + 512 + 512² = 262,666 blocks, and 262,666 × 2 KB = 525,332 KB.
</details>

### CPU scheduling

**1.** (1 mark · NAT) Processes P1, P2, P3 arrive at times 0, 1, 2 with CPU bursts 6, 4, 2. Under FCFS the average waiting time, to two decimal places, is ______.

<details><summary>Answer</summary>

**4.33.** The waiting times are 0, 5 and 8, and 13/3 = 4.33.
</details>

**2.** (2 marks · NAT) Four processes arrive at times 0, 1, 2, 3 with bursts 8, 4, 2, 1. Under preemptive SJF (SRTF) the average turnaround time is ______.

<details><summary>Answer</summary>

**6.5.** The completion times are P1 = 15, P2 = 8, P3 = 4 and P4 = 5. The turnaround times are 15, 7, 2 and 2, which sum to 26 and average 6.5.
</details>

### Process synchronization

**1.** (1 mark · MCQ) Semaphores s1 = 1 and s2 = 0. Process P1 loops forever: P(s1); print X; V(s2). Process P2 loops forever: P(s2); print Y; V(s1). The output is

(A) XYXYXY…  (B) XXYYXXYY…  (C) deadlock with no output  (D) YXYXYX…

<details><summary>Answer</summary>

**(A).** The two semaphores force strict alternation, starting with P1.
</details>

**2.** (2 marks · MCQ) A bounded-buffer producer-consumer solution uses semaphores empty = N, full = 0 and mutex = 1. A programmer swaps the first two lines of the producer to `P(mutex); P(empty);`, leaving the consumer unchanged. Which statement is TRUE?

(A) The solution is still correct.
(B) Mutual exclusion on the buffer is violated.
(C) A deadlock can occur when the buffer is full.
(D) A deadlock can occur when the buffer is empty.

<details><summary>Answer</summary>

**(C).** When the buffer is full the producer holds mutex and blocks on empty. The consumer needs mutex to remove an item, so neither can proceed.
</details>

### Processes, threads, system calls

**1.** (1 mark · NAT) The program below is run. The number of X lines printed is ______.

```c
int main() {
    if (fork()) fork();
    fork();
    printf("X\n");
}
```

<details><summary>Answer</summary>

**6.** After the first statement there are 3 processes, because the child skips the inner fork. The next `fork()` doubles them to 6, and each prints once.
</details>

**2.** (2 marks · MSQ) Which statements are TRUE?

(A) Threads of one process share the heap and global data.
(B) Each thread has its own stack and register set.
(C) A context switch between two threads of the same process requires switching the page table.
(D) In a many-to-one thread model, a blocking system call by one user thread blocks the whole process.

<details><summary>Answer</summary>

**(A), (B), (D).** Threads of the same process share one address space, so (C) is false.
</details>

### Deadlock

**1.** (1 mark · NAT) Five processes each need at most 3 units of a single resource type. The minimum total number of units that guarantees deadlock freedom is ______.

<details><summary>Answer</summary>

**11.** n(m − 1) + 1 = 5 × 2 + 1.
</details>

**2.** (2 marks · MCQ) A system has 4 processes and 3 resource types with Available = (2, 1, 1).

| Process | Allocation | Max |
|---|---|---|
| P0 | 0 1 0 | 7 2 3 |
| P1 | 2 0 0 | 3 2 2 |
| P2 | 3 0 2 | 9 0 2 |
| P3 | 2 1 1 | 2 2 2 |

Which is a safe sequence?

(A) P3, P1, P2, P0
(B) P1, P3, P2, P0
(C) P3, P2, P1, P0
(D) The state is unsafe.

<details><summary>Answer</summary>

**(A).** The Need matrix is P0 (7,1,3), P1 (1,2,2), P2 (6,0,0), P3 (0,1,1). Only P3 can run first. Then Available = (4,2,2) and only P1 fits. Then Available = (6,2,2) and only P2 fits. Then Available = (9,2,4) and P0 fits. This is the only safe sequence.
</details>

---

## Computer Networks

### IP addressing, subnetting, CIDR

**1.** (1 mark · NAT) A network uses the subnet mask 255.255.255.192. The number of usable host addresses per subnet is ______.

<details><summary>Answer</summary>

**62.** The mask is /26, leaving 6 host bits, so 2⁶ − 2 = 62.
</details>

**2.** (2 marks · MCQ) A router has these forwarding entries: 10.0.0.0/8 → I1, 10.20.0.0/16 → I2, 10.20.32.0/19 → I3, 10.20.33.0/24 → I4, default → I5. A packet for 10.20.34.7 leaves through

(A) I1  (B) I2  (C) I3  (D) I4

<details><summary>Answer</summary>

**(C).** The /19 entry covers 10.20.32.0 to 10.20.63.255, which includes 10.20.34.7. The /24 entry (10.20.33.x) does not match. Longest prefix match picks the /19.
</details>

### Data link layer: MAC, error detection, sliding window

**1.** (1 mark · NAT) Stop-and-wait is used on a 1 Mbps link with 1000-bit frames and a 4 ms one-way propagation delay. Ignoring ACK transmission time, the link efficiency in percent, to one decimal place, is ______.

<details><summary>Answer</summary>

**11.1.** T_t = 1 ms and the round trip adds 8 ms. Efficiency = 1 / (1 + 8) = 11.1%.
</details>

**2.** (2 marks · MCQ) Data 1101 is sent with a CRC using generator polynomial x³ + x + 1 (bits 1011). The transmitted codeword is

(A) 1101001  (B) 1101011  (C) 1101100  (D) 1101110

<details><summary>Answer</summary>

**(A).** Dividing 1101000 by 1011 over GF(2) leaves remainder 001, which is appended to the data.
</details>

### Application layer, layering, DNS/HTTP

**1.** (1 mark · MCQ) Which application protocol and default transport pairing is correct?

(A) SMTP over UDP
(B) HTTP/1.1 over UDP
(C) DNS queries over UDP
(D) FTP over UDP

<details><summary>Answer</summary>

**(C).** DNS queries normally use UDP, with TCP used for large responses and zone transfers. SMTP, HTTP/1.1 and FTP use TCP.
</details>

**2.** (2 marks · NAT) A message of 10 packets of 1000 bits each crosses three 1 Mbps links in series, with two store-and-forward routers and negligible propagation delay. The total time to deliver the whole message in milliseconds is ______.

<details><summary>Answer</summary>

**12.** The first packet needs 3 ms to cross the path, and each remaining packet arrives 1 ms after the previous one. 3 + 9 = 12 ms, which equals (10 + 3 − 1) × 1 ms.
</details>

### TCP: flow & congestion control

**1.** (1 mark · NAT) A TCP sender starts with cwnd = 1 MSS in round 1 and ssthresh = 16 MSS, with no losses. Slow start doubles cwnd each round until it reaches ssthresh, then congestion avoidance adds 1 MSS per round. The cwnd in round 8 is ______ MSS.

<details><summary>Answer</summary>

**19.** The values are 1, 2, 4, 8, 16 in rounds 1–5, then 17, 18 and 19 in rounds 6–8.
</details>

**2.** (2 marks · NAT) A TCP connection has a fixed 64 KB window (1 KB = 1024 bytes), a 40 ms RTT and a 100 Mbps link. Ignoring all other effects, the link utilisation in percent, to one decimal place, is ______.

<details><summary>Answer</summary>

**13.1.** Throughput is at most window/RTT = 524,288 bits / 0.04 s = 13.1 Mbps, which is 13.1% of 100 Mbps.
</details>

### Routing (distance vector, link state)

**1.** (1 mark · NAT) Router X has neighbours A (link cost 2) and B (link cost 5). A advertises a cost of 7 to destination D and B advertises a cost of 3. X's distance-vector cost to D is ______.

<details><summary>Answer</summary>

**8.** min(2 + 7, 5 + 3) = 8.
</details>

**2.** (2 marks · NAT) Link costs are R1–R2 = 2, R1–R3 = 5, R2–R3 = 1, R2–R4 = 7, R3–R4 = 3, R4–R5 = 2 and R3–R5 = 8. Using Dijkstra from R1, the sum of the shortest distances to R2, R3, R4 and R5 is ______.

<details><summary>Answer</summary>

**19.** The distances are R2 = 2, R3 = 3, R4 = 6 and R5 = 8, and they sum to 19.
</details>

---

## Computer Organization & Architecture

### Cache & memory hierarchy

**1.** (1 mark · NAT) A direct-mapped cache of 32 KB with 64-byte blocks is used with 32-bit addresses. The number of tag bits is ______.

<details><summary>Answer</summary>

**17.** The offset needs 6 bits and there are 512 lines, so the index needs 9 bits. The tag is 32 − 15 = 17 bits.
</details>

**2.** (2 marks · NAT) L1 has a 1 ns hit time and a 90% hit rate. L2 has a 10 ns access time and an 80% local hit rate. Main memory takes 100 ns. The average memory access time in ns is ______.

<details><summary>Answer</summary>

**4.** AMAT = 1 + 0.1 × (10 + 0.2 × 100) = 1 + 0.1 × 30 = 4 ns.
</details>

### Pipelining, hazards, CPI

**1.** (1 mark · NAT) An ideal 5-stage pipeline has a 2 ns stage delay and no stalls. The time to execute 100 instructions in ns is ______.

<details><summary>Answer</summary>

**208.** (5 + 99) × 2 ns.
</details>

**2.** (2 marks · NAT) A non-pipelined processor at 2 GHz needs 5 cycles per instruction. A pipelined version runs at 1.6 GHz with an average CPI of 1.25 because of hazards. The speed-up is ______.

<details><summary>Answer</summary>

**3.2.** The non-pipelined time is 5 × 0.5 ns = 2.5 ns per instruction. The pipelined time is 1.25 × 0.625 ns = 0.78125 ns. The ratio is 3.2.
</details>

### Instruction set, addressing modes, data path

**1.** (1 mark · NAT) A 32-bit instruction has an 8-bit opcode, two register fields chosen from 64 registers, and an immediate field that fills the rest. The width of the immediate field in bits is ______.

<details><summary>Answer</summary>

**12.** 32 − 8 − 6 − 6 = 12.
</details>

**2.** (2 marks · NAT) A byte-addressable machine has 4-byte instructions. A PC-relative branch at address 2000 has a 12-bit signed offset counted in words, measured from the next instruction (address 2004). The largest forward target address is ______.

<details><summary>Answer</summary>

**10192.** The largest positive offset is 2¹¹ − 1 = 2047 words = 8188 bytes. 2004 + 8188 = 10192.
</details>

### I/O: DMA and interrupts

**1.** (1 mark · NAT) A device transfers 2 × 10⁶ bytes per second through DMA in cycle-stealing mode, 4 bytes per transfer. Each transfer steals one 100 ns bus cycle. The percentage of CPU bus time stolen is ______.

<details><summary>Answer</summary>

**5.** There are 5 × 10⁵ transfers per second, which steal 5 × 10⁵ × 100 ns = 0.05 s per second.
</details>

**2.** (2 marks · NAT) An interrupt costs the CPU 20 µs of overhead. Polling costs 2 µs per poll and runs 1000 times per second. Interrupt-driven I/O has higher overhead than polling when the event rate exceeds ______ events per second.

<details><summary>Answer</summary>

**100.** Polling costs 1000 × 2 µs = 2000 µs per second, and interrupts cost r × 20 µs. They are equal at r = 100.
</details>

---

## Databases

### SQL, relational algebra, tuple calculus

Use these tables for both questions.

R(x, y): (1, a), (2, a), (3, b), (4, c)
S(y, z): (a, 10), (a, 20), (b, 30), (d, 40), (NULL, 50)

**1.** (1 mark · NAT) The number of tuples in the natural join R ⋈ S is ______.

<details><summary>Answer</summary>

**5.** y = a gives 2 × 2 = 4 tuples, y = b gives 1, and c has no match. NULL never matches.
</details>

**2.** (2 marks · NAT) The number of rows returned by `SELECT x FROM R WHERE y NOT IN (SELECT y FROM S WHERE z > 15)` is ______.

<details><summary>Answer</summary>

**0.** The subquery returns {a, b, d, NULL}. For y = c, the comparison with NULL is UNKNOWN, so `NOT IN` is not true. For a and b the condition is false. No row qualifies.
</details>

### Normalization & functional dependencies

**1.** (1 mark · NAT) R(A, B, C, D, E) has the dependencies A → B, B → C, C → D, D → E, E → A. The number of candidate keys is ______.

<details><summary>Answer</summary>

**5.** The dependencies form a cycle, so each single attribute determines all the others.
</details>

**2.** (2 marks · MCQ) R(A, B, C, D) has F = { AB → C, C → D, D → A }. The highest normal form of R is

(A) BCNF  (B) 3NF but not BCNF  (C) 2NF but not 3NF  (D) 1NF only

<details><summary>Answer</summary>

**(B).** The candidate keys are AB, BC and BD, so every attribute is prime and R is in 3NF. The dependency C → D has a left side that is not a superkey, so R is not in BCNF.
</details>

### Transactions & concurrency control

**1.** (1 mark · MCQ) The schedule S = r₁(A) w₂(A) r₂(B) w₁(B) is

(A) conflict serializable as T₁ T₂
(B) conflict serializable as T₂ T₁
(C) not conflict serializable
(D) serial

<details><summary>Answer</summary>

**(C).** r₁(A) before w₂(A) gives T₁ → T₂, and r₂(B) before w₁(B) gives T₂ → T₁. The precedence graph has a cycle.
</details>

**2.** (2 marks · MCQ) The schedule is r₁(X) w₂(X) r₃(Y) w₁(Y) w₃(Z) r₂(Z). It is conflict equivalent to the serial schedule

(A) T₁ T₂ T₃  (B) T₃ T₁ T₂  (C) T₃ T₂ T₁  (D) T₂ T₁ T₃

<details><summary>Answer</summary>

**(B).** The conflict edges are T₁ → T₂ (on X), T₃ → T₁ (on Y) and T₃ → T₂ (on Z). The only topological order is T₃, T₁, T₂.
</details>

### Indexing, B/B+ trees, file organisation

**1.** (1 mark · NAT) A B+ tree has 1024-byte nodes, 8-byte keys and 6-byte block pointers. The order p of an internal node, the largest number of pointers per node satisfying p·6 + (p − 1)·8 ≤ 1024, is ______.

<details><summary>Answer</summary>

**73.** 14p ≤ 1032 gives p ≤ 73.7, so p = 73.
</details>

**2.** (2 marks · NAT) An ordered file has 100,000 records of 100 bytes in 4096-byte blocks, with no spanning. A sparse primary index has 16-byte entries. The number of block accesses to fetch one record by binary search on the index file is ______.

<details><summary>Answer</summary>

**5.** The blocking factor is 40, giving 2500 data blocks. The sparse index has 2500 entries at 256 per block, so 10 index blocks. Binary search takes ⌈log₂ 10⌉ = 4 accesses, plus 1 data block.
</details>

### ER model

**1.** (1 mark · NAT) Entities E1 (key a) and E2 (key b) are in an M:N relationship with an attribute c. The minimum number of relations in the relational schema is ______.

<details><summary>Answer</summary>

**3.** One table per entity, plus one table for the M:N relationship.
</details>

**2.** (2 marks · NAT) An ER diagram has entities A, B, C. R is M:N between A and B. S is 1:N from B to C. T is 1:1 between A and C. The minimum number of relations is ______.

<details><summary>Answer</summary>

**4.** Tables for A, B and C, plus one for R. S merges into C as a foreign key to B, and T merges into A or C as a foreign key.
</details>

---

## Digital Logic

### Boolean algebra & K-maps

**1.** (1 mark · NAT) The minimum number of literals in a minimal sum-of-products expression for F(A, B, C) = Σm(0, 1, 2, 5, 6, 7) is ______.

<details><summary>Answer</summary>

**6.** One minimal cover is A′B′ + BC′ + AC, which has 3 terms of 2 literals each. The K-map forms a cycle of six overlapping pairs, and no cover needs fewer than 6 literals.
</details>

**2.** (2 marks · MCQ) For variables (w, x, y, z), F = Σm(0, 2, 5, 7, 8, 10, 13, 15) equals

(A) x ⊕ z  (B) x ⊙ z  (C) w ⊕ y  (D) w ⊙ y

<details><summary>Answer</summary>

**(B).** The minterms are exactly the cases where x = z (x′z′ covers 0, 2, 8, 10 and xz covers 5, 7, 13, 15). So F is the XNOR of x and z.
</details>

### Number representation, IEEE-754, arithmetic

**1.** (1 mark · NAT) The decimal value of the 8-bit two's complement number 10110110 is ______.

<details><summary>Answer</summary>

**−74.** Inverting gives 01001001, adding 1 gives 01001010 = 74, so the value is −74.
</details>

**2.** (2 marks · NAT) The 32-bit IEEE-754 single precision number 0xC1A40000 has the decimal value ______.

<details><summary>Answer</summary>

**−20.5.** The sign bit is 1. The exponent field is 10000011 = 131, so the exponent is 4. The mantissa is .0100100…, so the value is −1.28125 × 2⁴ = −20.5.
</details>

### Sequential circuits

**1.** (1 mark · NAT) A 4-bit binary ripple counter is driven by a 64 kHz clock. The frequency of the most significant output in kHz is ______.

<details><summary>Answer</summary>

**4.** Each stage halves the frequency, so the MSB output is 64 / 2⁴ = 4 kHz.
</details>

**2.** (2 marks · MCQ) A circuit has two D flip-flops with D₁ = Q₁ ⊕ Q₀ and D₀ = Q₁′. It starts in state Q₁Q₀ = 00. After 100 clock pulses the state Q₁Q₀ is

(A) 00  (B) 01  (C) 10  (D) 11

<details><summary>Answer</summary>

**(B).** The sequence is 00 → 01 → 11 → 00, a cycle of length 3. 100 mod 3 = 1, so the state is 01.
</details>

### Combinational circuits (MUX, decoder, adder)

**1.** (1 mark · MCQ) A 4:1 multiplexer has select lines S₁S₀ and data inputs I₀ = 0, I₁ = 1, I₂ = 1, I₃ = 0. The output is

(A) S₁·S₀  (B) S₁ + S₀  (C) S₁ ⊕ S₀  (D) S₁ ⊙ S₀

<details><summary>Answer</summary>

**(C).** The output is 1 for 01 and 10 only, which is XOR.
</details>

**2.** (2 marks · MCQ) F(A, B, C) = Σm(1, 2, 4, 7) is implemented with a 4:1 MUX with A and B as select lines (A is the MSB). The inputs I₀, I₁, I₂, I₃ are, in order,

(A) C, C′, C′, C
(B) C′, C, C, C′
(C) C, C, C′, C′
(D) 0, 1, 1, 0

<details><summary>Answer</summary>

**(A).** For AB = 00 the minterm 1 gives C. For AB = 01 the minterm 2 gives C′. For AB = 10 the minterm 4 gives C′. For AB = 11 the minterm 7 gives C.
</details>

---

*Tip: attempt each question on paper, check the answer, and then rework any you missed one to two days later. Use `GATE_CS_Topicwise_Questions.md` for the real past-paper questions on the same topics.*
