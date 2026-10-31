# GATE DA — Calculus & Optimisation practice (original)

89 original questions (MCQ, MSQ and NAT) with answers and solutions. Answers were computed symbolically with SymPy; derivative answers and limits were re-checked by re-parsing the printed question, with no mismatches.


## Derivatives & Taylor series

**CO1.** [NAT, 1 mark] For f(x) = x^4 - 2x^2 + 3, the value of f′(1) is ______.

**CO2.** [NAT, 1 mark] For f(x) = 5x^3 + 3x^2 + 5x, the value of f′(1) is ______.

**CO3.** [NAT, 1 mark] For f(x) = x^3 + 2x^2 - 5x, the value of f′(1) is ______.

**CO4.** [NAT, 1 mark] For f(x) = x^3 - x + 1, the value of f′(-2) is ______.

**CO5.** [NAT, 1 mark] For f(x) = 5x^3 - 5x + 4, the value of f′(2) is ______.

**CO6.** [NAT, 1 mark] For f(x) = x^3 - 5x + 2, the value of f′(0) is ______.

**CO7.** [NAT, 1 mark] For f(x) = 3x^3 - 2x + 2, the value of f′(3) is ______.

**CO8.** [NAT, 1 mark] For f(x) = x^4 - 2x^2 + 1, the value of f′(2) is ______.

**CO9.** [NAT, 1 mark] For f(x) = 3x^4 + 3x^3 + 3x, the second derivative f″(3) is ______.

**CO10.** [NAT, 1 mark] For f(x) = 2x^4 + x^3 + 3x, the second derivative f″(2) is ______.

**CO11.** [NAT, 1 mark] For f(x) = 4x^4 + 5x^3 + 2x, the second derivative f″(1) is ______.

**CO12.** [NAT, 1 mark] For f(x) = x^4 + 3x^3 + 5x, the second derivative f″(2) is ______.

**CO13.** [MCQ, 1 mark] In the Maclaurin series of sin(3x), the coefficient of x³ is

(A) 9/2  
(B) -1/2  
(C) -9/2  
(D) -9

**CO14.** [MCQ, 1 mark] The coefficient of x⁵ in the Maclaurin series of 1/(1 − 3x) is

(A) 243  
(B) 15  
(C) 81  
(D) 121

**CO15.** [MCQ, 1 mark] In the Maclaurin series of e^(3x), the coefficient of x² is

(A) 9  
(B) 18  
(C) 9/2  
(D) 3/2

**CO16.** [NAT, 1 mark] For f(x) = cos(3x), the value of f″(0) is ______.

**CO17.** [MCQ, 1 mark] In the Maclaurin series of sin(1x), the coefficient of x³ is

(A) -1/2  
(B) -1/6  
(C) -1/3  
(D) 1/6

**CO18.** [MCQ, 1 mark] In the Maclaurin series of sin(2x), the coefficient of x³ is

(A) -8/3  
(B) -1/3  
(C) -4/3  
(D) 4/3

**CO19.** [NAT, 1 mark] For f(x) = cos(2x), the value of f″(0) is ______.

**CO20.** [NAT, 1 mark] For f(x) = cos(1x), the value of f″(0) is ______.

**CO21.** [MCQ, 1 mark] In the Maclaurin series of e^(1x), the coefficient of x² is

(A) 1/6  
(B) 2  
(C) 1/2  
(D) 1

**CO22.** [MCQ, 1 mark] In the Maclaurin series of e^(2x), the coefficient of x² is

(A) 4/3  
(B) 1  
(C) 8  
(D) 2


## Gradient descent

**CO23.** [NAT, 2 marks] Gradient descent with step size 1/2 is applied to f(x) = 2x², starting at x₀ = 4. After 2 updates, x equals ______ (2 decimals).

**CO24.** [NAT, 2 marks] Gradient descent with step size 1/2 is applied to f(x) = 4x², starting at x₀ = 4. After 1 update, x equals ______ (2 decimals).

**CO25.** [NAT, 2 marks] Gradient descent with step size 1/5 is applied to f(x) = 1x², starting at x₀ = 2. After 1 update, x equals ______ (2 decimals).

