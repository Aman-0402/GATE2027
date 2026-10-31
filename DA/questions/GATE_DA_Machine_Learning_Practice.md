# GATE DA — Machine Learning practice (original)

129 original questions (MCQ, MSQ and NAT) with answers and solutions. Numerical answers were computed with NumPy; a sample (entropy, Gini, ridge, PCA, regression, classification metrics) was re-checked against SciPy/NumPy by re-parsing the printed question, with no mismatches. All answers were re-verified independently on 1 November 2026 (see workdone.md).


## Clustering & PCA

**ML1.** [NAT, 2 marks] 1-D data [1, 5, 18, 25, 28, 29] is clustered by k-means with k = 2 and initial centroids 5 and 28. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML2.** [NAT, 2 marks] 1-D data [3, 12, 18, 19, 22, 28] is clustered by k-means with k = 2 and initial centroids 12 and 22. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML3.** [NAT, 2 marks] 1-D data [14, 18, 22, 25, 28, 29] is clustered by k-means with k = 2 and initial centroids 18 and 28. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML4.** [NAT, 2 marks] 1-D data [1, 2, 9, 10, 17, 28] is clustered by k-means with k = 2 and initial centroids 2 and 17. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML5.** [NAT, 2 marks] 1-D data [6, 10, 13, 15, 22, 23] is clustered by k-means with k = 2 and initial centroids 10 and 22. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML6.** [NAT, 2 marks] 1-D data [1, 5, 6, 24, 25, 26] is clustered by k-means with k = 2 and initial centroids 5 and 25. After one full iteration (assign, then update), the within-cluster sum of squared distances to the new centroids is ______ (2 decimals).

**ML7.** [NAT, 2 marks] 1-D data [5, 6, 8, 9, 26, 29] is clustered by k-means with k = 2 and initial centroids 6 and 26. After one full iteration (assign, then update), the within-cluster sum of squared distances to the new centroids is ______ (2 decimals).

**ML8.** [NAT, 2 marks] 1-D data [5, 8, 9, 11, 21, 25] is clustered by k-means with k = 2 and initial centroids 8 and 21. After one assignment-and-update step, the new value of the first centroid is ______ (2 decimals).

**ML9.** [NAT, 2 marks] Single-linkage agglomerative clustering is run on the 1-D points [1, 8, 17, 18, 28]. The distance at which the 3rd merge happens is ______.

**ML10.** [NAT, 2 marks] Single-linkage agglomerative clustering is run on the 1-D points [4, 8, 10, 23, 24]. The distance at which the 4th merge happens is ______.

**ML11.** [NAT, 2 marks] Single-linkage agglomerative clustering is run on the 1-D points [9, 12, 17, 23, 25]. The distance at which the 3rd merge happens is ______.

**ML12.** [NAT, 2 marks] Single-linkage agglomerative clustering is run on the 1-D points [5, 10, 11, 13, 18]. The distance at which the 3rd merge happens is ______.

**ML13.** [NAT, 2 marks] Single-linkage agglomerative clustering is run on the 1-D points [3, 6, 9, 11, 15]. The distance at which the 4th merge happens is ______.

**ML14.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [3 1; 1 5]. The variance along the first principal component (largest eigenvalue) is ______ (2 decimals).

**ML15.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [5 3; 3 3]. The percentage of total variance explained by the first principal component is ______ (1 decimal).

**ML16.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [3 3; 3 3]. The variance along the first principal component (largest eigenvalue) is ______ (2 decimals).

**ML17.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [3 1; 1 2]. The percentage of total variance explained by the first principal component is ______ (1 decimal).

**ML18.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [6 2; 2 3]. The variance along the first principal component (largest eigenvalue) is ______ (2 decimals).

**ML19.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [4 2; 2 2]. The percentage of total variance explained by the first principal component is ______ (1 decimal).

**ML20.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [2 2; 2 2]. The variance along the first principal component (largest eigenvalue) is ______ (2 decimals).

**ML21.** [NAT, 2 marks] The covariance matrix of a 2-D dataset is [2 3; 3 5]. The variance along the first principal component (largest eigenvalue) is ______ (2 decimals).

**ML22.** [NAT, 1 mark] The covariance matrix of a 2-D dataset is [5 1; 1 5]. The sum of its two eigenvalues (the total variance) is ______.


## Cross-validation & model selection

**ML23.** [NAT, 1 mark] A single run of 10-fold cross-validation trains the model ______ times.

