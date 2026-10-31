# GATE DA — Artificial Intelligence practice (original)

116 original questions (MCQ, MSQ and NAT) with answers and solutions. Search, minimax, logic and Bayesian-network answers were computed by code; a sample of d-separation answers was re-checked with NetworkX and the alpha–beta counts with an independent recursive implementation, with no mismatches. All answers were re-verified independently on 1 November 2026 (see workdone.md).


## Adversarial search

**AI1.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (6, 7, 1); MIN2: (10, 1, 1); MIN3: (8, 5, 12). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI2.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (8, 8, 3); MIN2: (5, 10, 10); MIN3: (10, 9, 11). The minimax value of the root is ______.

**AI3.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (10, 10, 9); MIN2: (11, 7, 6); MIN3: (5, 11, 11). The minimax value of the root is ______.

**AI4.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (5, 9, 3); MIN2: (7, 11, 8); MIN3: (8, 6, 8). The minimax value of the root is ______.

**AI5.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (6, 11, 9); MIN2: (1, 4, 4); MIN3: (7, 9, 6). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI6.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (7, 4, 1); MIN2: (10, 12, 5); MIN3: (2, 10, 3). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI7.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (7, 7, 3); MIN2: (10, 5, 9); MIN3: (8, 5, 7). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI8.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (9, 2, 8); MIN2: (11, 2, 10); MIN3: (7, 9, 6). The minimax value of the root is ______.

**AI9.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (5, 8, 1); MIN2: (3, 12, 2); MIN3: (2, 4, 1). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI10.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (11, 2, 11); MIN2: (9, 11, 6); MIN3: (3, 7, 9). The minimax value of the root is ______.

**AI11.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (11, 6, 10); MIN2: (8, 7, 9); MIN3: (2, 12, 10). The minimax value of the root is ______.

**AI12.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (7, 12, 12); MIN2: (11, 7, 5); MIN3: (12, 2, 3). The minimax value of the root is ______.

**AI13.** [NAT, 2 marks] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (4, 3, 10); MIN2: (10, 9, 3); MIN3: (11, 2, 8). Alpha–beta pruning evaluates children left to right and stops exploring a MIN node as soon as its value is ≤ the best value already found at the root. The number of leaf nodes evaluated is ______.

**AI14.** [NAT, 1 mark] A game tree has a MAX root with three MIN children, each having three leaves (values left to right): MIN1: (11, 4, 12); MIN2: (6, 6, 4); MIN3: (3, 12, 7). The minimax value of the root is ______.


## Bayesian networks

**AI15.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.5, P(B=1) = 0.3, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.6, P(C=1|A=1,B=1) = 0.9. The marginal P(C = 1) is ______ (3 decimals).

**AI16.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.5, P(B=1) = 0.1, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.9. Given C = 1, the probability that both A = 1 and B = 1 is ______ (3 decimals).

**AI17.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.3, P(B=1) = 0.5, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.9. Given C = 1, the probability that both A = 1 and B = 1 is ______ (3 decimals).

**AI18.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.4, P(B=1) = 0.6, and P(C=1|A=0,B=0) = 0.1, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.9. Given C = 1, the probability that both A = 1 and B = 1 is ______ (3 decimals).

**AI19.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.3, P(B=1) = 0.5, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.5, P(C=1|A=1,B=0) = 0.6, P(C=1|A=1,B=1) = 0.9. The marginal P(C = 1) is ______ (3 decimals).

**AI20.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.2, P(B=1) = 0.3, and P(C=1|A=0,B=0) = 0.1, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.8. Given C = 1, the probability that both A = 1 and B = 1 is ______ (3 decimals).

**AI21.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.5, P(B=1) = 0.3, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.5, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.8. Given C = 1, the probability that both A = 1 and B = 1 is ______ (3 decimals).

**AI22.** [NAT, 2 marks] In the Bayesian network A → C ← B (A and B independent), P(A=1) = 0.3, P(B=1) = 0.1, and P(C=1|A=0,B=0) = 0.2, P(C=1|A=0,B=1) = 0.4, P(C=1|A=1,B=0) = 0.7, P(C=1|A=1,B=1) = 0.9. The marginal P(C = 1) is ______ (3 decimals).

**AI23.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.6, P(B=1|A=1) = 0.7, P(B=1|A=0) = 0.3, P(C=1|B=1) = 0.5, P(C=1|B=0) = 0.2. The marginal P(C = 1) is ______ (3 decimals).

