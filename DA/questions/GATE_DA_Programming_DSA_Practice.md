# GATE DA — Programming, DSA & Algorithms practice (original)

279 original questions (MCQ, MSQ and NAT) with answers and solutions. Python-tracing answers were produced by running the code shown; the algorithm questions (sorting, trees, hashing, graphs) were computed by code and a sample was re-checked with independent implementations, with no mismatches.


## Complexity & recurrences

**PD1.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 1000
while i >= 1:
    c += 1
    i //= 2
print(c)
```

**PD2.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 1
while i * i <= 30:
    c += 1
    i += 1
print(c)
```

**PD3.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 16
while i >= 1:
    c += 1
    i //= 2
print(c)
```

**PD4.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 64
while i >= 1:
    c += 1
    i //= 2
print(c)
```

**PD5.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 1
while i < 256:
    c += 1
    i *= 2
print(c)
```

**PD6.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 1
while i * i <= 64:
    c += 1
    i += 1
print(c)
```

**PD7.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 256
while i >= 1:
    c += 1
    i //= 2
print(c)
```

**PD8.** [NAT, 1 mark] What is printed by this program?
```
c = 0
i = 1
while i * i <= 200:
    c += 1
    i += 1
print(c)
```

**PD9.** [MCQ, 1 mark] The solution of the recurrence T(n) = 2T(n/2) + n (with T(1) = 1) is

(A) Θ(log n)  
(B) Θ(n)  
(C) Θ(n²)  
(D) Θ(n log n)

**PD10.** [MCQ, 1 mark] The solution of the recurrence T(n) = 2T(n/2) + n² (with T(1) = 1) is

(A) Θ(n)  
(B) Θ(n²)  
(C) Θ(n³)  
(D) Θ(n log n)

**PD11.** [MCQ, 1 mark] The solution of the recurrence T(n) = 2T(n/2) + 1 (with T(1) = 1) is

(A) Θ(log n)  
(B) Θ(n)  
(C) Θ(n log n)  
(D) Θ(n²)

**PD12.** [MCQ, 1 mark] The solution of the recurrence T(n) = T(n/2) + 1 (with T(1) = 1) is

(A) Θ(n log n)  
(B) Θ(n)  
(C) Θ(1)  
(D) Θ(log n)

**PD13.** [MCQ, 1 mark] The solution of the recurrence T(n) = T(n/2) + n (with T(1) = 1) is

(A) Θ(n²)  
(B) Θ(log n)  
(C) Θ(n log n)  
(D) Θ(n)

**PD14.** [MCQ, 1 mark] The solution of the recurrence T(n) = 4T(n/2) + n (with T(1) = 1) is

(A) Θ(n)  
(B) Θ(n log n)  
(C) Θ(n²)  
(D) Θ(n³)

**PD15.** [MCQ, 1 mark] The solution of the recurrence T(n) = T(n − 1) + n (with T(1) = 1) is

(A) Θ(n²)  
(B) Θ(n log n)  
(C) Θ(n)  
(D) Θ(2ⁿ)

**PD16.** [MCQ, 1 mark] The solution of the recurrence T(n) = T(n − 1) + 1 (with T(1) = 1) is

(A) Θ(1)  
(B) Θ(log n)  
(C) Θ(n²)  
(D) Θ(n)

**PD17.** [MCQ, 1 mark] The solution of the recurrence T(n) = 2T(n − 1) + 1 (with T(1) = 1) is

(A) Θ(n log n)  
(B) Θ(n²)  
(C) Θ(2ⁿ)  
(D) Θ(n)

**PD18.** [MCQ, 1 mark] The solution of the recurrence T(n) = 3T(n/3) + n (with T(1) = 1) is

(A) Θ(n log n)  
(B) Θ(√n)  
(C) Θ(n)  
(D) Θ(n²)

**PD19.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
for i in range(n):
    for j in range(n):
        pass
```

(A) O(n log n)  
(B) O(log n)  
(C) O(n²)  
(D) O(n)

**PD20.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
for i in range(n):
    j = 1
    while j < n:
        j *= 2
```

(A) O(log n)  
(B) O(n²)  
(C) O(n)  
(D) O(n log n)

**PD21.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
for i in range(1, n):
    for j in range(i, n, i):
        pass
```

(A) O(n log n)  
(B) O(log n)  
(C) O(n²)  
(D) O(n)

**PD22.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
i = n
while i > 0:
    i //= 2
```

(A) O(n)  
(B) O(n log n)  
(C) O(log n)  
(D) O(1)

**PD23.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
for i in range(n):
    for j in range(i):
        pass
```

(A) O(n)  
(B) O(n²)  
(C) O(n log n)  
(D) O(2ⁿ)

**PD24.** [MCQ, 1 mark] The asymptotic running time (n is the input size) of the following code is
```
i = 1
while i < n:
    i *= 2
```

(A) O(√n)  
(B) O(n log n)  
(C) O(n)  
(D) O(log n)


## Graphs

**PD25.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F and edges A–B, A–C, A–E, B–C, B–D, B–E, C–E, C–F. Starting at A and visiting neighbours in alphabetical order, the depth-first traversal visits the vertices in the order

(A) D F E C B A  
(B) F E D C B A  
(C) A B C E F D  
(D) A C B E F D

**PD26.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F, G and edges A–B, A–C, A–E, A–G, B–D, B–E, B–G, C–G, D–E, D–F, D–G, F–G. Starting at A and visiting neighbours in alphabetical order, the breadth-first traversal visits the vertices in the order

(A) F D G E C B A  
(B) G F E D C B A  
(C) A B C E G D F  
(D) A C B E G D F

**PD27.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E and edges A–B, A–C, A–E, B–C, B–D, C–D, C–E, D–E. Starting at A and visiting neighbours in alphabetical order, the depth-first traversal visits the vertices in the order

(A) A B C D E  
(B) A C B D E  
(C) A B C E D  
(D) E D C B A

**PD28.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F and edges A–C, A–D, B–E, B–F, C–F, D–E. Starting at A and visiting neighbours in alphabetical order, the depth-first traversal visits the vertices in the order

(A) D E B F C A  
(B) F E D C B A  
(C) A C F B E D  
(D) A F C B E D

**PD29.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F, G and edges A–C, A–D, A–E, A–G, B–C, B–F, C–D, C–F, D–E. Starting at A and visiting neighbours in alphabetical order, the breadth-first traversal visits the vertices in the order

(A) G F E D C B A  
(B) A C D E G B F  
(C) A D C E G B F  
(D) F B G E D C A

**PD30.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F and edges A–B, A–E, B–C, B–E, B–F, C–E, D–E. Starting at A and visiting neighbours in alphabetical order, the depth-first traversal visits the vertices in the order

(A) A B E C F D  
(B) F D E C B A  
(C) F E D C B A  
(D) A B C E D F

**PD31.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F and edges A–B, A–C, A–D, A–F, B–E, C–F, D–E, E–F. Starting at A and visiting neighbours in alphabetical order, the breadth-first traversal visits the vertices in the order

(A) F E D C B A  
(B) E F D C B A  
(C) A B C D F E  
(D) A B E D F C

**PD32.** [MCQ, 2 marks] An undirected graph has vertices A, B, C, D, E, F, G and edges A–B, A–D, A–G, B–C, B–D, C–D, C–F, C–G, E–F, E–G, F–G. Starting at A and visiting neighbours in alphabetical order, the depth-first traversal visits the vertices in the order

(A) A B D G C E F  
(B) G F E D C B A  
(C) A B C D F E G  
(D) A C B D F E G

**PD33.** [NAT, 2 marks] An undirected weighted graph has edges A–B (1), A–C (4), A–D (1), A–E (8), B–D (4), C–D (1), C–E (8), C–F (1), D–E (9). The length of the shortest path from A to F is ______.

**PD34.** [NAT, 2 marks] An undirected weighted graph has edges A–C (3), A–E (8), A–F (3), B–C (3), B–E (8), B–F (9), C–D (9), D–E (3). The length of the shortest path from A to F is ______.

**PD35.** [NAT, 2 marks] An undirected weighted graph has edges A–C (4), A–D (4), A–F (3), B–C (4), B–E (5), C–D (6), C–F (8), D–E (5), D–F (5). The length of the shortest path from A to F is ______.

**PD36.** [NAT, 2 marks] An undirected weighted graph has edges A–B (4), A–D (6), A–E (3), C–D (1), C–E (8), C–F (2), D–E (7), D–F (6), E–F (3). The length of the shortest path from A to F is ______.

**PD37.** [NAT, 2 marks] An undirected weighted graph has edges A–B (2), B–D (9), C–D (5), D–E (9). The length of the shortest path from A to E is ______.

**PD38.** [NAT, 2 marks] An undirected weighted graph has edges A–B (5), A–E (9), B–D (4), B–E (5), C–D (8), D–E (9), E–F (8). The length of the shortest path from A to F is ______.

**PD39.** [NAT, 1 mark] An undirected graph has vertices 0 to 6 and edges (1,5), (3,4), (4,5). The number of connected components is ______.

**PD40.** [NAT, 1 mark] An undirected graph has vertices 0 to 8 and edges (3,4), (7,8). The number of connected components is ______.

**PD41.** [NAT, 1 mark] An undirected graph has vertices 0 to 5 and edges (0,2), (1,2), (1,3). The number of connected components is ______.

**PD42.** [NAT, 1 mark] An undirected graph has vertices 0 to 8 and edges (0,4), (0,5), (0,6), (1,2), (3,5), (4,7). The number of connected components is ______.

**PD43.** [NAT, 1 mark] An undirected graph has vertices 0 to 5 and edges (0,1), (2,5). The number of connected components is ______.

**PD44.** [NAT, 2 marks] A directed acyclic graph has vertices A, B, C, D and edges no edges. The number of distinct topological orderings is ______.

**PD45.** [NAT, 2 marks] A directed acyclic graph has vertices A, B, C, D and edges A→D, B→D. The number of distinct topological orderings is ______.

**PD46.** [NAT, 2 marks] A directed acyclic graph has vertices A, B, C, D and edges A→C. The number of distinct topological orderings is ______.

**PD47.** [NAT, 2 marks] A directed acyclic graph has vertices A, B, C, D and edges A→C, A→D, B→D, C→D. The number of distinct topological orderings is ______.

**PD48.** [NAT, 2 marks] A directed acyclic graph has vertices A, B, C, D and edges A→B, C→D. The number of distinct topological orderings is ______.

**PD49.** [MCQ, 1 mark] In an undirected graph, the sum of the degrees of all vertices equals

(A) twice the number of edges  
(B) the number of vertices  
(C) the number of edges plus the number of vertices  
(D) the number of edges

**PD50.** [MCQ, 1 mark] The maximum number of edges in a simple undirected graph with 9 vertices is

(A) 45  
(B) 81  
(C) 72  
(D) 36

**PD51.** [MCQ, 1 mark] The maximum number of edges in a simple undirected graph with 7 vertices is