**ML24.** [NAT, 1 mark] 10-fold cross-validation is used on 500 samples (n divisible by 10). The number of training samples in each training set is ______.

**ML25.** [NAT, 1 mark] A dataset of 50 samples has 20 samples held out as a test set. Leave-one-out cross-validation is used on the remaining samples. The number of validation splits is ______.

**ML26.** [NAT, 1 mark] A dataset of 120 samples has 20 samples held out as a test set. Leave-one-out cross-validation is used on the remaining samples. The number of validation splits is ______.

**ML27.** [NAT, 1 mark] 5-fold cross-validation is used on 500 samples (n divisible by 5). The number of training samples in each training set is ______.

**ML28.** [NAT, 1 mark] A single run of 5-fold cross-validation trains the model ______ times.

**ML29.** [NAT, 1 mark] Leave-one-out cross-validation is used on a dataset of 500 samples. The number of times the model is trained is ______.

**ML30.** [NAT, 1 mark] 5-fold cross-validation is used on 120 samples (n divisible by 5). The number of training samples in each training set is ______.


## Decision trees

**ML31.** [NAT, 1 mark] A node contains 1 positive and 3 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML32.** [NAT, 1 mark] A node contains 4 positive and 4 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML33.** [NAT, 1 mark] A node contains 2 positive and 6 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML34.** [NAT, 1 mark] A node contains 2 positive and 2 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML35.** [NAT, 1 mark] A node contains 1 positive and 2 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML36.** [NAT, 1 mark] A node contains 1 positive and 7 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML37.** [NAT, 1 mark] A node contains 3 positive and 5 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML38.** [NAT, 1 mark] A node contains 3 positive and 1 negative examples. Its entropy (log base 2) is ______ (2 decimals).

**ML39.** [NAT, 1 mark] A node contains 2 examples of class 1 and 3 of class 2. Its Gini impurity is ______ (3 decimals).

**ML40.** [NAT, 1 mark] A node contains 1 examples of class 1 and 3 of class 2. Its Gini impurity is ______ (3 decimals).

**ML41.** [NAT, 1 mark] A node contains 1 examples of class 1 and 1 of class 2. Its Gini impurity is ______ (3 decimals).

**ML42.** [NAT, 1 mark] A node contains 3 examples of class 1 and 5 of class 2. Its Gini impurity is ______ (3 decimals).

**ML43.** [NAT, 1 mark] A node contains 5 examples of class 1 and 3 of class 2. Its Gini impurity is ______ (3 decimals).

**ML44.** [NAT, 2 marks] A dataset has 3 positive and 8 negative examples. Splitting on an attribute gives two branches: branch 1 with (3 positive, 5 negative) and branch 2 with (0 positive, 3 negative). The information gain (log base 2) is ______ (2 decimals).

**ML45.** [NAT, 2 marks] A dataset has 3 positive and 8 negative examples. Splitting on an attribute gives two branches: branch 1 with (3 positive, 4 negative) and branch 2 with (0 positive, 4 negative). The information gain (log base 2) is ______ (2 decimals).

**ML46.** [NAT, 2 marks] A dataset has 8 positive and 9 negative examples. Splitting on an attribute gives two branches: branch 1 with (4 positive, 6 negative) and branch 2 with (4 positive, 3 negative). The information gain (log base 2) is ______ (2 decimals).

**ML47.** [NAT, 2 marks] A dataset has 3 positive and 2 negative examples. Splitting on an attribute gives two branches: branch 1 with (3 positive, 0 negative) and branch 2 with (0 positive, 2 negative). The information gain (log base 2) is ______ (2 decimals).

**ML48.** [NAT, 2 marks] A dataset has 5 positive and 4 negative examples. Splitting on an attribute gives two branches: branch 1 with (1 positive, 0 negative) and branch 2 with (4 positive, 4 negative). The information gain (log base 2) is ______ (2 decimals).

**ML49.** [NAT, 2 marks] A dataset has 5 positive and 11 negative examples. Splitting on an attribute gives two branches: branch 1 with (4 positive, 6 negative) and branch 2 with (1 positive, 5 negative). The information gain (log base 2) is ______ (2 decimals).

**ML50.** [NAT, 2 marks] A dataset has 6 positive and 10 negative examples. Splitting on an attribute gives two branches: branch 1 with (0 positive, 6 negative) and branch 2 with (6 positive, 4 negative). The information gain (log base 2) is ______ (2 decimals).