**AI24.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.6, P(B=1|A=1) = 0.7, P(B=1|A=0) = 0.3, P(C=1|B=1) = 0.5, P(C=1|B=0) = 0.1. The marginal P(C = 1) is ______ (3 decimals).

**AI25.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.3, P(B=1|A=1) = 0.7, P(B=1|A=0) = 0.1, P(C=1|B=1) = 0.9, P(C=1|B=0) = 0.2. The marginal P(C = 1) is ______ (3 decimals).

**AI26.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.3, P(B=1|A=1) = 0.7, P(B=1|A=0) = 0.3, P(C=1|B=1) = 0.9, P(C=1|B=0) = 0.4. The marginal P(C = 1) is ______ (3 decimals).

**AI27.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.3, P(B=1|A=1) = 0.9, P(B=1|A=0) = 0.1, P(C=1|B=1) = 0.9, P(C=1|B=0) = 0.2. The marginal P(C = 1) is ______ (3 decimals).

**AI28.** [NAT, 2 marks] In the chain A → B → C of binary variables, P(A=1) = 0.6, P(B=1|A=1) = 0.8, P(B=1|A=0) = 0.3, P(C=1|B=1) = 0.6, P(C=1|B=0) = 0.4. The marginal P(C = 1) is ______ (3 decimals).

**AI29.** [NAT, 2 marks] A Bayesian network over 3 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 1 parent. The total number of independent parameters needed for all conditional probability tables is ______.

**AI30.** [NAT, 2 marks] A Bayesian network over 6 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 0 parents, X4 has 1 parent, X5 has 0 parents, X6 has 3 parents. The total number of independent parameters needed for all conditional probability tables is ______.

**AI31.** [NAT, 2 marks] A Bayesian network over 6 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 1 parent, X4 has 2 parents, X5 has 3 parents, X6 has 1 parent. The total number of independent parameters needed for all conditional probability tables is ______.

**AI32.** [NAT, 2 marks] A Bayesian network over 5 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 2 parents, X4 has 1 parent, X5 has 1 parent. The total number of independent parameters needed for all conditional probability tables is ______.

**AI33.** [NAT, 2 marks] A Bayesian network over 6 binary variables has the following in-degrees: X1 has 0 parents, X2 has 1 parent, X3 has 0 parents, X4 has 3 parents, X5 has 0 parents, X6 has 1 parent. The total number of independent parameters needed for all conditional probability tables is ______.

**AI34.** [NAT, 2 marks] A Bayesian network over 5 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 1 parent, X4 has 3 parents, X5 has 0 parents. The total number of independent parameters needed for all conditional probability tables is ______.

**AI35.** [NAT, 2 marks] A Bayesian network over 6 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 2 parents, X4 has 2 parents, X5 has 2 parents, X6 has 1 parent. The total number of independent parameters needed for all conditional probability tables is ______.

**AI36.** [NAT, 2 marks] A Bayesian network over 6 binary variables has the following in-degrees: X1 has 0 parents, X2 has 0 parents, X3 has 2 parents, X4 has 0 parents, X5 has 2 parents, X6 has 0 parents. The total number of independent parameters needed for all conditional probability tables is ______.

**AI37.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→E, B→C, B→E, C→D. Is B conditionally independent of E given {D}?

(A) Yes, independent  
(B) Cannot be determined from the structure  
(C) No, not necessarily independent  
(D) Only if all variables are binary

**AI38.** [MCQ, 2 marks] A Bayesian network has edges A→E, B→C, B→E, C→D, C→E. Is C conditionally independent of E given {D}?

(A) Yes, independent  
(B) No, not necessarily independent  
(C) Only if all variables are binary  
(D) Cannot be determined from the structure

**AI39.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→C, A→D, B→C, B→D. Is C conditionally independent of B given {A}?

(A) Only if all variables are binary  
(B) Cannot be determined from the structure  
(C) Yes, independent  
(D) No, not necessarily independent

**AI40.** [MCQ, 2 marks] A Bayesian network has edges A→D, B→C, C→D, D→E. Is A conditionally independent of D given {E}?

(A) Yes, independent  
(B) Only if all variables are binary  
(C) No, not necessarily independent  
(D) Cannot be determined from the structure

**AI41.** [MCQ, 2 marks] A Bayesian network has edges A→B, C→D, C→E, D→E. Is E conditionally independent of B given ∅ (nothing observed)?

