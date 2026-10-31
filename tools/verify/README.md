# Answer checks

Each `check_*.py` reads the questions in `assets/data/`, re-solves every question it can from the printed text (independently of how the question was made), and compares the result with the stored answer.

```
bash tools/verify/run_all.sh
```

Needs Python 3 with `sympy`, `numpy`, `scipy` and `networkx`. A clean run shows `bad 0` / `mismatch 0` for every file. Questions listed as skipped are conceptual (true/false, MSQ statements) and were checked by hand.
