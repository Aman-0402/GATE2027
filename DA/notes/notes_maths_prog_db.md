---
title: GATE DA Notes — Maths, Programming and Databases
---
# Probability and Statistics
- **Counting:** P(n,r) = n!/(n−r)!; C(n,r) = n!/(r!(n−r)!). Bijections of {1..n} that satisfy f(f(x)) = x are the involutions: 1, 2, 4, 10 for n = 1..4.
- **Conditional probability:** P(A|B) = P(A∩B)/P(B). **Bayes:** P(A|B) = P(B|A)P(A)/P(B). Total probability: P(B) = ΣP(B|Aᵢ)P(Aᵢ).
- **Expectation and variance:** E[aX+b] = aE[X]+b; Var(aX+b) = a²Var(X); Var(X) = E[X²] − (E[X])². For independent X, Y: Var(X+Y) = Var X + Var Y. Cov(X,Y) = E[XY] − E[X]E[Y]; independence implies zero covariance, not conversely.
- **Law of total expectation:** E[X] = E[E[X|Y]]; Var(X) = E[Var(X|Y)] + Var(E[X|Y]).

| Distribution | Mean | Variance |
|---|---|---|
| Bernoulli(p) | p | p(1−p) |
| Binomial(n,p) | np | np(1−p) |
| Poisson(λ) | λ | λ |
| Uniform(a,b) | (a+b)/2 | (b−a)²/12 |
| Exponential (rate λ) | 1/λ | 1/λ² |
| Normal(μ,σ²) | μ | σ² |

- **Exponential:** P(X > x) = e^(−λx); memoryless. (If a question gives the *mean*, the rate is its reciprocal.)
- **Normal:** z = (x−μ)/σ; P(|Z|<1) ≈ 0.68, P(|Z|<2) ≈ 0.95.
- **CLT:** the mean of n i.i.d. variables is approximately Normal(μ, σ²/n).
- **Confidence interval (known σ):** x̄ ± z·σ/√n (z = 1.96 for 95%). With unknown σ use the t-distribution (n−1 degrees of freedom). Tests: z-test (known σ), t-test (unknown σ), χ² test (goodness of fit/independence).
- **Sample mean update:** new mean = (n·old + x)/(n+1).

# Linear Algebra
- **Rank–nullity:** rank(A) + nullity(A) = number of columns. A system Ax = b is consistent iff rank(A) = rank([A|b]).
- **Eigenvalues:** Σλ = trace, Πλ = determinant; eigenvalues of Aᵏ are λᵏ; of A⁻¹ are 1/λ. Triangular matrix: eigenvalues are the diagonal. Symmetric matrices have real eigenvalues and orthogonal eigenvectors. Rotation matrices (angle θ) have eigenvalues e^(±iθ).
- **Projection matrix** P = A(AᵀA)⁻¹Aᵀ: P² = P, symmetric, eigenvalues 0 or 1, trace = rank. The centring matrix I − (1/n)𝟏𝟏ᵀ is a projection of rank n−1 (eigenvalues 1 with multiplicity n−1, and 0).
- **Orthogonal matrix:** QᵀQ = I, |det Q| = 1, preserves lengths. **Idempotent:** A² = A.
- **Subspace test:** contains 0, closed under addition and scalar multiplication. A plane through the origin in ℝ³ is a 2-dimensional subspace; its intersection with a ball of radius r is a disc of area πr².
- **SVD:** A = UΣVᵀ; singular values are square roots of eigenvalues of AᵀA; rank = number of non-zero singular values; ‖A‖_F² = Σσᵢ².
- **LU decomposition:** A = LU by Gaussian elimination (without row swaps).
- **Quadratic form** xᵀAx is positive definite iff all eigenvalues > 0.

# Calculus and Optimisation
- **Continuity** at a: left limit = right limit = f(a). **Differentiable:** left and right derivatives agree (continuity is necessary, not sufficient). Piecewise functions: match values and slopes at the joins.
- **Maxima/minima:** set f′(x) = 0; f″ > 0 gives a local minimum, f″ < 0 a local maximum. On a closed interval also check the end points. On a half-open interval a maximum or minimum may not exist.
- **Taylor series:** f(x) ≈ f(a) + f′(a)(x−a) + f″(a)(x−a)²/2 + …
- **Limits:** use L'Hôpital for 0/0 or ∞/∞. Standard: sin x / x → 1, (1+1/n)ⁿ → e.
- **Series:** geometric Σ rᵏ = 1/(1−r) for |r| < 1; double sums of products factor into the product of sums.
- **Gradient descent:** x ← x − η f′(x); for f = ½ax², it converges iff 0 < η < 2/a.

