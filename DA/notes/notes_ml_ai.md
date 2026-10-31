---
title: GATE DA Notes — Machine Learning and AI
---
# Machine Learning

## Supervised learning basics
- **Linear regression:** minimise squared error. Normal equation: w = (XᵀX)⁻¹Xᵀy. Gradient step: w ← w − η·∇L.
- **Ridge regression:** minimise ‖y − Xw‖² + λ‖w‖². Solution w = (XᵀX + λI)⁻¹Xᵀy. It shrinks weights (never exactly zero), always invertible for λ > 0, increases bias and lowers variance as λ grows.
- **Logistic regression:** P(y=1|x) = σ(wᵀx), σ(z) = 1/(1+e⁻ᶻ). Trained by maximising likelihood (cross-entropy loss). Decision boundary is linear. It is a discriminative model.
- **k-NN:** predict by majority (or mean) of the k closest points. Small k: low bias, high variance. Needs feature scaling. No training phase.
- **Naive Bayes:** assumes features are conditionally independent given the class; P(y|x) ∝ P(y)∏P(xᵢ|y). It is a generative model. For K binary features and 2 classes: parameters = 1 (prior) + 2K (P(xᵢ=1|y)) = 2K + 1.
- **LDA (linear discriminant analysis):** assumes Gaussian classes with a shared covariance; gives a linear boundary. Fisher criterion maximises between-class scatter over within-class scatter: max wᵀS_B w / wᵀS_W w.
- **SVM:** maximum-margin classifier. Margin = 2/‖w‖. Only support vectors determine the boundary. Soft margin uses C to trade margin against errors.
- **Decision trees:** split on the attribute with highest information gain. Entropy H = −Σ pᵢ log₂ pᵢ. IG = H(parent) − Σ (nₖ/n)·H(childₖ). Gini = 1 − Σ pᵢ².

## Model selection
- **Bias–variance:** error = bias² + variance + noise. Complex models: low bias, high variance (overfitting).
- **k-fold CV:** split into k folds; train on k−1, validate on 1; repeat k times. **Leave-one-out CV:** k = n, so n validation splits for n samples.
- Always count the splits on the data used for model selection only (not the held-out test set).

## Neural networks
- A neuron computes a = f(wᵀx + b). Common activations: sigmoid, tanh, ReLU = max(0, z).
- Parameters of a fully connected layer with m inputs and n outputs: m·n + n (with biases).
- Forward pass is matrix multiplication plus activation; backpropagation applies the chain rule layer by layer.
- Without a non-linear activation, stacked layers collapse to one linear map.

## Unsupervised learning
- **k-means:** repeat (assign each point to nearest centroid; recompute centroids as means). Minimises within-cluster squared distance; converges to a local minimum; sensitive to initialisation. k-medoid uses actual points as centres.
- **Hierarchical clustering:** bottom-up (agglomerative) merges closest clusters; top-down (divisive) splits. Single linkage = minimum pairwise distance; complete linkage = maximum.
- **PCA:** centre data; take eigenvectors of the covariance matrix with the largest eigenvalues. Variance along a component = its eigenvalue. Reducing to k dimensions keeps the top k components; the principal components are orthogonal.

## Quick traps
- Data scaling: z-score = (x − mean)/std; min-max = (x − min)/(max − min).
- Discriminative models (logistic regression, SVM) learn P(y|x) or a boundary; generative models (naive Bayes, LDA) model P(x|y)P(y).
- Regularisation lowers variance, raises bias.

# Artificial Intelligence

## Search
- **Uninformed:** BFS (complete, optimal for equal step costs, O(b^d) memory), DFS (O(bm) memory, not optimal), uniform-cost search (optimal for positive costs), depth-limited and iterative deepening.
- **Informed:** greedy best-first uses h(n); **A\*** uses f(n) = g(n) + h(n). A\* is optimal when h is admissible (never overestimates) for tree search, and consistent for graph search. If h₁ and h₂ are admissible, so are min(h₁, h₂) and any convex combination; max(h₁, h₂) is also admissible and dominates both.
- **Adversarial search:** minimax: MAX picks the child with the highest value, MIN the lowest. Alpha–beta pruning gives the same root value as minimax; best-case ordering examines about O(b^(d/2)) nodes.

## Logic
- **Propositional:** truth tables, equivalences (De Morgan, contrapositive: p→q ≡ ¬q→¬p ≡ ¬p∨q). X entails Y if Y is true in every model where X is true. Tautology = always true; satisfiable = true in at least one model.
- **Predicate (first-order):** ∀x P(x) and ∃x P(x); ¬∀x P(x) ≡ ∃x ¬P(x); ¬∃x P(x) ≡ ∀x ¬P(x). Careful: ∀x∃y R(x,y) is not equivalent to ∃y∀x R(x,y); the second implies the first.

## Reasoning under uncertainty
- **Bayesian network:** joint = ∏ P(Xᵢ | parents(Xᵢ)). A network with n Boolean variables needs Σ 2^(#parents) numbers.
- **Conditional independence (d-separation):** chain A→B→C: A ⟂ C | B. Fork A←B→C: A ⟂ C | B. Collider A→B←C: A ⟂ C marginally, but dependent once B (or a descendant) is observed.
- **Exact inference by variable elimination:** multiply the factors that mention a variable, sum it out, repeat; order affects cost.
- **Approximate inference by sampling:** prior sampling, rejection sampling (discard samples inconsistent with the evidence), likelihood weighting, Gibbs/MCMC. Estimates improve with more samples.

# Revision checklist
- [ ] Ridge, logistic, naive Bayes parameter counts
- [ ] Entropy and information gain by hand
- [ ] LOOCV / k-fold split counts
- [ ] Parameters in a feed-forward net
- [ ] k-means iteration and PCA eigenvalue/variance questions
- [ ] A* admissibility, minimax and alpha–beta by hand
- [ ] d-separation in three structures
- [ ] Variable elimination on a small network