(A) No, not necessarily independent  
(B) Only if all variables are binary  
(C) Yes, independent  
(D) Cannot be determined from the structure

**AI42.** [MCQ, 2 marks] A Bayesian network has edges A→C, A→E, B→D, C→D, D→E. Is C conditionally independent of D given ∅ (nothing observed)?

(A) Cannot be determined from the structure  
(B) Only if all variables are binary  
(C) Yes, independent  
(D) No, not necessarily independent

**AI43.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→C, A→D, A→E, B→D, C→E, D→E. Is D conditionally independent of A given {E}?

(A) No, not necessarily independent  
(B) Yes, independent  
(C) Cannot be determined from the structure  
(D) Only if all variables are binary

**AI44.** [MCQ, 2 marks] A Bayesian network has edges A→B, B→E, C→D, C→E, D→E. Is A conditionally independent of E given {B}?

(A) Cannot be determined from the structure  
(B) Only if all variables are binary  
(C) Yes, independent  
(D) No, not necessarily independent

**AI45.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→C, A→E, B→D, C→D, C→E. Is E conditionally independent of B given {C}?

(A) No, not necessarily independent  
(B) Only if all variables are binary  
(C) Cannot be determined from the structure  
(D) Yes, independent

**AI46.** [MCQ, 2 marks] A Bayesian network has edges A→C, A→D, B→D, B→E, C→D, C→E, D→E. Is C conditionally independent of E given {B}?

(A) Cannot be determined from the structure  
(B) Yes, independent  
(C) Only if all variables are binary  
(D) No, not necessarily independent

**AI47.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→C, A→D, A→E, B→C, B→D, B→E, C→D, C→E. Is C conditionally independent of B given {D, E}?

(A) Yes, independent  
(B) Only if all variables are binary  
(C) No, not necessarily independent  
(D) Cannot be determined from the structure

**AI48.** [MCQ, 2 marks] A Bayesian network has edges A→B, A→C, A→D, B→C, B→D, B→E, C→E. Is D conditionally independent of E given {B, C}?

(A) Only if all variables are binary  
(B) Cannot be determined from the structure  
(C) No, not necessarily independent  
(D) Yes, independent

**AI49.** [NAT, 2 marks] Rejection sampling is used to estimate P(X | A = 1, B = 1) in a network where P(A=1) = 0.3 and P(B=1) = 0.1 are independent root nodes. Out of 1000 prior samples, the expected number consistent with the evidence A = 1, B = 1 is ______.

**AI50.** [NAT, 2 marks] Rejection sampling is used to estimate P(X | A = 1, B = 1) in a network where P(A=1) = 0.2 and P(B=1) = 0.2 are independent root nodes. Out of 500 prior samples, the expected number consistent with the evidence is ______ (1 decimal).

**AI51.** [NAT, 2 marks] Rejection sampling is used to estimate P(X | A = 1, B = 1) in a network where P(A=1) = 0.2 and P(B=1) = 0.4 are independent root nodes. Out of 2000 prior samples, the expected number consistent with the evidence is ______ (1 decimal).

**AI52.** [NAT, 2 marks] Rejection sampling is used to estimate P(X | A = 1, B = 1) in a network where P(A=1) = 0.5 and P(B=1) = 0.1 are independent root nodes. Out of 100 prior samples, the expected number consistent with the evidence A = 1, B = 1 is ______.


## Propositional logic

**AI53.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p ∧ q) → r over the three variables p, q, r is ______.

**AI54.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula p → q over the three variables p, q, r is ______.

**AI55.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p ∨ q) → (p ∧ q) over the three variables p, q, r is ______.

**AI56.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p ∧ q) ∨ (¬p ∧ r) over the three variables p, q, r is ______.

**AI57.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula p ∧ ¬p over the three variables p, q, r is ______.

**AI58.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p → q) ∨ (q → p) over the three variables p, q, r is ______.

**AI59.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula p ⊕ q ⊕ r over the three variables p, q, r is ______.

**AI60.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p ∨ ¬p) ∧ q over the three variables p, q, r is ______.

**AI61.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula p ↔ q over the three variables p, q, r is ______.

**AI62.** [NAT, 1 mark] The number of satisfying assignments (out of 8) of the formula (p → q) ∧ (q → r) over the three variables p, q, r is ______.

