# GATE DA — Linear Algebra practice (original)

125 original questions (MCQ, MSQ and NAT) with answers and solutions. Numerical answers were computed exactly with SymPy and cross-checked against NumPy while generating (determinant, rank, solutions, singular values).


## Determinant & trace

**LA1.** [NAT, 1 mark] The determinant of the matrix A = [1  -3; 0  -1] (rows separated by semicolons) is ______.

**LA2.** [NAT, 2 marks] The determinant of the matrix A = [-2  3  2; 2  -1  -3; -2  1  4] (rows separated by semicolons) is ______.

**LA3.** [NAT, 1 mark] The determinant of the matrix A = [-3  -1; 4  -1] (rows separated by semicolons) is ______.

**LA4.** [NAT, 2 marks] The determinant of the matrix A = [-1  2  2; 0  2  -1; -1  2  2] (rows separated by semicolons) is ______.

**LA5.** [NAT, 1 mark] The determinant of the matrix A = [3  -1; 4  2] (rows separated by semicolons) is ______.

**LA6.** [NAT, 2 marks] The determinant of the matrix A = [-2  -2  3; 4  0  4; -3  -1  0] (rows separated by semicolons) is ______.

**LA7.** [NAT, 1 mark] The determinant of the matrix A = [-3  -3; 1  0] (rows separated by semicolons) is ______.

**LA8.** [NAT, 1 mark] The determinant of the matrix A = [-3  0; 2  1] (rows separated by semicolons) is ______.

**LA9.** [NAT, 1 mark] A is a 2×2 matrix with det(A) = -2. The value of det(3A) is ______.

**LA10.** [NAT, 1 mark] A is a 3×3 matrix with det(A) = 2. The value of det(2A) is ______.

**LA11.** [NAT, 1 mark] A is a square matrix with det(A) = 4. The value of det(Aᵀ·A) is ______.

**LA12.** [MCQ, 1 mark] A is an invertible matrix with det(A) = -3. The value of det(A⁻¹) is

(A) 3  
(B) -1/3  
(C) 1/3  
(D) -3

**LA13.** [MCQ, 1 mark] A is an invertible matrix with det(A) = 4. The value of det(A⁻¹) is

(A) 1/4  
(B) -4  
(C) -1/4  
(D) 16

**LA14.** [MCQ, 1 mark] A is an invertible matrix with det(A) = 3. The value of det(A⁻¹) is

(A) 3  
(B) 1/3  
(C) -1/3  
(D) -3

**LA15.** [NAT, 1 mark] A is a square matrix with det(A) = 5. The value of det(A³) is ______.

**LA16.** [NAT, 1 mark] A is a square matrix with det(A) = -2. The value of det(A³) is ______.


## Eigenvalues & eigenvectors

**LA17.** [NAT, 1 mark] A = [3  1; 0  1] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA18.** [NAT, 1 mark] A = [-3  3  4; 0  6  3; 0  0  6] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA19.** [NAT, 1 mark] A = [-2  -2; 0  2] is an upper-triangular matrix. The product of its eigenvalues is ______.

**LA20.** [NAT, 2 marks] A = [-2  3  1; 0  -2  -2; 0  0  3] is an upper-triangular matrix. The trace of A² is ______.

**LA21.** [NAT, 1 mark] A = [2  1; 0  1] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA22.** [NAT, 1 mark] A = [3  -1  4; 0  1  0; 0  0  1] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA23.** [NAT, 1 mark] A = [-3  0  -2; 0  2  0; 0  0  4] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA24.** [NAT, 1 mark] A = [5  2  1; 0  5  0; 0  0  3] is an upper-triangular matrix. The sum of its eigenvalues is ______.

**LA25.** [NAT, 1 mark] A = [0  4; 0  6] is an upper-triangular matrix. The product of its eigenvalues is ______.

**LA26.** [NAT, 1 mark] A = [-2  2  4; 0  4  4; 0  0  5] is an upper-triangular matrix. The product of its eigenvalues is ______.

