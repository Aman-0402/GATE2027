#!/usr/bin/env bash
# Re-solves every computable practice question independently and compares with the stored answer.
# Needs: python3 with sympy, numpy, scipy, networkx.  Run from anywhere:  bash tools/verify/run_all.sh
cd "$(dirname "$0")"
for c in check_*.py; do printf '%-26s ' "$c"; python3 "$c" 2>&1 | grep -E '^(checked|ok)'; done