**AI63.** [MCQ, 1 mark] The formula (p ∧ q) ∨ (¬p ∧ r) is

(A) Unsatisfiable (a contradiction)  
(B) Valid (a tautology)  
(C) Valid only when r is true  
(D) Satisfiable but not valid

**AI64.** [MCQ, 1 mark] The formula (p ∨ q) ∧ r is

(A) Unsatisfiable (a contradiction)  
(B) Valid (a tautology)  
(C) Valid only when r is true  
(D) Satisfiable but not valid

**AI65.** [MCQ, 1 mark] The formula p ∨ q is

(A) Satisfiable but not valid  
(B) Unsatisfiable (a contradiction)  
(C) Valid (a tautology)  
(D) Valid only when r is true

**AI66.** [MCQ, 1 mark] The formula p ∧ ¬p is

(A) Satisfiable but not valid  
(B) Valid only when r is true  
(C) Valid (a tautology)  
(D) Unsatisfiable (a contradiction)

**AI67.** [MCQ, 1 mark] The formula (p → q) ∨ (q → p) is

(A) Valid only when r is true  
(B) Unsatisfiable (a contradiction)  
(C) Satisfiable but not valid  
(D) Valid (a tautology)

**AI68.** [MCQ, 1 mark] The formula (p ∨ ¬p) ∧ q is

(A) Satisfiable but not valid  
(B) Valid (a tautology)  
(C) Unsatisfiable (a contradiction)  
(D) Valid only when r is true

**AI69.** [MCQ, 1 mark] The formula p → q is

(A) Valid only when r is true  
(B) Satisfiable but not valid  
(C) Unsatisfiable (a contradiction)  
(D) Valid (a tautology)

**AI70.** [MCQ, 1 mark] The formula (p → q) ∧ (q → r) is

(A) Unsatisfiable (a contradiction)  
(B) Satisfiable but not valid  
(C) Valid only when r is true  
(D) Valid (a tautology)

**AI71.** [MCQ, 1 mark] The formula p ∧ q is

(A) Valid only when r is true  
(B) Unsatisfiable (a contradiction)  
(C) Valid (a tautology)  
(D) Satisfiable but not valid

**AI72.** [MCQ, 1 mark] The formula (p ∧ q) → r is

(A) Satisfiable but not valid  
(B) Unsatisfiable (a contradiction)  
(C) Valid (a tautology)  
(D) Valid only when r is true

**AI73.** [MCQ, 2 marks] Consider the knowledge base KB = { ¬(p ∨ q) ∨ r,  (p → q) ∧ (q → r) }. Does KB entail the sentence  (p ∨ q) ∧ r ?

(A) Only if p is true  
(B) No, KB does not entail it  
(C) Yes, KB entails it  
(D) Cannot be decided by any method

**AI74.** [MCQ, 2 marks] Consider the knowledge base KB = { (p → q) ∨ (q → p),  (p ∨ ¬p) ∧ q }. Does KB entail the sentence  p → q ?

(A) Yes, KB entails it  
(B) Cannot be decided by any method  
(C) Only if p is true  
(D) No, KB does not entail it

**AI75.** [MCQ, 2 marks] Consider the knowledge base KB = { ¬(p ∨ q) ∨ r,  (p → q) ∨ (q → p) }. Does KB entail the sentence  (p ∧ q) ∨ (¬p ∧ r) ?

(A) Yes, KB entails it  
(B) No, KB does not entail it  
(C) Only if p is true  
(D) Cannot be decided by any method

**AI76.** [MCQ, 2 marks] Consider the knowledge base KB = { p ↔ q,  (p ∨ ¬p) ∧ q }. Does KB entail the sentence  (p ∨ q) ∧ r ?

(A) Cannot be decided by any method  
(B) No, KB does not entail it  
(C) Yes, KB entails it  
(D) Only if p is true

**AI77.** [MCQ, 2 marks] Consider the knowledge base KB = { p ∧ q,  (p ∨ q) → (p ∧ q) }. Does KB entail the sentence  p ∧ ¬p ?

(A) Cannot be decided by any method  
(B) No, KB does not entail it  
(C) Yes, KB entails it  
(D) Only if p is true

**AI78.** [MCQ, 2 marks] Consider the knowledge base KB = { p → q,  (p → q) ∨ (q → p) }. Does KB entail the sentence  p ∧ q ?