**LA27.** [NAT, 2 marks] The smallest eigenvalue of A = [-1  2; -2  4] is ______.

**LA28.** [NAT, 2 marks] The smallest eigenvalue of A = [-8  5; -10  7] is ______.

**LA29.** [NAT, 2 marks] The smallest eigenvalue of A = [3  -5; 0  -2] is ______.

**LA30.** [NAT, 2 marks] The smallest eigenvalue of A = [3  -6; 0  -3] is ______.

**LA31.** [NAT, 2 marks] The smallest eigenvalue of A = [3  -6; 3  -6] is ______.

**LA32.** [NAT, 2 marks] The smallest eigenvalue of A = [11  -7; 14  -10] is ______.

**LA33.** [NAT, 2 marks] The smallest eigenvalue of A = [6  -1; 2  3] is ______.

**LA34.** [NAT, 2 marks] The smallest eigenvalue of A = [-1  12; 0  5] is ______.

**LA35.** [NAT, 2 marks] A 3×3 matrix has eigenvalues -2, 3 and 4 (all non-zero). The trace of A⁻¹, multiplied by -24 (to make the answer an integer), is ______.

**LA36.** [NAT, 2 marks] A 3×3 matrix A has eigenvalues -2, -1, 3. The determinant of A + 4I is ______.

**LA37.** [NAT, 1 mark] A 3×3 matrix A has eigenvalues 1, 2, 3. The trace of A³ is ______.

**LA38.** [NAT, 2 marks] A 3×3 matrix A has eigenvalues -1, 2, 4. The determinant of A + 1I is ______.

**LA39.** [NAT, 2 marks] A 3×3 matrix A has eigenvalues -2, 3, 5. The determinant of A + 1I is ______.

**LA40.** [NAT, 2 marks] A 3×3 matrix A has eigenvalues 1, 4, 5. The determinant of A + 2I is ______.

**LA41.** [NAT, 1 mark] A 3×3 matrix A has eigenvalues 2, 4, 5. The trace of A² is ______.

**LA42.** [NAT, 2 marks] A 3×3 matrix has eigenvalues 1, 3 and 5 (all non-zero). The trace of A⁻¹, multiplied by 15 (to make the answer an integer), is ______.


## Projection & special matrices

**LA43.** [NAT, 2 marks] The matrix I − (1/5)·11ᵀ is an 5×5 projection matrix (1 is the all-ones vector). Its rank is ______.

**LA44.** [MCQ, 1 mark] The only possible eigenvalues of a real projection matrix P (with P² = P) are

(A) 0 and 1  
(B) 0 and 2  
(C) any real numbers  
(D) −1 and 1

**LA45.** [NAT, 2 marks] The matrix I − (1/3)·11ᵀ is an 3×3 projection matrix (1 is the all-ones vector). Its rank is ______.

**LA46.** [NAT, 2 marks] P = u·uᵀ/(uᵀu) with u = (1, 3) is a projection matrix. Its trace is ______.

**LA47.** [NAT, 2 marks] The matrix I − (1/6)·11ᵀ is an 6×6 projection matrix (1 is the all-ones vector). Its rank is ______.

**LA48.** [NAT, 2 marks] P = u·uᵀ/(uᵀu) with u = (3, 3) is a projection matrix. Its trace is ______.

**LA49.** [MCQ, 1 mark] A real orthogonal matrix Q (QᵀQ = I) must have determinant equal to

(A) +1 or −1  
(B) only +1  
(C) any non-zero real number  
(D) only −1


## Quadratic forms

**LA50.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [3  -3; -3  2] is

(A) Negative definite  
(B) Positive semi-definite but not positive definite  
(C) Positive definite  
(D) Not positive semi-definite

**LA51.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [2  -1; -1  5] is

(A) Negative definite  
(B) Positive semi-definite but not positive definite  
(C) Positive definite  
(D) Not positive semi-definite

**LA52.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [1  -1; -1  2] is