**ML51.** [NAT, 2 marks] A dataset has 5 positive and 6 negative examples. Splitting on an attribute gives two branches: branch 1 with (4 positive, 6 negative) and branch 2 with (1 positive, 0 negative). The information gain (log base 2) is ______ (2 decimals).


## Logistic regression & classification metrics

**ML52.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = 1, b = -1. For x = 3, P(y = 1 | x) is ______ (3 decimals).

**ML53.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = -2, b = 2. The decision boundary (where P = 0.5) is at x = ______ (2 decimals).

**ML54.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = -2, b = 0. The decision boundary (where P = 0.5) is at x = ______ (2 decimals).

**ML55.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = 1, b = 2. For x = -1, P(y = 1 | x) is ______ (3 decimals).

**ML56.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = -1, b = 2. The decision boundary (where P = 0.5) is at x = ______ (2 decimals).

**ML57.** [NAT, 1 mark] A logistic regression model has P(y=1|x) = σ(wx + b) with w = 2, b = -1. The decision boundary (where P = 0.5) is at x = ______ (2 decimals).

**ML58.** [NAT, 1 mark] A classifier has TP = 40, FP = 23, FN = 17, TN = 29. Its recall is ______ (3 decimals).

**ML59.** [NAT, 1 mark] A classifier has TP = 8, FP = 8, FN = 40, TN = 34. Its accuracy is ______ (3 decimals).

**ML60.** [NAT, 1 mark] A classifier has TP = 34, FP = 12, FN = 5, TN = 22. Its accuracy is ______ (3 decimals).

**ML61.** [NAT, 1 mark] A classifier has TP = 23, FP = 3, FN = 8, TN = 29. Its recall is ______ (3 decimals).

**ML62.** [NAT, 1 mark] A classifier has TP = 32, FP = 29, FN = 16, TN = 10. Its recall is ______ (3 decimals).

**ML63.** [NAT, 1 mark] A classifier has TP = 29, FP = 10, FN = 2, TN = 19. Its accuracy is ______ (3 decimals).

**ML64.** [NAT, 1 mark] A classifier has TP = 9, FP = 9, FN = 9, TN = 20. Its recall is ______ (3 decimals).

**ML65.** [NAT, 1 mark] A classifier has TP = 33, FP = 12, FN = 33, TN = 25. Its accuracy is ______ (3 decimals).

**ML66.** [NAT, 1 mark] A classifier has TP = 30, FP = 10, FN = 23, TN = 29. Its accuracy is ______ (3 decimals).

**ML67.** [NAT, 2 marks] A classifier has TP = 20, FP = 11, FN = 3, TN = 23. Its F1 score is ______ (3 decimals).


## Naive Bayes & probabilistic models

**ML68.** [NAT, 1 mark] A naive Bayes classifier for 2 classes uses 8 binary features. The number of parameters to estimate (including the class prior) is ______.

**ML69.** [NAT, 1 mark] A naive Bayes classifier for 2 classes uses 6 binary features. The number of parameters to estimate (including the class prior) is ______.

**ML70.** [NAT, 1 mark] For a classification task with 4 classes and 4 binary features, the number of free parameters a naive Bayes classifier must estimate (class priors with the sum-to-one constraint, plus P(feature = 1 | class)) is ______.

**ML71.** [NAT, 1 mark] For a classification task with 2 classes and 9 binary features, the number of free parameters a naive Bayes classifier must estimate (class priors with the sum-to-one constraint, plus P(feature = 1 | class)) is ______.

**ML72.** [NAT, 1 mark] A naive Bayes classifier for 2 classes uses 5 binary features. The number of parameters to estimate (including the class prior) is ______.

**ML73.** [NAT, 1 mark] For a classification task with 3 classes and 7 binary features, the number of free parameters a naive Bayes classifier must estimate (class priors with the sum-to-one constraint, plus P(feature = 1 | class)) is ______.

**ML74.** [NAT, 2 marks] In a naive Bayes model with two binary features, P(y=1) = 0.5; P(x₁=1|y=1) = 0.2, P(x₂=1|y=1) = 0.2; P(x₁=1|y=0) = 0.2, P(x₂=1|y=0) = 0.4. For an input with x₁ = 1 and x₂ = 1, P(y = 1 | x) is ______ (3 decimals).