(A) Cannot be decided by any method  
(B) No, KB does not entail it  
(C) Yes, KB entails it  
(D) Only if p is true

**AI79.** [MCQ, 2 marks] Consider the knowledge base KB = { p ⊕ q ⊕ r,  p ∧ q }. Does KB entail the sentence  p → q ?

(A) Yes, KB entails it  
(B) No, KB does not entail it  
(C) Only if p is true  
(D) Cannot be decided by any method

**AI80.** [MCQ, 2 marks] Consider the knowledge base KB = { p ∧ q,  (p ∨ q) ∧ r }. Does KB entail the sentence  (p → q) ∧ (q → r) ?

(A) Only if p is true  
(B) Cannot be decided by any method  
(C) No, KB does not entail it  
(D) Yes, KB entails it

**AI81.** [MCQ, 2 marks] Consider the knowledge base KB = { p ∧ q,  (p ∧ q) ∨ (¬p ∧ r) }. Does KB entail the sentence  (p → q) ∨ (q → p) ?

(A) Yes, KB entails it  
(B) No, KB does not entail it  
(C) Cannot be decided by any method  
(D) Only if p is true

**AI82.** [MCQ, 2 marks] Consider the knowledge base KB = { ¬(p ∨ q) ∨ r,  p → q }. Does KB entail the sentence  (p ∨ q) ∧ r ?

(A) Cannot be decided by any method  
(B) Yes, KB entails it  
(C) No, KB does not entail it  
(D) Only if p is true

**AI83.** [MCQ, 1 mark] Are the formulas  p ↔ q  and  (p → q) ∧ (q → p)  logically equivalent?

(A) Yes, equivalent  
(B) Only when all variables are true  
(C) Only when p is false  
(D) No, not equivalent

**AI84.** [MCQ, 1 mark] Are the formulas  p → (q → r)  and  (p ∧ q) → r  logically equivalent?

(A) Only when all variables are true  
(B) No, not equivalent  
(C) Yes, equivalent  
(D) Only when p is false

**AI85.** [MCQ, 1 mark] Are the formulas  ¬(p ∧ q)  and  ¬p ∨ ¬q  logically equivalent?

(A) Only when p is false  
(B) Yes, equivalent  
(C) Only when all variables are true  
(D) No, not equivalent

**AI86.** [MCQ, 1 mark] Are the formulas  p → q  and  ¬p ∨ q  logically equivalent?

(A) Only when all variables are true  
(B) No, not equivalent  
(C) Yes, equivalent  
(D) Only when p is false

**AI87.** [MCQ, 1 mark] Are the formulas  p ∧ (q ∨ r)  and  (p ∧ q) ∨ r  logically equivalent?

(A) No, not equivalent  
(B) Yes, equivalent  
(C) Only when p is false  
(D) Only when all variables are true

**AI88.** [MCQ, 1 mark] Are the formulas  p → q  and  ¬q → ¬p  logically equivalent?

(A) Yes, equivalent  
(B) Only when p is false  
(C) No, not equivalent  
(D) Only when all variables are true

**AI89.** [MCQ, 1 mark] Are the formulas  p → q  and  q → p  logically equivalent?

(A) No, not equivalent  
(B) Only when p is false  
(C) Yes, equivalent  
(D) Only when all variables are true

**AI90.** [MCQ, 1 mark] Are the formulas  p ∨ (q ∧ r)  and  (p ∨ q) ∧ (p ∨ r)  logically equivalent?

(A) Only when p is false  
(B) Yes, equivalent  
(C) No, not equivalent  
(D) Only when all variables are true


## Search

**AI91.** [NAT, 1 mark] An undirected graph has edges S–A (8), S–D (7), S–G (5), A–C (3), A–D (5), A–G (8), B–C (7), B–G (2), C–G (7). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI92.** [NAT, 1 mark] An undirected graph has edges S–A (1), S–C (7), S–G (4), A–D (5), A–G (8), B–C (3), B–G (1), C–D (1), C–G (2). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI93.** [NAT, 1 mark] An undirected graph has edges S–B (5), S–C (4), A–C (1), A–D (5), B–D (2), B–G (3), C–G (5). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI94.** [NAT, 1 mark] An undirected graph has edges S–A (3), A–C (6), A–G (6), B–G (8), C–D (2). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI95.** [NAT, 1 mark] An undirected graph has edges S–A (5), S–B (8), S–C (6), S–D (4), A–B (2), A–C (8), A–D (5), B–D (3), B–G (5), C–G (9). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI96.** [NAT, 1 mark] An undirected graph has edges S–C (4), S–G (5), A–C (4), A–D (7), A–G (8), B–D (4), B–G (2), C–D (9), D–G (1). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI97.** [NAT, 1 mark] An undirected graph has edges S–A (7), S–C (2), S–D (5), A–G (6), B–C (1), B–D (4), B–G (6), C–D (3), C–G (3), D–G (5). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI98.** [NAT, 1 mark] An undirected graph has edges S–B (6), S–D (3), A–B (1), A–D (8), B–C (8), B–D (9), B–G (3), C–G (4). Uniform-cost search from S finds the least-cost path to G. The cost of this path is ______.