(A) 42  
(B) 49  
(C) 21  
(D) 6

**PD52.** [MCQ, 1 mark] The maximum number of edges in a simple undirected graph with 10 vertices is

(A) 90  
(B) 100  
(C) 45  
(D) 55


## Hashing

**PD53.** [NAT, 1 mark] Keys [76, 95, 48, 75, 78] are inserted into a hash table of size 13 using h(k) = k mod 13 with separate chaining. The length of the longest chain is ______.

**PD54.** [NAT, 2 marks] Keys [87, 36, 25, 96, 56, 51] are inserted, in this order, into an empty hash table of size 13 with h(k) = k mod 13 and linear probing. How many keys end up in a slot other than their home slot h(k)?

**PD55.** [NAT, 1 mark] Keys [17, 90, 95, 47, 18, 40] are inserted into a hash table of size 11 using h(k) = k mod 11 with separate chaining. The length of the longest chain is ______.

**PD56.** [NAT, 2 marks] Keys [40, 62, 36, 84, 17, 79] are inserted, in this order, into an empty hash table of size 10 with h(k) = k mod 10 and linear probing. The index at which the key 79 is stored is ______.

**PD57.** [NAT, 2 marks] Keys [22, 28, 20, 15, 41] are inserted, in this order, into an empty hash table of size 10 with h(k) = k mod 10 and linear probing. How many keys end up in a slot other than their home slot h(k)?

**PD58.** [NAT, 1 mark] Keys [37, 67, 51, 77, 33] are inserted into a hash table of size 13 using h(k) = k mod 13 with separate chaining. The length of the longest chain is ______.

**PD59.** [NAT, 1 mark] Keys [94, 56, 78, 11, 43] are inserted into a hash table of size 13 using h(k) = k mod 13 with separate chaining. The length of the longest chain is ______.

**PD60.** [NAT, 2 marks] Keys [97, 14, 48, 74, 93, 39] are inserted, in this order, into an empty hash table of size 7 with h(k) = k mod 7 and linear probing. The index at which the key 39 is stored is ______.

**PD61.** [NAT, 2 marks] Keys [78, 65, 40, 20, 57, 80] are inserted, in this order, into an empty hash table of size 13 with h(k) = k mod 13 and linear probing. How many keys end up in a slot other than their home slot h(k)?


## Python tracing

**PD62.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def push(x, lst=[]):
    lst.append(x)
    return lst

print(push(7))
print(push(2))
print(push(1, []))
print(push(7))
```

(A) [7] | [7, 2] | [1] | [7, 2, 7]  
(B) [7] | [2] | [1] | [7]  
(C) ]7 ,2 ,7[  | ]1[  | ]2 ,7[  | ]7[  
(D) [7] | [7, 2] | [7, 2, 1] | [7, 2, 1, 7]

**PD63.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def add(x, lst=[]):
    lst.append(x)
    return lst

print(add(8))
print(add(1))
print(add(4, []))
print(add(8))
```