**ML75.** [NAT, 2 marks] In a naive Bayes model with two binary features, P(y=1) = 0.4; P(x₁=1|y=1) = 0.4, P(x₂=1|y=1) = 0.8; P(x₁=1|y=0) = 0.6, P(x₂=1|y=0) = 0.6. For an input with x₁ = 1 and x₂ = 1, P(y = 1 | x) is ______ (3 decimals).

**ML76.** [NAT, 2 marks] In a naive Bayes model with two binary features, P(y=1) = 0.3; P(x₁=1|y=1) = 0.8, P(x₂=1|y=1) = 0.8; P(x₁=1|y=0) = 0.6, P(x₂=1|y=0) = 0.8. For an input with x₁ = 1 and x₂ = 1, P(y = 1 | x) is ______ (3 decimals).

**ML77.** [NAT, 2 marks] In a naive Bayes model with two binary features, P(y=1) = 0.4; P(x₁=1|y=1) = 0.4, P(x₂=1|y=1) = 0.2; P(x₁=1|y=0) = 0.6, P(x₂=1|y=0) = 0.4. For an input with x₁ = 1 and x₂ = 1, P(y = 1 | x) is ______ (3 decimals).

**ML78.** [NAT, 2 marks] In a naive Bayes model with two binary features, P(y=1) = 0.6; P(x₁=1|y=1) = 0.4, P(x₂=1|y=1) = 0.4; P(x₁=1|y=0) = 0.6, P(x₂=1|y=0) = 0.6. For an input with x₁ = 1 and x₂ = 1, P(y = 1 | x) is ______ (3 decimals).


## Neural networks

**ML79.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 6 → 3 → 9 → 2 (input to output) and no biases. The total number of trainable parameters is ______.

**ML80.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 10 → 5 → 7 → 2 → 1 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML81.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 10 → 9 → 3 → 7 → 5 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML82.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 5 → 3 → 5 → 4 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML83.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 4 → 7 → 4 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML84.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 3 → 3 → 9 → 3 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML85.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 8 → 4 → 3 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML86.** [NAT, 2 marks] A fully connected feed-forward network has layers of sizes 11 → 3 → 3 → 5 (input to output) with a bias in every non-input neuron. The total number of trainable parameters is ______.

**ML87.** [NAT, 1 mark] A neuron computes ReLU(w₁x₁ + w₂x₂ + b) with w₁ = 1, w₂ = -3, b = 1. For x₁ = 3, x₂ = -2, its output is ______.

**ML88.** [NAT, 1 mark] A neuron computes ReLU(w₁x₁ + w₂x₂ + b) with w₁ = -2, w₂ = -2, b = -2. For x₁ = 0, x₂ = 2, its output is ______.

**ML89.** [NAT, 1 mark] A neuron computes ReLU(w₁x₁ + w₂x₂ + b) with w₁ = 0, w₂ = -2, b = -1. For x₁ = -3, x₂ = -2, its output is ______.

**ML90.** [NAT, 1 mark] A neuron computes ReLU(w₁x₁ + w₂x₂ + b) with w₁ = 1, w₂ = -1, b = -1. For x₁ = 2, x₂ = 1, its output is ______.


## Regression & regularisation

**ML91.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [5, 3, 4, 4, 5], y = [5, 4, 4, 3, 5] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 4. The optimal w is ______ (3 decimals).

**ML92.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [2, 4, 2, 3, 2], y = [5, 7, 3, 6, 4] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 5. The optimal w is ______ (3 decimals).

**ML93.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [2, 2, 5, 5, 1], y = [4, 5, 9, 10, 1] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 1. The optimal w is ______ (3 decimals).

**ML94.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [4, 4, 1, 2, 2], y = [9, 8, 3, 3, 4] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 2. The optimal w is ______ (3 decimals).

**ML95.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [5, 3, 5, 4], y = [10, 5, 10, 7] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 4. The optimal w is ______ (3 decimals).

**ML96.** [NAT, 2 marks] Ridge regression (no intercept) fits y = w·x to the data x = [3, 3, 4], y = [3, 4, 3] by minimising Σ(yᵢ − wxᵢ)² + λw² with λ = 2. The optimal w is ______ (3 decimals).

**ML97.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 2), (2, 6), (3, 9), (4, 14), (5, 18)]. The slope m is ______ (2 decimals).

**ML98.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 1), (2, 2), (3, 4), (4, 7)]. The slope m is ______ (2 decimals).

**ML99.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 1), (2, 2), (3, 3), (4, 6), (5, 7)]. The slope m is ______ (2 decimals).