(A) Not positive semi-definite  
(B) Positive definite  
(C) Positive semi-definite but not positive definite  
(D) Negative definite

**LA53.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [2  -3; -3  5] is

(A) Positive semi-definite but not positive definite  
(B) Negative definite  
(C) Not positive semi-definite  
(D) Positive definite

**LA54.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [2  2; 2  3] is

(A) Not positive semi-definite  
(B) Positive semi-definite but not positive definite  
(C) Positive definite  
(D) Negative definite

**LA55.** [MCQ, 2 marks] The quadratic form xᵀAx with A = [5  -1; -1  2] is

(A) Negative definite  
(B) Not positive semi-definite  
(C) Positive definite  
(D) Positive semi-definite but not positive definite


## Rank, nullity & systems

**LA56.** [NAT, 2 marks] The nullity of the 4×4 matrix A = [2  -2  3  -1; 2  0  1  3; -1  -1  -2  3; 0  -1  1  -2] is ______.

**LA57.** [NAT, 2 marks] The rank of the matrix A = [3  1  -1  2; 6  2  -2  0; -6  -2  2  -2; 3  1  -1  0] is ______.

**LA58.** [NAT, 2 marks] The rank of the matrix A = [-1  -1  -2; -2  -2  -4; 0  0  0] is ______.

**LA59.** [NAT, 2 marks] The nullity of the 4×4 matrix A = [3  0  2  -1; -6  0  -4  2; 0  0  0  0; 3  0  2  -1] is ______.

**LA60.** [NAT, 2 marks] The rank of the matrix A = [0  0  0  0; 2  6  -4  -4; 1  3  -2  -2; 1  3  -2  -2] is ______.

**LA61.** [NAT, 2 marks] The nullity of the 4×4 matrix A = [0  2  -1  0; -1  1  0  -2; -1  1  0  -2; 1  -5  2  2] is ______.

**LA62.** [NAT, 2 marks] The nullity of the 3×3 matrix A = [-1  0  -1; -2  0  -2; -2  0  -2] is ______.

**LA63.** [NAT, 2 marks] The nullity of the 3×3 matrix A = [0  0  0; 2  1  -1; -1  0  2] is ______.

**LA64.** [NAT, 1 mark] A is a 6×4 matrix of rank 1. The dimension of its null space {x : Ax = 0} is ______.

**LA65.** [NAT, 1 mark] A is a 4×5 matrix of rank 3. The dimension of its null space {x : Ax = 0} is ______.

**LA66.** [NAT, 1 mark] A is a 6×4 matrix of rank 2. The dimension of its null space {x : Ax = 0} is ______.

**LA67.** [NAT, 1 mark] A is a 3×6 matrix of rank 1. The dimension of its null space {x : Ax = 0} is ______.

**LA68.** [NAT, 2 marks] For the system with coefficient matrix A = [2  4  0; 4  -2  0; 3  -2  -2] and right-hand side b = (-4, 2, 0), the value of x1 is ______.

**LA69.** [NAT, 2 marks] For the system with coefficient matrix A = [0  0  -1; 4  -2  4; -2  0  4] and right-hand side b = (-1, -4, 6), the value of x1 is ______.

**LA70.** [NAT, 2 marks] For the system with coefficient matrix A = [2  2  1; 0  1  0; 2  1  -1] and right-hand side b = (14, 4, 14), the value of x2 is ______.

**LA71.** [NAT, 2 marks] For the system with coefficient matrix A = [2  4  2; 4  -1  0; 4  3  2] and right-hand side b = (16, -2, 14), the value of x2 is ______.

**LA72.** [NAT, 2 marks] For the system with coefficient matrix A = [-2  3  1; 1  2  -1; 0  -1  4] and right-hand side b = (-1, -12, 19), the value of x2 is ______.

**LA73.** [NAT, 2 marks] For the system with coefficient matrix A = [1  3  3; 2  0  0; 3  3  2] and right-hand side b = (3, 0, 1), the value of x2 is ______.