**CO26.** [NAT, 2 marks] Gradient descent with step size 1/5 is applied to f(x) = 1x², starting at x₀ = 5. After 3 updates, x equals ______ (2 decimals).

**CO27.** [NAT, 2 marks] Gradient descent with step size 1/10 is applied to f(x) = 1x², starting at x₀ = 10. After 1 update, x equals ______ (2 decimals).

**CO28.** [NAT, 2 marks] Gradient descent with step size 1/4 is applied to f(x) = 4x², starting at x₀ = 10. After 2 updates, x equals ______ (2 decimals).

**CO29.** [MCQ, 2 marks] Gradient descent on f(x) = 1x² converges to 0 from any starting point iff the step size η satisfies

(A) 0 < η < 1/1  
(B) 0 < η < 1/2  
(C) 0 < η < 2/1  
(D) η > 1/1

**CO30.** [MCQ, 2 marks] Gradient descent on f(x) = 4x² converges to 0 from any starting point iff the step size η satisfies

(A) η > 1/4  
(B) 0 < η < 4  
(C) 0 < η < 1/4  
(D) 0 < η < 2/4

**CO31.** [MCQ, 2 marks] Gradient descent on f(x) = 3x² converges to 0 from any starting point iff the step size η satisfies

(A) 0 < η < 1/3  
(B) 0 < η < 1/6  
(C) 0 < η < 2/3  
(D) η > 1/3


## Limits & continuity

**CO32.** [MCQ, 1 mark] The value of lim_{x→0} sin(5x)/x is

(A) 1  
(B) 5  
(C) 6  
(D) 0

**CO33.** [MCQ, 1 mark] The value of lim_{x→0} (x³ + 4x²)/x² is

(A) 4  
(B) -4  
(C) 1  
(D) 5

**CO34.** [MCQ, 1 mark] The value of lim_{x→0} sin(4x)/sin(3x) is

(A) 7/3  
(B) 4  
(C) 0  
(D) 4/3

**CO35.** [MCQ, 1 mark] The value of lim_{x→0} sin(3x)/x is

(A) 4  
(B) 3  
(C) 0  
(D) 1

**CO36.** [MCQ, 1 mark] The value of lim_{x→0} (e^(5x) − 1)/x is

(A) 6  
(B) -5  
(C) 0  
(D) 5

**CO37.** [MCQ, 1 mark] The value of lim_{x→∞} (3x² + 3x)/(5x² + x) is

(A) 8/5  
(B) 1  
(C) 3/5  
(D) 0

**CO38.** [MCQ, 1 mark] The value of lim_{x→0} (e^(4x) − 1)/x is

(A) 0  
(B) -4  
(C) 1  
(D) 4

**CO39.** [MCQ, 1 mark] The value of lim_{x→0} sin(2x)/sin(5x) is

(A) 5  
(B) -2/5  
(C) 2/5  
(D) 2

**CO40.** [MCQ, 1 mark] The value of lim_{x→∞} (5x² + 3x)/(2x² + x) is

(A) 2  
(B) -5/2  
(C) 5/2  
(D) 5

**CO41.** [MCQ, 1 mark] The value of lim_{x→0} (1 − cos(5x))/x² is

(A) 1  
(B) 0  
(C) 25/2  
(D) 5

**CO42.** [MCQ, 1 mark] The value of lim_{x→0} sin(4x)/x is

(A) 4  
(B) 1  
(C) 0  
(D) 6

**CO43.** [MCQ, 1 mark] The value of lim_{x→0} ln(1 + 3x)/x is

(A) 3  
(B) -3  
(C) 0  
(D) 4

**CO44.** [NAT, 1 mark] The function f(x) = 4x + k for x < 5, and f(x) = x² for x ≥ 5, is continuous at x = 5. The value of k is ______.

**CO45.** [NAT, 2 marks] Let f(x) = ax + k for x < 2, and f(x) = x² for x ≥ 2. If f is both continuous and differentiable at x = 2, then a + k equals ______.