**AI99.** [NAT, 2 marks] In the undirected graph with edges S–C (6), S–D (1), S–G (4), A–B (3), A–C (1), B–G (1), C–G (5), the goal is G and the heuristic values are h(S) = 2, h(A) = 4, h(B) = 0, h(C) = 8, h(D) = 4 (h(G) = 0). The number of non-goal nodes (S, A, B, C, D) for which the heuristic is admissible is ______.

**AI100.** [NAT, 1 mark] In the undirected graph with edges S–A (2), S–B (7), S–D (4), B–C (6), B–G (4), C–D (1), the goal is G. The true shortest-path cost from S to G is ______.

**AI101.** [NAT, 2 marks] In the undirected graph with edges S–A (1), S–B (9), S–G (1), A–B (4), A–C (1), A–D (5), B–C (1), B–G (7), C–G (2), D–G (8), the goal is G and the heuristic values are h(S) = 3, h(A) = 1, h(B) = 3, h(C) = 1, h(D) = 9 (h(G) = 0). The number of non-goal nodes (S, A, B, C, D) for which the heuristic is admissible is ______.

**AI102.** [NAT, 2 marks] In the undirected graph with edges S–A (8), S–B (3), S–C (8), S–D (6), S–G (1), A–D (2), C–G (7), the goal is G and the heuristic values are h(S) = 1, h(A) = 7, h(B) = 3, h(C) = 5, h(D) = 6 (h(G) = 0). The number of non-goal nodes (S, A, B, C, D) for which the heuristic is admissible is ______.

**AI103.** [NAT, 1 mark] In the undirected graph with edges S–A (8), S–C (2), S–G (7), A–D (5), A–G (5), B–C (2), B–D (5), C–D (1), the goal is G. The true shortest-path cost from S to G is ______.

**AI104.** [NAT, 1 mark] In the undirected graph with edges S–C (2), S–D (2), S–G (5), A–C (7), A–G (3), B–D (8), B–G (9), C–D (2), D–G (6), the goal is G. The true shortest-path cost from S to G is ______.

**AI105.** [NAT, 1 mark] In the undirected graph with edges S–B (6), S–G (8), A–B (5), A–C (3), B–D (6), B–G (3), C–G (4), the goal is G. The true shortest-path cost from S to G is ______.

**AI106.** [NAT, 1 mark] In the undirected graph with edges S–A (6), S–B (9), S–C (3), S–G (5), A–B (3), A–C (7), C–G (9), D–G (8), the goal is G. The true shortest-path cost from S to G is ______.

**AI107.** [NAT, 1 mark] In the undirected graph with edges S–C (5), S–D (4), A–B (5), A–C (6), A–D (5), A–G (2), B–C (1), B–D (1), B–G (9), C–D (8), C–G (3), D–G (8), the goal is G. The true shortest-path cost from S to G is ______.

**AI108.** [NAT, 2 marks] In the undirected graph with edges S–A (1), S–B (4), S–C (5), S–D (4), S–G (5), A–B (3), A–C (1), A–D (4), B–D (7), C–D (2), D–G (5), the goal is G and the heuristic values are h(S) = 8, h(A) = 4, h(B) = 10, h(C) = 6, h(D) = 5 (h(G) = 0). The number of non-goal nodes (S, A, B, C, D) for which the heuristic is admissible is ______.


## Statements & concepts

**AI109.** [MSQ, 2 marks] Which of the following statements about uninformed search are TRUE?

(A) BFS is complete on finite graphs  
(B) BFS finds a shallowest solution  
(C) DFS always finds the shallowest solution  
(D) Uniform-cost search finds a least-cost path for positive step costs