**LA74.** [MCQ, 2 marks] The system Ax = b with A = [2  0  0; -2  2  1; 2  -2  -1] and b = (6, -10, 10) has

(A) Exactly two solutions  
(B) Unique solution  
(C) Infinitely many solutions  
(D) No solution

**LA75.** [MCQ, 2 marks] The system Ax = b with A = [-2  -1  -1; -2  -1  -1; -2  -1  -1] and b = (-4, -4, -4) has

(A) Unique solution  
(B) No solution  
(C) Exactly two solutions  
(D) Infinitely many solutions

**LA76.** [MCQ, 2 marks] The system Ax = b with A = [2  0  -1; -2  -1  1; 3  1  1] and b = (5, -6, 6) has

(A) Exactly two solutions  
(B) Unique solution  
(C) No solution  
(D) Infinitely many solutions

**LA77.** [MCQ, 2 marks] The system Ax = b with A = [2  0  2; -1  0  3; -2  0  -2] and b = (6, 5, -6) has

(A) Exactly two solutions  
(B) Infinitely many solutions  
(C) No solution  
(D) Unique solution

**LA78.** [MCQ, 2 marks] The system Ax = b with A = [0  3  3; 1  0  1; 1  0  1] and b = (6, 2, 4) has

(A) Exactly two solutions  
(B) No solution  
(C) Unique solution  
(D) Infinitely many solutions

**LA79.** [MCQ, 2 marks] The system Ax = b with A = [-2  1  1; 2  2  0; 0  6  2] and b = (-1, 0, 0) has

(A) Unique solution  
(B) No solution  
(C) Infinitely many solutions  
(D) Exactly two solutions

**LA80.** [MCQ, 2 marks] The entry in row 1, column 1 of A⁻¹ for A = [2  1; 0  -1] is

(A) 1/2  
(B) 3/2  
(C) -1/2  
(D) -1

**LA81.** [MCQ, 2 marks] The entry in row 1, column 1 of A⁻¹ for A = [-1  3; 2  -3] is

(A) 2  
(B) -3  
(C) 1  
(D) -1

**LA82.** [MCQ, 2 marks] The entry in row 2, column 2 of A⁻¹ for A = [-1  0; -2  5] is

(A) -1/5  
(B) 6/5  
(C) 1/5  
(D) -1

**LA83.** [MCQ, 2 marks] The entry in row 1, column 1 of A⁻¹ for A = [3  4; -1  -3] is

(A) -3  
(B) 3/5  
(C) -3/5  
(D) 8/5

**LA84.** [MCQ, 2 marks] The entry in row 1, column 2 of A⁻¹ for A = [-3  2; 1  0] is

(A) 2  
(B) -1  
(C) 1  
(D) -2


## SVD & decompositions

**LA85.** [NAT, 2 marks] The sum of the squares of the singular values of A = [3  0; 0  -2] is ______.

**LA86.** [NAT, 1 mark] The largest singular value of the diagonal matrix [7  0; 0  -5] is ______.

**LA87.** [NAT, 2 marks] The sum of the squares of the singular values of A = [7  0; 0  -3] is ______.

**LA88.** [NAT, 1 mark] The largest singular value of the diagonal matrix [4  0; 0  -2] is ______.

**LA89.** [NAT, 2 marks] The sum of the squares of the singular values of A = [5  0; 0  -3] is ______.

**LA90.** [NAT, 2 marks] A = [-3  -2; 1  1]. The sum of squares of the singular values of A is ______.

**LA91.** [NAT, 2 marks] A = [-2  4  1; -2  3  0; -3  -1  3]. The sum of squares of the singular values of A is ______.

**LA92.** [NAT, 2 marks] A = [3  2; 2  -3]. The sum of squares of the singular values of A is ______.

**LA93.** [NAT, 2 marks] A = [2  -2; 3  1]. The sum of squares of the singular values of A is ______.