**CO46.** [NAT, 1 mark] The function f(x) = 3x + k for x < 4, and f(x) = x² for x ≥ 4, is continuous at x = 4. The value of k is ______.

**CO47.** [NAT, 1 mark] The function f(x) = 2x + k for x < 2, and f(x) = x² for x ≥ 2, is continuous at x = 2. The value of k is ______.

**CO48.** [NAT, 2 marks] Let f(x) = ax + k for x < 3, and f(x) = x² for x ≥ 3. If f is both continuous and differentiable at x = 3, then a + k equals ______.

**CO49.** [NAT, 2 marks] Let f(x) = ax + k for x < 6, and f(x) = x² for x ≥ 6. If f is both continuous and differentiable at x = 6, then a + k equals ______.


## Maxima & minima

**CO50.** [NAT, 2 marks] The local minimum value of f(x) = x^3/3 - 5x^2/2 + 6x is ______ (rounded to 2 decimals).

**CO51.** [NAT, 2 marks] The local minimum value of f(x) = x^3 - 6x^2 is ______ (rounded to 2 decimals).

**CO52.** [NAT, 2 marks] The function f(x) = 2x^3/3 - 3x^2 + 4x has a local maximum at x = ______.

**CO53.** [NAT, 2 marks] The local minimum value of f(x) = 2x^3/3 - x^2 - 12x is ______ (rounded to 2 decimals).

**CO54.** [NAT, 2 marks] The function f(x) = x^3 - 9x^2 + 24x has a local maximum at x = ______.

**CO55.** [NAT, 2 marks] The local minimum value of f(x) = 2x^3/3 - 6x^2 + 16x is ______ (rounded to 2 decimals).

**CO56.** [NAT, 2 marks] The function f(x) = x^3 - 9x^2/2 + 6x has a local minimum at x = ______.

**CO57.** [NAT, 1 mark] The number of critical points (f′(x) = 0) of f(x) = x^3/3 - 9x is ______.

**CO58.** [NAT, 2 marks] The local minimum value of f(x) = 2x^3/3 - 5x^2 + 12x is ______ (rounded to 2 decimals).

**CO59.** [NAT, 2 marks] The function f(x) = 2x^3/3 + 4x^2 + 6x has a local maximum at x = ______.

**CO60.** [MCQ, 1 mark] The minimum of f(x) = 3x^2 - 2x + 6 over all real x occurs at x =

(A) 4/3  
(B) 1/3  
(C) 2/3  
(D) -1/3

**CO61.** [MCQ, 1 mark] The minimum of f(x) = 5x^2 + 4x + 7 over all real x occurs at x =

(A) 2/5  
(B) 7/5  
(C) 3/5  
(D) -2/5

**CO62.** [NAT, 2 marks] The minimum value of f(x) = 4x^2 - 7x - 2 over all real x is ______ (2 decimals).

**CO63.** [NAT, 2 marks] The minimum value of f(x) = 5x^2 - 6x - 3 over all real x is ______ (2 decimals).

**CO64.** [MCQ, 1 mark] The minimum of f(x) = x^2 - 3x - 2 over all real x occurs at x =

(A) 3  
(B) 5/2  
(C) 3/2  
(D) -1/2

**CO65.** [MCQ, 1 mark] The minimum of f(x) = 5x^2 - 8x + 2 over all real x occurs at x =

(A) -4/5  
(B) 8/5  
(C) 4/5  
(D) 1/5

**CO66.** [NAT, 2 marks] The minimum value of f(x) = x^3 - 9x^2 on the closed interval [-1, 5] is ______.

**CO67.** [NAT, 2 marks] The minimum value of f(x) = x^3 - 6x^2 + 1 on the closed interval [-1, 5] is ______.

**CO68.** [NAT, 2 marks] The maximum value of f(x) = x^3 - 3x^2 + 5 on the closed interval [-1, 4] is ______.

**CO69.** [NAT, 2 marks] The maximum value of f(x) = x^3 - 9x^2 + 3 on the closed interval [-1, 3] is ______.