**AI110.** [MSQ, 2 marks] Which of the following are TRUE about A* search?

(A) It uses f(n) = g(n) + h(n)  
(B) With an admissible h it finds an optimal path (tree search)  
(C) h(n) = 0 turns it into uniform-cost search  
(D) An admissible heuristic may overestimate the true cost

**AI111.** [MSQ, 2 marks] Which of the following are TRUE about alpha–beta pruning?

(A) It gives the same root value as minimax  
(B) It can reduce the number of nodes evaluated  
(C) Its effectiveness depends on move ordering  
(D) It changes the optimal move chosen by minimax

**AI112.** [MSQ, 2 marks] Which of the following first-order logic statements are valid (true in every interpretation)?

(A) ∀x P(x) → ∃x P(x)  
(B) ¬∃x P(x) ↔ ∀x ¬P(x)  
(C) ∃x ∀y R(x, y) → ∀y ∃x R(x, y)  
(D) ∀x ∃y R(x, y) → ∃y ∀x R(x, y)

**AI113.** [MSQ, 2 marks] Which of the following are TRUE about propositional logic?

(A) A formula is a tautology if it is true under every assignment  
(B) An unsatisfiable formula has no model  
(C) p → q is equivalent to ¬p ∨ q  
(D) Modus ponens: from p and p → q we can infer ¬q

**AI114.** [MSQ, 2 marks] Which of the following are TRUE about Bayesian networks?

(A) The joint distribution factorises as ΠP(Xᵢ | parents)  
(B) Fewer parameters are needed than the full joint table when the graph is sparse  
(C) Observing the common child of two parents can make them dependent  
(D) An edge A → B means A is the only cause of B

**AI115.** [MSQ, 2 marks] Which of the following are TRUE about inference in Bayesian networks?

(A) Variable elimination is an exact method  
(B) Rejection sampling is an approximate method  
(C) Likelihood weighting is an approximate method  
(D) Variable elimination always gives an approximate answer

**AI116.** [MSQ, 2 marks] Which of the following are TRUE about minimax search?

(A) MAX picks the highest value  
(B) MIN picks the lowest value  
(C) It assumes the opponent plays optimally  
(D) It can only be used for games with more than two players


## Answers and solutions

