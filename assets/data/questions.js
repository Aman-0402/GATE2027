window.QUESTIONS = [
{
"id": "EM1",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Probability & statistics",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Two fair six-sided dice are rolled. The probability that the sum is a\nprime number, rounded to 3 decimal places, is ______.</p>",
"options": [],
"answer": "0.417",
"explanation": "<p>Prime sums are 2, 3, 5, 7 and 11, which occur in 1 + 2 + 4 + 6 + 2 =\n15 of the 36 outcomes. 15/36 = 0.4167.</p>"
},
{
"id": "EM2",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Probability & statistics",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>Urn A holds 3 red and 2 blue balls. Urn B holds 1 red and 4 blue\nballs. An urn is chosen with equal probability and one ball is drawn\nfrom it. The ball is red. The probability that it came from urn A is</p>",
"options": [
{
"k": "A",
"t": "1/2"
},
{
"k": "B",
"t": "3/5"
},
{
"k": "C",
"t": "3/4"
},
{
"k": "D",
"t": "4/5"
}
],
"answer": [
"C"
],
"explanation": "<p>P(A | red) = (½·3/5) / (½·3/5 + ½·1/5) = 0.3 / 0.4 = 3/4.</p>"
},
{
"id": "EM3",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Linear algebra",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A 3 × 3 real matrix A has eigenvalues 1, 2 and 4. The trace of A² is\n______.</p>",
"options": [],
"answer": "21",
"explanation": "<p>The eigenvalues of A² are 1, 4 and 16, and the trace is their\nsum.</p>"
},
{
"id": "EM4",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Linear algebra",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Consider the system x + y + z = 3, x + 2y + 3z = 6, 2x + 3y + kz = 9.\nWhich statements are TRUE?</p>",
"options": [
{
"k": "A",
"t": "For k = 4 the system has infinitely many solutions."
},
{
"k": "B",
"t": "For k ≠ 4 the system has the unique solution (x, y, z) = (0, 3,\n0)."
},
{
"k": "C",
"t": "For some value of k the system is inconsistent."
},
{
"k": "D",
"t": "The determinant of the coefficient matrix equals k − 4."
}
],
"answer": [
"A",
"B",
"D"
],
"explanation": "<p>Row 3 − Row 1 − Row 2 gives (0, 0, k − 4 | 0). For k = 4 this row\nvanishes, so the rank is 2 and there are infinitely many solutions. For\nk ≠ 4, z = 0 and then y = 3, x = 0. The right-hand side of that row is\nalways 0, so the system is never inconsistent, which makes (C) false.\ndet = k − 4.</p>"
},
{
"id": "EM5",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Sets, relations, functions, groups",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The number of equivalence relations on the set {1, 2, 3, 4} is\n______.</p>",
"options": [],
"answer": "15",
"explanation": "<p>This is the Bell number B(4), the number of partitions of a 4-element\nset.</p>"
},
{
"id": "EM6",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Sets, relations, functions, groups",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>The divisors of 36 are ordered by divisibility. The number of edges\nin the Hasse diagram of this poset is ______.</p>",
"options": [],
"answer": "12",
"explanation": "<p>36 = 2²·3², so the poset is a 3 × 3 grid of exponent pairs. A 3 × 3\ngrid has 6 horizontal and 6 vertical covering edges.</p>"
},
{
"id": "EM7",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Graph theory",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The number of spanning trees of the labelled complete graph K₅ is\n______.</p>",
"options": [],
"answer": "125",
"explanation": "<p>Cayley's formula gives nⁿ⁻² = 5³.</p>"
},
{
"id": "EM8",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Graph theory",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A simple connected planar graph has 10 vertices, and every face\n(including the outer face) is bounded by exactly 3 edges. The number of\nedges is ______.</p>",
"options": [],
"answer": "24",
"explanation": "<p>Each face has 3 edges and each edge borders 2 faces, so 3F = 2E.\nEuler's formula V − E + F = 2 gives 10 − E + 2E/3 = 2, so E = 24.</p>"
},
{
"id": "EM9",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Combinatorics, recurrences, generating functions",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The number of binary strings of length 6 with no two consecutive 1s\nis ______.</p>",
"options": [],
"answer": "21",
"explanation": "<p>a(n) = a(n−1) + a(n−2) with a(1) = 2 and a(2) = 3, giving 2, 3, 5, 8,\n13, 21.</p>"
},
{
"id": "EM10",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Combinatorics, recurrences, generating functions",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>The number of integer solutions of x₁ + x₂ + x₃ + x₄ = 20 with every\nxᵢ ≥ 2 and x₁ ≤ 6 is ______.</p>",
"options": [],
"answer": "335",
"explanation": "<p>Put yᵢ = xᵢ − 2, so Σyᵢ = 12 with y₁ ≤ 4. Without the bound there are\nC(15, 3) = 455 solutions. Those with y₁ ≥ 5 number C(10, 3) = 120. 455 −\n120 = 335.</p>"
},
{
"id": "EM11",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Propositional & first-order logic",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>The formula ¬∀x (P(x) → Q(x)) is logically equivalent to</p>",
"options": [
{
"k": "A",
"t": "∃x (P(x) ∧ ¬Q(x))"
},
{
"k": "B",
"t": "∀x (P(x) ∧ ¬Q(x))"
},
{
"k": "C",
"t": "∃x (¬P(x) ∨ Q(x))"
},
{
"k": "D",
"t": "∀x (¬P(x) ∨ ¬Q(x))"
}
],
"answer": [
"A"
],
"explanation": "<p>¬∀x φ ≡ ∃x ¬φ, and ¬(P → Q) ≡ P ∧ ¬Q.</p>"
},
{
"id": "EM12",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Propositional & first-order logic",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Which of the following are valid (true in every interpretation)?</p>",
"options": [
{
"k": "A",
"t": "(p → q) → ((q → r) → (p → r))"
},
{
"k": "B",
"t": "((p ∨ q) ∧ ¬p) → q"
},
{
"k": "C",
"t": "∃x ∀y R(x, y) → ∀y ∃x R(x, y)"
},
{
"k": "D",
"t": "∀y ∃x R(x, y) → ∃x ∀y R(x, y)"
}
],
"answer": [
"A",
"B",
"C"
],
"explanation": "<ol type=\"A\">\n<li>is hypothetical syllogism and (B) is disjunctive syllogism. In (C),\na single x that works for all y works for each y separately. (D) fails\nwhen R(x, y) means \"x = y\" on a domain with two elements.</li>\n</ol>"
},
{
"id": "EM13",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Calculus",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>lim as x → 0 of (e²ˣ − 1 − 2x) / x² is ______.</p>",
"options": [],
"answer": "2",
"explanation": "<p>e²ˣ = 1 + 2x + 2x² + …, so the numerator behaves like 2x².</p>"
},
{
"id": "EM14",
"subject": "EM",
"subjectName": "Engineering Mathematics",
"topic": "Calculus",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>Let f(x) = |x| + |x − 2| + |x − 4|. The number of points at which f\nis NOT differentiable is</p>",
"options": [
{
"k": "A",
"t": "0"
},
{
"k": "B",
"t": "1"
},
{
"k": "C",
"t": "3"
},
{
"k": "D",
"t": "infinite"
}
],
"answer": [
"C"
],
"explanation": "<p>Each absolute value has a corner at its zero. The slope jumps by 2 at\neach of x = 0, 2 and 4, and these jumps cannot cancel.</p>"
},
{
"id": "PDS15",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "C programming: pointers, recursion, output prediction",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>What does the program print?</p>\n<pre class=\"c\"><code>int a[5] = {10, 20, 30, 40, 50};\nint *p = a;\np += 2;\nprintf(&quot;%d %d %ld&quot;, *p, p[-1], (long)(&amp;a[4] - p));</code></pre>",
"options": [
{
"k": "A",
"t": "30 20 2"
},
{
"k": "B",
"t": "30 20 3"
},
{
"k": "C",
"t": "20 30 2"
},
{
"k": "D",
"t": "30 30 2"
}
],
"answer": [
"A"
],
"explanation": "<p>p points to a[2] = 30, p[-1] = a[1] = 20, and &amp;a[4] − p = 2\nelements.</p>"
},
{
"id": "PDS16",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "C programming: pointers, recursion, output prediction",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>What does the program print?</p>\n<pre class=\"c\"><code>int c = 0;\nint g(int n) {\n    c++;\n    if (n &lt;= 1) return n;\n    return g(n-1) + g(n-2);\n}\nint main() {\n    int v = g(5);\n    printf(&quot;%d %d&quot;, v, c);\n}</code></pre>",
"options": [
{
"k": "A",
"t": "5 9"
},
{
"k": "B",
"t": "5 15"
},
{
"k": "C",
"t": "8 15"
},
{
"k": "D",
"t": "5 25"
}
],
"answer": [
"B"
],
"explanation": "<p>g(5) is the 5th Fibonacci number, 5. The number of calls satisfies\ncalls(n) = 1 + calls(n−1) + calls(n−2) with calls(0) = calls(1) = 1,\ngiving 1, 1, 3, 5, 9, 15.</p>"
},
{
"id": "PDS17",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "Trees, BST, heaps",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>The keys 10, 20, 15, 30, 25 are inserted one at a time into an\ninitially empty max-heap, using sift-up on each insertion. The final\narray is</p>",
"options": [
{
"k": "A",
"t": "30 25 15 10 20"
},
{
"k": "B",
"t": "30 20 25 10 15"
},
{
"k": "C",
"t": "30 25 20 10 15"
},
{
"k": "D",
"t": "30 20 15 10 25"
}
],
"answer": [
"A"
],
"explanation": "<p>After 10, 20, 15 the heap is [20, 10, 15]. Inserting 30 gives [30,\n20, 15, 10]. Inserting 25 at index 4 swaps it with its parent 20, giving\n[30, 25, 15, 10, 20].</p>"
},
{
"id": "PDS18",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "Trees, BST, heaps",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>A BST is built by inserting 50, 30, 70, 20, 40, 60, 80, 35, 45 in\nthat order. Node 30 is then deleted and replaced by its inorder\nsuccessor. The preorder traversal of the result is</p>",
"options": [
{
"k": "A",
"t": "50 35 20 40 45 70 60 80"
},
{
"k": "B",
"t": "50 40 20 35 45 70 60 80"
},
{
"k": "C",
"t": "50 35 20 45 40 70 60 80"
},
{
"k": "D",
"t": "50 20 40 35 45 70 60 80"
}
],
"answer": [
"A"
],
"explanation": "<p>The inorder successor of 30 is the minimum of its right subtree,\nwhich is 35. Node 30 takes the value 35 and the old leaf 35 is removed.\nThe tree is 50 (35 (20, 40 (–, 45)), 70 (60, 80)).</p>"
},
{
"id": "PDS19",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "Stacks, queues, linked lists",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>An empty stack undergoes these operations in order: push 1, push 2,\npush 3, pop, push 4, pop, pop, push 5, pop. The values popped, in order,\nare</p>",
"options": [
{
"k": "A",
"t": "3 4 2 5"
},
{
"k": "B",
"t": "3 4 1 5"
},
{
"k": "C",
"t": "3 2 4 5"
},
{
"k": "D",
"t": "3 4 2 1"
}
],
"answer": [
"A"
],
"explanation": "<p>The pops return 3, then 4, then 2, then 5. The value 1 stays in the\nstack.</p>"
},
{
"id": "PDS20",
"subject": "PDS",
"subjectName": "Programming & Data Structures",
"topic": "Stacks, queues, linked lists",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A singly linked list holds 1 → 2 → 3 → 4 → 5. The function below is\ncalled with the head. The data in the third node of the returned list is\n______.</p>\n<pre class=\"c\"><code>struct node { int d; struct node *next; };\nstruct node *g(struct node *h) {\n    struct node *a = h, *b;\n    if (!a || !a-&gt;next) return a;\n    b = a-&gt;next;\n    a-&gt;next = g(b-&gt;next);\n    b-&gt;next = a;\n    return b;\n}</code></pre>",
"options": [],
"answer": "4",
"explanation": "<p>The function swaps adjacent pairs, so the result is 2 → 1 → 4 → 3 →\n5.</p>"
},
{
"id": "ALG21",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Graph algorithms: MST, shortest path, BFS/DFS",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>K₄ is a complete graph on 4 vertices with all 6 edges of equal\nweight. The number of distinct minimum spanning trees is ______.</p>",
"options": [],
"answer": "16",
"explanation": "<p>Every spanning tree has the same weight, so all 4² = 16 labelled\nspanning trees are minimum.</p>"
},
{
"id": "ALG22",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Graph algorithms: MST, shortest path, BFS/DFS",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>G is a connected undirected graph with distinct positive edge\nweights. Every weight w is replaced by w². Which statements are\nTRUE?</p>",
"options": [
{
"k": "A",
"t": "The minimum spanning tree stays the same."
},
{
"k": "B",
"t": "The shortest-path tree from any source stays the same."
},
{
"k": "C",
"t": "The shortest-path distance between any two vertices becomes the\nsquare of its old value."
},
{
"k": "D",
"t": "The ordering of the edges by weight is unchanged."
}
],
"answer": [
"A",
"D"
],
"explanation": "<p>Squaring is increasing on positive numbers, so the edge order and the\nMST are preserved. Path sums do not behave like that: take s–b with\nweight 3 and s–a–b with weights 2 and 2. Before squaring the direct edge\nwins (3 &lt; 4). After squaring the two-edge path wins (4 + 4 = 8 &lt;\n9). So (B) and (C) are false.</p>"
},
{
"id": "ALG23",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Asymptotics & recurrences",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Which option lists the functions in increasing order of asymptotic\ngrowth?</p>",
"options": [
{
"k": "A",
"t": "(log n)³, n log n, n^1.5, 2^√n"
},
{
"k": "B",
"t": "n log n, (log n)³, n^1.5, 2^√n"
},
{
"k": "C",
"t": "(log n)³, n^1.5, n log n, 2^√n"
},
{
"k": "D",
"t": "(log n)³, n log n, 2^√n, n^1.5"
}
],
"answer": [
"A"
],
"explanation": "<p>Polylogarithms grow slower than n log n, which is slower than n^1.5.\nThe function 2^√n beats every polynomial.</p>"
},
{
"id": "ALG24",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Asymptotics & recurrences",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>T(n) = 2T(n/2) + n/log n with T(1) = 1. Then T(n) is</p>",
"options": [
{
"k": "A",
"t": "Θ(n)"
},
{
"k": "B",
"t": "Θ(n log log n)"
},
{
"k": "C",
"t": "Θ(n log n)"
},
{
"k": "D",
"t": "Θ(n²)"
}
],
"answer": [
"B"
],
"explanation": "<p>The Master theorem does not apply. Summing level by level gives n · Σ\n1/(log n − i) = n · H(log n) = Θ(n log log n).</p>"
},
{
"id": "ALG25",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Sorting, searching, divide & conquer",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The minimum number of comparisons needed in the worst case to find\nboth the largest and the smallest of 100 distinct numbers, using the\nbest known pairing method, is ______.</p>",
"options": [],
"answer": "148",
"explanation": "<p>⌈3n/2⌉ − 2 = 150 − 2.</p>"
},
{
"id": "ALG26",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Sorting, searching, divide & conquer",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>Top-down merge sort is applied to 8 distinct elements. The maximum\nnumber of element comparisons is ______.</p>",
"options": [],
"answer": "17",
"explanation": "<p>C(2) = 1, C(4) = 2·1 + 3 = 5, C(8) = 2·5 + 7 = 17.</p>"
},
{
"id": "ALG27",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Hashing",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A table of size 7 uses h(k) = k mod 7 with linear probing. The keys\n15, 22, 8, 29 are inserted in that order. The index where 29 is stored\nis ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>All four keys hash to index 1, so they fill indices 1, 2, 3 and 4 in\norder.</p>"
},
{
"id": "ALG28",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Hashing",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A table of size 11 uses double hashing with h₁(k) = k mod 11 and\nh₂(k) = 1 + (k mod 10). The keys 25, 36, 47 are inserted in that order.\nThe index where 47 is stored is ______.</p>",
"options": [],
"answer": "0",
"explanation": "<p>All three keys have h₁ = 3. Key 25 goes to index 3. Key 36 has h₂ =\n7, so it tries 3, then 10 and is stored at 10. Key 47 has h₂ = 8, so it\ntries 3, then (3 + 8) mod 11 = 0 and is stored at 0.</p>"
},
{
"id": "ALG29",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Greedy",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Huffman coding is applied to symbols with frequencies 5, 9, 12, 13,\n16, 45. The weighted code length Σ(frequency × code length) is\n______.</p>",
"options": [],
"answer": "224",
"explanation": "<p>The merges cost 14, 25, 30, 55 and 100, and 14 + 25 + 30 + 55 + 100 =\n224.</p>"
},
{
"id": "ALG30",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Greedy",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>Five unit-time jobs have (profit, deadline) = (100, 2), (19, 1), (27,\n2), (25, 1), (15, 3). The maximum total profit from job sequencing with\ndeadlines is ______.</p>",
"options": [],
"answer": "142",
"explanation": "<p>Schedule the 27-profit job in slot 1, the 100-profit job in slot 2\nand the 15-profit job in slot 3. The two deadline-1 jobs cannot also\nfit. 100 + 27 + 15 = 142.</p>"
},
{
"id": "ALG31",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Dynamic programming",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The length of the longest common subsequence of PQRSTQP and QPSRQTP\nis ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>One example is Q, S, T, P.</p>"
},
{
"id": "ALG32",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Dynamic programming",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A person climbs a staircase of 10 steps taking 1, 2 or 3 steps at a\ntime. The number of distinct ways to reach the top is ______.</p>",
"options": [],
"answer": "274",
"explanation": "<p>Let a(n) = a(n−1) + a(n−2) + a(n−3) with a(0) = 1. The sequence is 1,\n1, 2, 4, 7, 13, 24, 44, 81, 149, 274.</p>"
},
{
"id": "ALG33",
"subject": "ALG",
"subjectName": "Algorithms",
"topic": "Dynamic programming",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A 0/1 knapsack has capacity 9 and four items with (weight, value) =\n(3, 4), (4, 5), (5, 7), (2, 3). The maximum total value is ______.</p>",
"options": [],
"answer": "12",
"explanation": "<p>Items {3, 4, 2} give 4 + 5 + 3 = 12 and items {4, 5} give 5 + 7 = 12.\nNo combination with weight at most 9 does better.</p>"
},
{
"id": "TOC34",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Context-free grammars, PDA, CFL",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Let L = { aⁱ bʲ cᵏ | i = j or j = k }. Which statement is TRUE?</p>",
"options": [
{
"k": "A",
"t": "L is regular."
},
{
"k": "B",
"t": "L is context-free but not deterministic context-free."
},
{
"k": "C",
"t": "L is deterministic context-free."
},
{
"k": "D",
"t": "L is not context-free."
}
],
"answer": [
"B"
],
"explanation": "<p>L is the union of two CFLs (aⁿbⁿc* and a*bⁿcⁿ). A PDA must guess\nwhich condition to check, and a deterministic PDA cannot make that\nchoice.</p>"
},
{
"id": "TOC35",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Context-free grammars, PDA, CFL",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Let L₁ = { aⁿ bⁿ cᵐ | n, m ≥ 0 } and L₂ = { aⁿ bᵐ cᵐ | n, m ≥ 0 }.\nWhich statements are TRUE?</p>",
"options": [
{
"k": "A",
"t": "L₁ ∩ L₂ is not context-free."
},
{
"k": "B",
"t": "L₁ ∪ L₂ is context-free."
},
{
"k": "C",
"t": "The complement of L₁ ∩ L₂ is context-free."
},
{
"k": "D",
"t": "Context-free languages are closed under intersection."
}
],
"answer": [
"A",
"B",
"C"
],
"explanation": "<p>L₁ ∩ L₂ = { aⁿ bⁿ cⁿ }, which is not context-free. The union of two\nCFLs is a CFL. The complement of { aⁿbⁿcⁿ } is a union of CFLs (strings\nof the wrong shape, or with unequal counts), so it is context-free.\nStatement (D) is false, as (A) shows.</p>"
},
{
"id": "TOC36",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Regular languages, DFA/NFA, regex",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Over {a, b}, let L be the set of strings whose third symbol from the\nright is a. The number of states in the minimal complete DFA for L is\n______.</p>",
"options": [],
"answer": "8",
"explanation": "<p>A DFA must remember the last 3 symbols, and all 2³ = 8 histories are\npairwise distinguishable.</p>"
},
{
"id": "TOC37",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Regular languages, DFA/NFA, regex",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Which of the following languages are regular?</p>",
"options": [
{
"k": "A",
"t": "{ aⁿ bᵐ | n, m ≥ 0 and n + m is even }"
},
{
"k": "B",
"t": "{ aⁿ bⁿ | n ≥ 0 }"
},
{
"k": "C",
"t": "{ w ∈ {a, b}* | #ₐ(w) ≡ #_b(w) (mod 3) }"
},
{
"k": "D",
"t": "{ aⁿ | n is a perfect square }"
}
],
"answer": [
"A",
"C"
],
"explanation": "<p>A DFA can track the parity of the length while enforcing the\na<em>b</em> shape for (A), and the value of #ₐ − #_b mod 3 for (C). (B)\nand (D) fail the pumping lemma.</p>"
},
{
"id": "TOC38",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Turing machines & decidability",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Which of the following problems is UNDECIDABLE?</p>",
"options": [
{
"k": "A",
"t": "Given a DFA M, is L(M) empty?"
},
{
"k": "B",
"t": "Given a CFG G, is L(G) empty?"
},
{
"k": "C",
"t": "Given a CFG G over Σ, is L(G) = Σ*?"
},
{
"k": "D",
"t": "Given a regular expression r, is L(r) infinite?"
}
],
"answer": [
"C"
],
"explanation": "<p>Universality of a CFG is undecidable. Emptiness of a DFA or CFG and\nfiniteness of a regular language are decidable.</p>"
},
{
"id": "TOC39",
"subject": "TOC",
"subjectName": "Theory of Computation",
"topic": "Turing machines & decidability",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Which statements are TRUE?</p>",
"options": [
{
"k": "A",
"t": "The complement of a recursively enumerable language that is not\nrecursive is not recursively enumerable."
},
{
"k": "B",
"t": "If L and its complement are both recursively enumerable, then L is\nrecursive."
},
{
"k": "C",
"t": "The set of Turing machines that halt on the empty tape is\nrecursive."
},
{
"k": "D",
"t": "Every subset of a recursive language is recursive."
}
],
"answer": [
"A",
"B"
],
"explanation": "<ol type=\"A\">\n<li>follows from (B). (C) is the halting problem on the empty tape,\nwhich is undecidable. (D) is false because every language over Σ is a\nsubset of the recursive language Σ*.</li>\n</ol>"
},
{
"id": "CD40",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Parsing (LL/LR, FIRST/FOLLOW)",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>For the grammar</p>\n<p>E → T E′, E′ → + T E′ | ε, T → F T′, T′ → * F T′ | ε, F → ( E ) |\nid</p>\n<p>the number of terminals in FOLLOW(F) is ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>FOLLOW(F) includes FIRST(T′) minus ε, which is {<em>}. Because T′ can\nbe empty it also includes FOLLOW(T) = {+, ), $}. The set is {</em>, +,\n), $}.</p>"
},
{
"id": "CD41",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Parsing (LL/LR, FIRST/FOLLOW)",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>For the grammar S → C C, C → c C | d, let x be the number of states\nin the canonical LR(1) automaton and y the number in the LR(0)\nautomaton. The value of x − y is ______.</p>",
"options": [],
"answer": "3",
"explanation": "<p>The LR(1) automaton has 10 states and the LR(0) automaton has 7. The\nextra 3 come from states that share an LR(0) core but have different\nlookaheads.</p>"
},
{
"id": "CD42",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Syntax-directed translation",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Consider E → E₁ + T {E.val = E₁.val + T.val}, E → T {E.val = T.val},\nT → num {T.val = num.lexval}. The attribute val is</p>",
"options": [
{
"k": "A",
"t": "inherited, and the definition is L-attributed only"
},
{
"k": "B",
"t": "synthesized, and the definition is S-attributed"
},
{
"k": "C",
"t": "inherited, and the definition is S-attributed"
},
{
"k": "D",
"t": "neither synthesized nor inherited"
}
],
"answer": [
"B"
],
"explanation": "<p>Each val is computed from attributes of the children, so it is\nsynthesized, and a definition using only synthesized attributes is\nS-attributed.</p>"
},
{
"id": "CD43",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Syntax-directed translation",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>The grammar E → E + T | T, T → T * F | F, F → id has a semantic\naction on every production, run when that production is reduced. A\nbottom-up parser parses id + id * id. The number of semantic actions\nexecuted is ______.</p>",
"options": [],
"answer": "8",
"explanation": "<p>The rightmost derivation in reverse uses F → id three times, T → F\ntwice, T → T * F once, E → T once and E → E + T once. 3 + 2 + 1 + 1 + 1\n= 8.</p>"
},
{
"id": "CD44",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Intermediate code, optimisation, data-flow",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>How many basic blocks does this three-address code contain?</p>\n<pre><code>1: i = 0\n2: s = 0\n3: if i &gt;= 10 goto 8\n4: t = i * 2\n5: s = s + t\n6: i = i + 1\n7: goto 3\n8: print s</code></pre>",
"options": [],
"answer": "4",
"explanation": "<p>The leaders are instruction 1 (first), 3 (target of the goto at 7), 4\n(follows a conditional jump) and 8 (target of the jump at 3). The blocks\nare 1–2, 3, 4–7 and 8.</p>"
},
{
"id": "CD45",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Intermediate code, optimisation, data-flow",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A control flow graph has these blocks. B1: a = 1; b = 2. B2: c = a +\nb; if c &gt; 5 goto B4. B3: d = c * 2; goto B5. B4: d = a. B5: print d.\nB2 falls through to B3. The number of variables live at the exit of B2\nis ______.</p>",
"options": [],
"answer": "2",
"explanation": "<p>B3 uses c (before defining d) and B4 uses a. So live-out of B2 is {a,\nc}. Variable b is not used after B2, and d is defined before it is used\nin both successors.</p>"
},
{
"id": "CD46",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Lexical analysis, symbol table",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A lexical analyzer using the maximal munch rule reads the C fragment\n<code>a+++b</code>. The number of tokens produced is ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>The tokens are <code>a</code>, <code>++</code>, <code>+</code> and\n<code>b</code>.</p>"
},
{
"id": "CD47",
"subject": "CD",
"subjectName": "Compiler Design",
"topic": "Lexical analysis, symbol table",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Which tasks are performed by the lexical analyzer?</p>",
"options": [
{
"k": "A",
"t": "Removing comments and white space"
},
{
"k": "B",
"t": "Detecting unbalanced parentheses"
},
{
"k": "C",
"t": "Producing tokens together with their lexemes or attributes"
},
{
"k": "D",
"t": "Checking that operand types match"
}
],
"answer": [
"A",
"C"
],
"explanation": "<p>Balanced parentheses are checked by the parser, and type checking is\ndone in semantic analysis.</p>"
},
{
"id": "OS48",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Memory management, paging, virtual memory",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A system has 48-bit virtual addresses, 8 KB pages and 8-byte page\ntable entries, and uses a single-level page table. The size of the page\ntable in GB is ______.</p>",
"options": [],
"answer": "256",
"explanation": "<p>The page offset takes 13 bits, leaving 2³⁵ pages. 2³⁵ × 8 bytes = 2³⁸\nbytes = 256 GB.</p>"
},
{
"id": "OS49",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Memory management, paging, virtual memory",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A process with 3 frames references pages 2 3 2 1 5 2 4 5 3 2 5 2. Let\nF be the number of page faults under FIFO and L the number under LRU,\nwith all frames initially empty. F − L is ______.</p>",
"options": [],
"answer": "2",
"explanation": "<p>FIFO gives 9 faults and LRU gives 7 (optimal replacement would give\n6).</p>"
},
{
"id": "OS50",
"subject": "OS",
"subjectName": "Operating System",
"topic": "File system & disk",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The disk head is at cylinder 40. The queue holds requests for\ncylinders 12, 90, 55, 30, 70, 5, 100. Under SSTF scheduling the total\nhead movement is ______ cylinders.</p>",
"options": [],
"answer": "130",
"explanation": "<p>The service order is 30, 12, 5, 55, 70, 90, 100, with movements 10 +\n18 + 7 + 50 + 15 + 20 + 10 = 130.</p>"
},
{
"id": "OS51",
"subject": "OS",
"subjectName": "Operating System",
"topic": "File system & disk",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A Unix-like inode has 10 direct pointers, 1 single-indirect pointer\nand 1 double-indirect pointer. The block size is 2 KB and each pointer\nis 4 bytes. The maximum file size in KB is ______.</p>",
"options": [],
"answer": "525332",
"explanation": "<p>Each indirect block holds 512 pointers. The file can have 10 + 512 +\n512² = 262,666 blocks, and 262,666 × 2 KB = 525,332 KB.</p>"
},
{
"id": "OS52",
"subject": "OS",
"subjectName": "Operating System",
"topic": "CPU scheduling",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Processes P1, P2, P3 arrive at times 0, 1, 2 with CPU bursts 6, 4, 2.\nUnder FCFS the average waiting time, to two decimal places, is\n______.</p>",
"options": [],
"answer": "4.33",
"explanation": "<p>The waiting times are 0, 5 and 8, and 13/3 = 4.33.</p>"
},
{
"id": "OS53",
"subject": "OS",
"subjectName": "Operating System",
"topic": "CPU scheduling",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>Four processes arrive at times 0, 1, 2, 3 with bursts 8, 4, 2, 1.\nUnder preemptive SJF (SRTF) the average turnaround time is ______.</p>",
"options": [],
"answer": "6.5",
"explanation": "<p>The completion times are P1 = 15, P2 = 8, P3 = 4 and P4 = 5. The\nturnaround times are 15, 7, 2 and 2, which sum to 26 and average\n6.5.</p>"
},
{
"id": "OS54",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Process synchronization",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Semaphores s1 = 1 and s2 = 0. Process P1 loops forever: P(s1); print\nX; V(s2). Process P2 loops forever: P(s2); print Y; V(s1). The output\nis</p>",
"options": [
{
"k": "A",
"t": "XYXYXY…"
},
{
"k": "B",
"t": "XXYYXXYY…"
},
{
"k": "C",
"t": "deadlock with no output"
},
{
"k": "D",
"t": "YXYXYX…"
}
],
"answer": [
"A"
],
"explanation": "<p>The two semaphores force strict alternation, starting with P1.</p>"
},
{
"id": "OS55",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Process synchronization",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>A bounded-buffer producer-consumer solution uses semaphores empty =\nN, full = 0 and mutex = 1. A programmer swaps the first two lines of the\nproducer to <code>P(mutex); P(empty);</code>, leaving the consumer\nunchanged. Which statement is TRUE?</p>",
"options": [
{
"k": "A",
"t": "The solution is still correct."
},
{
"k": "B",
"t": "Mutual exclusion on the buffer is violated."
},
{
"k": "C",
"t": "A deadlock can occur when the buffer is full."
},
{
"k": "D",
"t": "A deadlock can occur when the buffer is empty."
}
],
"answer": [
"C"
],
"explanation": "<p>When the buffer is full the producer holds mutex and blocks on empty.\nThe consumer needs mutex to remove an item, so neither can proceed.</p>"
},
{
"id": "OS56",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Processes, threads, system calls",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The program below is run. The number of X lines printed is\n______.</p>\n<pre class=\"c\"><code>int main() {\n    if (fork()) fork();\n    fork();\n    printf(&quot;X\\n&quot;);\n}</code></pre>",
"options": [],
"answer": "6",
"explanation": "<p>After the first statement there are 3 processes, because the child\nskips the inner fork. The next <code>fork()</code> doubles them to 6,\nand each prints once.</p>"
},
{
"id": "OS57",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Processes, threads, system calls",
"marks": 2,
"type": "MSQ",
"context": "",
"question": "<p>Which statements are TRUE?</p>",
"options": [
{
"k": "A",
"t": "Threads of one process share the heap and global data."
},
{
"k": "B",
"t": "Each thread has its own stack and register set."
},
{
"k": "C",
"t": "A context switch between two threads of the same process requires\nswitching the page table."
},
{
"k": "D",
"t": "In a many-to-one thread model, a blocking system call by one user\nthread blocks the whole process."
}
],
"answer": [
"A",
"B",
"D"
],
"explanation": "<p>Threads of the same process share one address space, so (C) is\nfalse.</p>"
},
{
"id": "OS58",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Deadlock",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Five processes each need at most 3 units of a single resource type.\nThe minimum total number of units that guarantees deadlock freedom is\n______.</p>",
"options": [],
"answer": "11",
"explanation": "<p>n(m − 1) + 1 = 5 × 2 + 1.</p>"
},
{
"id": "OS59",
"subject": "OS",
"subjectName": "Operating System",
"topic": "Deadlock",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>A system has 4 processes and 3 resource types with Available = (2, 1,\n1).</p>\n<table>\n<thead>\n<tr class=\"header\">\n<th>Process</th>\n<th>Allocation</th>\n<th>Max</th>\n</tr>\n</thead>\n<tbody>\n<tr class=\"odd\">\n<td>P0</td>\n<td>0 1 0</td>\n<td>7 2 3</td>\n</tr>\n<tr class=\"even\">\n<td>P1</td>\n<td>2 0 0</td>\n<td>3 2 2</td>\n</tr>\n<tr class=\"odd\">\n<td>P2</td>\n<td>3 0 2</td>\n<td>9 0 2</td>\n</tr>\n<tr class=\"even\">\n<td>P3</td>\n<td>2 1 1</td>\n<td>2 2 2</td>\n</tr>\n</tbody>\n</table>\n<p>Which is a safe sequence?</p>",
"options": [
{
"k": "A",
"t": "P3, P1, P2, P0"
},
{
"k": "B",
"t": "P1, P3, P2, P0"
},
{
"k": "C",
"t": "P3, P2, P1, P0"
},
{
"k": "D",
"t": "The state is unsafe."
}
],
"answer": [
"A"
],
"explanation": "<p>The Need matrix is P0 (7,1,3), P1 (1,2,2), P2 (6,0,0), P3 (0,1,1).\nOnly P3 can run first. Then Available = (4,2,2) and only P1 fits. Then\nAvailable = (6,2,2) and only P2 fits. Then Available = (9,2,4) and P0\nfits. This is the only safe sequence.</p>"
},
{
"id": "CN60",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "IP addressing, subnetting, CIDR",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A network uses the subnet mask 255.255.255.192. The number of usable\nhost addresses per subnet is ______.</p>",
"options": [],
"answer": "62",
"explanation": "<p>The mask is /26, leaving 6 host bits, so 2⁶ − 2 = 62.</p>"
},
{
"id": "CN61",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "IP addressing, subnetting, CIDR",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>A router has these forwarding entries: 10.0.0.0/8 → I1, 10.20.0.0/16\n→ I2, 10.20.32.0/19 → I3, 10.20.33.0/24 → I4, default → I5. A packet for\n10.20.34.7 leaves through</p>",
"options": [
{
"k": "A",
"t": "I1"
},
{
"k": "B",
"t": "I2"
},
{
"k": "C",
"t": "I3"
},
{
"k": "D",
"t": "I4"
}
],
"answer": [
"C"
],
"explanation": "<p>The /19 entry covers 10.20.32.0 to 10.20.63.255, which includes\n10.20.34.7. The /24 entry (10.20.33.x) does not match. Longest prefix\nmatch picks the /19.</p>"
},
{
"id": "CN62",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Data link layer: MAC, error detection, sliding window",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Stop-and-wait is used on a 1 Mbps link with 1000-bit frames and a 4\nms one-way propagation delay. Ignoring ACK transmission time, the link\nefficiency in percent, to one decimal place, is ______.</p>",
"options": [],
"answer": "11.1",
"explanation": "<p>T_t = 1 ms and the round trip adds 8 ms. Efficiency = 1 / (1 + 8) =\n11.1%.</p>"
},
{
"id": "CN63",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Data link layer: MAC, error detection, sliding window",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>Data 1101 is sent with a CRC using generator polynomial x³ + x + 1\n(bits 1011). The transmitted codeword is</p>",
"options": [
{
"k": "A",
"t": "1101001"
},
{
"k": "B",
"t": "1101011"
},
{
"k": "C",
"t": "1101100"
},
{
"k": "D",
"t": "1101110"
}
],
"answer": [
"A"
],
"explanation": "<p>Dividing 1101000 by 1011 over GF(2) leaves remainder 001, which is\nappended to the data.</p>"
},
{
"id": "CN64",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Application layer, layering, DNS/HTTP",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>Which application protocol and default transport pairing is\ncorrect?</p>",
"options": [
{
"k": "A",
"t": "SMTP over UDP"
},
{
"k": "B",
"t": "HTTP/1.1 over UDP"
},
{
"k": "C",
"t": "DNS queries over UDP"
},
{
"k": "D",
"t": "FTP over UDP"
}
],
"answer": [
"C"
],
"explanation": "<p>DNS queries normally use UDP, with TCP used for large responses and\nzone transfers. SMTP, HTTP/1.1 and FTP use TCP.</p>"
},
{
"id": "CN65",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Application layer, layering, DNS/HTTP",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A message of 10 packets of 1000 bits each crosses three 1 Mbps links\nin series, with two store-and-forward routers and negligible propagation\ndelay. The total time to deliver the whole message in milliseconds is\n______.</p>",
"options": [],
"answer": "12",
"explanation": "<p>The first packet needs 3 ms to cross the path, and each remaining\npacket arrives 1 ms after the previous one. 3 + 9 = 12 ms, which equals\n(10 + 3 − 1) × 1 ms.</p>"
},
{
"id": "CN66",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "TCP: flow & congestion control",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A TCP sender starts with cwnd = 1 MSS in round 1 and ssthresh = 16\nMSS, with no losses. Slow start doubles cwnd each round until it reaches\nssthresh, then congestion avoidance adds 1 MSS per round. The cwnd in\nround 8 is ______ MSS.</p>",
"options": [],
"answer": "19",
"explanation": "<p>The values are 1, 2, 4, 8, 16 in rounds 1–5, then 17, 18 and 19 in\nrounds 6–8.</p>"
},
{
"id": "CN67",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "TCP: flow & congestion control",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A TCP connection has a fixed 64 KB window (1 KB = 1024 bytes), a 40\nms RTT and a 100 Mbps link. Ignoring all other effects, the link\nutilisation in percent, to one decimal place, is ______.</p>",
"options": [],
"answer": "13.1",
"explanation": "<p>Throughput is at most window/RTT = 524,288 bits / 0.04 s = 13.1 Mbps,\nwhich is 13.1% of 100 Mbps.</p>"
},
{
"id": "CN68",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Routing (distance vector, link state)",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Router X has neighbours A (link cost 2) and B (link cost 5). A\nadvertises a cost of 7 to destination D and B advertises a cost of 3.\nX's distance-vector cost to D is ______.</p>",
"options": [],
"answer": "8",
"explanation": "<p>min(2 + 7, 5 + 3) = 8.</p>"
},
{
"id": "CN69",
"subject": "CN",
"subjectName": "Computer Networks",
"topic": "Routing (distance vector, link state)",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>Link costs are R1–R2 = 2, R1–R3 = 5, R2–R3 = 1, R2–R4 = 7, R3–R4 = 3,\nR4–R5 = 2 and R3–R5 = 8. Using Dijkstra from R1, the sum of the shortest\ndistances to R2, R3, R4 and R5 is ______.</p>",
"options": [],
"answer": "19",
"explanation": "<p>The distances are R2 = 2, R3 = 3, R4 = 6 and R5 = 8, and they sum to\n19.</p>"
},
{
"id": "CO70",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Cache & memory hierarchy",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A direct-mapped cache of 32 KB with 64-byte blocks is used with\n32-bit addresses. The number of tag bits is ______.</p>",
"options": [],
"answer": "17",
"explanation": "<p>The offset needs 6 bits and there are 512 lines, so the index needs 9\nbits. The tag is 32 − 15 = 17 bits.</p>"
},
{
"id": "CO71",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Cache & memory hierarchy",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>L1 has a 1 ns hit time and a 90% hit rate. L2 has a 10 ns access time\nand an 80% local hit rate. Main memory takes 100 ns. The average memory\naccess time in ns is ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>AMAT = 1 + 0.1 × (10 + 0.2 × 100) = 1 + 0.1 × 30 = 4 ns.</p>"
},
{
"id": "CO72",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Pipelining, hazards, CPI",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>An ideal 5-stage pipeline has a 2 ns stage delay and no stalls. The\ntime to execute 100 instructions in ns is ______.</p>",
"options": [],
"answer": "208",
"explanation": "<p>(5 + 99) × 2 ns.</p>"
},
{
"id": "CO73",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Pipelining, hazards, CPI",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A non-pipelined processor at 2 GHz needs 5 cycles per instruction. A\npipelined version runs at 1.6 GHz with an average CPI of 1.25 because of\nhazards. The speed-up is ______.</p>",
"options": [],
"answer": "3.2",
"explanation": "<p>The non-pipelined time is 5 × 0.5 ns = 2.5 ns per instruction. The\npipelined time is 1.25 × 0.625 ns = 0.78125 ns. The ratio is 3.2.</p>"
},
{
"id": "CO74",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Instruction set, addressing modes, data path",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A 32-bit instruction has an 8-bit opcode, two register fields chosen\nfrom 64 registers, and an immediate field that fills the rest. The width\nof the immediate field in bits is ______.</p>",
"options": [],
"answer": "12",
"explanation": "<p>32 − 8 − 6 − 6 = 12.</p>"
},
{
"id": "CO75",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "Instruction set, addressing modes, data path",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>A byte-addressable machine has 4-byte instructions. A PC-relative\nbranch at address 2000 has a 12-bit signed offset counted in words,\nmeasured from the next instruction (address 2004). The largest forward\ntarget address is ______.</p>",
"options": [],
"answer": "10192",
"explanation": "<p>The largest positive offset is 2¹¹ − 1 = 2047 words = 8188 bytes.\n2004 + 8188 = 10192.</p>"
},
{
"id": "CO76",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "I/O: DMA and interrupts",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A device transfers 2 × 10⁶ bytes per second through DMA in\ncycle-stealing mode, 4 bytes per transfer. Each transfer steals one 100\nns bus cycle. The percentage of CPU bus time stolen is ______.</p>",
"options": [],
"answer": "5",
"explanation": "<p>There are 5 × 10⁵ transfers per second, which steal 5 × 10⁵ × 100 ns\n= 0.05 s per second.</p>"
},
{
"id": "CO77",
"subject": "CO",
"subjectName": "Computer Organization & Architecture",
"topic": "I/O: DMA and interrupts",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>An interrupt costs the CPU 20 µs of overhead. Polling costs 2 µs per\npoll and runs 1000 times per second. Interrupt-driven I/O has higher\noverhead than polling when the event rate exceeds ______ events per\nsecond.</p>",
"options": [],
"answer": "100",
"explanation": "<p>Polling costs 1000 × 2 µs = 2000 µs per second, and interrupts cost r\n× 20 µs. They are equal at r = 100.</p>"
},
{
"id": "DB78",
"subject": "DB",
"subjectName": "Databases",
"topic": "SQL, relational algebra, tuple calculus",
"marks": 1,
"type": "NAT",
"context": "<p>Use these tables for both questions.</p>\n<p>R(x, y): (1, a), (2, a), (3, b), (4, c) S(y, z): (a, 10), (a, 20),\n(b, 30), (d, 40), (NULL, 50)</p>",
"question": "<p>The number of tuples in the natural join R ⋈ S is ______.</p>",
"options": [],
"answer": "5",
"explanation": "<p>y = a gives 2 × 2 = 4 tuples, y = b gives 1, and c has no match. NULL\nnever matches.</p>"
},
{
"id": "DB79",
"subject": "DB",
"subjectName": "Databases",
"topic": "SQL, relational algebra, tuple calculus",
"marks": 2,
"type": "NAT",
"context": "<p>Use these tables for both questions.</p>\n<p>R(x, y): (1, a), (2, a), (3, b), (4, c) S(y, z): (a, 10), (a, 20),\n(b, 30), (d, 40), (NULL, 50)</p>",
"question": "<p>The number of rows returned by\n<code>SELECT x FROM R WHERE y NOT IN (SELECT y FROM S WHERE z &gt; 15)</code>\nis ______.</p>",
"options": [],
"answer": "0",
"explanation": "<p>The subquery returns {a, b, d, NULL}. For y = c, the comparison with\nNULL is UNKNOWN, so <code>NOT IN</code> is not true. For a and b the\ncondition is false. No row qualifies.</p>"
},
{
"id": "DB80",
"subject": "DB",
"subjectName": "Databases",
"topic": "Normalization & functional dependencies",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>R(A, B, C, D, E) has the dependencies A → B, B → C, C → D, D → E, E →\nA. The number of candidate keys is ______.</p>",
"options": [],
"answer": "5",
"explanation": "<p>The dependencies form a cycle, so each single attribute determines\nall the others.</p>"
},
{
"id": "DB81",
"subject": "DB",
"subjectName": "Databases",
"topic": "Normalization & functional dependencies",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>R(A, B, C, D) has F = { AB → C, C → D, D → A }. The highest normal\nform of R is</p>",
"options": [
{
"k": "A",
"t": "BCNF"
},
{
"k": "B",
"t": "3NF but not BCNF"
},
{
"k": "C",
"t": "2NF but not 3NF"
},
{
"k": "D",
"t": "1NF only"
}
],
"answer": [
"B"
],
"explanation": "<p>The candidate keys are AB, BC and BD, so every attribute is prime and\nR is in 3NF. The dependency C → D has a left side that is not a\nsuperkey, so R is not in BCNF.</p>"
},
{
"id": "DB82",
"subject": "DB",
"subjectName": "Databases",
"topic": "Transactions & concurrency control",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>The schedule S = r₁(A) w₂(A) r₂(B) w₁(B) is</p>",
"options": [
{
"k": "A",
"t": "conflict serializable as T₁ T₂"
},
{
"k": "B",
"t": "conflict serializable as T₂ T₁"
},
{
"k": "C",
"t": "not conflict serializable"
},
{
"k": "D",
"t": "serial"
}
],
"answer": [
"C"
],
"explanation": "<p>r₁(A) before w₂(A) gives T₁ → T₂, and r₂(B) before w₁(B) gives T₂ →\nT₁. The precedence graph has a cycle.</p>"
},
{
"id": "DB83",
"subject": "DB",
"subjectName": "Databases",
"topic": "Transactions & concurrency control",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>The schedule is r₁(X) w₂(X) r₃(Y) w₁(Y) w₃(Z) r₂(Z). It is conflict\nequivalent to the serial schedule</p>",
"options": [
{
"k": "A",
"t": "T₁ T₂ T₃"
},
{
"k": "B",
"t": "T₃ T₁ T₂"
},
{
"k": "C",
"t": "T₃ T₂ T₁"
},
{
"k": "D",
"t": "T₂ T₁ T₃"
}
],
"answer": [
"B"
],
"explanation": "<p>The conflict edges are T₁ → T₂ (on X), T₃ → T₁ (on Y) and T₃ → T₂ (on\nZ). The only topological order is T₃, T₁, T₂.</p>"
},
{
"id": "DB84",
"subject": "DB",
"subjectName": "Databases",
"topic": "Indexing, B/B+ trees, file organisation",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A B+ tree has 1024-byte nodes, 8-byte keys and 6-byte block pointers.\nThe order p of an internal node, the largest number of pointers per node\nsatisfying p·6 + (p − 1)·8 ≤ 1024, is ______.</p>",
"options": [],
"answer": "73",
"explanation": "<p>14p ≤ 1032 gives p ≤ 73.7, so p = 73.</p>"
},
{
"id": "DB85",
"subject": "DB",
"subjectName": "Databases",
"topic": "Indexing, B/B+ trees, file organisation",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>An ordered file has 100,000 records of 100 bytes in 4096-byte blocks,\nwith no spanning. A sparse primary index has 16-byte entries. The number\nof block accesses to fetch one record by binary search on the index file\nis ______.</p>",
"options": [],
"answer": "5",
"explanation": "<p>The blocking factor is 40, giving 2500 data blocks. The sparse index\nhas 2500 entries at 256 per block, so 10 index blocks. Binary search\ntakes ⌈log₂ 10⌉ = 4 accesses, plus 1 data block.</p>"
},
{
"id": "DB86",
"subject": "DB",
"subjectName": "Databases",
"topic": "ER model",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>Entities E1 (key a) and E2 (key b) are in an M:N relationship with an\nattribute c. The minimum number of relations in the relational schema is\n______.</p>",
"options": [],
"answer": "3",
"explanation": "<p>One table per entity, plus one table for the M:N relationship.</p>"
},
{
"id": "DB87",
"subject": "DB",
"subjectName": "Databases",
"topic": "ER model",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>An ER diagram has entities A, B, C. R is M:N between A and B. S is\n1:N from B to C. T is 1:1 between A and C. The minimum number of\nrelations is ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>Tables for A, B and C, plus one for R. S merges into C as a foreign\nkey to B, and T merges into A or C as a foreign key.</p>"
},
{
"id": "DL88",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Boolean algebra & K-maps",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The minimum number of literals in a minimal sum-of-products\nexpression for F(A, B, C) = Σm(0, 1, 2, 5, 6, 7) is ______.</p>",
"options": [],
"answer": "6",
"explanation": "<p>One minimal cover is A′B′ + BC′ + AC, which has 3 terms of 2 literals\neach. The K-map forms a cycle of six overlapping pairs, and no cover\nneeds fewer than 6 literals.</p>"
},
{
"id": "DL89",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Boolean algebra & K-maps",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>For variables (w, x, y, z), F = Σm(0, 2, 5, 7, 8, 10, 13, 15)\nequals</p>",
"options": [
{
"k": "A",
"t": "x ⊕ z"
},
{
"k": "B",
"t": "x ⊙ z"
},
{
"k": "C",
"t": "w ⊕ y"
},
{
"k": "D",
"t": "w ⊙ y"
}
],
"answer": [
"B"
],
"explanation": "<p>The minterms are exactly the cases where x = z (x′z′ covers 0, 2, 8,\n10 and xz covers 5, 7, 13, 15). So F is the XNOR of x and z.</p>"
},
{
"id": "DL90",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Number representation, IEEE-754, arithmetic",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>The decimal value of the 8-bit two's complement number 10110110 is\n______.</p>",
"options": [],
"answer": "-74",
"explanation": "<p>Inverting gives 01001001, adding 1 gives 01001010 = 74, so the value\nis −74.</p>"
},
{
"id": "DL91",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Number representation, IEEE-754, arithmetic",
"marks": 2,
"type": "NAT",
"context": "",
"question": "<p>The 32-bit IEEE-754 single precision number 0xC1A40000 has the\ndecimal value ______.</p>",
"options": [],
"answer": "-20.5",
"explanation": "<p>The sign bit is 1. The exponent field is 10000011 = 131, so the\nexponent is 4. The mantissa is .0100100…, so the value is −1.28125 × 2⁴\n= −20.5.</p>"
},
{
"id": "DL92",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Sequential circuits",
"marks": 1,
"type": "NAT",
"context": "",
"question": "<p>A 4-bit binary ripple counter is driven by a 64 kHz clock. The\nfrequency of the most significant output in kHz is ______.</p>",
"options": [],
"answer": "4",
"explanation": "<p>Each stage halves the frequency, so the MSB output is 64 / 2⁴ = 4\nkHz.</p>"
},
{
"id": "DL93",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Sequential circuits",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>A circuit has two D flip-flops with D₁ = Q₁ ⊕ Q₀ and D₀ = Q₁′. It\nstarts in state Q₁Q₀ = 00. After 100 clock pulses the state Q₁Q₀ is</p>",
"options": [
{
"k": "A",
"t": "00"
},
{
"k": "B",
"t": "01"
},
{
"k": "C",
"t": "10"
},
{
"k": "D",
"t": "11"
}
],
"answer": [
"B"
],
"explanation": "<p>The sequence is 00 → 01 → 11 → 00, a cycle of length 3. 100 mod 3 =\n1, so the state is 01.</p>"
},
{
"id": "DL94",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Combinational circuits (MUX, decoder, adder)",
"marks": 1,
"type": "MCQ",
"context": "",
"question": "<p>A 4:1 multiplexer has select lines S₁S₀ and data inputs I₀ = 0, I₁ =\n1, I₂ = 1, I₃ = 0. The output is</p>",
"options": [
{
"k": "A",
"t": "S₁·S₀"
},
{
"k": "B",
"t": "S₁ + S₀"
},
{
"k": "C",
"t": "S₁ ⊕ S₀"
},
{
"k": "D",
"t": "S₁ ⊙ S₀"
}
],
"answer": [
"C"
],
"explanation": "<p>The output is 1 for 01 and 10 only, which is XOR.</p>"
},
{
"id": "DL95",
"subject": "DL",
"subjectName": "Digital Logic",
"topic": "Combinational circuits (MUX, decoder, adder)",
"marks": 2,
"type": "MCQ",
"context": "",
"question": "<p>F(A, B, C) = Σm(1, 2, 4, 7) is implemented with a 4:1 MUX with A and\nB as select lines (A is the MSB). The inputs I₀, I₁, I₂, I₃ are, in\norder,</p>",
"options": [
{
"k": "A",
"t": "C, C′, C′, C"
},
{
"k": "B",
"t": "C′, C, C, C′"
},
{
"k": "C",
"t": "C, C, C′, C′"
},
{
"k": "D",
"t": "0, 1, 1, 0"
}
],
"answer": [
"A"
],
"explanation": "<p>For AB = 00 the minterm 1 gives C. For AB = 01 the minterm 2 gives\nC′. For AB = 10 the minterm 4 gives C′. For AB = 11 the minterm 7 gives\nC.</p>"
}
];