**CO70.** [NAT, 2 marks] The minimum value of f(x) = x^3 - 6x^2 + 1 on the closed interval [-1, 3] is ______.

**CO71.** [NAT, 2 marks] The minimum value of f(x) = x + 4/x for x > 0 is ______.

**CO72.** [NAT, 2 marks] The minimum value of f(x) = x + 16/x for x > 0 is ______.

**CO73.** [NAT, 2 marks] The minimum value of f(x) = x + 64/x for x > 0 is ______.

**CO74.** [NAT, 2 marks] The minimum value of f(x) = x + 9/x for x > 0 is ______.

**CO75.** [MCQ, 1 mark] The function f(x) = x^2 + 3x is

(A) neither convex nor concave  
(B) linear  
(C) convex  
(D) concave

**CO76.** [MCQ, 1 mark] The function f(x) = 3x^2 + 2x is

(A) neither convex nor concave  
(B) convex  
(C) linear  
(D) concave


## Series & limits

**CO77.** [MCQ, 1 mark] The sum of the infinite series Σ_(n≥1) 1/(n(n+1)) is

(A) 2  
(B) 1  
(C) 1/2  
(D) 3/2

**CO78.** [MCQ, 1 mark] The sum of the infinite series 4 + 4/5 + 4/25 + … is

(A) 1  
(B) 16/5  
(C) 5  
(D) 20

**CO79.** [MCQ, 1 mark] The sum of the infinite series 2 + 2/5 + 2/25 + … is

(A) 10  
(B) 1/2  
(C) 5/2  
(D) 8/5

**CO80.** [MCQ, 1 mark] The sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + … is

(A) 1/2  
(B) 3/2  
(C) 1  
(D) 2

**CO81.** [MCQ, 1 mark] The sum of the infinite series 6 + 6/3 + 6/9 + … is

(A) 9  
(B) 2  
(C) 3  
(D) 18

**CO82.** [MCQ, 1 mark] The sum of the infinite series 3 + 3/3 + 3/9 + … is

(A) 9  
(B) 9/2  
(C) 1  
(D) 3/2

**CO83.** [MCQ, 1 mark] The sum of the infinite series 4 + 4/4 + 4/16 + … is

(A) 1  
(B) 16/3  
(C) 3  
(D) 4/3

**CO84.** [MCQ, 1 mark] The sum of the infinite series 5 + 5/4 + 5/16 + … is

(A) 20/3  
(B) 15/4  
(C) 5/4  
(D) 5/3


## Statements & concepts

**CO85.** [MSQ, 2 marks] Which of the following statements are TRUE?

(A) A differentiable function is continuous  
(B) A continuous function is differentiable  
(C) If f′(c) = 0 and f″(c) > 0 then c is a local minimum  
(D) If f′(c) = 0 then c is always a local extremum

**CO86.** [MSQ, 2 marks] Which of the following limits equal 1?

(A) lim_{x→0} sin x / x  
(B) lim_{x→0} (e^x − 1)/x  
(C) lim_{x→∞} (1 + 1/x)^x  
(D) lim_{x→0} (1 − cos x)/x²

**CO87.** [MSQ, 2 marks] Which of the following Taylor/Maclaurin expansions are correct?

(A) e^x = 1 + x + x²/2! + …  
(B) sin x = x − x³/3! + …  
(C) cos x = 1 − x²/2! + …  
(D) 1/(1 − x) = 1 + x + x² + … for |x| < 1

**CO88.** [MSQ, 2 marks] Which of the following functions are continuous but NOT differentiable at x = 0?

(A) |x|  
(B) x²  
(C) max(0, x)  
(D) x|x|

**CO89.** [MSQ, 2 marks] Which of the following statements about a function f on a closed interval [a, b] are TRUE?

(A) A continuous f attains its maximum on [a, b]  
(B) A global extremum can occur at an end point  
(C) f′(x) = 0 is needed for an end-point extremum  
(D) A global extremum can occur at a point where f′ = 0


## Answers and solutions

