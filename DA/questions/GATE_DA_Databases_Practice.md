# GATE DA — Databases & Warehousing practice (original)

146 original questions (MCQ, MSQ and NAT) with answers and solutions. SQL and relational-algebra answers were obtained by executing the queries in SQLite; functional-dependency, normal-form and key questions were computed by code (the normal-form routine was cross-checked against a brute-force implementation on 3000 random schemas with no mismatch). All answers were re-verified independently on 1 November 2026 (see workdone.md).


## Data warehousing

**DB1.** [NAT, 2 marks] A data cube has 3 dimensions whose concept hierarchies have 2, 3, 2 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB2.** [NAT, 2 marks] A data cube has 5 dimensions whose concept hierarchies have 3, 3, 3, 4, 4 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB3.** [NAT, 2 marks] A data cube has 4 dimensions whose concept hierarchies have 4, 4, 4, 4 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB4.** [NAT, 2 marks] A data cube has 5 dimensions whose concept hierarchies have 3, 4, 4, 3, 4 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB5.** [NAT, 2 marks] A data cube has 2 dimensions whose concept hierarchies have 2, 2 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB6.** [NAT, 2 marks] A data cube has 3 dimensions whose concept hierarchies have 4, 2, 3 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB7.** [NAT, 2 marks] A data cube has 5 dimensions whose concept hierarchies have 3, 3, 4, 4, 3 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB8.** [NAT, 2 marks] A data cube has 3 dimensions whose concept hierarchies have 3, 2, 4 levels (not counting the virtual top level ‘all’). The total number of possible cuboids is ______.

**DB9.** [MCQ, 1 mark] A data cube has 4 dimensions and no concept hierarchies. The number of cuboids (including the apex cuboid) is

(A) 32  
(B) 16  
(C) 24  
(D) 15

**DB10.** [MCQ, 1 mark] A data cube has 5 dimensions and no concept hierarchies. The number of cuboids (including the apex cuboid) is

(A) 32  
(B) 31  
(C) 25  
(D) 64

**DB11.** [MCQ, 1 mark] A data cube has 7 dimensions and no concept hierarchies. The number of cuboids (including the apex cuboid) is

(A) 256  
(B) 5040  
(C) 127  
(D) 128

**DB12.** [MCQ, 1 mark] A data cube has 6 dimensions and no concept hierarchies. The number of cuboids (including the apex cuboid) is

(A) 63  
(B) 64  
(C) 720  
(D) 128

**DB13.** [MCQ, 1 mark] A data cube has 3 dimensions and no concept hierarchies. The number of cuboids (including the apex cuboid) is

(A) 9  
(B) 8  
(C) 16  
(D) 6

**DB14.** [NAT, 2 marks] For the data [87, 51, 23, 30, 55], using the population standard deviation, the z-score of 30 is ______ (2 decimals).

**DB15.** [NAT, 2 marks] For the data [37, 62, 16, 67, 41], using the population standard deviation, the z-score of 37 is ______ (2 decimals).

**DB16.** [NAT, 1 mark] Min-max normalisation to [0, 1] is applied to the data [24, 90, 27, 34, 38]. The normalised value of 34 is ______ (2 decimals).

**DB17.** [NAT, 2 marks] For the data [82, 61, 21, 67, 21], using the population standard deviation, the z-score of 61 is ______ (2 decimals).

**DB18.** [NAT, 1 mark] Min-max normalisation to [0, 1] is applied to the data [21, 62, 69, 56, 19]. The normalised value of 69 is ______ (2 decimals).

**DB19.** [NAT, 2 marks] For the data [56, 42, 50, 36, 30], using the population standard deviation, the z-score of 50 is ______ (2 decimals).

**DB20.** [NAT, 1 mark] Min-max normalisation to [0, 1] is applied to the data [49, 90, 14, 30, 52]. The normalised value of 90 is ______ (2 decimals).

**DB21.** [NAT, 1 mark] Min-max normalisation to [0, 1] is applied to the data [42, 39, 73, 26, 77]. The normalised value of 77 is ______ (2 decimals).

**DB22.** [MCQ, 1 mark] In a star schema with one fact table and several dimension tables, which statement is correct?

(A) The fact table is highly normalised into sub-dimensions  
(B) Dimension tables hold the measures  
(C) There are no foreign keys in a star schema  
(D) The fact table holds measures and foreign keys to the dimension tables


## ER model

**DB23.** [MCQ, 2 marks] The minimum number of relational tables needed to represent a one-to-many relationship (one E1 to many E2) with total participation of E2, with all attributes kept, is

(A) 4  
(B) 3  
(C) 2  
(D) 1

**DB24.** [MCQ, 2 marks] The minimum number of relational tables needed to represent a one-to-one relationship between E1 and E2, with total participation of both E1 and E2 (merging allowed), with all attributes kept, is

(A) 1  
(B) 3  
(C) 4  
(D) 2

**DB25.** [MCQ, 2 marks] The minimum number of relational tables needed to represent a many-to-many relationship between entities E1 and E2, with all attributes kept, is

(A) 4  
(B) 1  
(C) 3  
(D) 2