**LA94.** [NAT, 1 mark] The LU decomposition (L unit lower-triangular) of A = [1  2; 2  2] is computed by Gaussian elimination without row exchange. The entry l₂₁ of L is ______.

**LA95.** [NAT, 1 mark] The LU decomposition (L unit lower-triangular) of A = [1  5; 4  7] is computed by Gaussian elimination without row exchange. The entry l₂₁ of L is ______.

**LA96.** [NAT, 1 mark] The LU decomposition (L unit lower-triangular) of A = [4  4; 4  5] is computed by Gaussian elimination without row exchange. The entry l₂₁ of L is ______.


## Statements & concepts

**LA97.** [MSQ, 2 marks] Which of the following are subspaces of ℝ³?

(A) {(x, y, z): x + y + z = 0}  
(B) {(x, y, z): x + y + z = 1}  
(C) {(x, y, z): x = y}  
(D) {(x, y, z): z ≥ 0}

**LA98.** [MSQ, 2 marks] Which of the following are TRUE for an n×n matrix A?

(A) A is invertible iff det(A) ≠ 0  
(B) A is invertible iff rank(A) = n  
(C) If A has a zero eigenvalue, A is invertible  
(D) Eigenvectors for distinct eigenvalues are linearly independent

**LA99.** [MSQ, 2 marks] Which of the following are TRUE for a real symmetric matrix?

(A) All eigenvalues are real  
(B) Eigenvectors for distinct eigenvalues are orthogonal  
(C) It is always positive definite  
(D) It is diagonalisable by an orthogonal matrix

**LA100.** [MSQ, 2 marks] Which of the following are TRUE for an orthogonal matrix Q?

(A) QᵀQ = I  
(B) ‖Qx‖ = ‖x‖ for all x  
(C) det(Q) = 0  
(D) Q⁻¹ = Qᵀ

**LA101.** [MSQ, 2 marks] Which of the following are TRUE about a projection matrix P with P² = P?

(A) Its eigenvalues are 0 or 1  
(B) I − P is also a projection  
(C) P is always invertible  
(D) trace(P) = rank(P)

**LA102.** [MSQ, 2 marks] Which of the following are TRUE about SVD A = UΣVᵀ?

(A) The singular values are non-negative  
(B) The columns of U are orthonormal  
(C) The rank of A equals the number of non-zero singular values  
(D) Σ must be a square matrix with eigenvalues of A on its diagonal

**LA103.** [MSQ, 2 marks] Which of the following statements about a system Ax = b are TRUE?

(A) If rank(A) = rank([A|b]) the system is consistent  
(B) If rank(A) < rank([A|b]) there is no solution  
(C) If rank(A) = number of unknowns and the system is consistent, the solution is unique  
(D) A homogeneous system Ax = 0 may have no solution

**LA104.** [MSQ, 2 marks] Which of the following are TRUE for similar matrices A and B = P⁻¹AP?

(A) They have the same eigenvalues  
(B) They have the same determinant  
(C) They have the same trace  
(D) They have the same eigenvectors


## Vector spaces

**LA105.** [NAT, 2 marks] The dimension of the subspace of ℝ³ spanned by the vectors (0, 1, 2), (-1, 2, 3), (-1, 1, 0) is ______.

**LA106.** [NAT, 2 marks] The dimension of the subspace of ℝ³ spanned by the vectors (-1, 0, 0), (3, 0, 3), (1, -2, 1), (-1, 1, 1) is ______.

**LA107.** [NAT, 2 marks] The dimension of the subspace of ℝ³ spanned by the vectors (3, -2, 3), (0, 0, 1), (2, 2, -1) is ______.

**LA108.** [NAT, 2 marks] The dimension of the subspace of ℝ³ spanned by the vectors (0, -1, 0), (2, 1, 1), (-2, 1, -2), (3, 0, -1) is ______.

**LA109.** [NAT, 2 marks] The dimension of the subspace of ℝ³ spanned by the vectors (2, 0, 2), (3, 2, 0), (2, -2, -2) is ______.