(A) [8] | [8, 1] | [8, 1, 4] | [8, 1, 4, 8]  
(B) [8] | [1] | [4] | [8]  
(C) [8] | [8, 1] | [4] | [8, 1, 8]  
(D) ]8 ,1 ,8[  | ]4[  | ]1 ,8[  | ]8[

**PD64.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def add(x, lst=[]):
    lst.append(x)
    return lst

print(add(3))
print(add(2))
print(add(8, []))
print(add(3))
```

(A) [3] | [2] | [8] | [3]  
(B) [3] | [3, 2] | [3, 2, 8] | [3, 2, 8, 3]  
(C) [3] | [3, 2] | [8] | [3, 2, 3]  
(D) ]3 ,2 ,3[  | ]8[  | ]2 ,3[  | ]3[

**PD65.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def put(x, lst=[]):
    lst.append(x)
    return lst

print(put(5))
print(put(3))
print(put(1, []))
print(put(5))
```

(A) ]5 ,3 ,5[  | ]1[  | ]3 ,5[  | ]5[  
(B) [5] | [5, 3] | [5, 3, 1] | [5, 3, 1, 5]  
(C) [5] | [5, 3] | [1] | [5, 3, 5]  
(D) [5] | [3] | [1] | [5]

**PD66.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def put(x, lst=[]):
    lst.append(x)
    return lst

print(put(7))
print(put(3))
print(put(6, []))
print(put(7))
```

(A) ]7 ,3 ,7[  | ]6[  | ]3 ,7[  | ]7[  
(B) [7] | [3] | [6] | [7]  
(C) [7] | [7, 3] | [7, 3, 6] | [7, 3, 6, 7]  
(D) [7] | [7, 3] | [6] | [7, 3, 7]

**PD67.** [MCQ, 2 marks] What is printed by the following program? (Lines are separated by | in the options.)
```
def put(x, lst=[]):
    lst.append(x)
    return lst

print(put(2))
print(put(7))
print(put(6, []))
print(put(2))
```

(A) ]2 ,7 ,2[  | ]6[  | ]7 ,2[  | ]2[  
(B) [2] | [2, 7] | [2, 7, 6] | [2, 7, 6, 2]  
(C) [2] | [2, 7] | [6] | [2, 7, 2]  
(D) [2] | [7] | [6] | [2]

**PD68.** [MCQ, 1 mark] What is the output of the following program?
```
L = [2, 2, 7, 7, 8, 8, 4, 8]
print(L[5:0:-1])
```

(A) [2, 2, 7, 7, 8]  
(B) [8, 8, 7, 7, 2]  
(C) [8, 8, 7, 7]  
(D) [4, 8, 8, 7, 7, 2]

**PD69.** [MCQ, 1 mark] What is the output of the following program?
```
L = [9, 7, 2, 5, 1, 9, 4]
print(L[0:5:1])
```

(A) [7, 2, 5]  
(B) [9, 2, 1]  
(C) [9, 7, 2, 5, 1]  
(D) [9, 7, 2, 5, 1, 9]

**PD70.** [MCQ, 1 mark] What is the output of the following program?
```
L = [4, 7, 6, 4, 3, 7, 9, 1, 9]
print(L[1:8:1])
```

(A) [7, 6, 4, 3, 7, 9, 1, 9]  
(B) [7, 4, 7, 1]  
(C) [6, 4, 3, 7, 9, 1]  
(D) [7, 6, 4, 3, 7, 9, 1]

**PD71.** [MCQ, 1 mark] What is the output of the following program?
```
L = [9, 9, 3, 1, 1, 3]
print(L[5:0:-1])
```

(A) [9, 9, 3, 1, 1]  
(B) [3, 1, 1, 3]  
(C) [3, 1, 1, 3, 9]  
(D) [1, 1, 3, 9]

**PD72.** [MCQ, 1 mark] What is the output of the following program?
```
L = [6, 2, 4, 8, 8, 1, 5]
print(L[1:4:3])
```

(A) [2]  
(B) [4]  
(C) [2, 8]  
(D) [2, 4, 8]

**PD73.** [MCQ, 1 mark] What is the output of the following program?
```
L = [9, 8, 7, 3, 8, 2, 2]
print(L[5:0:-1])
```

(A) [2, 2, 8, 3, 7, 8]  
(B) [9, 8, 7, 3, 8]  
(C) [8, 3, 7, 8]  
(D) [2, 8, 3, 7, 8]

**PD74.** [MCQ, 1 mark] What is the output of the following program?
```
L = [1, 8, 1, 6, 8, 9, 7]
print(L[0:4:2])
```

(A) [8]  
(B) [1, 1, 8]  
(C) [1, 1]  
(D) [8, 6]

**PD75.** [MCQ, 1 mark] What is the output of the following program?
```
L = [2, 8, 7, 3, 6, 2, 2, 3, 2]
print(L[0:6:2])
```

(A) [2, 7, 6]  
(B) [2, 7, 6, 2]  
(C) [2, 8, 7, 3, 6, 2]  
(D) [8, 3]

**PD76.** [MCQ, 1 mark] What is the output of the following program?
```
L = [9, 5, 9, 1, 8, 9, 8]
print(L[0:4:2])
```

(A) [9, 9]  
(B) [9, 5, 9, 1]  
(C) [9, 9, 8]  
(D) [5, 1]

**PD77.** [MCQ, 1 mark] What is the output of the following program?
```
L = [7, 5, 9, 1, 4, 5, 7, 2, 8]
print(L[2:7:1])
```

(A) [9, 1, 4, 5, 7]  
(B) [9, 1, 4, 5, 7, 2]  
(C) [1, 4, 5]  
(D) [1, 4, 5, 7]

**PD78.** [MCQ, 1 mark] What is printed?
```
L = [8, 4, 9, 8, 5, 7]
print([x*x for x in L if x < 5])
```

(A) [64, 16, 81, 64, 25, 49]  
(B) [16]  
(C) [16, 25]  
(D) [64, 81, 64, 25, 49]

**PD79.** [MCQ, 1 mark] What is printed?
```
L = [6, 6, 1, 10, 5, 4]
print([x%3 for x in L if x <= 4])
```

(A) [0, 0, 1, 2, 1]  
(B) [0, 0, 1, 1, 2, 1]  
(C) [1, 1]  
(D) [0, 0, 1, 2]

**PD80.** [MCQ, 1 mark] What is printed?
```
L = [2, 8, 2, 1, 10, 6, 7, 6]
print([x*x for x in L if x <= 7])
```

(A) [64, 100]  
(B) [64, 100, 49]  
(C) [4, 4, 1, 36, 49, 36]  
(D) [4, 64, 4, 1, 100, 36, 49, 36]

**PD81.** [MCQ, 1 mark] What is printed?
```
L = [8, 2, 12, 5, 12, 2, 11, 3]
print([x%3 for x in L if x <= 8])
```

(A) [0, 0, 2]  
(B) [2, 2, 2, 0]  
(C) [2, 2, 2, 2, 0]  
(D) [2, 2, 0, 2, 0, 2, 2, 0]

**PD82.** [MCQ, 1 mark] What is printed?
```
L = [6, 8, 4, 10, 8, 5]
print([x%3 for x in L if x > 6])
```

(A) [2, 1, 2]  
(B) [0, 1, 2]  
(C) [0, 2, 1, 2]  
(D) [0, 2, 1, 1, 2, 2]

**PD83.** [MCQ, 1 mark] What is printed?
```
L = [5, 12, 11, 5, 6, 9, 8, 4]
print([x%3 for x in L if x > 8])
```

(A) [2, 0, 2, 2, 0, 0, 2, 1]  
(B) [0, 2, 0]  
(C) [0, 2, 0, 2]  
(D) [2, 2, 0, 2, 1]

**PD84.** [MCQ, 1 mark] What is printed?
```
L = [12, 4, 6, 4, 3, 7, 2, 4]
print([x+1 for x in L if x >= 3])
```

(A) [13, 5, 7, 5, 4, 8, 5]  
(B) [3]  
(C) [4, 3]  
(D) [13, 5, 7, 5, 8, 5]

**PD85.** [MCQ, 1 mark] What is printed?
```
L = [9, 7, 1, 12, 2, 3]
print([2*x for x in L if x >= 7])
```

(A) [2, 4, 6]  
(B) [18, 14, 24]  
(C) [18, 24]  
(D) [18, 14, 2, 24, 4, 6]

**PD86.** [MCQ, 2 marks] What is the output of the following program?
```
def g(a, b):
    if b == 0:
        return a
    return g(b, a % b)

print(g(72, 20))
```

(A) 8  
(B) 4  
(C) 1440  
(D) 5

**PD87.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n == 0:
        return 0
    return n % 10 + f(n // 10)

print(f(7801))
```

(A) 15  
(B) 32  
(C) 17  
(D) 16

**PD88.** [MCQ, 2 marks] What is the output of the following program?
```
def g(a, b):
    if b == 0:
        return a
    return g(b, a % b)

print(g(26, 45))
```

(A) 1170  
(B) 2  
(C) 45  
(D) 1

**PD89.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n == 0:
        return 0
    return n % 10 + f(n // 10)

print(f(4209))
```

(A) 0  
(B) 15  
(C) 14  
(D) 30

**PD90.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n <= 1:
        return 1
    return n * f(n - 1)

print(f(8))
```

(A) 80640  
(B) 40319  
(C) 40320  
(D) 0

**PD91.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n <= 1:
        return 1
    return n * f(n - 1)

print(f(5))
```

(A) 240  
(B) 0  
(C) 119  
(D) 120

**PD92.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n < 2:
        return n
    return f(n - 1) + f(n - 2)

print(f(10))
```

(A) 55  
(B) 110  
(C) 34  
(D) 56

**PD93.** [MCQ, 2 marks] What is the output of the following program?
```
def g(a, b):
    if b == 0:
        return a
    return g(b, a % b)

print(g(44, 33))
```

(A) 10  
(B) 12  
(C) 22  
(D) 11

**PD94.** [MCQ, 2 marks] What is the output of the following program?
```
def g(a, b):
    if b == 0:
        return a
    return g(b, a % b)

print(g(37, 12))
```

(A) 4  
(B) 0  
(C) 1  
(D) 444

**PD95.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n == 0:
        return 0
    return n % 10 + f(n // 10)

print(f(2885))
```

(A) 24  
(B) 22  
(C) 23  
(D) 0

**PD96.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n <= 1:
        return 1
    return n * f(n - 1)

print(f(9))
```

(A) 362879  
(B) 45  
(C) 362880  
(D) 362881

**PD97.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n == 0:
        return 0
    return n % 10 + f(n // 10)

print(f(3107))
```

(A) 11  
(B) 22  
(C) 12  
(D) 0

**PD98.** [MCQ, 2 marks] What is the output of the following program?
```
def f(n):
    if n == 0:
        return 0
    return n % 10 + f(n // 10)

print(f(8549))
```

(A) 26  
(B) 0  
(C) 25  
(D) 27

**PD99.** [MCQ, 2 marks] What is the output of the following program?
```
def g(a, b):
    if b == 0:
        return a
    return g(b, a % b)

print(g(34, 11))
```

(A) 0  
(B) 3  
(C) 1  
(D) 2

**PD100.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(3):
    for j in range(3):
        c += 1
print(c)
```

**PD101.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(6):
    for j in range(i):
        c += 1
print(c)
```

**PD102.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(6):
    for j in range(5):
        c += 1
print(c)
```

**PD103.** [NAT, 1 mark] What is the value printed by the following program?
```
s = 0
i = 0
while True:
    i += 1
    if i % 2 == 0:
        continue
    s += i
    if s > 22:
        break
print(i)
```

**PD104.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(7,28,2):
    c += i
print(c)
```

**PD105.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(3,12,2):
    c += i
print(c)
```

**PD106.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(7,28,3):
    c += i
print(c)
```

**PD107.** [NAT, 1 mark] What is the value printed by the following program?
```
s = 0
i = 0
while True:
    i += 1
    if i % 2 == 0:
        continue
    s += i
    if s > 18:
        break
print(i)
```

**PD108.** [NAT, 1 mark] What is the value printed by the following program?
```
c = 0
for i in range(4,16,3):
    c += i
print(c)
```

**PD109.** [NAT, 1 mark] What is the value printed by the following program?
```
s = 0
i = 0
while True:
    i += 1
    if i % 2 == 0:
        continue
    s += i
    if s > 25:
        break
print(i)
```

**PD110.** [MCQ, 1 mark] What is printed?
```
print('pythonic'[2:6].upper())
```

(A) YTHO  
(B) THON!  
(C) NOHT  
(D) THON

**PD111.** [MCQ, 1 mark] What is printed?
```
print('analysis'.replace('n', '*'))
```

(A) a*alysis  
(B) sisyla*a  
(C) a#alysis  
(D) a*alysis!

**PD112.** [MCQ, 1 mark] What is printed?
```
print('database'.replace('a', '*'))
```

(A) d*t*b*se!  
(B) d#t#b#se  
(C) es*b*t*d  
(D) d*t*b*se

**PD113.** [MCQ, 1 mark] What is printed?
```
print('gatedata'[::-1][1:5])
```

(A) edat  
(B) tade!  
(C) tade  
(D) atad

**PD114.** [MCQ, 1 mark] What is printed?
```
print('database'[::-1][1:5])
```

(A) saba!  
(B) saba  
(C) abas  
(D) esab

**PD115.** [MCQ, 1 mark] What is printed?
```
print('database'[2:6].upper())
```

(A) ATAB  
(B) TABA!  
(C) ABAT  
(D) TABA

**PD116.** [MCQ, 1 mark] What is printed?
```
print('learning'[::-1][1:5])
```

(A) ninr!  
(B) ninr  
(C) rnin  
(D) gnin

**PD117.** [MCQ, 1 mark] What is printed?
```
print('scienceai'.replace('c', '*'))
```

(A) s*ien*eai  
(B) s*ien*eai!  
(C) s#ien#eai  
(D) iae*nei*s

**PD118.** [MCQ, 1 mark] What is printed?
```
print('gatedata'[2:6].upper())
```

(A) ATED  
(B) ADET  
(C) TEDA  
(D) TEDA!

**PD119.** [MCQ, 1 mark] What is printed?
```
print('gatedata'.replace('a', '*'))
```

(A) *t*det*g  
(B) g*ted*t*  
(C) g*ted*t*!  
(D) g#ted#t#

**PD120.** [MCQ, 2 marks] What is printed?
```
d = {'f': 1, 'a': 2, 'c': 4, 'd': 7}
d['f'] += d['a']
del d['c']
d['d'] = d.get('z', 18)
print(sum(d.values()), len(d))
```

(A) 21 3  
(B) 27 4  
(C) 23 4  
(D) 23 3

**PD121.** [MCQ, 2 marks] What is printed?
```
d = {'e': 3, 'c': 6, 'f': 5, 'd': 3}
d['e'] += d['c']
del d['f']
d['d'] = d.get('z', 14)
print(sum(d.values()), len(d))
```

(A) 29 4  
(B) 30 3  
(C) 34 4  
(D) 29 3

**PD122.** [MCQ, 2 marks] What is printed?
```
d = {'c': 7, 'd': 7, 'f': 2, 'a': 9}
d['c'] += d['d']
del d['f']
d['a'] = d.get('z', 18)
print(sum(d.values()), len(d))
```

(A) 32 3  
(B) 39 4  
(C) 40 3  
(D) 39 3

**PD123.** [MCQ, 2 marks] What is printed?
```
d = {'d': 1, 'b': 3, 'e': 9, 'c': 3}
d['d'] += d['b']
del d['e']
d['c'] = d.get('z', 12)
print(sum(d.values()), len(d))
```

(A) 19 3  
(B) 16 3  
(C) 28 4  
(D) 19 4

**PD124.** [MCQ, 2 marks] What is printed?
```
d = {'b': 9, 'c': 4, 'd': 2, 'f': 4}
d['b'] += d['c']
del d['d']
d['f'] = d.get('z', 18)
print(sum(d.values()), len(d))
```

(A) 35 3  
(B) 31 3  
(C) 35 4  
(D) 37 4

**PD125.** [MCQ, 1 mark] What is printed?
```
A = [3, 4, 6, 7, 9]
A = set(A)
B = set([2, 3, 4, 6, 8])
print(sorted(A | B))
```

(A) [7, 9]  
(B) [2, 3, 4, 6, 7, 8, 9]  
(C) [2, 7, 8, 9]  
(D) [3, 4, 6]

**PD126.** [MCQ, 1 mark] What is printed?
```
A = [1, 4, 6, 8, 10]
A = set(A)
B = set([1, 4, 6, 10, 11])
print(sorted(A & B))
```

(A) [1, 4, 6, 8, 10, 11]  
(B) [1, 4, 6, 10]  
(C) [8, 11]  
(D) [8]

**PD127.** [MCQ, 1 mark] What is printed?
```
A = [4, 6, 9, 10, 11]
A = set(A)
B = set([2, 3, 4, 6, 10])
print(sorted(A ^ B))
```

(A) [4, 6, 10]  
(B) [9, 11]  
(C) [2, 3, 4, 6, 9, 10, 11]  
(D) [2, 3, 9, 11]

**PD128.** [MCQ, 1 mark] What is printed?
```
A = [1, 7, 8, 10, 11]
A = set(A)
B = set([3, 6, 9, 10, 11])
print(sorted(A - B))
```

(A) [1, 3, 6, 7, 8, 9, 10, 11]  
(B) [1, 7, 8]  
(C) [1, 3, 6, 7, 8, 9]  
(D) [10, 11]

**PD129.** [MCQ, 1 mark] What is printed?
```
A = [2, 3, 5, 6, 9]
A = set(A)
B = set([1, 2, 3, 9, 11])
print(sorted(A ^ B))
```

(A) [1, 5, 6, 11]  
(B) [2, 3, 9]  
(C) [1, 2, 3, 5, 6, 9, 11]  
(D) [5, 6]

**PD130.** [MCQ, 1 mark] What is printed?
```
A = [5, 6, 7, 8, 11]
A = set(A)
B = set([2, 6, 9, 10, 11])
print(sorted(A ^ B))
```

(A) [5, 7, 8]  
(B) [6, 11]  
(C) [2, 5, 6, 7, 8, 9, 10, 11]  
(D) [2, 5, 7, 8, 9, 10]

**PD131.** [MCQ, 1 mark] What is the value of the expression?
```
-8 // 4
```

(A) 4  
(B) -3  
(C) -2  
(D) 1

**PD132.** [MCQ, 1 mark] What is the value of the expression?
```
-15 % 5
```

(A) -3  
(B) -4  
(C) 0  
(D) 1

**PD133.** [MCQ, 1 mark] What is the value of the expression?
```
abs(-8) // 4
```

(A) 4  
(B) 2  
(C) 0  
(D) -2

**PD134.** [MCQ, 1 mark] What is the value of the expression?
```
4 % 5
```

(A) 4  
(B) 6  
(C) 0  
(D) -2

**PD135.** [MCQ, 1 mark] What is the value of the expression?
```
-7 % 3
```

(A) 5  
(B) -2  
(C) -4  
(D) 2

**PD136.** [MCQ, 1 mark] What is the value of the expression?
```
4 % 2
```

(A) 1  
(B) 0  
(C) -2  
(D) 2

**PD137.** [MCQ, 1 mark] What is the value of the expression?
```
-(11 // 5)
```

(A) 4  
(B) 9  
(C) -2  
(D) -4

**PD138.** [MCQ, 1 mark] What is the value of the expression?
```
-(16 // 3)
```

(A) -2  
(B) 5  
(C) -7  
(D) -5

**PD139.** [MCQ, 1 mark] What is the value of the expression?
```
-(17 // 2)
```

(A) 1  
(B) -10  
(C) -1  
(D) -8

**PD140.** [MCQ, 1 mark] What is the value of the expression?
```
17 % 5
```

(A) 3  
(B) -5  
(C) 2  
(D) -3

**PD141.** [MCQ, 2 marks] What is printed by the following program?
```
x = 4

def f():
    x = 7
    return x * 2

print(f(), x)
```

(A) 14 4  
(B) 14 7  
(C) 15 4  
(D) 4 4

**PD142.** [MCQ, 2 marks] What is printed by the following program?
```
def outer():
    x = 1
    def inner():
        nonlocal x
        x += 7
    inner()
    inner()
    return x

print(outer())
```

(A) 15  
(B) 22  
(C) 1  
(D) 8

**PD143.** [MCQ, 2 marks] What is printed by the following program?
```
def outer():
    x = 5
    def inner():
        nonlocal x
        x += 6
    inner()
    inner()
    return x

print(outer())
```

(A) 5  
(B) 23  
(C) 11  
(D) 17

**PD144.** [MCQ, 2 marks] What is printed by the following program?
```
x = 2

def f():
    x = 9
    return x * 2

print(f(), x)
```

(A) 2 2  
(B) 18 19  
(C) 18 2  
(D) 18 9

**PD145.** [MCQ, 2 marks] What is printed by the following program?
```
def outer():
    x = 4
    def inner():
        nonlocal x
        x += 9
    inner()
    inner()
    return x

print(outer())
```

(A) 22  
(B) 13  
(C) 4  
(D) 31

**PD146.** [MCQ, 2 marks] What is printed by the following program?
```
def outer():
    x = 4
    def inner():
        nonlocal x
        x += 8
    inner()
    inner()
    return x

print(outer())
```

(A) 4  
(B) 20  
(C) 12  
(D) 28

**PD147.** [MCQ, 2 marks] What is printed by the following program?
```
x = 2

def f():
    global x
    x = x + 9
    return x

print(f(), x)
```

(A) 12 11  
(B) 11 12  
(C) 11 11  
(D) 11 2

**PD148.** [MCQ, 2 marks] What is printed by the following program?
```
x = 1

def f():
    global x
    x = x + 8
    return x

print(f(), x)
```

(A) 9 9  
(B) 9 1  
(C) 9 10  
(D) 10 9

**PD149.** [MCQ, 1 mark] What is the output of the following code?
```
print(len([1,2,3] * 3))
```

(A) 9  
(B) 3  
(C) 6  
(D) 8

**PD150.** [MCQ, 1 mark] What is the output of the following code?
```
a = [1, 2]
b = a
b.append(3)
print(a)
```

(A) [1, 2, 3]  
(B) [1, 2]  
(C) [1, 2, 3, 3]  
(D) [3]

**PD151.** [MCQ, 1 mark] What is the output of the following code?
```
print(round(2.5), round(3.5))
```

(A) 3 3  
(B) 2 3  
(C) 3 4  
(D) 2 4

**PD152.** [MCQ, 1 mark] What is the output of the following code?
```
d = {1: 'a', 2: 'b'}
print(list(d.items())[1])
```

(A) b  
(B) (2,)  
(C) (2, 'b')  
(D) (1, 'a')

**PD153.** [MCQ, 1 mark] What is the output of the following code?
```
print(list(range(2, 11, 3)))
```

(A) [2, 4, 6, 8, 10]  
(B) [2, 5, 8, 11]  
(C) [3, 6, 9]  
(D) [2, 5, 8]

**PD154.** [MCQ, 1 mark] What is the output of the following code?
```
print(5 > 3 > 1, 5 > 3 < 1)
```

(A) True False  
(B) False True  
(C) True True  
(D) False False

**PD155.** [MCQ, 1 mark] What is the output of the following code?
```
print(int('7') + int(2.9))
```

(A) 9  
(B) 7  
(C) error  
(D) 10

**PD156.** [MCQ, 1 mark] What is the output of the following code?
```
print(bool([]), bool([0]), bool(''))
```

(A) False True False  
(B) False False False  
(C) False True True  
(D) True True False

**PD157.** [MCQ, 1 mark] What is the output of the following code?
```
x = [3, 1, 2]
r = x.sort()
print(r)
```

(A) [3, 1, 2]  
(B) [1, 2, 3]  
(C) None  
(D) 0

**PD158.** [MCQ, 1 mark] What is the output of the following code?
```
print('ab' * 2 + 'c')
```

(A) abc  
(B) aabbc  
(C) abcabc  
(D) ababc

**PD159.** [MCQ, 1 mark] What is the output of the following code?
```
print(type(3/2).__name__, 3//2)
```

(A) float 2  
(B) int 1  
(C) int 2  
(D) float 1

**PD160.** [MCQ, 1 mark] What is the output of the following code?
```
a = [1, 2]
b = a[:]
b.append(3)
print(a)
```

(A) [1, 2]  
(B) [2, 3]  
(C) [1, 2, 3]  
(D) [3]

**PD161.** [MCQ, 1 mark] What is the output of the following code?
```
s = 'hello'
print(s[1:3] + s[-1])
```

(A) ell  
(B) hel  
(C) elo  
(D) eh

**PD162.** [MCQ, 1 mark] What is the output of the following code?
```
print(max('abc', 'abd'), min(3, 1.5))
```

(A) abd 1.5  
(B) abc 1.5  
(C) abc 3  
(D) abd 3

**PD163.** [MCQ, 1 mark] What is the output of the following code?
```
x = [3, 1, 2]
y = sorted(x)
print(x, y)
```

(A) [3, 1, 2] [1, 2, 3]  
(B) [1, 2, 3] [3, 1, 2]  
(C) [3, 1, 2] [3, 1, 2]  
(D) [1, 2, 3] [1, 2, 3]

**PD164.** [MCQ, 1 mark] What is the output of the following code?
```
t = (1, 2, 3)
print(t[-1] + t[0])
```

(A) 3  
(B) 5  
(C) 6  
(D) 4

**PD165.** [MCQ, 1 mark] What is the output of the following code?
```
print(10 - 2 - 3)
```

(A) 15  
(B) 5  
(C) 11  
(D) -5

**PD166.** [MCQ, 1 mark] What is the output of the following code?
```
print(2 ** 3 ** 2)
```

(A) 64  
(B) 36  
(C) 8  
(D) 512

**PD167.** [MCQ, 1 mark] What is the output of the following code?
```
print(list(zip([1,2,3],'ab')))
```

(A) [(1, 2), ('a', 'b')]  
(B) [(1, 'a'), (2, 'b')]  
(C) [(1, 'a')]  
(D) [(1, 'a'), (2, 'b'), (3, None)]

**PD168.** [MCQ, 1 mark] What is the output of the following code?
```
print(any([0, '', 3]), all([1, 'x', 0]))
```

(A) False False  
(B) True True  
(C) True False  
(D) False True


## Sorting & searching

**PD169.** [NAT, 1 mark] The bubble sort below (without early exit) is run on [6, 16, 5, 8, 15]. How many comparisons are made?
```
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            swap(a[j], a[j + 1])
```

**PD170.** [NAT, 1 mark] Bubble sort (adjacent swaps, no early exit) sorts the array [11, 15, 4, 5, 12, 17, 19] in ascending order. The number of swaps performed is ______.

**PD171.** [NAT, 1 mark] Bubble sort (adjacent swaps, no early exit) sorts the array [12, 9, 14, 15, 1, 10] in ascending order. The number of swaps performed is ______.

**PD172.** [NAT, 1 mark] Bubble sort (adjacent swaps, no early exit) sorts the array [12, 18, 13, 16, 7, 11] in ascending order. The number of swaps performed is ______.

**PD173.** [NAT, 1 mark] Bubble sort (adjacent swaps, no early exit) sorts the array [5, 17, 14, 18, 7, 1] in ascending order. The number of swaps performed is ______.

**PD174.** [NAT, 1 mark] The bubble sort below (without early exit) is run on [12, 1, 9, 13, 18, 19]. How many comparisons are made?
```
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            swap(a[j], a[j + 1])
```

**PD175.** [NAT, 1 mark] The bubble sort below (without early exit) is run on [18, 5, 8, 14, 16, 13, 6]. How many comparisons are made?
```
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            swap(a[j], a[j + 1])
```

**PD176.** [NAT, 1 mark] The bubble sort below (without early exit) is run on [18, 12, 1, 19, 16, 13, 5]. How many comparisons are made?
```
for i in range(n - 1):
    for j in range(n - 1 - i):
        if a[j] > a[j + 1]:
            swap(a[j], a[j + 1])
```

**PD177.** [NAT, 1 mark] Insertion sort is applied to [17, 1, 2, 8, 7, 5]. The total number of element shifts (moves of a[j] to a[j+1] inside the inner loop) is ______.

**PD178.** [NAT, 1 mark] Insertion sort is applied to [2, 3, 11, 12, 1]. The total number of element shifts (moves of a[j] to a[j+1] inside the inner loop) is ______.

**PD179.** [NAT, 1 mark] Insertion sort is applied to [17, 7, 2, 16, 9, 1]. The total number of element shifts (moves of a[j] to a[j+1] inside the inner loop) is ______.

**PD180.** [NAT, 1 mark] Insertion sort is applied to [13, 17, 16, 10, 2, 6]. The total number of element shifts (moves of a[j] to a[j+1] inside the inner loop) is ______.

**PD181.** [NAT, 1 mark] Insertion sort is applied to [3, 13, 6, 15, 16, 10, 1]. The total number of element shifts (moves of a[j] to a[j+1] inside the inner loop) is ______.

**PD182.** [MCQ, 1 mark] Selection sort (select the minimum, swap with the first unsorted position) is applied to [18, 1, 10, 4, 15, 24, 2]. What does the array look like after 2 passes?

(A) [1, 2, 4, 10, 15, 24, 18]  
(B) [1, 2, 10, 4, 15, 24, 18]  
(C) [1, 18, 10, 4, 15, 24, 2]  
(D) [24, 18, 15, 10, 4, 2, 1]

**PD183.** [MCQ, 1 mark] Selection sort (select the minimum, swap with the first unsorted position) is applied to [20, 24, 5, 14, 6]. What does the array look like after 2 passes?

(A) [5, 6, 20, 14, 24]  
(B) [24, 20, 14, 6, 5]  
(C) [5, 24, 20, 14, 6]  
(D) [5, 6, 14, 20, 24]

**PD184.** [MCQ, 1 mark] Selection sort (select the minimum, swap with the first unsorted position) is applied to [18, 5, 16, 7, 15, 17, 8]. What does the array look like after 1 pass?

(A) [18, 17, 16, 15, 8, 7, 5]  
(B) [5, 18, 16, 7, 15, 17, 8]  
(C) [5, 7, 16, 18, 15, 17, 8]  
(D) [18, 5, 16, 7, 15, 17, 8]

**PD185.** [MCQ, 1 mark] Selection sort (select the minimum, swap with the first unsorted position) is applied to [28, 16, 24, 26, 2, 6]. What does the array look like after 2 passes?

(A) [2, 16, 24, 26, 28, 6]  
(B) [2, 6, 16, 26, 28, 24]  
(C) [28, 26, 24, 16, 6, 2]  
(D) [2, 6, 24, 26, 28, 16]

**PD186.** [MCQ, 1 mark] Selection sort (select the minimum, swap with the first unsorted position) is applied to [27, 4, 29, 21, 7]. What does the array look like after 1 pass?

(A) [29, 27, 21, 7, 4]  
(B) [4, 27, 29, 21, 7]  
(C) [27, 4, 29, 21, 7]  
(D) [4, 7, 29, 21, 27]

**PD187.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [7, 22, 24, 42, 43, 49, 60, 61, 73, 81, 97]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 42:
        break
    elif A[mid] < 42:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD188.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [5, 7, 8, 17, 19, 20, 33, 45, 75, 77, 85]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 33:
        break
    elif A[mid] < 33:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD189.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [3, 6, 14, 20, 22, 23, 27, 31, 33, 35, 36, 41, 42, 47, 48, 49, 50, 51, 59, 62, 63, 65, 69, 74, 75, 77, 78, 83, 85, 91, 92]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 48:
        break
    elif A[mid] < 48:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD190.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [10, 13, 16, 17, 18, 21, 23, 25, 31, 33, 34, 36, 39, 41, 47, 51, 53, 57, 64, 65, 66, 71, 74, 76, 77, 79, 80, 88, 91, 93, 99]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 64:
        break
    elif A[mid] < 64:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD191.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [4, 22, 30, 37, 49, 57, 60, 62, 81]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 4:
        break
    elif A[mid] < 4:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD192.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [3, 8, 32, 37, 44, 51, 57, 66, 87]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 8:
        break
    elif A[mid] < 8:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD193.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [18, 21, 22, 29, 43, 53, 96]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 29:
        break
    elif A[mid] < 29:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD194.** [NAT, 2 marks] The following code searches a sorted array. What is the value printed?
```
A = [13, 33, 42, 52, 81, 86, 99]
lo, hi = 0, len(A) - 1
count = 0
while lo <= hi:
    mid = (lo + hi) // 2
    count += 1
    if A[mid] == 13:
        break
    elif A[mid] < 13:
        lo = mid + 1
    else:
        hi = mid - 1
print(count)
```

**PD195.** [MCQ, 1 mark] The maximum number of comparisons binary search makes on a sorted array of 100 elements (each probe is one comparison with the middle element) is

(A) 7  
(B) 8  
(C) 6  
(D) 50

**PD196.** [MCQ, 1 mark] The maximum number of comparisons binary search makes on a sorted array of 31 elements (each probe is one comparison with the middle element) is

(A) 4  
(B) 31  
(C) 6  
(D) 5

**PD197.** [MCQ, 1 mark] The maximum number of comparisons binary search makes on a sorted array of 15 elements (each probe is one comparison with the middle element) is

(A) 4  
(B) 3  
(C) 7  
(D) 15

**PD198.** [MCQ, 1 mark] The maximum number of comparisons binary search makes on a sorted array of 1000 elements (each probe is one comparison with the middle element) is

(A) 9  
(B) 500  
(C) 1000  
(D) 10

**PD199.** [MCQ, 1 mark] The maximum number of comparisons binary search makes on a sorted array of 1023 elements (each probe is one comparison with the middle element) is

(A) 511  
(B) 11  
(C) 1023  
(D) 10

**PD200.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 7) on a = [27, 16, 7, 19, 17, 5, 1, 18]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [18, 1, 5, 17, 19, 7, 16, 27]  
(B) [18, 16, 7, 19, 17, 5, 1, 27]  
(C) [16, 7, 17, 5, 1, 18, 27, 19]  
(D) [1, 5, 7, 16, 17, 18, 19, 27]

**PD201.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 7) on a = [1, 24, 2, 15, 26, 9, 20, 13]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [13, 24, 2, 15, 26, 9, 20, 1]  
(B) [13, 20, 9, 26, 15, 2, 24, 1]  
(C) [1, 2, 9, 13, 26, 24, 20, 15]  
(D) [1, 2, 9, 13, 15, 20, 24, 26]

**PD202.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 6) on a = [6, 24, 17, 18, 14, 27, 16]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [16, 24, 17, 18, 14, 27, 6]  
(B) [6, 14, 16, 24, 17, 18, 27]  
(C) [6, 14, 16, 18, 24, 27, 17]  
(D) [6, 14, 16, 17, 18, 24, 27]

**PD203.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 4) on a = [8, 16, 4, 14, 1]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [1, 16, 4, 14, 8]  
(B) [1, 4, 8, 14, 16]  
(C) [1, 8, 16, 4, 14]  
(D) [1, 14, 4, 16, 8]

**PD204.** [NAT, 2 marks] The partition function below (Lomuto scheme, last element as pivot) is called as partition(a, 0, 6) on a = [29, 7, 11, 27, 17, 12, 14]. The value returned is ______.
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

**PD205.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 6) on a = [4, 29, 18, 26, 9, 16, 20]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [20, 29, 18, 26, 9, 16, 4]  
(B) [4, 9, 16, 18, 20, 26, 29]  
(C) [4, 18, 9, 16, 20, 29, 26]  
(D) [4, 18, 9, 16, 20, 26, 29]

**PD206.** [MCQ, 2 marks] The partition function below (Lomuto scheme) is called as partition(a, 0, 6) on a = [10, 16, 9, 14, 15, 11, 3]. The array a afterwards is
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

(A) [3, 16, 9, 14, 15, 11, 10]  
(B) [3, 9, 10, 11, 14, 15, 16]  
(C) [3, 10, 16, 9, 14, 15, 11]  
(D) [3, 11, 15, 14, 9, 16, 10]

**PD207.** [NAT, 2 marks] The partition function below (Lomuto scheme, last element as pivot) is called as partition(a, 0, 4) on a = [4, 7, 8, 5, 15]. The value returned is ______.
```
def partition(a, lo, hi):
    p = a[hi]
    i = lo - 1
    for j in range(lo, hi):
        if a[j] <= p:
            i += 1
            a[i], a[j] = a[j], a[i]
    a[i + 1], a[hi] = a[hi], a[i + 1]
    return i + 1
```

**PD208.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [20, 7, 4, 33, 16, 11, 38, 15]. The total number of element comparisons made during all merges is ______.

**PD209.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [3, 27, 6, 36, 14, 20]. The total number of element comparisons made during all merges is ______.

**PD210.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [15, 37, 9, 27]. The total number of element comparisons made during all merges is ______.

**PD211.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [38, 20, 10, 12, 4, 25, 34, 27]. The total number of element comparisons made during all merges is ______.

**PD212.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [27, 33, 23, 21]. The total number of element comparisons made during all merges is ______.

**PD213.** [NAT, 2 marks] Top-down merge sort (split at the middle: left half has ⌊n/2⌋ elements) is applied to [1, 10, 4, 21, 30]. The total number of element comparisons made during all merges is ______.

**PD214.** [NAT, 1 mark] The number of inversions (pairs i < j with a[i] > a[j]) in the array [2, 6, 13, 8, 11] is ______.

**PD215.** [NAT, 1 mark] The number of inversions (pairs i < j with a[i] > a[j]) in the array [1, 14, 2, 9, 4, 13] is ______.

**PD216.** [NAT, 1 mark] The number of inversions (pairs i < j with a[i] > a[j]) in the array [4, 1, 8, 13, 2, 12, 5] is ______.

**PD217.** [NAT, 1 mark] The number of inversions (pairs i < j with a[i] > a[j]) in the array [1, 13, 7, 9, 2] is ______.

**PD218.** [NAT, 1 mark] The number of inversions (pairs i < j with a[i] > a[j]) in the array [1, 6, 12, 10, 7, 11] is ______.


## Stacks & queues

**PD219.** [MCQ, 2 marks] The postfix expression 3 8 6 * + is evaluated using a stack. The result is

(A) 51  
(B) 52  
(C) -51  
(D) 50

**PD220.** [MCQ, 2 marks] The postfix expression 2 5 8 * - is evaluated using a stack. The result is

(A) -36  
(B) -39  
(C) 38  
(D) -38

**PD221.** [MCQ, 2 marks] The postfix expression 3 9 9 * + is evaluated using a stack. The result is

(A) 84  
(B) 83  
(C) 85  
(D) -84

**PD222.** [MCQ, 2 marks] The postfix expression 5 5 + 8 7 * + is evaluated using a stack. The result is

(A) -66  
(B) 67  
(C) 65  
(D) 66

**PD223.** [MCQ, 2 marks] The postfix expression 7 4 - 3 9 + + is evaluated using a stack. The result is

(A) 22  
(B) -15  
(C) 16  
(D) 15

**PD224.** [MCQ, 2 marks] The postfix expression 7 5 - 7 9 + + is evaluated using a stack. The result is

(A) 25  
(B) 18  
(C) 19  
(D) 17

**PD225.** [MCQ, 2 marks] All operators are left-associative, with * and / having higher precedence than + and −. The postfix form of  a * b + c / d  is

(A) a b c d * + /  
(B) a b * c d / +  
(C) + / d c * b a  
(D) a b c d / + *

**PD226.** [MCQ, 2 marks] All operators are left-associative, with * and / having higher precedence than + and −. The postfix form of  a + b / c * d  is

(A) a b c / d * +  
(B) a b c d * / +  
(C) + * d / c b a  
(D) a b c d + / *

**PD227.** [MCQ, 2 marks] All operators are left-associative, with * and / having higher precedence than + and −. The postfix form of  a * b - c + d  is

(A) a b * c - d +  
(B) a b c d + - *  
(C) a b c d * - +  
(D) + d - c * b a

**PD228.** [MCQ, 2 marks] All operators are left-associative, with * and / having higher precedence than + and −. The postfix form of  a - b + c * d  is

(A) a b c d * + -  
(B) + * d c - b a  
(C) a b c d - + *  
(D) a b - c d * +

**PD229.** [MCQ, 2 marks] All operators are left-associative, with * and / having higher precedence than + and −. The postfix form of  a / b - c + d  is

(A) a b c d / - +  
(B) a b / c - d +  
(C) + d - c / b a  
(D) a b / c d + -

**PD230.** [MCQ, 1 mark] Starting with an empty stack, the operations push(1), pop, push(2), push(3), push(4), push(5), push(6), push(7), pop are performed. The sequence of values returned by pop (in order) is

(A) [2, 8]  
(B) [1, 7]  
(C) [1, 7, 6]  
(D) [7, 1]

**PD231.** [MCQ, 1 mark] Starting with an empty stack, the operations push(1), pop, push(2), push(3), push(4), pop, push(5), push(6) are performed. The sequence of values returned by pop (in order) is

(A) [1, 4, 6]  
(B) [2, 5]  
(C) [4, 1]  
(D) [1, 4]

**PD232.** [MCQ, 1 mark] Starting with an empty stack, the operations push(1), push(2), pop, push(3), push(4), pop, push(5) are performed. The sequence of values returned by pop (in order) is

(A) [2, 4]  
(B) [3, 5]  
(C) [2, 4, 5]  
(D) [4, 2]

**PD233.** [MCQ, 1 mark] Starting with an empty stack, the operations push(1), push(2), push(3), pop, pop, pop, push(4), pop, push(5) are performed. The sequence of values returned by pop (in order) is

(A) [3, 2, 1, 4, 5]  
(B) [1, 2, 3, 4]  
(C) [3, 2, 1, 4]  
(D) [4, 3, 2, 5]

**PD234.** [MCQ, 1 mark] Starting with an empty stack, the operations push(1), push(2), push(3), push(4), pop, pop are performed. The sequence of values returned by pop (in order) is

(A) [4, 3]  
(B) [3, 4]  
(C) [5, 4]  
(D) [4, 3, 2]

**PD235.** [MCQ, 1 mark] Starting with an empty queue, the operations enqueue(1), enqueue(2), dequeue, enqueue(3), enqueue(4), enqueue(5), enqueue(6) are performed. The queue contents from front to rear are

(A) [3, 4, 5, 6, 7]  
(B) [1]  
(C) [6, 5, 4, 3, 2]  
(D) [2, 3, 4, 5, 6]

**PD236.** [MCQ, 1 mark] Starting with an empty queue, the operations enqueue(1), enqueue(2), enqueue(3), enqueue(4), enqueue(5), enqueue(6), dequeue are performed. The queue contents from front to rear are

(A) [3, 4, 5, 6, 7]  
(B) [6, 5, 4, 3, 2]  
(C) [2, 3, 4, 5, 6]  
(D) [1]

**PD237.** [MCQ, 1 mark] Starting with an empty queue, the operations enqueue(1), dequeue, enqueue(2), dequeue, enqueue(3), enqueue(4) are performed. The queue contents from front to rear are

(A) [1, 2]  
(B) [4, 5]  
(C) [4, 3]  
(D) [3, 4]

**PD238.** [MCQ, 1 mark] Starting with an empty queue, the operations enqueue(1), dequeue, enqueue(2), dequeue, enqueue(3), enqueue(4), enqueue(5), dequeue are performed. The queue contents from front to rear are

(A) [4, 5]  
(B) [5, 4]  
(C) [5, 6]  
(D) [1, 2, 3]

**PD239.** [MCQ, 1 mark] Starting with an empty queue, the operations enqueue(1), enqueue(2), enqueue(3), dequeue, dequeue, enqueue(4), enqueue(5) are performed. The queue contents from front to rear are

(A) [1, 2]  
(B) [5, 4, 3]  
(C) [4, 5, 6]  
(D) [3, 4, 5]

**PD240.** [MCQ, 2 marks] The numbers 1, 2, …, 4 are pushed onto a stack in this order, with pops allowed at any time. How many different output sequences are possible?

(A) 16  
(B) 13  
(C) 14  
(D) 24

**PD241.** [MCQ, 2 marks] The numbers 1, 2, …, 5 are pushed onto a stack in this order, with pops allowed at any time. How many different output sequences are possible?

(A) 42  
(B) 32  
(C) 41  
(D) 43


## Statements & concepts

**PD242.** [MSQ, 2 marks] Which of the following statements about sorting algorithms are TRUE?

(A) Merge sort has O(n log n) worst-case time  
(B) Quicksort with the last element as pivot has O(n²) worst case on sorted input  
(C) Selection sort is stable in its usual swap-based form  
(D) Insertion sort takes O(n) time on an already sorted array

**PD243.** [MSQ, 2 marks] Which of the following statements about hash tables are TRUE?

(A) With chaining, the load factor can exceed 1  
(B) With linear probing, the load factor cannot exceed 1  
(C) Linear probing suffers from primary clustering  
(D) Deleting a key under linear probing can simply set its slot to empty without any consequences

**PD244.** [MSQ, 2 marks] Which of the following statements about binary search trees are TRUE?

(A) The inorder traversal of a BST gives keys in sorted order  
(B) Searching takes O(h) time for height h  
(C) Inserting sorted keys always gives a balanced tree  
(D) Deleting a leaf node leaves the BST property intact

**PD245.** [MSQ, 2 marks] Which of the following statements about graph traversals are TRUE?

(A) BFS uses a queue  
(B) DFS can be written recursively  
(C) BFS finds shortest paths in unweighted graphs  
(D) DFS finds shortest paths in unweighted graphs

**PD246.** [MSQ, 2 marks] Which of the following Python statements are TRUE?

(A) Lists are mutable  
(B) Tuples are immutable  
(C) Strings are mutable  
(D) Dictionary keys must be hashable

**PD247.** [MSQ, 2 marks] Which of the following are TRUE about stacks and queues?

(A) A stack is LIFO  
(B) A queue is FIFO  
(C) Reversing a string is a natural use of a stack  
(D) A queue can be used to evaluate postfix expressions directly

**PD248.** [MSQ, 2 marks] Which of the following are TRUE about Dijkstra's algorithm?

(A) It works for graphs with non-negative edge weights  
(B) It may fail with negative edge weights  
(C) It produces a minimum spanning tree  
(D) It finds shortest paths from a single source

**PD249.** [MSQ, 2 marks] Which of the following Python expressions evaluate to True?

(A) [1, 2] == [1, 2]  
(B) (1, 2) == [1, 2]  
(C) 'a' < 'b'  
(D) 3 == 3.0

**PD250.** [MSQ, 2 marks] Which of the following recurrences solve to Θ(n log n)?

(A) T(n) = 2T(n/2) + n  
(B) T(n) = T(n/2) + n  
(C) T(n) = 3T(n/3) + n  
(D) T(n) = 4T(n/2) + n

**PD251.** [MSQ, 2 marks] Which of the following hold for a binary tree with n nodes?

(A) It has n − 1 edges  
(B) Its height is at least ⌊log₂ n⌋  
(C) Its height is at most n − 1  
(D) It has exactly ⌈n/2⌉ leaves


## Trees

**PD252.** [MCQ, 2 marks] Keys [38, 31, 36, 1, 24, 30] are inserted, in this order, into an initially empty binary search tree. Its preorder traversal is

(A) [30, 24, 1, 36, 31, 38]  
(B) [38, 31, 1, 36, 24, 30]  
(C) [1, 24, 30, 31, 36, 38]  
(D) [38, 31, 1, 24, 30, 36]

**PD253.** [NAT, 1 mark] Keys [26, 14, 36, 7, 9, 23] are inserted, in this order, into an initially empty binary search tree. The number of leaf nodes is ______.

**PD254.** [MCQ, 2 marks] Keys [39, 14, 24, 8, 28, 27] are inserted, in this order, into an initially empty binary search tree. Its preorder traversal is

(A) [27, 8, 24, 14, 28, 39]  
(B) [39, 14, 8, 24, 28, 27]  
(C) [8, 14, 24, 27, 28, 39]  
(D) [8, 27, 28, 24, 14, 39]

**PD255.** [NAT, 1 mark] Keys [15, 2, 37, 19, 10, 9, 32] are inserted, in this order, into an initially empty binary search tree. The number of leaf nodes is ______.

**PD256.** [MCQ, 2 marks] Keys [20, 13, 10, 25, 6, 15, 4, 38] are inserted, in this order, into an initially empty binary search tree. Its level-order traversal is

(A) [20, 13, 25, 10, 15, 38, 6, 4]  
(B) [4, 6, 10, 13, 15, 20, 25, 38]  
(C) [20, 13, 10, 6, 4, 15, 25, 38]  
(D) [4, 6, 10, 15, 13, 38, 25, 20]

**PD257.** [MCQ, 2 marks] Keys [18, 31, 14, 34, 17, 25, 2] are inserted, in this order, into an initially empty binary search tree. Its preorder traversal is

(A) [2, 25, 17, 14, 18, 34, 31]  
(B) [18, 14, 2, 17, 31, 25, 34]  
(C) [18, 14, 31, 2, 17, 25, 34]  
(D) [2, 17, 14, 25, 34, 31, 18]

**PD258.** [NAT, 1 mark] Keys [24, 35, 2, 25, 8, 5] are inserted, in this order, into an initially empty binary search tree. The number of leaf nodes is ______.

**PD259.** [NAT, 1 mark] Keys [33, 25, 39, 31, 12, 1, 4, 36] are inserted, in this order, into an initially empty binary search tree. The height of the tree (number of edges on the longest root-to-leaf path) is ______.

**PD260.** [MCQ, 2 marks] Keys [23, 3, 27, 36, 12, 6] are inserted, in this order, into an initially empty binary search tree. Its level-order traversal is

(A) [6, 3, 12, 36, 27, 23]  
(B) [23, 3, 12, 6, 27, 36]  
(C) [6, 12, 3, 36, 27, 23]  
(D) [23, 3, 27, 12, 36, 6]

**PD261.** [MCQ, 2 marks] Keys [27, 8, 17, 6, 31, 23, 20] are inserted, in this order, into an initially empty binary search tree. Its level-order traversal is

(A) [20, 6, 23, 17, 31, 8, 27]  
(B) [27, 8, 31, 6, 17, 23, 20]  
(C) [27, 8, 6, 17, 23, 20, 31]  
(D) [6, 8, 17, 20, 23, 27, 31]

**PD262.** [NAT, 1 mark] Keys [21, 35, 29, 20, 11, 17] are inserted, in this order, into an initially empty binary search tree. The height of the tree (number of edges on the longest root-to-leaf path) is ______.

**PD263.** [MCQ, 2 marks] Keys [35, 28, 29, 36, 17, 13, 16, 31] are inserted, in this order, into an initially empty binary search tree. Its postorder traversal is

(A) [16, 13, 17, 31, 29, 28, 36, 35]  
(B) [13, 16, 17, 28, 29, 31, 35, 36]  
(C) [35, 28, 17, 13, 16, 29, 31, 36]  
(D) [13, 28, 29, 17, 16, 35, 36, 31]

**PD264.** [MCQ, 2 marks] The preorder traversal of a binary tree is [5, 1, 4, 2, 3] and its inorder traversal is [1, 5, 3, 2, 4]. The postorder traversal is

(A) [3, 2, 4, 1, 5]  
(B) [5, 1, 4, 2, 3]  
(C) [4, 2, 3, 5, 1]  
(D) [1, 3, 2, 4, 5]

**PD265.** [MCQ, 2 marks] The preorder traversal of a binary tree is [4, 2, 7, 9, 8] and its inorder traversal is [4, 7, 2, 9, 8]. The postorder traversal is

(A) [4, 2, 7, 9, 8]  
(B) [7, 8, 9, 2, 4]  
(C) [4, 2, 9, 8, 7]  
(D) [8, 9, 2, 7, 4]

**PD266.** [MCQ, 2 marks] The preorder traversal of a binary tree is [7, 1, 6, 2, 9, 8] and its inorder traversal is [1, 7, 6, 2, 8, 9]. The postorder traversal is

(A) [2, 6, 1, 8, 9, 7]  
(B) [1, 8, 9, 2, 6, 7]  
(C) [7, 1, 6, 2, 9, 8]  
(D) [7, 6, 2, 9, 8, 1]

**PD267.** [MCQ, 2 marks] The preorder traversal of a binary tree is [3, 1, 2, 7, 4] and its inorder traversal is [3, 1, 7, 4, 2]. The postorder traversal is

(A) [2, 1, 4, 7, 3]  
(B) [3, 1, 2, 7, 4]  
(C) [4, 7, 2, 1, 3]  
(D) [2, 4, 7, 1, 3]

**PD268.** [MCQ, 2 marks] The preorder traversal of a binary tree is [9, 3, 5, 7, 8] and its inorder traversal is [7, 5, 3, 8, 9]. The postorder traversal is

(A) [9, 3, 8, 5, 7]  
(B) [9, 8, 3, 5, 7]  
(C) [7, 5, 8, 3, 9]  
(D) [8, 7, 5, 3, 9]

**PD269.** [MCQ, 2 marks] The preorder traversal of a binary tree is [9, 4, 8, 5, 6, 7] and its inorder traversal is [5, 6, 8, 4, 9, 7]. The postorder traversal is

(A) [9, 4, 8, 5, 6, 7]  
(B) [9, 7, 4, 8, 5, 6]  
(C) [6, 5, 8, 4, 7, 9]  
(D) [7, 6, 5, 8, 4, 9]

**PD270.** [MCQ, 2 marks] The preorder traversal of a binary tree is [6, 1, 5, 3, 9, 7, 8] and its inorder traversal is [9, 3, 7, 5, 1, 6, 8]. The postorder traversal is

(A) [8, 6, 1, 5, 7, 3, 9]  
(B) [3, 5, 1, 8, 7, 9, 6]  
(C) [9, 7, 3, 5, 1, 8, 6]  
(D) [6, 8, 1, 5, 3, 7, 9]

**PD271.** [MCQ, 2 marks] The preorder traversal of a binary tree is [7, 2, 1, 9, 8] and its inorder traversal is [2, 1, 7, 8, 9]. The postorder traversal is

(A) [7, 9, 8, 2, 1]  
(B) [7, 2, 1, 9, 8]  
(C) [9, 8, 7, 1, 2]  
(D) [1, 2, 8, 9, 7]

**PD272.** [MCQ, 1 mark] The minimum possible height of a binary tree with 94 nodes (single node has height 0) is

(A) 8  
(B) 7  
(C) 64  
(D) 6

**PD273.** [MCQ, 1 mark] The maximum number of nodes in a binary tree of height 3 (a single node has height 0) is

(A) 8  
(B) 14  
(C) 15  
(D) 7

**PD274.** [MCQ, 1 mark] The minimum possible height of a binary tree with 8 nodes (single node has height 0) is

(A) 2  
(B) 4  
(C) 3  
(D) 8

**PD275.** [MCQ, 1 mark] A full binary tree (every node has 0 or 2 children) has 15 leaf nodes. The number of internal nodes is

(A) 29  
(B) 15  
(C) 16  
(D) 14

**PD276.** [MCQ, 1 mark] A full binary tree (every node has 0 or 2 children) has 16 leaf nodes. The number of internal nodes is

(A) 15  
(B) 31  
(C) 8  
(D) 17

**PD277.** [MCQ, 1 mark] The maximum number of nodes in a binary tree of height 2 (a single node has height 0) is

(A) 6  
(B) 4  
(C) 7  
(D) 3

**PD278.** [MCQ, 1 mark] A tree with 9 nodes has how many edges?

(A) 9  
(B) 18  
(C) 8  
(D) 7

**PD279.** [MCQ, 1 mark] The maximum number of nodes in a binary tree of height 6 (a single node has height 0) is

(A) 127  
(B) 63  
(C) 126  
(D) 64


## Answers and solutions

- **PD1**: 10 — Count the iterations of the loop.
- **PD2**: 5 — Count the iterations of the loop.
- **PD3**: 5 — Count the iterations of the loop.
- **PD4**: 7 — Count the iterations of the loop.
- **PD5**: 8 — Count the iterations of the loop.
- **PD6**: 8 — Count the iterations of the loop.
- **PD7**: 9 — Count the iterations of the loop.
- **PD8**: 14 — Count the iterations of the loop.
- **PD9**: D — Use the master theorem or expansion.
- **PD10**: B — Use the master theorem or expansion.
- **PD11**: B — Use the master theorem or expansion.
- **PD12**: D — Use the master theorem or expansion.
- **PD13**: D — Use the master theorem or expansion.
- **PD14**: C — Use the master theorem or expansion.
- **PD15**: A — Use the master theorem or expansion.
- **PD16**: D — Use the master theorem or expansion.
- **PD17**: C — Use the master theorem or expansion.
- **PD18**: A — Use the master theorem or expansion.
- **PD19**: C — Count how often the innermost statement runs.
- **PD20**: D — Count how often the innermost statement runs.
- **PD21**: A — Count how often the innermost statement runs.
- **PD22**: C — Count how often the innermost statement runs.
- **PD23**: B — Count how often the innermost statement runs.
- **PD24**: D — Count how often the innermost statement runs.
- **PD25**: C — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD26**: C — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD27**: A — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD28**: C — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD29**: B — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD30**: D — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD31**: C — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD32**: C — Maintain a queue (BFS) or recurse (DFS), always taking the alphabetically smallest unvisited neighbour.
- **PD33**: 3 — Run Dijkstra's algorithm from A.
- **PD34**: 3 — Run Dijkstra's algorithm from A.
- **PD35**: 3 — Run Dijkstra's algorithm from A.
- **PD36**: 6 — Run Dijkstra's algorithm from A.
- **PD37**: 20 — Run Dijkstra's algorithm from A.
- **PD38**: 17 — Run Dijkstra's algorithm from A.
- **PD39**: 4 — Count the groups of vertices reachable from each other (isolated vertices count as components).
- **PD40**: 7 — Count the groups of vertices reachable from each other (isolated vertices count as components).
- **PD41**: 3 — Count the groups of vertices reachable from each other (isolated vertices count as components).
- **PD42**: 3 — Count the groups of vertices reachable from each other (isolated vertices count as components).
- **PD43**: 4 — Count the groups of vertices reachable from each other (isolated vertices count as components).
- **PD44**: 24 — Count the orderings in which every edge goes from earlier to later.
- **PD45**: 8 — Count the orderings in which every edge goes from earlier to later.
- **PD46**: 12 — Count the orderings in which every edge goes from earlier to later.
- **PD47**: 3 — Count the orderings in which every edge goes from earlier to later.
- **PD48**: 6 — Count the orderings in which every edge goes from earlier to later.
- **PD49**: A — Each edge contributes 1 to the degree of each of its two endpoints.
- **PD50**: D — C(n,2) = n(n−1)/2.
- **PD51**: C — C(n,2) = n(n−1)/2.
- **PD52**: C — C(n,2) = n(n−1)/2.
- **PD53**: 1 — Group the keys by k mod m.
- **PD54**: 1 — A key is displaced when its home slot is already occupied.
- **PD55**: 3 — Group the keys by k mod m.
- **PD56**: 9 — On collision, step to the next slot (wrapping around).
- **PD57**: 0 — A key is displaced when its home slot is already occupied.
- **PD58**: 2 — Group the keys by k mod m.
- **PD59**: 2 — Group the keys by k mod m.
- **PD60**: 5 — On collision, step to the next slot (wrapping around).
- **PD61**: 3 — A key is displaced when its home slot is already occupied.
- **PD62**: A — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD63**: C — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD64**: C — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD65**: C — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD66**: D — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD67**: C — A default list is created once when the function is defined and shared by every call that does not pass its own list; the call with [] uses a fresh list.
- **PD68**: B — Slice semantics: start inclusive, stop exclusive, step -1.
- **PD69**: C — Slice semantics: start inclusive, stop exclusive, step 1.
- **PD70**: D — Slice semantics: start inclusive, stop exclusive, step 1.
- **PD71**: C — Slice semantics: start inclusive, stop exclusive, step -1.
- **PD72**: A — Slice semantics: start inclusive, stop exclusive, step 3.
- **PD73**: D — Slice semantics: start inclusive, stop exclusive, step -1.
- **PD74**: C — Slice semantics: start inclusive, stop exclusive, step 2.
- **PD75**: A — Slice semantics: start inclusive, stop exclusive, step 2.
- **PD76**: A — Slice semantics: start inclusive, stop exclusive, step 2.
- **PD77**: A — Slice semantics: start inclusive, stop exclusive, step 1.
- **PD78**: B — Keep elements with x < 5, then apply x*x.
- **PD79**: C — Keep elements with x <= 4, then apply x%3.
- **PD80**: C — Keep elements with x <= 7, then apply x*x.
- **PD81**: C — Keep elements with x <= 8, then apply x%3.
- **PD82**: A — Keep elements with x > 6, then apply x%3.
- **PD83**: B — Keep elements with x > 8, then apply x%3.
- **PD84**: A — Keep elements with x >= 3, then apply x+1.
- **PD85**: B — Keep elements with x >= 7, then apply 2*x.
- **PD86**: B — Trace the recursion from the base case upwards.
- **PD87**: D — Trace the recursion from the base case upwards.
- **PD88**: D — Trace the recursion from the base case upwards.
- **PD89**: B — Trace the recursion from the base case upwards.
- **PD90**: C — Trace the recursion from the base case upwards.
- **PD91**: D — Trace the recursion from the base case upwards.
- **PD92**: A — Trace the recursion from the base case upwards.
- **PD93**: D — Trace the recursion from the base case upwards.
- **PD94**: C — Trace the recursion from the base case upwards.
- **PD95**: C — Trace the recursion from the base case upwards.
- **PD96**: C — Trace the recursion from the base case upwards.
- **PD97**: A — Trace the recursion from the base case upwards.
- **PD98**: A — Trace the recursion from the base case upwards.
- **PD99**: C — Trace the recursion from the base case upwards.
- **PD100**: 9 — Trace the loop variables step by step.
- **PD101**: 15 — Trace the loop variables step by step.
- **PD102**: 30 — Trace the loop variables step by step.
- **PD103**: 9 — Trace the loop variables step by step.
- **PD104**: 187 — Trace the loop variables step by step.
- **PD105**: 35 — Trace the loop variables step by step.
- **PD106**: 112 — Trace the loop variables step by step.
- **PD107**: 9 — Trace the loop variables step by step.
- **PD108**: 34 — Trace the loop variables step by step.
- **PD109**: 11 — Trace the loop variables step by step.
- **PD110**: D — Evaluate the string method / slice directly.
- **PD111**: A — Evaluate the string method / slice directly.
- **PD112**: D — Evaluate the string method / slice directly.
- **PD113**: C — Evaluate the string method / slice directly.
- **PD114**: B — Evaluate the string method / slice directly.
- **PD115**: D — Evaluate the string method / slice directly.
- **PD116**: B — Evaluate the string method / slice directly.
- **PD117**: A — Evaluate the string method / slice directly.
- **PD118**: C — Evaluate the string method / slice directly.
- **PD119**: B — Evaluate the string method / slice directly.
- **PD120**: D — Apply the updates in order; .get returns the default when the key is missing.
- **PD121**: D — Apply the updates in order; .get returns the default when the key is missing.
- **PD122**: D — Apply the updates in order; .get returns the default when the key is missing.
- **PD123**: A — Apply the updates in order; .get returns the default when the key is missing.
- **PD124**: A — Apply the updates in order; .get returns the default when the key is missing.
- **PD125**: B — Set operator |.
- **PD126**: B — Set operator &.
- **PD127**: D — Set operator ^.
- **PD128**: B — Set operator -.
- **PD129**: A — Set operator ^.
- **PD130**: D — Set operator ^.
- **PD131**: C — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD132**: C — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD133**: B — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD134**: A — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD135**: D — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD136**: B — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD137**: C — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD138**: D — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD139**: D — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD140**: C — Python's // floors toward −∞ and % takes the sign of the divisor.
- **PD141**: A — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD142**: A — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD143**: D — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD144**: C — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD145**: A — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD146**: B — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD147**: C — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD148**: A — global/nonlocal let a function rebind a name from an enclosing scope; otherwise assignment makes a new local.
- **PD149**: A — Evaluate the statement according to Python semantics.
- **PD150**: A — Evaluate the statement according to Python semantics.
- **PD151**: D — Evaluate the statement according to Python semantics.
- **PD152**: C — Evaluate the statement according to Python semantics.
- **PD153**: D — Evaluate the statement according to Python semantics.
- **PD154**: A — Evaluate the statement according to Python semantics.
- **PD155**: A — Evaluate the statement according to Python semantics.
- **PD156**: A — Evaluate the statement according to Python semantics.
- **PD157**: C — Evaluate the statement according to Python semantics.
- **PD158**: D — Evaluate the statement according to Python semantics.
- **PD159**: D — Evaluate the statement according to Python semantics.
- **PD160**: A — Evaluate the statement according to Python semantics.
- **PD161**: C — Evaluate the statement according to Python semantics.
- **PD162**: A — Evaluate the statement according to Python semantics.
- **PD163**: A — Evaluate the statement according to Python semantics.
- **PD164**: D — Evaluate the statement according to Python semantics.
- **PD165**: B — Evaluate the statement according to Python semantics.
- **PD166**: D — Evaluate the statement according to Python semantics.
- **PD167**: B — Evaluate the statement according to Python semantics.
- **PD168**: C — Evaluate the statement according to Python semantics.
- **PD169**: 10 — Comparisons = (n−1) + … + 1 = n(n−1)/2 = 10.
- **PD170**: 5 — Swaps equal the number of inversions.
- **PD171**: 8 — Swaps equal the number of inversions.
- **PD172**: 10 — Swaps equal the number of inversions.
- **PD173**: 9 — Swaps equal the number of inversions.
- **PD174**: 15 — Comparisons = (n−1) + … + 1 = n(n−1)/2 = 15.
- **PD175**: 21 — Comparisons = (n−1) + … + 1 = n(n−1)/2 = 21.
- **PD176**: 21 — Comparisons = (n−1) + … + 1 = n(n−1)/2 = 21.
- **PD177**: 8 — Shifts equal the number of inversions in the array.
- **PD178**: 4 — Shifts equal the number of inversions in the array.
- **PD179**: 11 — Shifts equal the number of inversions in the array.
- **PD180**: 12 — Shifts equal the number of inversions in the array.
- **PD181**: 10 — Shifts equal the number of inversions in the array.
- **PD182**: B — Each pass places the next smallest element at the front of the unsorted part.
- **PD183**: A — Each pass places the next smallest element at the front of the unsorted part.
- **PD184**: B — Each pass places the next smallest element at the front of the unsorted part.
- **PD185**: D — Each pass places the next smallest element at the front of the unsorted part.
- **PD186**: B — Each pass places the next smallest element at the front of the unsorted part.
- **PD187**: 3 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD188**: 3 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD189**: 5 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD190**: 5 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD191**: 3 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD192**: 2 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD193**: 1 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD194**: 3 — Trace lo, hi and mid until the key is found or the range is empty.
- **PD195**: A — ⌊log₂ 100⌋ + 1 = 7.
- **PD196**: D — ⌊log₂ 31⌋ + 1 = 5.
- **PD197**: A — ⌊log₂ 15⌋ + 1 = 4.
- **PD198**: D — ⌊log₂ 1000⌋ + 1 = 10.
- **PD199**: D — ⌊log₂ 1023⌋ + 1 = 10.
- **PD200**: C — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD201**: C — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD202**: C — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD203**: A — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD204**: 3 — It returns the final index of the pivot, equal to the number of elements ≤ pivot, excluding the pivot itself.
- **PD205**: D — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD206**: A — Trace i and j; finish by swapping the pivot into position i + 1.
- **PD207**: 4 — It returns the final index of the pivot, equal to the number of elements ≤ pivot, excluding the pivot itself.
- **PD208**: 17 — Count comparisons in each merge until one list is exhausted.
- **PD209**: 10 — Count comparisons in each merge until one list is exhausted.
- **PD210**: 5 — Count comparisons in each merge until one list is exhausted.
- **PD211**: 15 — Count comparisons in each merge until one list is exhausted.
- **PD212**: 4 — Count comparisons in each merge until one list is exhausted.
- **PD213**: 6 — Count comparisons in each merge until one list is exhausted.
- **PD214**: 2 — Count, for each element, the smaller elements to its right.
- **PD215**: 5 — Count, for each element, the smaller elements to its right.
- **PD216**: 8 — Count, for each element, the smaller elements to its right.
- **PD217**: 5 — Count, for each element, the smaller elements to its right.
- **PD218**: 4 — Count, for each element, the smaller elements to its right.
- **PD219**: A — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD220**: D — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD221**: A — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD222**: D — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD223**: D — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD224**: B — Push operands; on an operator, pop two, apply (second popped is the left operand), push the result.
- **PD225**: B — Use the shunting-yard algorithm: pop operators of equal or higher precedence before pushing a new one.
- **PD226**: A — Use the shunting-yard algorithm: pop operators of equal or higher precedence before pushing a new one.
- **PD227**: A — Use the shunting-yard algorithm: pop operators of equal or higher precedence before pushing a new one.
- **PD228**: D — Use the shunting-yard algorithm: pop operators of equal or higher precedence before pushing a new one.
- **PD229**: B — Use the shunting-yard algorithm: pop operators of equal or higher precedence before pushing a new one.
- **PD230**: B — A stack is last-in, first-out.
- **PD231**: D — A stack is last-in, first-out.
- **PD232**: A — A stack is last-in, first-out.
- **PD233**: C — A stack is last-in, first-out.
- **PD234**: A — A stack is last-in, first-out.
- **PD235**: D — A queue is first-in, first-out; dequeue removes from the front.
- **PD236**: C — A queue is first-in, first-out; dequeue removes from the front.
- **PD237**: D — A queue is first-in, first-out; dequeue removes from the front.
- **PD238**: A — A queue is first-in, first-out; dequeue removes from the front.
- **PD239**: D — A queue is first-in, first-out; dequeue removes from the front.
- **PD240**: C — The count is the Catalan number C_4 = 14.
- **PD241**: A — The count is the Catalan number C_5 = 42.
- **PD242**: A, B, D — Swap-based selection sort is not stable (equal elements can change order).
- **PD243**: A, B, C — Setting a deleted slot to empty can break later searches; a tombstone marker is used instead.
- **PD244**: A, B, D — Sorted insertion gives a skewed tree.
- **PD245**: A, B, C — Only BFS guarantees shortest paths in unweighted graphs.
- **PD246**: A, B, D — Strings are immutable.
- **PD247**: A, B, C — Postfix evaluation uses a stack.
- **PD248**: A, B, D — A minimum spanning tree comes from Prim's or Kruskal's algorithm.
- **PD249**: A, C, D — A tuple never equals a list.
- **PD250**: A, C — By the master theorem the first and third are n log n; the second is n and the fourth is n².
- **PD251**: A, B, C — The number of leaves depends on the shape of the tree.
- **PD252**: D — Build the BST, then read the preorder order.
- **PD253**: 3 — A leaf has no children after all insertions.
- **PD254**: B — Build the BST, then read the preorder order.
- **PD255**: 2 — A leaf has no children after all insertions.
- **PD256**: A — Build the BST, then read the level-order order.
- **PD257**: B — Build the BST, then read the preorder order.
- **PD258**: 2 — A leaf has no children after all insertions.
- **PD259**: 4 — Insert each key by comparing with nodes from the root.
- **PD260**: D — Build the BST, then read the level-order order.
- **PD261**: B — Build the BST, then read the level-order order.
- **PD262**: 3 — Insert each key by comparing with nodes from the root.
- **PD263**: A — Build the BST, then read the postorder order.
- **PD264**: D — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD265**: B — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD266**: B — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD267**: C — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD268**: C — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD269**: C — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD270**: C — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD271**: D — The first preorder element is the root; it splits the inorder list into left and right subtrees; recurse.
- **PD272**: D — A complete tree of height h holds between 2^h and 2^(h+1) − 1 nodes.
- **PD273**: C — 1 + 2 + … + 2^h = 2^(h+1) − 1.
- **PD274**: C — A complete tree of height h holds between 2^h and 2^(h+1) − 1 nodes.
- **PD275**: D — In a full binary tree, internal nodes = leaves − 1.
- **PD276**: A — In a full binary tree, internal nodes = leaves − 1.
- **PD277**: C — 1 + 2 + … + 2^h = 2^(h+1) − 1.
- **PD278**: C — A tree on n nodes has n − 1 edges.
- **PD279**: A — 1 + 2 + … + 2^h = 2^(h+1) − 1.