- **CO1**: 0 — f′(x) = 4x^3 - 4x; evaluate at x = 1.
- **CO2**: 26 — f′(x) = 15x^2 + 6x + 5; evaluate at x = 1.
- **CO3**: 2 — f′(x) = 3x^2 + 4x - 5; evaluate at x = 1.
- **CO4**: 11 — f′(x) = 3x^2 - 1; evaluate at x = -2.
- **CO5**: 55 — f′(x) = 15x^2 - 5; evaluate at x = 2.
- **CO6**: -5 — f′(x) = 3x^2 - 5; evaluate at x = 0.
- **CO7**: 79 — f′(x) = 9x^2 - 2; evaluate at x = 3.
- **CO8**: 24 — f′(x) = 4x^3 - 4x; evaluate at x = 2.
- **CO9**: 378 — f″(x) = 36x^2 + 18x.
- **CO10**: 108 — f″(x) = 24x^2 + 6x.
- **CO11**: 78 — f″(x) = 48x^2 + 30x.
- **CO12**: 84 — f″(x) = 12x^2 + 18x.
- **CO13**: C — sin(u) = u − u³/3! + …
- **CO14**: A — 1/(1−ax) = Σ aⁿxⁿ.
- **CO15**: C — e^(ax) = 1 + ax + a²x²/2! + …
- **CO16**: -9 — f″(x) = −9cos(3x), so f″(0) = −9.
- **CO17**: B — sin(u) = u − u³/3! + …
- **CO18**: C — sin(u) = u − u³/3! + …
- **CO19**: -4 — f″(x) = −4cos(2x), so f″(0) = −4.
- **CO20**: -1 — f″(x) = −1cos(1x), so f″(0) = −1.
- **CO21**: C — e^(ax) = 1 + ax + a²x²/2! + …
- **CO22**: D — e^(ax) = 1 + ax + a²x²/2! + …
- **CO23**: 4.00 — x ← x − η·f′(x) = x(1 − 2·2·1/2); apply 2 time(s).
- **CO24**: -12.00 — x ← x − η·f′(x) = x(1 − 2·4·1/2); apply 1 time(s).
- **CO25**: 1.20 — x ← x − η·f′(x) = x(1 − 2·1·1/5); apply 1 time(s).
- **CO26**: 1.08 — x ← x − η·f′(x) = x(1 − 2·1·1/5); apply 3 time(s).
- **CO27**: 8.00 — x ← x − η·f′(x) = x(1 − 2·1·1/10); apply 1 time(s).
- **CO28**: 10.00 — x ← x − η·f′(x) = x(1 − 2·4·1/4); apply 2 time(s).
- **CO29**: A — The update is x ← (1 − 2aη)x; convergence needs |1 − 2aη| < 1, i.e. 0 < η < 1/a.
- **CO30**: C — The update is x ← (1 − 2aη)x; convergence needs |1 − 2aη| < 1, i.e. 0 < η < 1/a.
- **CO31**: A — The update is x ← (1 − 2aη)x; convergence needs |1 − 2aη| < 1, i.e. 0 < η < 1/a.
- **CO32**: B — Use standard limits, factorisation or L'Hôpital's rule.
- **CO33**: A — Use standard limits, factorisation or L'Hôpital's rule.
- **CO34**: D — Use standard limits, factorisation or L'Hôpital's rule.
- **CO35**: B — Use standard limits, factorisation or L'Hôpital's rule.
- **CO36**: D — Use standard limits, factorisation or L'Hôpital's rule.
- **CO37**: C — Use standard limits, factorisation or L'Hôpital's rule.
- **CO38**: D — Use standard limits, factorisation or L'Hôpital's rule.
- **CO39**: C — Use standard limits, factorisation or L'Hôpital's rule.
- **CO40**: C — Use standard limits, factorisation or L'Hôpital's rule.
- **CO41**: C — Use standard limits, factorisation or L'Hôpital's rule.
- **CO42**: A — Use standard limits, factorisation or L'Hôpital's rule.
- **CO43**: A — Use standard limits, factorisation or L'Hôpital's rule.
- **CO44**: 5 — Left limit 20+k must equal 25, so k = 5.
- **CO45**: 0 — Differentiability gives a = 2·2 = 4; continuity gives k = -4. So a + k = 0.
- **CO46**: 4 — Left limit 12+k must equal 16, so k = 4.
- **CO47**: 0 — Left limit 4+k must equal 4, so k = 0.
- **CO48**: -3 — Differentiability gives a = 2·3 = 6; continuity gives k = -9. So a + k = -3.
- **CO49**: -24 — Differentiability gives a = 2·6 = 12; continuity gives k = -36. So a + k = -24.
- **CO50**: 4.50 — Evaluate f at the larger critical point x = 3.
- **CO51**: -32.00 — Evaluate f at the larger critical point x = 4.
- **CO52**: 1 — Critical points are 1 and 2; f″(1) < 0.
- **CO53**: -27.00 — Evaluate f at the larger critical point x = 3.
- **CO54**: 2 — Critical points are 2 and 4; f″(2) < 0.
- **CO55**: 10.67 — Evaluate f at the larger critical point x = 4.
- **CO56**: 2 — f′(x) = 0 at x = 1, 2; f″ is positive at x = 2 (larger root).
- **CO57**: 2 — f′(x) is a quadratic with two distinct real roots.
- **CO58**: 9.00 — Evaluate f at the larger critical point x = 3.
- **CO59**: -3 — Critical points are -3 and -1; f″(-3) < 0.
- **CO60**: B — Set f′(x) = 2ax + b = 0.
- **CO61**: D — Set f′(x) = 2ax + b = 0.
- **CO62**: -5.06 — At x = −b/2a = 7/8, f = -81/16.
- **CO63**: -4.80 — At x = −b/2a = 3/5, f = -24/5.
- **CO64**: C — Set f′(x) = 2ax + b = 0.
- **CO65**: C — Set f′(x) = 2ax + b = 0.
- **CO66**: -100 — Compare f at the end points and the critical points inside the interval.
- **CO67**: -31 — Compare f at the end points and the critical points inside the interval.
- **CO68**: 21 — Compare f at the end points and the critical points inside the interval.
- **CO69**: 3 — Compare f at the end points and the critical points inside the interval.
- **CO70**: -26 — Compare f at the end points and the critical points inside the interval.
- **CO71**: 4 — f′ = 1 − 4/x² = 0 gives x = 2; f = 4 (also AM–GM).
- **CO72**: 8 — f′ = 1 − 16/x² = 0 gives x = 4; f = 8 (also AM–GM).
- **CO73**: 16 — f′ = 1 − 64/x² = 0 gives x = 8; f = 16 (also AM–GM).
- **CO74**: 6 — f′ = 1 − 9/x² = 0 gives x = 3; f = 6 (also AM–GM).
- **CO75**: C — The second derivative is 2a > 0, so f is convex.
- **CO76**: B — The second derivative is 2a > 0, so f is convex.
- **CO77**: B — Telescoping: 1/n − 1/(n+1).
- **CO78**: C — First term k, ratio 1/a: k/(1 − 1/a).
- **CO79**: C — First term k, ratio 1/a: k/(1 − 1/a).
- **CO80**: D — Geometric series with ratio 1/a: 1/(1 − 1/a) = a/(a−1).
- **CO81**: A — First term k, ratio 1/a: k/(1 − 1/a).
- **CO82**: B — First term k, ratio 1/a: k/(1 − 1/a).
- **CO83**: B — First term k, ratio 1/a: k/(1 − 1/a).
- **CO84**: A — First term k, ratio 1/a: k/(1 − 1/a).
- **CO85**: A, C — |x| is continuous but not differentiable at 0; f(x) = x³ has f′(0) = 0 but no extremum.
- **CO86**: A, B — lim (1 + 1/x)^x = e and lim (1 − cos x)/x² = 1/2.
- **CO87**: A, B, C, D — All four are standard expansions.
- **CO88**: A, C — |x| and max(0, x) have a corner at 0; x|x| is differentiable at 0.
- **CO89**: A, B, D — End-point extrema need not have zero derivative.