**ML100.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 4), (2, 4), (3, 6), (4, 7), (5, 9)]. The intercept c is ______ (2 decimals).

**ML101.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 0), (2, 2), (3, 4), (4, 6), (5, 8), (6, 10)]. The slope m is ______ (2 decimals).

**ML102.** [NAT, 2 marks] Least-squares line y = mx + c is fitted to the points [(1, 3), (2, 7), (3, 9), (4, 11)]. The slope m is ______ (2 decimals).

**ML103.** [NAT, 1 mark] True values are [7, 8, 4, 4, 2] and predictions are [10, 11, 3, 6, 5]. The mean squared error is ______ (2 decimals).

**ML104.** [NAT, 1 mark] True values are [5, 2, 9, 3] and predictions are [5, 4, 10, 1]. The mean squared error is ______ (2 decimals).

**ML105.** [NAT, 1 mark] True values are [1, 6, 5, 7, 3] and predictions are [2, 7, 6, 9, 4]. The mean squared error is ______ (2 decimals).

**ML106.** [MCQ, 1 mark] Increasing the regularisation parameter λ in ridge regression typically

(A) decreases both bias and variance  
(B) increases bias and decreases variance  
(C) increases both bias and variance  
(D) decreases bias and increases variance

**ML107.** [NAT, 2 marks] For the model ŷ = wx and loss L = (1/n)Σ(wxᵢ − yᵢ)² on x = [1, 2, 3], y = [6, 3, 4], one gradient-descent step with learning rate 0.5 starts from w = 2. The updated w is ______ (3 decimals).

**ML108.** [NAT, 2 marks] For the model ŷ = wx and loss L = (1/n)Σ(wxᵢ − yᵢ)² on x = [1, 2, 3], y = [4, 4, 2], one gradient-descent step with learning rate 0.5 starts from w = 0. The updated w is ______ (3 decimals).

**ML109.** [NAT, 2 marks] For the model ŷ = wx and loss L = (1/n)Σ(wxᵢ − yᵢ)² on x = [1, 2, 3], y = [2, 5, 5], one gradient-descent step with learning rate 0.5 starts from w = 2. The updated w is ______ (3 decimals).

**ML110.** [NAT, 2 marks] For the model ŷ = wx and loss L = (1/n)Σ(wxᵢ − yᵢ)² on x = [1, 2, 3], y = [3, 4, 3], one gradient-descent step with learning rate 0.5 starts from w = 2. The updated w is ______ (3 decimals).

**ML111.** [NAT, 2 marks] For the model ŷ = wx and loss L = (1/n)Σ(wxᵢ − yᵢ)² on x = [1, 2, 3], y = [4, 5, 2], one gradient-descent step with learning rate 0.1 starts from w = 2. The updated w is ______ (3 decimals).


## SVM & margins

**ML112.** [NAT, 1 mark] A linear SVM has weight vector w = (4, 3). The geometric margin width 2/‖w‖ is ______ (3 decimals).

**ML113.** [NAT, 1 mark] A linear SVM has weight vector w = (6, 8). The geometric margin width 2/‖w‖ is ______ (3 decimals).

**ML114.** [NAT, 1 mark] A linear SVM has weight vector w = (5, 12). The geometric margin width 2/‖w‖ is ______ (3 decimals).

**ML115.** [NAT, 1 mark] A linear SVM has weight vector w = (12, 5). The geometric margin width 2/‖w‖ is ______ (3 decimals).


## Statements & concepts

**ML116.** [MSQ, 2 marks] Which of the following statements about the bias–variance trade-off are TRUE?

(A) Complex models tend to have low bias and high variance  
(B) Simple models tend to have high bias and low variance  
(C) Ridge regularisation increases variance  
(D) Adding more training data tends to reduce variance

**ML117.** [MSQ, 2 marks] Which of the following are discriminative models?

(A) Logistic regression  
(B) Support vector machine  
(C) Naive Bayes  
(D) Linear discriminant analysis

**ML118.** [MSQ, 2 marks] Which of the following are TRUE about k-means?

(A) It always converges to the global optimum  
(B) It can converge to a local optimum  
(C) The result depends on initialisation  
(D) It minimises within-cluster squared distance

**ML119.** [MSQ, 2 marks] Which of the following are TRUE about PCA?

(A) Principal components are orthogonal  
(B) The first component has the largest variance  
(C) PCA needs class labels  
(D) The sum of eigenvalues of the covariance matrix equals its trace