# Programming, Data Structures and Algorithms
- **Python traps:** a mutable default argument (`def f(x, lst=[])`) is created once and shared across calls; slicing copies, assignment aliases; integer division `//`; recursion needs a base case; trace variables on paper.
- **Stack** (LIFO), **queue** (FIFO), **deque** (insert/remove at both ends); linked list: O(1) insert at head, O(n) search; **hash table:** O(1) average lookup, chaining or open addressing; expected probes for unsuccessful search with uniform hashing ≈ 1/(1−α).
- **Binary tree:** with n leaves in a full binary tree there are n−1 internal nodes. A tree is determined uniquely by pre-order plus in-order (or post-order plus in-order); pre-order plus post-order does not fix it in general.
- **Searching:** linear O(n); binary search O(log n) on a sorted array; maximum comparisons ≈ ⌊log₂ n⌋ + 1 (so 10 for n = 1000).
- **Sorting:**

| Algorithm | Best | Average | Worst | Stable |
|---|---|---|---|---|
| Selection | n² | n² | n² | no |
| Bubble (with early exit) | n | n² | n² | yes |
| Insertion | n | n² | n² | yes |
| Merge | n log n | n log n | n log n | yes |
| Quick | n log n | n log n | n² | no |

- **Divide and conquer:** merge sort T(n) = 2T(n/2) + n; quicksort worst case on already-sorted input with first/last pivot is n².
- **Graphs:** BFS (queue) gives shortest paths in unweighted graphs; DFS (stack/recursion) gives pre/post order and topological sort of a DAG (reverse post-order); Dijkstra for non-negative weights, O((V+E) log V) with a heap; Bellman–Ford for negative edges.

# Databases and Warehousing
- **Relational algebra:** σ (select), π (project), ⋈ (join), ∪, ∩, −, × (product), ρ (rename). Left outer join keeps unmatched left rows with NULLs.
- **SQL:** `GROUP BY` with aggregates; `HAVING` filters groups, `WHERE` filters rows; `COUNT(*)` counts rows, `COUNT(col)` skips NULLs; `NOT IN` with a NULL in the subquery returns no rows.
- **Functional dependencies:** closure X⁺ gives candidate keys; a key's closure is all attributes. **BCNF:** every non-trivial FD X→Y has X as a superkey. **3NF:** also allows Y to be a prime attribute. 2NF removes partial dependencies on a key.
- **ER model:** a many-to-many relationship becomes its own table; a one-to-many relationship adds a foreign key on the "many" side; weak entities need the owner's key.
- **B+ tree:** all data in leaves, leaves linked; order p means an internal node has at most p pointers (p−1 keys). Height ≈ log over the fan-out; splitting a full leaf promotes the middle key.
- **Indexing:** dense vs sparse; clustered vs non-clustered; a search through a B+ tree costs height + 1 block reads.
- **Data transformation:** min-max scaling, z-score, discretisation (equal-width, equal-frequency), sampling, compression.
- **Data warehouse:** star schema (one fact table, denormalised dimensions); snowflake (normalised dimensions). **Concept hierarchy:** e.g. day → month → quarter → year. Cuboids: with n dimensions and no hierarchy there are 2ⁿ cuboids; with hierarchy levels Lᵢ per dimension, the total is Π(Lᵢ + 1). OLAP: roll-up, drill-down, slice, dice, pivot.

# Revision checklist
- [ ] Bayes and total probability by hand; exponential/Poisson formulas
- [ ] Eigenvalue tricks (trace, determinant, powers); projection matrices
- [ ] Rank–nullity; SVD facts
- [ ] Piecewise continuity and differentiability
- [ ] Python tracing: default arguments, recursion
- [ ] Complexity table for sorting; BFS/DFS/Dijkstra
- [ ] Closure, candidate keys, BCNF/3NF test
- [ ] B+ tree insertion; cuboid count