**DB26.** [MCQ, 1 mark] A weak entity set is identified by

(A) its own full primary key alone  
(B) a foreign key from any entity  
(C) the key of the relationship only  
(D) its partial key together with the key of its owner entity


## Functional dependencies

**DB27.** [MCQ, 1 mark] A relation R(A, B, C, D) has the functional dependencies AD → B, B → A, D → A, AC → B. The attribute closure D⁺ is

(A) ABC  
(B) ABD  
(C) AB  
(D) AD

**DB28.** [MCQ, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies CE → A, D → A, C → E, E → A. The attribute closure CD⁺ is

(A) CD  
(B) ABE  
(C) ACD  
(D) ACDE

**DB29.** [MCQ, 1 mark] A relation R(A, B, C, D) has the functional dependencies AC → D, CD → B, D → B, A → C. The attribute closure C⁺ is

(A) CZ  
(B) ABCD  
(C) C  
(D) ABD

**DB30.** [MCQ, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies AC → E, DE → B, D → B, BC → D. The attribute closure D⁺ is

(A) ABCE  
(B) BD  
(C) B  
(D) ABCDE

**DB31.** [MCQ, 1 mark] A relation R(A, B, C, D) has the functional dependencies AD → C, BC → A, AC → B, D → B. The attribute closure D⁺ is

(A) ABCD  
(B) B  
(C) BD  
(D) ABC

**DB32.** [MCQ, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies AC → D, E → B, D → B, BE → C. The attribute closure B⁺ is

(A) ABCDE  
(B) ACDE  
(C) BZ  
(D) B

**DB33.** [MCQ, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies C → A, AD → E. The attribute closure E⁺ is

(A) ABCDE  
(B) ABCD  
(C) E  
(D) EZ

**DB34.** [MCQ, 1 mark] A relation R(A, B, C, D) has the functional dependencies AB → D, A → B, C → A, B → A. The attribute closure AC⁺ is

(A) ABCD  
(B) BD  
(C) ABC  
(D) AC

**DB35.** [MCQ, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies D → E, BC → A. The attribute closure BC⁺ is

(A) ABC  
(B) AB  
(C) ABCDE  
(D) ADE

**DB36.** [MCQ, 1 mark] A relation R(A, B, C, D) has the functional dependencies AC → B, B → A. The attribute closure A⁺ is

(A) AZ  
(B) BCD  
(C) A  
(D) ABCD

**DB37.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies AD → B, BC → D. The number of candidate keys is ______.

**DB38.** [NAT, 2 marks] A relation R(A, B, C, D) has the functional dependencies B → C, AB → C, D → C, BD → C. The number of candidate keys is ______.

**DB39.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies B → D, C → A, CD → E. The number of candidate keys is ______.

**DB40.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies DE → B, AC → E, D → C, A → B. The number of candidate keys is ______.

**DB41.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies E → D, AB → E, A → E. The number of candidate keys is ______.

**DB42.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies B → A, CD → E. The number of candidate keys is ______.

**DB43.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies B → C, CD → A. The number of candidate keys is ______.

**DB44.** [NAT, 2 marks] A relation R(A, B, C, D) has the functional dependencies B → D, CD → B. The number of candidate keys is ______.

**DB45.** [NAT, 2 marks] A relation R(A, B, C, D) has the functional dependencies BC → D, A → C, B → C, AD → B. The number of candidate keys is ______.

**DB46.** [NAT, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies D → E, A → B, BC → E, D → A. The number of candidate keys is ______.

**DB47.** [NAT, 1 mark] A relation R(A, B, C, D) has the functional dependencies D → A, BD → C, D → B. The size of the smallest candidate key is ______.

**DB48.** [NAT, 1 mark] A relation R(A, B, C, D) has the functional dependencies D → B, A → B. The size of the smallest candidate key is ______.

**DB49.** [NAT, 1 mark] A relation R(A, B, C, D) has the functional dependencies C → A, C → B. The size of the smallest candidate key is ______.

**DB50.** [NAT, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies E → C, BE → A, D → E, A → C. The size of the smallest candidate key is ______.

**DB51.** [NAT, 1 mark] A relation R(A, B, C, D, E) has the functional dependencies AB → C, BE → A, BE → D, BC → A. The size of the smallest candidate key is ______.

**DB52.** [NAT, 1 mark] A relation R(A, B, C, D) has the functional dependencies B → D, A → D, BD → A, B → A. The size of the smallest candidate key is ______.

**DB53.** [MCQ, 2 marks] A relation R(A, B, C, D) has the functional dependencies BC → A, BD → A, A → D. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 1NF  
(B) 3NF  
(C) BCNF  
(D) 2NF

**DB54.** [MCQ, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies AD → C, B → D, C → A, AE → C. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 3NF  
(B) BCNF  
(C) 1NF  
(D) 2NF

**DB55.** [MCQ, 2 marks] A relation R(A, B, C, D) has the functional dependencies AB → C, C → A, B → A. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) BCNF  
(B) 1NF  
(C) 2NF  
(D) 3NF

**DB56.** [MCQ, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies E → B, E → A, BE → C. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 1NF  
(B) 2NF  
(C) BCNF  
(D) 3NF

**DB57.** [MCQ, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies B → C, BC → A, DE → B. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 3NF  
(B) BCNF  
(C) 1NF  
(D) 2NF

**DB58.** [MCQ, 2 marks] A relation R(A, B, C, D) has the functional dependencies C → D, B → C. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 1NF  
(B) BCNF  
(C) 2NF  
(D) 3NF

**DB59.** [MCQ, 2 marks] A relation R(A, B, C, D) has the functional dependencies B → A, C → A, BC → A. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 3NF  
(B) 1NF  
(C) BCNF  
(D) 2NF

**DB60.** [MCQ, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies BD → A, DE → A, A → C. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 2NF  
(B) 1NF  
(C) BCNF  
(D) 3NF

**DB61.** [MCQ, 2 marks] A relation R(A, B, C, D) has the functional dependencies CD → B, B → C, BD → A, AD → B. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 3NF  
(B) 2NF  
(C) BCNF  
(D) 1NF

**DB62.** [MCQ, 2 marks] A relation R(A, B, C, D, E) has the functional dependencies BE → A, BE → C. The highest normal form it is in (among 1NF, 2NF, 3NF, BCNF) is

(A) 3NF  
(B) 1NF  
(C) BCNF  
(D) 2NF

**DB63.** [MCQ, 1 mark] If A → B and A → C, then

(A) BC → A  
(B) B → C  
(C) C → B  
(D) A → BC

**DB64.** [MCQ, 1 mark] If A → BC, then which of the following must hold?

(A) A → B  
(B) BC → A  
(C) B → A  
(D) C → A

**DB65.** [MCQ, 1 mark] If A → B and B → C, then which of the following must hold?

(A) A → C  
(B) C → A  
(C) C → B  
(D) B → A

**DB66.** [MCQ, 1 mark] If A → B, then AC → BC holds by

(A) augmentation  
(B) projectivity only  
(C) decomposition  
(D) transitivity


## Indexing & storage

**DB67.** [NAT, 2 marks] A file has 10000 fixed-length records of 100 bytes each, stored unspanned in disk blocks of 4096 bytes. The number of blocks needed is ______.

**DB68.** [NAT, 2 marks] A file has 10000 fixed-length records of 100 bytes each, stored unspanned in disk blocks of 1024 bytes. The number of blocks needed is ______.

**DB69.** [NAT, 1 mark] A disk block is 1024 bytes. A file stores fixed-length records of 200 bytes, unspanned. The number of records per block is ______.

**DB70.** [NAT, 1 mark] A disk block is 2048 bytes. A file stores fixed-length records of 64 bytes, unspanned. The number of records per block is ______.

**DB71.** [NAT, 2 marks] A B+ tree node occupies one block of 512 bytes. A key is 16 bytes and a block pointer is 6 bytes. The maximum number of pointers in an internal node (order p, with p·P + (p−1)·K ≤ block size) is ______.

**DB72.** [NAT, 2 marks] A file has 100000 fixed-length records of 256 bytes each, stored unspanned in disk blocks of 4096 bytes. The number of blocks needed is ______.

**DB73.** [NAT, 2 marks] A file has 500000 fixed-length records of 100 bytes each, stored unspanned in disk blocks of 512 bytes. The number of blocks needed is ______.

**DB74.** [NAT, 1 mark] A disk block is 512 bytes. A file stores fixed-length records of 200 bytes, unspanned. The number of records per block is ______.

**DB75.** [NAT, 2 marks] A B+ tree node occupies one block of 2048 bytes. A key is 12 bytes and a block pointer is 8 bytes. The maximum number of pointers in an internal node (order p, with p·P + (p−1)·K ≤ block size) is ______.

**DB76.** [NAT, 2 marks] A file has 500000 fixed-length records of 128 bytes each, stored unspanned in disk blocks of 512 bytes. The number of blocks needed is ______.

**DB77.** [NAT, 2 marks] Keys [8, 20, 3, 5, 6, 18, 14, 9] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 2 keys. On overflow, a leaf with 3 keys is split so that the left leaf keeps ⌈3/2⌉ keys. The number of leaf nodes at the end is ______.

**DB78.** [NAT, 2 marks] Keys [27, 18, 23, 11, 1, 17, 24] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 2 keys. On overflow, a leaf with 3 keys is split so that the left leaf keeps ⌈3/2⌉ keys. The number of leaf nodes at the end is ______.

**DB79.** [NAT, 2 marks] Keys [11, 21, 7, 8, 29, 20, 17, 9] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 2 keys. On overflow, a leaf with 3 keys is split so that the left leaf keeps ⌈3/2⌉ keys. The number of leaf nodes at the end is ______.

**DB80.** [NAT, 2 marks] Keys [3, 26, 13, 6, 10, 23, 4, 11, 24] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 3 keys. On overflow, a leaf with 4 keys is split so that the left leaf keeps ⌈4/2⌉ keys. The number of leaf nodes at the end is ______.

**DB81.** [NAT, 2 marks] Keys [17, 8, 14, 25, 1, 6, 20] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 2 keys. On overflow, a leaf with 3 keys is split so that the left leaf keeps ⌈3/2⌉ keys. The number of leaf nodes at the end is ______.

**DB82.** [NAT, 2 marks] Keys [2, 14, 1, 21, 29, 5, 24] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 3 keys. On overflow, a leaf with 4 keys is split so that the left leaf keeps ⌈4/2⌉ keys. The number of leaf nodes at the end is ______.

**DB83.** [NAT, 2 marks] Keys [20, 19, 25, 18, 15, 2] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 3 keys. On overflow, a leaf with 4 keys is split so that the left leaf keeps ⌈4/2⌉ keys. The number of leaf nodes at the end is ______.

**DB84.** [NAT, 2 marks] Keys [18, 27, 9, 12, 15, 21, 26, 19, 7] are inserted, in this order, into an initially empty B+ tree in which a leaf holds at most 2 keys. On overflow, a leaf with 3 keys is split so that the left leaf keeps ⌈3/2⌉ keys. The number of leaf nodes at the end is ______.

**DB85.** [NAT, 2 marks] A file has 10000 records, 20 records per block, sorted on the search key. A dense primary index has one entry for each record and 40 index entries fit in a block. The number of blocks in the index is ______.

**DB86.** [NAT, 2 marks] A file has 5000 records, 50 records per block, sorted on the search key. A dense primary index has one entry for each record and 100 index entries fit in a block. The number of blocks in the index is ______.

**DB87.** [NAT, 2 marks] A file has 100000 records, 10 records per block, sorted on the search key. A dense primary index has one entry for each record and 20 index entries fit in a block. The number of blocks in the index is ______.

**DB88.** [NAT, 2 marks] A file has 20000 records, 20 records per block, sorted on the search key. A dense primary index has one entry for each record and 40 index entries fit in a block. The number of blocks in the index is ______.

**DB89.** [NAT, 2 marks] A file has 1000 records, 50 records per block, sorted on the search key. A dense primary index has one entry for each record and 100 index entries fit in a block. The number of blocks in the index is ______.


## Relational algebra

**DB90.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ⋈ B (natural join on x and y) is ______.A(x, y) = [(1, 2), (2, 2), (3, 1), (3, 2), (4, 2)]
B(x, y) = [(1, 2), (1, 3), (3, 1), (4, 3)]

**DB91.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ∪ B is ______.A(x, y) = [(1, 1), (2, 1), (2, 3), (4, 1)]
B(x, y) = [(2, 1), (2, 2), (2, 3), (4, 2), (4, 3)]

**DB92.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ∪ B is ______.A(x, y) = [(1, 3), (2, 3)]
B(x, y) = [(1, 3), (3, 1), (4, 2)]

**DB93.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A − B is ______.A(x, y) = [(1, 2), (1, 3), (2, 3), (4, 1)]
B(x, y) = [(1, 2), (3, 2), (4, 1), (4, 3)]

**DB94.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ∩ B is ______.A(x, y) = [(1, 2), (3, 2), (4, 3)]
B(x, y) = [(1, 1), (1, 2), (2, 1), (3, 1)]

**DB95.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ∩ B is ______.A(x, y) = [(2, 1), (2, 2), (3, 1), (4, 2), (4, 3)]
B(x, y) = [(1, 1), (2, 1), (4, 3)]

**DB96.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A × B (Cartesian product) is ______.A(x, y) = [(3, 3), (4, 1)]
B(x, y) = [(3, 2), (4, 1), (4, 3)]

**DB97.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A × B (Cartesian product) is ______.A(x, y) = [(1, 2), (2, 1), (2, 2)]
B(x, y) = [(1, 1), (1, 2), (3, 2), (3, 3)]

**DB98.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A ∪ B is ______.A(x, y) = [(3, 1), (4, 1), (4, 3)]
B(x, y) = [(1, 2), (3, 2)]

**DB99.** [NAT, 1 mark] The relations A and B are shown. The number of tuples in A − B is ______.A(x, y) = [(2, 3), (3, 1), (4, 2)]
B(x, y) = [(1, 3), (2, 2), (4, 1)]

**DB100.** [NAT, 1 mark] Relation A(x, y, z) contains the tuples [(1, 1, 2), (2, 1, 3), (2, 3, 1), (3, 1, 1), (3, 1, 3), (3, 2, 2)]. The number of tuples in π_x,z(A) (projection, with duplicates eliminated) is ______.

**DB101.** [NAT, 1 mark] Relation A(x, y, z) contains the tuples [(1, 2, 1), (2, 1, 3), (2, 3, 2), (2, 3, 3), (3, 1, 1), (3, 3, 1)]. The number of tuples in π_x,z(A) (projection, with duplicates eliminated) is ______.

**DB102.** [NAT, 1 mark] Relation A(x, y, z) contains the tuples [(1, 1, 1), (1, 3, 2), (2, 1, 2), (2, 3, 3), (3, 1, 1), (3, 2, 3), (3, 3, 3)]. The number of tuples in π_x,z(A) (projection, with duplicates eliminated) is ______.

**DB103.** [NAT, 1 mark] Relation A(x, y, z) contains the tuples [(1, 1, 1), (1, 1, 3), (2, 2, 3), (2, 3, 1), (3, 2, 1), (3, 3, 3)]. The number of tuples in π_y,z(A) (projection, with duplicates eliminated) is ______.

**DB104.** [NAT, 1 mark] Relation A(x, y, z) contains the tuples [(1, 2, 1), (2, 1, 3), (2, 3, 1), (3, 1, 3), (3, 2, 3), (3, 3, 1), (3, 3, 2)]. The number of tuples in π_x(A) (projection, with duplicates eliminated) is ______.


## SQL

**DB105.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT SUM(sal) FROM E WHERE dept = 'CS';
```
E(id, name, dept, sal):
  1, Asha, IT, 60
  2, Ben, ME, 70
  3, Chen, ME, 50
  4, Dev, CS, 60
  5, Esha, IT, 70

**DB106.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM (SELECT dept FROM E GROUP BY dept HAVING COUNT(*) > 1);
```
E(id, name, dept, sal):
  1, Asha, ME, 30
  2, Ben, CS, 80
  3, Chen, ME, 50
  4, Dev, ME, 30
  5, Esha, EE, 50

**DB107.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM (SELECT dept FROM E GROUP BY dept HAVING COUNT(*) > 1);
```
E(id, name, dept, sal):
  1, Asha, ME, 70
  2, Ben, EE, 70
  3, Chen, CS, 70
  4, Dev, ME, 80
  5, Esha, IT, 30

**DB108.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM E WHERE sal > 60;
```
E(id, name, dept, sal):
  1, Asha, IT, 50
  2, Ben, EE, 80
  3, Chen, IT, 30
  4, Dev, IT, 40
  5, Esha, IT, 80

**DB109.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM (SELECT dept FROM E GROUP BY dept HAVING COUNT(*) > 1);
```
E(id, name, dept, sal):
  1, Asha, IT, 60
  2, Ben, CS, 80
  3, Chen, IT, 60
  4, Dev, IT, 60
  5, Esha, IT, 50

**DB110.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT MAX(sal) - MIN(sal) FROM E;
```
E(id, name, dept, sal):
  1, Asha, CS, 50
  2, Ben, ME, 70
  3, Chen, IT, 40
  4, Dev, ME, 80
  5, Esha, IT, 80

**DB111.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM (SELECT dept FROM E GROUP BY dept HAVING COUNT(*) > 1);
```
E(id, name, dept, sal):
  1, Asha, ME, 70
  2, Ben, IT, 40
  3, Chen, EE, 50
  4, Dev, CS, 50
  5, Esha, ME, 50
  6, Farid, IT, 40

**DB112.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM E WHERE sal > 60;
```
E(id, name, dept, sal):
  1, Asha, CS, 60
  2, Ben, CS, 50
  3, Chen, CS, 60
  4, Dev, EE, 70
  5, Esha, EE, 80

**DB113.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT SUM(sal) FROM E WHERE dept = 'CS';
```
E(id, name, dept, sal):
  1, Asha, IT, 70
  2, Ben, IT, 30
  3, Chen, CS, 40
  4, Dev, ME, 40
  5, Esha, EE, 60
  6, Farid, IT, 80

**DB114.** [NAT, 1 mark] Consider the table below and the SQL query. The value returned is ______.
```
SELECT COUNT(*) FROM (SELECT dept FROM E GROUP BY dept HAVING COUNT(*) > 1);
```
E(id, name, dept, sal):
  1, Asha, IT, 50
  2, Ben, CS, 50
  3, Chen, CS, 80
  4, Dev, ME, 80
  5, Esha, CS, 40
  6, Farid, CS, 30

**DB115.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, MAX(sal) FROM E GROUP BY dept ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, EE, 50
  2, Ben, IT, 30
  3, Chen, ME, 40
  4, Dev, IT, 40
  5, Esha, IT, 80
  6, Farid, EE, 30

(A) EE,30; IT,30; ME,40  
(B) ME,40; IT,80; EE,50  
(C) EE,30; EE,50; IT,30; IT,40; IT,80; ME,40  
(D) EE,50; IT,80; ME,40

**DB116.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, MAX(sal) FROM E GROUP BY dept ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, EE, 40
  2, Ben, CS, 30
  3, Chen, EE, 80
  4, Dev, EE, 60
  5, Esha, IT, 70
  6, Farid, IT, 30

(A) CS,30; EE,80; IT,70  
(B) CS,30; EE,40; IT,30  
(C) IT,70; EE,80; CS,30  
(D) CS,30; EE,40; EE,60; EE,80; IT,30; IT,70

**DB117.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, MAX(sal) FROM E GROUP BY dept ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, IT, 70
  2, Ben, IT, 60
  3, Chen, CS, 70
  4, Dev, EE, 80
  5, Esha, ME, 50
  6, Farid, IT, 50

(A) CS,70; EE,80; IT,70; ME,50  
(B) CS,70; EE,80; IT,50; ME,50  
(C) CS,70; EE,80; IT,70  
(D) CS,70; EE,80; IT,50; IT,60; IT,70; ME,50

**DB118.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, MAX(sal) FROM E GROUP BY dept ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, EE, 40
  2, Ben, IT, 60
  3, Chen, ME, 70
  4, Dev, ME, 30
  5, Esha, IT, 30
  6, Farid, IT, 40

(A) EE,40; IT,60; ME,70  
(B) ME,70; IT,60; EE,40  
(C) EE,40; IT,30; ME,30  
(D) EE,40; IT,30; IT,40; IT,60; ME,30; ME,70

**DB119.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, MAX(sal) FROM E GROUP BY dept ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, CS, 50
  2, Ben, CS, 80
  3, Chen, ME, 80
  4, Dev, EE, 30
  5, Esha, IT, 80
  6, Farid, CS, 30

(A) CS,80; EE,30; IT,80; ME,80  
(B) CS,30; CS,50; CS,80; EE,30; IT,80; ME,80  
(C) ME,80; IT,80; EE,30; CS,80  
(D) CS,30; EE,30; IT,80; ME,80

**DB120.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept, COUNT(*) FROM E GROUP BY dept HAVING COUNT(*) >= 2 ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, EE, 80
  2, Ben, EE, 40
  3, Chen, EE, 30
  4, Dev, CS, 60
  5, Esha, IT, 70
  6, Farid, CS, 70

(A) CS,2  
(B) EE,3; CS,2  
(C) EE,3  
(D) CS,2; EE,3

**DB121.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept FROM E GROUP BY dept HAVING SUM(sal) > 100 ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, IT, 70
  2, Ben, EE, 30
  3, Chen, EE, 80
  4, Dev, CS, 80
  5, Esha, EE, 50
  6, Farid, CS, 60

(A) CS  
(B) CS; EE  
(C) EE  
(D) EE; CS

**DB122.** [MCQ, 2 marks] The table E is shown below. Which result (rows separated by ;) does the query return?
```
SELECT dept FROM E GROUP BY dept HAVING SUM(sal) > 100 ORDER BY dept;
```
E(id, name, dept, sal):
  1, Asha, ME, 80
  2, Ben, IT, 80
  3, Chen, ME, 40
  4, Dev, IT, 50
  5, Esha, ME, 60

(A) ME; IT  
(B) IT  
(C) ME  
(D) IT; ME

**DB123.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P, D;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,1), (2,4), (3,4), (4,1)

**DB124.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P, D;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,2), (2,2), (3,3), (4,2), (5,3), (6,NULL)

**DB125.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P, D;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,4), (2,2), (3,3), (4,2), (5,NULL), (6,4)

**DB126.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P LEFT JOIN D ON P.did = D.did;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,1), (2,3), (3,NULL), (4,2)

**DB127.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM D WHERE did NOT IN (SELECT did FROM P WHERE did IS NOT NULL);
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,4), (2,1), (3,3), (4,NULL)

**DB128.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P LEFT JOIN D ON P.did = D.did;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,1), (2,NULL), (3,3), (4,NULL)

**DB129.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM P, D;
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,4), (2,1), (3,NULL), (4,4), (5,1)

**DB130.** [NAT, 2 marks] Consider the tables below. The value returned by the query is ______.
```
SELECT COUNT(*) FROM D WHERE did NOT IN (SELECT did FROM P WHERE did IS NOT NULL);
```
D(did, dn): (1,CS), (2,EE), (3,ME)
P(pid, did): (1,1), (2,NULL), (3,3), (4,4), (5,3)

**DB131.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T WHERE x = NULL;
```
T(x): 3, 1, 4, 4, 1

(A) 1  
(B) 2  
(C) 0  
(D) 5

**DB132.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T WHERE x NOT IN (SELECT x FROM T WHERE x IS NOT NULL);
```
T(x): 3, 2, NULL, 1, NULL, 2

(A) 2  
(B) 1  
(C) 0  
(D) 3

**DB133.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T WHERE x IS NULL;
```
T(x): 4, 2, 3, 4, 3

(A) 0  
(B) 5  
(C) 2  
(D) 1

**DB134.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T;
```
T(x): 3, 4, 1, 2, 2, NULL

(A) 7  
(B) 0  
(C) 5  
(D) 6

**DB135.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T;
```
T(x): 4, 3, 2, 3, 1, 4

(A) 7  
(B) 5  
(C) 0  
(D) 6

**DB136.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT AVG(x) FROM T;
```
T(x): 4, 3, NULL, 1, 1

(A) 4.25  
(B) 0  
(C) 2.25  
(D) 3.25

**DB137.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T WHERE x = NULL;
```
T(x): 1, 2, 4, 3, 3, 4

(A) 1  
(B) 3  
(C) 5  
(D) 0

**DB138.** [MCQ, 2 marks] Consider the table T below. The query returns
```
SELECT COUNT(*) FROM T;
```
T(x): 2, 3, 4, 4, 2, 2

(A) 0  
(B) 6  
(C) 7  
(D) 5


## Statements & concepts

**DB139.** [MSQ, 2 marks] Which of the following statements about SQL are TRUE?

(A) WHERE filters rows before grouping  
(B) HAVING filters groups after grouping  
(C) COUNT(*) ignores NULLs  
(D) DISTINCT removes duplicate rows from the result

**DB140.** [MSQ, 2 marks] Which of the following statements about normal forms are TRUE?

(A) Every relation in BCNF is in 3NF  
(B) Every relation in 3NF is in BCNF  
(C) Every relation in 3NF is in 2NF  
(D) A relation with only single-attribute candidate keys is in 2NF

**DB141.** [MSQ, 2 marks] Which of the following statements about B+ trees are TRUE?

(A) Data pointers are stored in leaf nodes  
(B) Leaf nodes are linked for range queries  
(C) All leaves are at the same depth  
(D) Internal nodes store the actual records

**DB142.** [MSQ, 2 marks] Which of the following are valid relational algebra properties?

(A) σ conditions can be cascaded: σ_{c1∧c2}(R) = σ_{c1}(σ_{c2}(R))  
(B) Natural join is commutative  
(C) Set difference is commutative  
(D) Union is commutative

**DB143.** [MSQ, 2 marks] Which of the following statements about data warehouses are TRUE?

(A) Roll-up aggregates along a concept hierarchy  
(B) Drill-down goes to more detailed data  
(C) A fact table contains measures  
(D) OLTP and OLAP workloads are identical

**DB144.** [MSQ, 2 marks] Which of the following statements about keys are TRUE?

(A) A superkey uniquely identifies tuples  
(B) Every candidate key is a superkey  
(C) A table can have several candidate keys  
(D) A foreign key must be unique in the referencing table

**DB145.** [MSQ, 2 marks] Which of the following statements about indexing are TRUE?

(A) A primary index is on the ordering key field of a sorted file  
(B) A dense index has an entry for every search-key value  
(C) A sparse index has an entry for every record  
(D) A clustering index may help range queries

**DB146.** [MSQ, 2 marks] Which of the following are ACID properties?

(A) Atomicity  
(B) Consistency  
(C) Isolation  
(D) Redundancy


## Answers and solutions

- **DB1**: 36 — Total cuboids = Π(Lᵢ + 1).
- **DB2**: 1600 — Total cuboids = Π(Lᵢ + 1).
- **DB3**: 625 — Total cuboids = Π(Lᵢ + 1).
- **DB4**: 2000 — Total cuboids = Π(Lᵢ + 1).
- **DB5**: 9 — Total cuboids = Π(Lᵢ + 1).
- **DB6**: 60 — Total cuboids = Π(Lᵢ + 1).
- **DB7**: 1600 — Total cuboids = Π(Lᵢ + 1).
- **DB8**: 60 — Total cuboids = Π(Lᵢ + 1).
- **DB9**: B — Each dimension is either included or aggregated away: 2ⁿ.
- **DB10**: A — Each dimension is either included or aggregated away: 2ⁿ.
- **DB11**: D — Each dimension is either included or aggregated away: 2ⁿ.
- **DB12**: B — Each dimension is either included or aggregated away: 2ⁿ.
- **DB13**: B — Each dimension is either included or aggregated away: 2ⁿ.
- **DB14**: -0.86 — Mean = 49.20, σ = 22.45; z = (v−mean)/σ.
- **DB15**: -0.41 — Mean = 44.60, σ = 18.40; z = (v−mean)/σ.
- **DB16**: 0.15 — (v − min)/(max − min) = (34−24)/(90−24).
- **DB17**: 0.42 — Mean = 50.40, σ = 24.96; z = (v−mean)/σ.
- **DB18**: 1.00 — (v − min)/(max − min) = (69−19)/(69−19).
- **DB19**: 0.77 — Mean = 42.80, σ = 9.35; z = (v−mean)/σ.
- **DB20**: 1.00 — (v − min)/(max − min) = (90−14)/(90−14).
- **DB21**: 1.00 — (v − min)/(max − min) = (77−26)/(77−26).
- **DB22**: D — A star schema has a central fact table with measures and foreign keys, surrounded by denormalised dimension tables.
- **DB23**: C — Put E1's key as a foreign key in E2: two tables.
- **DB24**: A — Both entities can be merged into a single table.
- **DB25**: C — E1, E2 and a separate table for the relationship.
- **DB26**: D — A weak entity has no full key of its own.
- **DB27**: B — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB28**: D — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB29**: C — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB30**: B — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB31**: C — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB32**: D — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB33**: C — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB34**: A — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB35**: A — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB36**: C — Repeatedly add the right sides of FDs whose left sides are already in the closure.
- **DB37**: 2 — Find all minimal attribute sets whose closure is the whole schema.
- **DB38**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB39**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB40**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB41**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB42**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB43**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB44**: 2 — Find all minimal attribute sets whose closure is the whole schema.
- **DB45**: 2 — Find all minimal attribute sets whose closure is the whole schema.
- **DB46**: 1 — Find all minimal attribute sets whose closure is the whole schema.
- **DB47**: 1 — Find a minimal set whose closure covers all attributes.
- **DB48**: 3 — Find a minimal set whose closure covers all attributes.
- **DB49**: 2 — Find a minimal set whose closure covers all attributes.
- **DB50**: 2 — Find a minimal set whose closure covers all attributes.
- **DB51**: 2 — Find a minimal set whose closure covers all attributes.
- **DB52**: 2 — Find a minimal set whose closure covers all attributes.
- **DB53**: D — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB54**: C — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB55**: B — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB56**: A — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB57**: D — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB58**: A — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB59**: B — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB60**: B — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB61**: A — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB62**: B — Find the candidate keys, then test each FD against the BCNF, 3NF and 2NF conditions.
- **DB63**: D — Union.
- **DB64**: A — Decomposition.
- **DB65**: A — Transitivity.
- **DB66**: A — Augmentation rule.
- **DB67**: 250 — 40 records per block; ⌈10000/40⌉ blocks.
- **DB68**: 1000 — 10 records per block; ⌈10000/10⌉ blocks.
- **DB69**: 5 — ⌊block size / record size⌋.
- **DB70**: 32 — ⌊block size / record size⌋.
- **DB71**: 24 — Solve p·P + (p−1)·K ≤ B for the largest integer p.
- **DB72**: 6250 — 16 records per block; ⌈100000/16⌉ blocks.
- **DB73**: 100000 — 5 records per block; ⌈500000/5⌉ blocks.
- **DB74**: 2 — ⌊block size / record size⌋.
- **DB75**: 103 — Solve p·P + (p−1)·K ≤ B for the largest integer p.
- **DB76**: 125000 — 4 records per block; ⌈500000/4⌉ blocks.
- **DB77**: 6 — Insert each key in the correct leaf and split on overflow.
- **DB78**: 5 — Insert each key in the correct leaf and split on overflow.
- **DB79**: 5 — Insert each key in the correct leaf and split on overflow.
- **DB80**: 4 — Insert each key in the correct leaf and split on overflow.
- **DB81**: 5 — Insert each key in the correct leaf and split on overflow.
- **DB82**: 3 — Insert each key in the correct leaf and split on overflow.
- **DB83**: 3 — Insert each key in the correct leaf and split on overflow.
- **DB84**: 7 — Insert each key in the correct leaf and split on overflow.
- **DB85**: 250 — ⌈10000/40⌉.
- **DB86**: 50 — ⌈5000/100⌉.
- **DB87**: 5000 — ⌈100000/20⌉.
- **DB88**: 500 — ⌈20000/40⌉.
- **DB89**: 10 — ⌈1000/100⌉.
- **DB90**: 2 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB91**: 7 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB92**: 4 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB93**: 2 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB94**: 1 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB95**: 2 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB96**: 6 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB97**: 12 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB98**: 5 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB99**: 3 — Apply the set operator to the sets of tuples (duplicates removed).
- **DB100**: 6 — Project and remove duplicates.
- **DB101**: 4 — Project and remove duplicates.
- **DB102**: 6 — Project and remove duplicates.
- **DB103**: 6 — Project and remove duplicates.
- **DB104**: 3 — Project and remove duplicates.
- **DB105**: 60 — Evaluate the query on the given rows.
- **DB106**: 1 — Evaluate the query on the given rows.
- **DB107**: 1 — Evaluate the query on the given rows.
- **DB108**: 2 — Evaluate the query on the given rows.
- **DB109**: 1 — Evaluate the query on the given rows.
- **DB110**: 40 — Evaluate the query on the given rows.
- **DB111**: 2 — Evaluate the query on the given rows.
- **DB112**: 2 — Evaluate the query on the given rows.
- **DB113**: 40 — Evaluate the query on the given rows.
- **DB114**: 1 — Evaluate the query on the given rows.
- **DB115**: D — GROUP BY forms groups; HAVING filters groups.
- **DB116**: A — GROUP BY forms groups; HAVING filters groups.
- **DB117**: A — GROUP BY forms groups; HAVING filters groups.
- **DB118**: A — GROUP BY forms groups; HAVING filters groups.
- **DB119**: A — GROUP BY forms groups; HAVING filters groups.
- **DB120**: D — GROUP BY forms groups; HAVING filters groups.
- **DB121**: B — GROUP BY forms groups; HAVING filters groups.
- **DB122**: D — GROUP BY forms groups; HAVING filters groups.
- **DB123**: 12 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB124**: 18 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB125**: 18 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB126**: 4 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB127**: 1 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB128**: 4 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB129**: 15 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB130**: 1 — Count the matching row combinations (NULL never equals anything in a join condition).
- **DB131**: C — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB132**: C — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB133**: A — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB134**: D — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB135**: D — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB136**: C — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB137**: D — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB138**: B — COUNT(*) counts rows, COUNT(x) ignores NULLs, and comparisons with NULL are never true.
- **DB139**: A, B, D — COUNT(*) counts all rows, including those with NULLs.
- **DB140**: A, C, D — 3NF allows dependencies on non-superkeys when the right side is prime, which BCNF forbids.
- **DB141**: A, B, C — Internal nodes hold only keys and child pointers.
- **DB142**: A, B, D — R − S is not equal to S − R in general.
- **DB143**: A, B, C — OLTP and OLAP workloads differ.
- **DB144**: A, B, C — A foreign key can repeat in the referencing table.
- **DB145**: A, B, D — A sparse index has entries only for some records (typically one per block).
- **DB146**: A, B, C — ACID = Atomicity, Consistency, Isolation, Durability.