**ML120.** [MSQ, 2 marks] Which of the following are TRUE about decision trees?

(A) They can overfit if grown without limits  
(B) Information gain can be used to choose splits  
(C) Entropy is 0 for a pure node  
(D) They require feature scaling

**ML121.** [MSQ, 2 marks] Which of the following are TRUE about cross-validation?

(A) k-fold CV uses every sample for validation exactly once  
(B) Leave-one-out CV is k-fold CV with k = n  
(C) It helps estimate generalisation error  
(D) It always guarantees the highest test accuracy

**ML122.** [MSQ, 2 marks] Which of the following are TRUE about the k-NN classifier?

(A) It has no explicit training phase  
(B) A small k gives low bias and high variance  
(C) It is sensitive to feature scaling  
(D) Its prediction time is independent of the training set size

**ML123.** [MSQ, 2 marks] Which of the following are TRUE about neural networks?

(A) Stacking linear layers without non-linearity gives a linear function  
(B) ReLU(z) = max(0, z)  
(C) Backpropagation uses the chain rule  
(D) The sigmoid output lies in (−1, 1)


## k-NN & distance-based methods

**ML124.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 4:B, 5:A, 11:A, 14:A, 17:B, 19:A. A k-nearest-neighbour classifier with k = 1 (Euclidean distance, majority vote) classifies the query point 12 as

(A) Tie  
(B) A  
(C) Cannot be determined  
(D) B

**ML125.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 6:A, 7:A, 12:B, 14:B, 15:B, 18:B. A k-nearest-neighbour classifier with k = 1 (Euclidean distance, majority vote) classifies the query point 11 as

(A) B  
(B) Tie  
(C) Cannot be determined  
(D) A

**ML126.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 0:B, 4:B, 7:B, 8:B, 10:B, 14:B. A k-nearest-neighbour classifier with k = 1 (Euclidean distance, majority vote) classifies the query point 11 as

(A) Tie  
(B) B  
(C) Cannot be determined  
(D) A

**ML127.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 6:A, 8:A, 9:A, 13:B, 14:B, 19:B. A k-nearest-neighbour classifier with k = 1 (Euclidean distance, majority vote) classifies the query point 19 as

(A) B  
(B) Cannot be determined  
(C) A  
(D) Tie

**ML128.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 1:B, 2:B, 3:A, 5:A, 7:A, 12:A. A k-nearest-neighbour classifier with k = 3 (Euclidean distance, majority vote) classifies the query point 17 as

(A) Tie  
(B) B  
(C) Cannot be determined  
(D) A

**ML129.** [MCQ, 2 marks] A 1-D training set of (value:class) pairs is 1:A, 2:A, 5:B, 8:A, 13:A, 15:A. A k-nearest-neighbour classifier with k = 5 (Euclidean distance, majority vote) classifies the query point 16 as

(A) A  
(B) B  
(C) Tie  
(D) Cannot be determined


## Answers and solutions