- **AI1**: 8 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI2**: 9 — Take the min at each MIN node, then the max of those.
- **AI3**: 9 — Take the min at each MIN node, then the max of those.
- **AI4**: 7 — Take the min at each MIN node, then the max of those.
- **AI5**: 7 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI6**: 7 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI7**: 8 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI8**: 6 — Take the min at each MIN node, then the max of those.
- **AI9**: 7 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI10**: 6 — Take the min at each MIN node, then the max of those.
- **AI11**: 7 — Take the min at each MIN node, then the max of those.
- **AI12**: 7 — Take the min at each MIN node, then the max of those.
- **AI13**: 8 — At each MIN node, stop after a leaf that is ≤ the current best (α) at the root.
- **AI14**: 4 — Take the min at each MIN node, then the max of those.
- **AI15**: 0.475 — P(C=1) = Σ P(a)P(b)P(C=1|a,b).
- **AI16**: 0.096 — P(A=1,B=1|C=1) = P(A=1)P(B=1)P(C=1|1,1)/P(C=1).
- **AI17**: 0.300 — P(A=1,B=1|C=1) = P(A=1)P(B=1)P(C=1|1,1)/P(C=1).
- **AI18**: 0.435 — P(A=1,B=1|C=1) = P(A=1)P(B=1)P(C=1|1,1)/P(C=1).
- **AI19**: 0.470 — P(C=1) = Σ P(a)P(b)P(C=1|a,b).
- **AI20**: 0.161 — P(A=1,B=1|C=1) = P(A=1)P(B=1)P(C=1|1,1)/P(C=1).
- **AI21**: 0.235 — P(A=1,B=1|C=1) = P(A=1)P(B=1)P(C=1|1,1)/P(C=1).
- **AI22**: 0.370 — P(C=1) = Σ P(a)P(b)P(C=1|a,b).
- **AI23**: 0.362 — Sum out A, then B.
- **AI24**: 0.316 — Sum out A, then B.
- **AI25**: 0.396 — Sum out A, then B.
- **AI26**: 0.610 — Sum out A, then B.
- **AI27**: 0.438 — Sum out A, then B.
- **AI28**: 0.520 — Sum out A, then B.
- **AI29**: 4 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI30**: 14 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI31**: 18 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI32**: 10 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI33**: 15 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI34**: 13 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI35**: 16 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI36**: 12 — Each node needs 2^(#parents) numbers (P(X=1|parents)).
- **AI37**: C — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI38**: B — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI39**: D — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI40**: C — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI41**: C — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI42**: D — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI43**: A — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI44**: C — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI45**: A — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI46**: D — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI47**: C — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI48**: D — Apply d-separation (or: moralise the ancestral graph, remove the observed nodes, and test connectivity).
- **AI49**: 30 — Expected accepted samples = n·P(A=1, B=1).
- **AI50**: 20.0 — n·P(A=1)P(B=1).
- **AI51**: 160.0 — n·P(A=1)P(B=1).
- **AI52**: 5 — Expected accepted samples = n·P(A=1, B=1).
- **AI53**: 7 — Evaluate the formula on all 8 truth assignments.
- **AI54**: 6 — Evaluate the formula on all 8 truth assignments.
- **AI55**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI56**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI57**: 0 — Evaluate the formula on all 8 truth assignments.
- **AI58**: 8 — Evaluate the formula on all 8 truth assignments.
- **AI59**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI60**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI61**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI62**: 4 — Evaluate the formula on all 8 truth assignments.
- **AI63**: D — Check all truth assignments.
- **AI64**: D — Check all truth assignments.
- **AI65**: A — Check all truth assignments.
- **AI66**: D — Check all truth assignments.
- **AI67**: D — Check all truth assignments.
- **AI68**: A — Check all truth assignments.
- **AI69**: B — Check all truth assignments.
- **AI70**: B — Check all truth assignments.
- **AI71**: D — Check all truth assignments.
- **AI72**: A — Check all truth assignments.
- **AI73**: B — KB entails α iff α is true in every model of KB.
- **AI74**: A — KB entails α iff α is true in every model of KB.
- **AI75**: B — KB entails α iff α is true in every model of KB.
- **AI76**: B — KB entails α iff α is true in every model of KB.
- **AI77**: B — KB entails α iff α is true in every model of KB.
- **AI78**: B — KB entails α iff α is true in every model of KB.
- **AI79**: A — KB entails α iff α is true in every model of KB.
- **AI80**: D — KB entails α iff α is true in every model of KB.
- **AI81**: A — KB entails α iff α is true in every model of KB.
- **AI82**: C — KB entails α iff α is true in every model of KB.
- **AI83**: A — Compare their truth tables.
- **AI84**: C — Compare their truth tables.
- **AI85**: B — Compare their truth tables.
- **AI86**: C — Compare their truth tables.
- **AI87**: A — Compare their truth tables.
- **AI88**: A — Compare their truth tables.
- **AI89**: A — Compare their truth tables.
- **AI90**: B — Compare their truth tables.
- **AI91**: 5 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI92**: 4 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI93**: 8 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI94**: 9 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI95**: 12 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI96**: 5 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI97**: 5 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI98**: 9 — Uniform-cost search returns the cheapest path (as Dijkstra's algorithm does).
- **AI99**: 4 — A heuristic is admissible if h(n) ≤ true cost from n to G for every node.
- **AI100**: 11 — Shortest path length from S to G.
- **AI101**: 3 — A heuristic is admissible if h(n) ≤ true cost from n to G for every node.
- **AI102**: 5 — A heuristic is admissible if h(n) ≤ true cost from n to G for every node.
- **AI103**: 7 — Shortest path length from S to G.
- **AI104**: 5 — Shortest path length from S to G.
- **AI105**: 8 — Shortest path length from S to G.
- **AI106**: 5 — Shortest path length from S to G.
- **AI107**: 8 — Shortest path length from S to G.
- **AI108**: 3 — A heuristic is admissible if h(n) ≤ true cost from n to G for every node.
- **AI109**: A, B, D — DFS can return a deeper solution first.
- **AI110**: A, B, C — Admissible means never overestimating.
- **AI111**: A, B, C — Pruning never changes the result.
- **AI112**: A, B, C — ∀∃ does not imply ∃∀.
- **AI113**: A, B, C — Modus ponens infers q.
- **AI114**: A, B, C — Edges encode conditional dependence, not exclusive causation.
- **AI115**: A, B, C — Variable elimination is exact.
- **AI116**: A, B, C — Basic minimax is for two-player zero-sum games.