**LA110.** [MCQ, 2 marks] The vectors (3, 2, 2), (-2, -1, 3), (1, 0, 0) in ℝ³ are

(A) orthogonal to each other  
(B) a basis only if their sum is zero  
(C) linearly independent  
(D) linearly dependent

**LA111.** [MCQ, 2 marks] The vectors (2, 1, 1), (3, -2, 3), (3, 0, 3) in ℝ³ are

(A) orthogonal to each other  
(B) linearly independent  
(C) linearly dependent  
(D) a basis only if their sum is zero

**LA112.** [MCQ, 2 marks] The vectors (1, -1, -1), (-1, 0, 0), (-1, 1, 2) in ℝ³ are

(A) linearly dependent  
(B) linearly independent  
(C) orthogonal to each other  
(D) a basis only if their sum is zero

**LA113.** [MCQ, 2 marks] The vectors (-2, 3, 3), (-2, 0, -1), (2, 1, -2) in ℝ³ are

(A) linearly dependent  
(B) orthogonal to each other  
(C) linearly independent  
(D) a basis only if their sum is zero


## Vectors, projections & orthogonality

**LA114.** [MCQ, 2 marks] The scalar c such that c·u is the orthogonal projection of v = (3, 5, 2) onto u = (4, 1, 3) is

(A) -23/26  
(B) 26/23  
(C) 23  
(D) 23/26

**LA115.** [NAT, 1 mark] The squared Euclidean norm ‖v‖² of v = (-1, 4) is ______.

**LA116.** [NAT, 1 mark] The squared Euclidean norm ‖v‖² of v = (5, 4, -2) is ______.

**LA117.** [NAT, 1 mark] The dot product of u = (3, 1, 1) and v = (2, 2, 5) is ______.

**LA118.** [MCQ, 2 marks] The scalar c such that c·u is the orthogonal projection of v = (4, 4, -3) onto u = (2, 2, 1) is

(A) -13/9  
(B) 13/9  
(C) 9/13  
(D) 13/3

**LA119.** [NAT, 1 mark] The squared Euclidean norm ‖v‖² of v = (-1, -2, 5) is ______.

**LA120.** [MCQ, 2 marks] The scalar c such that c·u is the orthogonal projection of v = (4, 3, -3) onto u = (2, 4, 1) is

(A) 17/22  
(B) 17  
(C) 17/21  
(D) 21/17

**LA121.** [MCQ, 2 marks] The scalar c such that c·u is the orthogonal projection of v = (5, -1, -3) onto u = (1, 2, 3) is

(A) -7/3  
(B) -2/5  
(C) -3/7  
(D) -6

**LA122.** [NAT, 1 mark] The vectors u = (4, 1, 1) and v = (3, -1, t) are orthogonal. The value of t is ______.

**LA123.** [NAT, 1 mark] The vectors u = (5, 4, 4) and v = (0, 2, t) are orthogonal. The value of t is ______.

**LA124.** [NAT, 1 mark] The vectors u = (1, 3, 2) and v = (1, 3, t) are orthogonal. The value of t is ______.

**LA125.** [NAT, 1 mark] The vectors u = (3, 3, 3) and v = (3, -2, t) are orthogonal. The value of t is ______.


## Answers and solutions