- **ML1**: 3.00 — Assign each point to the nearest centroid, then average each cluster.
- **ML2**: 7.50 — Assign each point to the nearest centroid, then average each cluster.
- **ML3**: 18.00 — Assign each point to the nearest centroid, then average each cluster.
- **ML4**: 4.00 — Assign each point to the nearest centroid, then average each cluster.
- **ML5**: 11.00 — Assign each point to the nearest centroid, then average each cluster.
- **ML6**: 16.00 — Compute each cluster mean, then Σ(x − mean)².
- **ML7**: 14.50 — Compute each cluster mean, then Σ(x − mean)².
- **ML8**: 8.25 — Assign each point to the nearest centroid, then average each cluster.
- **ML9**: 9 — Repeatedly merge the two closest clusters (distance = closest pair of points).
- **ML10**: 13 — Repeatedly merge the two closest clusters (distance = closest pair of points).
- **ML11**: 5 — Repeatedly merge the two closest clusters (distance = closest pair of points).
- **ML12**: 5 — Repeatedly merge the two closest clusters (distance = closest pair of points).
- **ML13**: 4 — Repeatedly merge the two closest clusters (distance = closest pair of points).
- **ML14**: 5.41 — Largest eigenvalue of the covariance matrix.
- **ML15**: 89.5 — λ₁/(λ₁ + λ₂) × 100, and λ₁ + λ₂ = trace.
- **ML16**: 6.00 — Largest eigenvalue of the covariance matrix.
- **ML17**: 72.4 — λ₁/(λ₁ + λ₂) × 100, and λ₁ + λ₂ = trace.
- **ML18**: 7.00 — Largest eigenvalue of the covariance matrix.
- **ML19**: 87.3 — λ₁/(λ₁ + λ₂) × 100, and λ₁ + λ₂ = trace.
- **ML20**: 4.00 — Largest eigenvalue of the covariance matrix.
- **ML21**: 6.85 — Largest eigenvalue of the covariance matrix.
- **ML22**: 10 — The sum of eigenvalues equals the trace.
- **ML23**: 10 — One model per fold.
- **ML24**: 450 — n − n/k samples are used for training in each fold.
- **ML25**: 30 — LOOCV on the remaining n − t samples gives n − t splits.
- **ML26**: 100 — LOOCV on the remaining n − t samples gives n − t splits.
- **ML27**: 400 — n − n/k samples are used for training in each fold.
- **ML28**: 5 — One model per fold.
- **ML29**: 500 — One model per left-out sample.
- **ML30**: 96 — n − n/k samples are used for training in each fold.
- **ML31**: 0.81 — H = −p log₂p − q log₂q with p = 1/4.
- **ML32**: 1.00 — H = −p log₂p − q log₂q with p = 4/8.
- **ML33**: 0.81 — H = −p log₂p − q log₂q with p = 2/8.
- **ML34**: 1.00 — H = −p log₂p − q log₂q with p = 2/4.
- **ML35**: 0.92 — H = −p log₂p − q log₂q with p = 1/3.
- **ML36**: 0.54 — H = −p log₂p − q log₂q with p = 1/8.
- **ML37**: 0.95 — H = −p log₂p − q log₂q with p = 3/8.
- **ML38**: 0.81 — H = −p log₂p − q log₂q with p = 3/4.
- **ML39**: 0.480 — 1 − Σpᵢ² = 1 − (2/5)² − (3/5)².
- **ML40**: 0.375 — 1 − Σpᵢ² = 1 − (1/4)² − (3/4)².
- **ML41**: 0.500 — 1 − Σpᵢ² = 1 − (1/2)² − (1/2)².
- **ML42**: 0.469 — 1 − Σpᵢ² = 1 − (3/8)² − (5/8)².
- **ML43**: 0.469 — 1 − Σpᵢ² = 1 − (5/8)² − (3/8)².
- **ML44**: 0.15 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML45**: 0.22 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML46**: 0.02 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML47**: 0.97 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML48**: 0.10 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML49**: 0.05 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML50**: 0.35 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML51**: 0.11 — IG = H(parent) − Σ (|child|/|parent|)·H(child).
- **ML52**: 0.881 — σ(z) = 1/(1 + e^(−z)) with z = wx + b.
- **ML53**: 1.00 — P = 0.5 when wx + b = 0.
- **ML54**: -0.00 — P = 0.5 when wx + b = 0.
- **ML55**: 0.731 — σ(z) = 1/(1 + e^(−z)) with z = wx + b.
- **ML56**: 2.00 — P = 0.5 when wx + b = 0.
- **ML57**: 0.50 — P = 0.5 when wx + b = 0.
- **ML58**: 0.702 — TP/(TP + FN).
- **ML59**: 0.467 — (TP + TN)/total.
- **ML60**: 0.767 — (TP + TN)/total.
- **ML61**: 0.742 — TP/(TP + FN).
- **ML62**: 0.667 — TP/(TP + FN).
- **ML63**: 0.800 — (TP + TN)/total.
- **ML64**: 0.500 — TP/(TP + FN).
- **ML65**: 0.563 — (TP + TN)/total.
- **ML66**: 0.641 — (TP + TN)/total.
- **ML67**: 0.741 — F1 = 2PR/(P + R).
- **ML68**: 17 — 1 prior + 2K likelihood parameters.
- **ML69**: 13 — 1 prior + 2K likelihood parameters.
- **ML70**: 19 — (4−1) priors + 4×4 conditional probabilities.
- **ML71**: 19 — (2−1) priors + 2×9 conditional probabilities.
- **ML72**: 11 — 1 prior + 2K likelihood parameters.
- **ML73**: 23 — (3−1) priors + 3×7 conditional probabilities.
- **ML74**: 0.333 — P(y=1|x) ∝ P(y=1)ΠP(xᵢ|y=1); normalise over both classes.
- **ML75**: 0.372 — P(y=1|x) ∝ P(y=1)ΠP(xᵢ|y=1); normalise over both classes.
- **ML76**: 0.364 — P(y=1|x) ∝ P(y=1)ΠP(xᵢ|y=1); normalise over both classes.
- **ML77**: 0.182 — P(y=1|x) ∝ P(y=1)ΠP(xᵢ|y=1); normalise over both classes.
- **ML78**: 0.400 — P(y=1|x) ∝ P(y=1)ΠP(xᵢ|y=1); normalise over both classes.
- **ML79**: 63 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML80**: 116 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML81**: 197 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML82**: 62 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML83**: 67 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML84**: 78 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML85**: 51 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML86**: 68 — Σ (inputs × outputs [+ outputs for biases]) over consecutive layers.
- **ML87**: 10 — Compute the weighted sum, then apply max(0, z).
- **ML88**: 0 — Compute the weighted sum, then apply max(0, z).
- **ML89**: 3 — Compute the weighted sum, then apply max(0, z).
- **ML90**: 0 — Compute the weighted sum, then apply max(0, z).
- **ML91**: 0.947 — w = Σxy / (Σx² + λ) = 90/(91+4).
- **ML92**: 1.667 — w = Σxy / (Σx² + λ) = 70/(37+5).
- **ML93**: 1.900 — w = Σxy / (Σx² + λ) = 114/(59+1).
- **ML94**: 1.977 — w = Σxy / (Σx² + λ) = 85/(41+2).
- **ML95**: 1.810 — w = Σxy / (Σx² + λ) = 143/(75+4).
- **ML96**: 0.917 — w = Σxy / (Σx² + λ) = 33/(34+2).
- **ML97**: 4.00 — m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)².
- **ML98**: 2.00 — m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)².
- **ML99**: 1.60 — m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)².
- **ML100**: 2.10 — c = ȳ − m·x̄.
- **ML101**: 2.00 — m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)².
- **ML102**: 2.60 — m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)².
- **ML103**: 6.40 — Average of squared errors.
- **ML104**: 2.25 — Average of squared errors.
- **ML105**: 1.60 — Average of squared errors.
- **ML106**: B — Shrinking the weights simplifies the model.
- **ML107**: 0.667 — ∂L/∂w = (2/n)Σ(wxᵢ − yᵢ)xᵢ; w ← w − η·∂L/∂w.
- **ML108**: 6.000 — ∂L/∂w = (2/n)Σ(wxᵢ − yᵢ)xᵢ; w ← w − η·∂L/∂w.
- **ML109**: 1.667 — ∂L/∂w = (2/n)Σ(wxᵢ − yᵢ)xᵢ; w ← w − η·∂L/∂w.
- **ML110**: -0.667 — ∂L/∂w = (2/n)Σ(wxᵢ − yᵢ)xᵢ; w ← w − η·∂L/∂w.
- **ML111**: 1.467 — ∂L/∂w = (2/n)Σ(wxᵢ − yᵢ)xᵢ; w ← w − η·∂L/∂w.
- **ML112**: 0.400 — ‖w‖ = √(w₁² + w₂²).
- **ML113**: 0.200 — ‖w‖ = √(w₁² + w₂²).
- **ML114**: 0.154 — ‖w‖ = √(w₁² + w₂²).
- **ML115**: 0.154 — ‖w‖ = √(w₁² + w₂²).
- **ML116**: A, B, D — Regularisation reduces variance (at the cost of bias).
- **ML117**: A, B — Naive Bayes and LDA are generative.
- **ML118**: B, C, D — k-means only guarantees convergence to a local optimum.
- **ML119**: A, B, D — PCA is unsupervised.
- **ML120**: A, B, C — Trees are insensitive to monotonic feature scaling.
- **ML121**: A, B, C — CV estimates generalisation but guarantees nothing about test accuracy.
- **ML122**: A, B, C — Prediction needs distances to all training points.
- **ML123**: A, B, C — Sigmoid outputs lie in (0, 1); tanh lies in (−1, 1).
- **ML124**: B — Find the k closest training points and take the majority class.
- **ML125**: A — Find the k closest training points and take the majority class.
- **ML126**: B — Find the k closest training points and take the majority class.
- **ML127**: A — Find the k closest training points and take the majority class.
- **ML128**: D — Find the k closest training points and take the majority class.
- **ML129**: A — Find the k closest training points and take the majority class.