- **LA1**: -1 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA2**: -4 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA3**: 7 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA4**: 0 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA5**: 10 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA6**: 4 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA7**: 3 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA8**: -3 — Expand along a row or use the 2×2 / Sarrus rule.
- **LA9**: -18 — det(kA) = kⁿ·det(A) = 3^2 × -2.
- **LA10**: 16 — det(kA) = kⁿ·det(A) = 2^3 × 2.
- **LA11**: 16 — det(AᵀA) = det(Aᵀ)det(A) = det(A)².
- **LA12**: B — det(A⁻¹) = 1/det(A).
- **LA13**: A — det(A⁻¹) = 1/det(A).
- **LA14**: B — det(A⁻¹) = 1/det(A).
- **LA15**: 125 — det(Aᵏ) = det(A)ᵏ.
- **LA16**: -8 — det(Aᵏ) = det(A)ᵏ.
- **LA17**: 4 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA18**: 9 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA19**: -4 — The product of eigenvalues is det(A) = product of the diagonal entries.
- **LA20**: 17 — The eigenvalues of A² are the squares of those of A, and the trace is their sum.
- **LA21**: 3 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA22**: 5 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA23**: 3 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA24**: 13 — The sum of eigenvalues is the trace; for a triangular matrix the eigenvalues are the diagonal entries.
- **LA25**: 0 — The product of eigenvalues is det(A) = product of the diagonal entries.
- **LA26**: -40 — The product of eigenvalues is det(A) = product of the diagonal entries.
- **LA27**: 0 — Solve det(A − λI) = 0.
- **LA28**: -3 — Solve det(A − λI) = 0.
- **LA29**: -2 — Solve det(A − λI) = 0.
- **LA30**: -3 — Solve det(A − λI) = 0.
- **LA31**: -3 — Solve det(A − λI) = 0.
- **LA32**: -3 — Solve det(A − λI) = 0.
- **LA33**: 4 — Solve det(A − λI) = 0.
- **LA34**: -1 — Solve det(A − λI) = 0.
- **LA35**: -2 — Eigenvalues of A⁻¹ are 1/λ; multiply by the product of the λ.
- **LA36**: 42 — The eigenvalues of A + cI are λ + c.
- **LA37**: 36 — The eigenvalues of Aᵏ are λᵏ.
- **LA38**: 0 — The eigenvalues of A + cI are λ + c.
- **LA39**: -24 — The eigenvalues of A + cI are λ + c.
- **LA40**: 126 — The eigenvalues of A + cI are λ + c.
- **LA41**: 45 — The eigenvalues of Aᵏ are λᵏ.
- **LA42**: 23 — Eigenvalues of A⁻¹ are 1/λ; multiply by the product of the λ.
- **LA43**: 4 — It projects onto the subspace orthogonal to 1; the rank equals the trace = n − 1.
- **LA44**: A — If Pv = λv then P²v = λ²v = λv, so λ ∈ {0, 1}.
- **LA45**: 2 — It projects onto the subspace orthogonal to 1; the rank equals the trace = n − 1.
- **LA46**: 1 — The trace of a projection matrix equals its rank, which is 1 here.
- **LA47**: 5 — It projects onto the subspace orthogonal to 1; the rank equals the trace = n − 1.
- **LA48**: 1 — The trace of a projection matrix equals its rank, which is 1 here.
- **LA49**: A — det(QᵀQ) = det(Q)² = 1.
- **LA50**: D — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA51**: C — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA52**: B — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA53**: D — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA54**: C — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA55**: C — Check the eigenvalues (or the leading principal minors a > 0 and ac − b² > 0).
- **LA56**: 1 — Nullity = n − rank.
- **LA57**: 2 — Row-reduce and count the non-zero rows.
- **LA58**: 1 — Row-reduce and count the non-zero rows.
- **LA59**: 3 — Nullity = n − rank.
- **LA60**: 1 — Row-reduce and count the non-zero rows.
- **LA61**: 2 — Nullity = n − rank.
- **LA62**: 2 — Nullity = n − rank.
- **LA63**: 1 — Nullity = n − rank.
- **LA64**: 3 — Rank–nullity: nullity = (number of columns) − rank.
- **LA65**: 2 — Rank–nullity: nullity = (number of columns) − rank.
- **LA66**: 2 — Rank–nullity: nullity = (number of columns) − rank.
- **LA67**: 5 — Rank–nullity: nullity = (number of columns) − rank.
- **LA68**: 0 — Solve by elimination (or Cramer's rule).
- **LA69**: -1 — Solve by elimination (or Cramer's rule).
- **LA70**: 4 — Solve by elimination (or Cramer's rule).
- **LA71**: 2 — Solve by elimination (or Cramer's rule).
- **LA72**: -3 — Solve by elimination (or Cramer's rule).
- **LA73**: -1 — Solve by elimination (or Cramer's rule).
- **LA74**: C — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA75**: D — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA76**: B — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA77**: B — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA78**: B — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA79**: B — Compare rank(A), rank([A|b]) and the number of unknowns.
- **LA80**: A — A⁻¹ = adj(A)/det(A).
- **LA81**: C — A⁻¹ = adj(A)/det(A).
- **LA82**: C — A⁻¹ = adj(A)/det(A).
- **LA83**: B — A⁻¹ = adj(A)/det(A).
- **LA84**: C — A⁻¹ = adj(A)/det(A).
- **LA85**: 13 — Σσᵢ² = ‖A‖²_F, the sum of squares of all entries.
- **LA86**: 7 — Singular values are the absolute values of the diagonal entries.
- **LA87**: 58 — Σσᵢ² = ‖A‖²_F, the sum of squares of all entries.
- **LA88**: 4 — Singular values are the absolute values of the diagonal entries.
- **LA89**: 34 — Σσᵢ² = ‖A‖²_F, the sum of squares of all entries.
- **LA90**: 15 — Σσᵢ² = Σ (entries)² (Frobenius norm squared).
- **LA91**: 53 — Σσᵢ² = Σ (entries)² (Frobenius norm squared).
- **LA92**: 26 — Σσᵢ² = Σ (entries)² (Frobenius norm squared).
- **LA93**: 18 — Σσᵢ² = Σ (entries)² (Frobenius norm squared).
- **LA94**: 2 — l₂₁ = (a₂₁)/(a₁₁).
- **LA95**: 4 — l₂₁ = (a₂₁)/(a₁₁).
- **LA96**: 1 — l₂₁ = (a₂₁)/(a₁₁).
- **LA97**: A, C — A subspace must contain 0 and be closed under addition and scalar multiplication.
- **LA98**: A, B, D — A zero eigenvalue means det(A) = 0.
- **LA99**: A, B, D — Symmetric matrices need not be positive definite.
- **LA100**: A, B, D — Orthogonal matrices are invertible with det ±1.
- **LA101**: A, B, D — A projection other than I is singular.
- **LA102**: A, B, C — Singular values are square roots of eigenvalues of AᵀA, not eigenvalues of A.
- **LA103**: A, B, C — x = 0 always solves Ax = 0.
- **LA104**: A, B, C — Eigenvectors change by P.
- **LA105**: 3 — Dimension = rank of the matrix whose rows are the vectors.
- **LA106**: 3 — Dimension = rank of the matrix whose rows are the vectors.
- **LA107**: 3 — Dimension = rank of the matrix whose rows are the vectors.
- **LA108**: 3 — Dimension = rank of the matrix whose rows are the vectors.
- **LA109**: 3 — Dimension = rank of the matrix whose rows are the vectors.
- **LA110**: C — Compute the determinant: non-zero means independent.
- **LA111**: B — Compute the determinant: non-zero means independent.
- **LA112**: B — Compute the determinant: non-zero means independent.
- **LA113**: C — Compute the determinant: non-zero means independent.
- **LA114**: D — c = (u·v)/(u·u).
- **LA115**: 17 — Sum of squares of the components.
- **LA116**: 45 — Sum of squares of the components.
- **LA117**: 13 — Σ uᵢvᵢ.
- **LA118**: B — c = (u·v)/(u·u).
- **LA119**: 30 — Sum of squares of the components.
- **LA120**: C — c = (u·v)/(u·u).
- **LA121**: C — c = (u·v)/(u·u).
- **LA122**: -11 — Set u·v = 0 and solve for t.
- **LA123**: -2 — Set u·v = 0 and solve for t.
- **LA124**: -5 — Set u·v = 0 and solve for t.
- **LA125**: -1 — Set u·v = 0 and solve for t.
