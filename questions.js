const quizData = {
    week0: {
        title: "Week 0",
        questions: [
            {
                question: "Which of the following problems is most suitable for a fuzzy logic–based solution?",
                options: [
                    "Computing the exact square root of a number",
                    "Deciding whether a number is even or odd",
                    "Adjusting air conditioner cooling based on perceived room comfort",
                    "Sorting numbers in ascending order"
                ],
                correct: 2
            },
            {
                question: "If a set A has 4 elements, how many proper subsets does it have?",
                options: ["8", "15", "16", "14"],
                correct: 1
            },
            {
                question: "Which of the following best represents a fuzzy set?",
                options: [
                    "Set of integers less than 10",
                    "Set of students scoring exactly 90 marks",
                    "Set of days in a week",
                    "Set of people considered 'young'"
                ],
                correct: 3
            },
            {
                question: "A set B contains 6 elements. What is the number of elements in its power set?",
                options: ["12", "36", "64", "32"],
                correct: 2
            },
            {
                question: "Let the universal set U = {1, 2, 3, 4, 5, 6}, A = {2, 4, 6}, B = {1, 4}. What is the complement of A ∪ B with respect to U?",
                options: ["{3,5}", "{2,6}", "{1,3,5}", "{4,6}"],
                correct: 0
            }
        ]
    },

    week1: {
        title: "Week 1",
        questions: [
            {
                question: "What is the membership value for a triangular membership function with parameters a=2, b=6, and c=10 when x=8?",
                options: ["1.0", "0.5", "0.0", "None of the above"],
                correct: 1
            },
            {
                question: "For a triangular membership function with parameters a=2, b=6, and c=10, find the value of x for which the membership value is maximized.",
                options: ["6", "2", "10", "None of the above"],
                correct: 0
            },
            {
                question: "For a triangular membership function with parameters a=2, b=6, and c=10, if b is changed to 8, which of the following statements are true:",
                options: [
                    "At x=4 and x=8, the degree of membership will be 0.5",
                    "At x=5 and x=9, the degree of membership will be 0.5",
                    "At x=6 and x=8, the degree of membership will be 0.5",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What is the membership value for a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9 when x=7?",
                options: ["1.0", "0.5", "0.0", "None of the above"],
                correct: 0
            },
            {
                question: "For a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9, find the values of x for which the membership value is maximized.",
                options: ["x ≤ 1", "x ≥ 9", "3 ≤ x ≤ 7", "None of the above"],
                correct: 2
            },
            {
                question: "For a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9, if b is changed to 5, which of the following statements are true:",
                options: [
                    "At x=2 and x=8, the degree of membership will be 0.5",
                    "At x=3 and x=8, the degree of membership will be 0.5",
                    "At x=5 and x=8, the degree of membership will be 0.5",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "Which of the following is the correct expression for a Gaussian membership function, if the parameters are specified by [μ, σ]?",
                options: [
                    "e^{-1/2 ((x-μ)/σ)^2}",
                    "e^{-((x-μ)^2/(2σ^2))}",
                    "e^{-(0.5 × ((x-μ)/σ^2)^2)}",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "How does the width of a Gaussian membership function change with an increase in the value of sigma (σ)?",
                options: ["Increases", "Decreases", "Remains constant", "Unpredictable or not determined by sigma"],
                correct: 0
            },
            {
                question: "For a generalized bell shaped membership function specified by three parameters [a,b,c], which of the following statements are true?",
                options: [
                    "Parameter a defines the shape of the curve",
                    "Parameter a defines the width of the membership function",
                    "Parameter a defines the centre of the membership function",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "For a generalized bell shaped membership function specified by three parameters [a,b,c], which of the following statements are true?",
                options: [
                    "Larger value of b creates a wider membership function",
                    "Larger value of b creates steeper transition",
                    "Parameter b defines the shape of the curve on either side of the central plateau",
                    "None of the above"
                ],
                correct: 1
            }
        ]
    },

    week2_solutions: {
        title: "Week 2",
        questions: [
            {
                question: "Which of the following is a disadvantage of using Open Right membership functions?",
                options: [
                    "Lack of expressiveness",
                    "Difficulty in implementation",
                    "Limited applicability",
                    "Potential for uncertainty on the right side",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "What does an Open Left membership function imply about the leftmost part of the function?",
                options: [
                    "It has a sharp peak",
                    "It has a gradual slope",
                    "It extends infinitely to the left",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "What characterizes an Open Left membership function?",
                options: [
                    "It has a sharp peak on the left side",
                    "It extends infinitely to the left",
                    "It has a gradual slope on the left side",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "An Open Right membership function is characterized by:",
                options: [
                    "An infinite extension to the right",
                    "An abrupt cut-off on the right side",
                    "Being symmetric around the peak",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Given an Open Left membership function with a peak at x = 4, if the degree of membership at x = 2 is 1.0, what is the degree of membership at x = 1?",
                options: ["0.2", "0.4", "1.0", "None of the above"],
                correct: 2
            },
            {
                question: "In a Left-Right membership function defined by parameters [a = 2, b = 3, c = 5], what does parameter 'c' represent?",
                options: [
                    "The width of the left region",
                    "The width of the right region",
                    "The point where the membership value is 1",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "If you have two Left-Right membership functions with parameters [1, 4, 6] and [3, 2, 7], which function has a wider right region?",
                options: [
                    "[1, 4, 6]",
                    "[3, 2, 7]",
                    "Both have the same right region width",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "In a Gaussian membership function, what does the parameter 'μ' represent?",
                options: [
                    "The standard deviation",
                    "The mean",
                    "The maximum membership values",
                    "The overall width of the function",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "For two Gaussian membership functions with parameters μ1 = 3, σ1 = 2 and μ2 = 5, σ2 = 5, which statement is true?",
                options: [
                    "The width of the first function is greater",
                    "The width of the second function is greater",
                    "Both functions have the same width",
                    "It cannot be determined from the given information",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "If the standard deviation (σ) of a Gaussian membership function is increased, what impact does it have on the function?",
                options: [
                    "The peak becomes sharper",
                    "The peak becomes broader",
                    "The mean shifts to the left",
                    "The mean shifts to the right",
                    "None of the above"
                ],
                correct: 1
            }
        ]
    },

    week3: {
        title: "Week 3 ",
        questions: [
            {
                question: "What is the key difference between classical set union and fuzzy set union?",
                options: [
                    "Classical set union considers only the elements present in both sets, while fuzzy set union considers membership values too.",
                    "Classical set union involves finding the minimum of membership values for corresponding elements.",
                    "Fuzzy set union disregards membership values and focuses only on elements present in both sets.",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "In the context of fuzzy sets, what does the term 'intersection' refer to?",
                options: [
                    "Evaluating the maximum of membership values for corresponding elements.",
                    "Finding the common elements between two fuzzy sets.",
                    "Computing the difference between two fuzzy sets.",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "How is the difference of fuzzy sets computed?",
                options: [
                    "By taking the maximum of membership values for corresponding elements.",
                    "By finding the common elements between two fuzzy sets.",
                    "By summing up membership values for corresponding elements.",
                    "By computing the minimum of membership values for corresponding elements.",
                    "None of the above"
                ],
                correct: 4
            },
            {
                question: "What property of sets is violated by fuzzy sets?",
                options: [
                    "Law of Contradiction",
                    "Commutativity",
                    "Involution",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Which property ensures that the intersection of a set with its complement results in a null set for crisp sets, but not for fuzzy sets?",
                options: [
                    "Idempotency",
                    "Law of Contradiction",
                    "Law of Excluded Middle",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What does the Law of Excluded Middle state regarding the union of a set with its complement?",
                options: [
                    "It always results in a null set.",
                    "It always results in the set itself.",
                    "It never results in the set itself.",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "Which property ensures that taking the intersection of a set with itself returns the same set?",
                options: [
                    "Law of Contradiction",
                    "Law of Excluded Middle",
                    "Idempotency",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "What does the involution property state regarding taking the double complement of a set?",
                options: [
                    "It always results in a null set.",
                    "It always results in the set itself.",
                    "It never results in the set itself.",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "Which condition determines the outcome of A union B union C when verifying the associativity property for union in fuzzy sets?",
                options: [
                    "Taking the minimum of corresponding membership values",
                    "Applying the maximum of corresponding membership values",
                    "Finding the average of membership values",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "For crisp sets A, B, and C, which property is valid, stating that the intersection of A with the union of B and C equals the union of the intersection of A and B with the intersection of A and C?",
                options: [
                    "Distributivity of union over intersection",
                    "Distributivity of intersection over union",
                    "Commutativity",
                    "None of the above"
                ],
                correct: 1
            }
        ]
    },

    week4: {
        title: "Week 4 ",
        questions: [
            {
                question: "Which of the following properties holds true for both classical sets and fuzzy sets?",
                options: [
                    "Law of contradiction",
                    "Law of excluded middle",
                    "Absorption of complement",
                    "Distributivity",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "In the context of DeMorgan's law, what is the result of taking the complement of the union of two fuzzy sets A and B?",
                options: [
                    "Intersection of A complement and B complement",
                    "Union of A complement and B complement",
                    "Intersection of A and B",
                    "Union of A and B",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "In the context of DeMorgan's law of intersection states that the complement of the intersection of two sets is equal to what?",
                options: [
                    "Union of the complements of the sets",
                    "Intersection of the complements of the sets",
                    "Complement of the union of the sets",
                    "Complement of one of the sets",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "What does δ represent in the context of computing the distance between fuzzy sets A and B?",
                options: [
                    "The universe of discourse for fuzzy sets A and B",
                    "The maximum membership value between fuzzy sets A and B",
                    "The difference between the corresponding generic variables of fuzzy sets A and B",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "How is the membership value for a specific delta calculated in the table for finding the distance between two fuzzy sets?",
                options: [
                    "By averaging the membership values for all pairs with the same delta",
                    "By taking the maximum of the membership values for all pairs with the same delta",
                    "By summing the membership values for all pairs with the same delta",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What conclusion is drawn from the comparison of the distances between fuzzy sets A and B and between fuzzy sets B and A?",
                options: [
                    "The distances are equal",
                    "The distances are never equal",
                    "The distances cannot be calculated accurately",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "What is the purpose of computing the distance between two fuzzy sets?",
                options: [
                    "To find the union of the sets",
                    "To measure the similarity between the sets",
                    "To identify the intersection of the sets",
                    "To determine the complement of the sets",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What is a fuzzy number?",
                options: [
                    "A fuzzy set that satisfies normality and convexity conditions",
                    "A discrete set with no variability",
                    "A singleton fuzzy set with infinite elements",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "How is a fuzzy number different from a crisp number?",
                options: [
                    "Crisp numbers have infinite membership values, while fuzzy numbers have only one membership value",
                    "Crisp numbers have variability, while fuzzy numbers have fixed membership values",
                    "Crisp numbers are singletons with only one membership value, while fuzzy numbers are sets with variable membership values",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "How are arithmetic operations, such as addition, performed on fuzzy numbers?",
                options: [
                    "By finding the minimum of corresponding membership values and then taking the maximum of the results",
                    "By finding the maximum of corresponding membership values and then taking the minimum of the results",
                    "By finding the sum of corresponding membership values",
                    "By finding the product of corresponding membership values",
                    "None of the above"
                ],
                correct: 0
            }
        ]
    },

    week5: {
        title: "Week 5",
        questions: [
            {
                question: "When multiplying two triangular fuzzy numbers, what is a possible outcome?",
                options: [
                    "Always a triangular fuzzy number",
                    "A trapezoidal fuzzy number",
                    "A crisp number",
                    "Not guaranteed to maintain triangular shape"
                ],
                correct: 3
            },
            {
                question: "Which property ensures that a fuzzy set's α-cuts are intervals?",
                options: [
                    "Normality",
                    "Convexity",
                    "Symmetry",
                    "Completeness"
                ],
                correct: 1
            },
            {
                question: "For continuous fuzzy numbers, division involves:",
                options: [
                    "Summing membership values",
                    "Integrating over the domain",
                    "Subtracting supports",
                    "Multiplying α-cuts",
                    "None of the above"
                ],
                correct: 4
            },
            {
                question: "Dividing two fuzzy numbers might result in:",
                options: [
                    "A non-convex set",
                    "A non-normal set",
                    "Both (a) and (b)",
                    "Always a valid fuzzy number"
                ],
                correct: 2
            },
            {
                question: "Why is the universe of discourse critical in fuzzy arithmetic?",
                options: [
                    "To enforce binary logic compatibility",
                    "To limit operations to meaningful ranges",
                    "To speed up computations",
                    "To ensure symmetry"
                ],
                correct: 1
            },
            {
                question: "The complement of a fuzzy set A with membership μA(x) = 0.7 is:",
                options: ["0", "1/0.7", "1 - 0.7", "0.72"],
                correct: 2
            },
            {
                question: "If Sugeno's complement parameter λ approaches infinity, what happens?",
                options: [
                    "Complement approaches 0",
                    "Complement approaches 1",
                    "Complement equals 1 - μ",
                    "Complement becomes undefined"
                ],
                correct: 0
            },
            {
                question: "In Yager's complement, if w = 2, the complement of μ = 0.5 is:",
                options: [
                    "√(1 - 0.5²)",
                    "(1 - 0.5)^(1/2)",
                    "1 - 0.5",
                    "√0.5"
                ],
                correct: 0
            },
            {
                question: "Which T-norm produces the highest membership value for intersection between μA(x) = 0.6 and μB(x) = 0.8?",
                options: [
                    "Minimum",
                    "Algebraic product",
                    "Bounded product",
                    "Drastic product"
                ],
                correct: 0
            },
            {
                question: "Which axiom is unique to T-norms but not S-norms?",
                options: [
                    "T(1,a) = a",
                    "S(0,a) = a",
                    "Associativity",
                    "Non-decreasing"
                ],
                correct: 0
            }
        ]
    },
    
    week6: {
        title: "Week 6",
        questions: [
            {
                question: "What is a parameterized T-norm also known as?",
                options: [
                    "Parameterized Z-norms",
                    "Parameterized S-conorms",
                    "Parameterized F-norms",
                    "Parameterized G-conorms",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "In Dombi's class of T-norm, the range of the parameter lambda is:",
                options: [
                    "(0, 1)",
                    "(1, infinity)",
                    "(-1, 1)",
                    "(0, infinity)",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "What is the range of the parameter alpha in Dubois Prade's class of T-norm?",
                options: [
                    "[0, infinity]",
                    "[-1, 1]",
                    "[0, 1]",
                    "[1, infinity]",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "In Yager's class of T-norm, how does increasing the parameter w affect the resultant fuzzy set obtained from the intersection of two fuzzy sets?",
                options: [
                    "It decreases the membership values",
                    "It has no effect on the membership values",
                    "It increases the membership values",
                    "It randomizes the membership values",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "How does increasing the parameter alpha affect the resulting fuzzy set in Dubois-Prade's class of S-norm?",
                options: [
                    "Increases membership values",
                    "No significant change in membership values",
                    "Decreases membership values",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What parameter determines the behaviour of the resulting fuzzy set in Dubois-Prade's class of S-norm?",
                options: [
                    "Alpha",
                    "Lambda",
                    "w",
                    "Theta",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "What is the Cartesian product of two arbitrary crisp sets (A,B) with universe of discourse X and Y?",
                options: [
                    "A union B",
                    "A intersection B",
                    "A cross B",
                    "A complement B",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "In a Cartesian product of two crisp sets A and B, how many ordered pairs are obtained if set A has 4 elements and set B has 3 elements?",
                options: ["6", "7", "10", "12", "None of the above"],
                correct: 3
            },
            {
                question: "How is approachability between elements of different sets represented in fuzzy relations?",
                options: [
                    "Using Boolean logic",
                    "Through crisp relations",
                    "Using membership degrees",
                    "By defining clear boundaries",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "For the intersection of two crisp relations, membership values are determined by:",
                options: [
                    "Taking the average",
                    "Taking the minimum",
                    "Applying Boolean logic",
                    "Using the intersection of sets",
                    "None of the above"
                ],
                correct: 1
            }
        ]
    },
    
    week7: {
        title: "Week 7",
        questions: [
            {
                question: "What is the primary objective of projecting a fuzzy relationset R(A,B) onto its constituent sets A and B?",
                options: [
                    "To increase the dimensionality of the fuzzy set",
                    "To decrease the dimensionality of the fuzzy set",
                    "To add more elements to the fuzzy set",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "When projecting a fuzzy relation set R(A,B) onto a fuzzy set A, what happens to the universe of discourse?",
                options: [
                    "It remains unchanged",
                    "It expands",
                    "It becomes irrelevant",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "In the projection of a fuzzy relation set R(A1, A2, A3, ..., An) onto sets A1, A2, ..., Ak, what does 'k' represent?",
                options: [
                    "The number of elements in the Cartesian product of the universe of discourse",
                    "The number of dimensions retained in the projection",
                    "The total number of generic variables in the original fuzzy relation set",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What is the purpose of the cylindrical extension of a fuzzy set?",
                options: [
                    "To decrease the number of generic variables",
                    "To decrease the dimensionality of the fuzzy set",
                    "To increase the complexity of the fuzzy set",
                    "Assign the original membership values across new dimension"
                ],
                correct: 3
            },
            {
                question: "When taking the cylindrical extension of a fuzzy set, what happens to the number of generic variables?",
                options: [
                    "It remains the same",
                    "It decreases",
                    "It increases by two",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Which of the following properties holds true for fuzzy relations but not for crisp relations?",
                options: [
                    "Demorgan's law of union",
                    "Associativity for union",
                    "Absorption of complement for intersection",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "Which property holds good for both crisp relations and fuzzy relations?",
                options: [
                    "Absorption of complement for union",
                    "Law of contradiction",
                    "Absorption of complement for intersection",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "Which of the following best describes the extension principle?",
                options: [
                    "A method for converting fuzzy sets using a known mapping function",
                    "A principle for defining fuzzy logic operations",
                    "A method for calculating fuzzy set cardinality",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "In the context of the extension principle, what does f^{-1}(y) represent?",
                options: [
                    "The inverse of the membership function",
                    "The inverse of the mapping function",
                    "The inverse of the universe of discourse",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What does the extension principle help achieve in fuzzy set theory?",
                options: [
                    "Transformation of membership values from one domain to another",
                    "Reduction of fuzzy set complexity",
                    "Elimination of conflicting membership values",
                    "None of the above"
                ],
                correct: 0
            }
        ]
    },

    week8: {
        title: "Week 8",
        questions: [
            {
                question: "What are the two main composition operations/strategies for fuzzy relations discussed in the lecture?",
                options: [
                    "Min-max composition and min-product composition",
                    "Max-min composition and max-product composition",
                    "Addition composition and multiplication composition",
                    "Intersection composition and union composition",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What is the dimension of the resulting fuzzy relation matrix when performing max-min composition between a 3x4 matrix and a 4x2 matrix?",
                options: ["3x4", "4x4", "3x2", "4x2", "None of the above"],
                correct: 2
            },
            {
                question: "What is the key difference between max-min composition and max-product composition of fuzzy relations?",
                options: [
                    "The order of matrices",
                    "The operation used to combine membership values",
                    "The universe of discourse",
                    "The dimension of the resulting fuzzy relation matrix",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "What does the weak distributivity over intersection property state?",
                options: [
                    "The composition of fuzzy relations is a subset of the intersection of compositions of fuzzy relations.",
                    "The composition of fuzzy relations is equal to the intersection of compositions of fuzzy relations.",
                    "The intersection of compositions of fuzzy relations is equal to the composition of fuzzy relations.",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Which property ensures that if one fuzzy relation is a subset of another, their compositions follow a similar relationship?",
                options: [
                    "Associativity",
                    "Distributivity over union",
                    "Monotonicity",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "What will be the outcome if fuzzy relations R, S1, and S2 are composed according to the distributivity over union property?",
                options: [
                    "The composition of R and the union of S1 and S2 is equal to the union of compositions of R and S1 and R and S2.",
                    "The composition of R and the union of S1 and S2 is equal to the composition of R and S1.",
                    "The composition of R and the union of S1 and S2 is equal to the composition of R and S2.",
                    "The composition of R and the union of S1 and S2 is equal to the composition of R and S1 and S2.",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Which of the following properties must be satisfied for a fuzzy relation set to be considered a fuzzy tolerance relation?",
                options: [
                    "Transitivity and asymmetry",
                    "Symmetry and reflexivity",
                    "Symmetry and transitivity",
                    "Reflexivity and asymmetry"
                ],
                correct: 1
            },
            {
                question: "What does the reflexivity property of a fuzzy tolerance relation entail?",
                options: [
                    "All elements in the fuzzy relation matrix are equal to 1",
                    "All diagonal elements in the fuzzy relation matrix are equal to 1",
                    "All off-diagonal elements in the fuzzy relation matrix are equal to 1",
                    "All elements in the fuzzy relation matrix are non-zero"
                ],
                correct: 1
            },
            {
                question: "In a fuzzy tolerance relation, what does the symmetry property indicate?",
                options: [
                    "All elements in the fuzzy relation matrix are symmetrically arranged",
                    "Membership values are equal if the row and column indices are interchanged",
                    "The fuzzy relation matrix is symmetric along the main diagonal",
                    "Membership values are equal in all rows and columns"
                ],
                correct: 1
            },
            {
                question: "What happens if a fuzzy relation set fails to satisfy the reflexivity property?",
                options: [
                    "It automatically satisfies the symmetry property",
                    "It is considered a fuzzy equivalence relation",
                    "It cannot be considered a fuzzy tolerance relation",
                    "It must satisfy the transitivity property to compensate"
                ],
                correct: 2
            }
        ]
    },

    week9: {
        title: "Week 9",
        questions: [
            {
                question: "What does the term set represent in a linguistic variable?",
                options: [
                    "The universe of discourse",
                    "The measure of the linguistic variable",
                    "The collection of linguistic values for the variable",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "Which of the following is true for syntactic rule (G)?",
                options: [
                    "It refers to the term set T(x) which can be characterized by a fuzzy set of a universe of discourse X.",
                    "It refers to the way the linguistic values in the term set T(x) are generated.",
                    "It specifies the procedure for computing the meaning of any linguistic value through specified membership functions.",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "Which of the following is true for semantic rule (M)?",
                options: [
                    "It refers to the term set T(x) which can be characterized by a fuzzy set of a universe of discourse X.",
                    "It refers to the way the linguistic values in the term set T(x) are generated.",
                    "It specifies the procedure for computing the meaning of any linguistic value through specified membership functions.",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "If a linguistic variable 'Lazy' with the universe of discourse X = {1,2,3,4} is defined as Lazy = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, what will be the value of 'Very Lazy'?",
                options: [
                    "1/1 + 0.250/2 + 0.090/3 + 0.040/4",
                    "1/1 + 0.125/2 + 0.027/3 + 0.064/4",
                    "1/1 + 0.707/2 + 0.547/3 + 0.447/4",
                    "1/1 + 0.500/2 + 0.700/3 + 0.800/4",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "If a linguistic variable 'Lazy' with the universe of discourse X = {1,2,3,4} is defined as Lazy = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, what will be the value of 'More Or Less Lazy'?",
                options: [
                    "1/1 + 0.250/2 + 0.090/3 + 0.040/4",
                    "1/1 + 0.125/2 + 0.027/3 + 0.064/4",
                    "1/1 + 0.707/2 + 0.547/3 + 0.447/4",
                    "1/1 + 0.500/2 + 0.700/3 + 0.800/4",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "If a linguistic variable 'Lazy' with the universe of discourse X = {1,2,3,4} is defined as Lazy = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, what will be the value of 'Very Very Lazy'?",
                options: [
                    "1/1 + 0.250/2 + 0.090/3 + 0.040/4",
                    "1/1 + 0.125/2 + 0.027/3 + 0.064/4",
                    "1/1 + 0.707/2 + 0.547/3 + 0.447/4",
                    "1/1 + 0.500/2 + 0.700/3 + 0.800/4",
                    "None of the above"
                ],
                correct: 4
            },
            {
                question: "If a linguistic variable 'Lazy' with the universe of discourse X = {1,2,3,4} is defined as Lazy = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, what will be the value of 'NOT(Lazy)'?",
                options: [
                    "1/1 + 0.250/2 + 0.090/3 + 0.040/4",
                    "1/1 + 0.125/2 + 0.027/3 + 0.064/4",
                    "1/1 + 0.707/2 + 0.547/3 + 0.447/4",
                    "1/1 + 0.500/2 + 0.700/3 + 0.800/4",
                    "None of the above"
                ],
                correct: 4
            },
            {
                question: "If fuzzy sets A and B with the universe of discourse X are defined as A = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, B = 0.5/1 + 1.0/2 + 0.7/3 + 0.1/4, find A AND B?",
                options: [
                    "0.0/1 + 0.5/2 + 0.7/3 + 0.8/4",
                    "0.5/1 + 0.5/2 + 0.3/3 + 0.1/4",
                    "1.0/1 + 1.0/2 + 0.7/3 + 0.2/4",
                    "None of the above"
                ],
                correct: 1
            },
            {
                question: "If fuzzy sets A and B with the universe of discourse X are defined as A = 1.0/1 + 0.5/2 + 0.3/3 + 0.2/4, B = 0.5/1 + 1.0/2 + 0.7/3 + 0.1/4, find A OR B?",
                options: [
                    "0.0/1 + 0.5/2 + 0.7/3 + 0.8/4",
                    "0.5/1 + 0.5/2 + 0.3/3 + 0.1/4",
                    "1.0/1 + 1.0/2 + 0.7/3 + 0.2/4",
                    "None of the above"
                ],
                correct: 2
            },
            {
                question: "How can the composite linguistic term 'Slightly Light' be obtained from the fuzzy set for 'Light'?",
                options: [
                    "By concentrating the fuzzy set",
                    "By taking the intersection of fuzzy sets",
                    "By dilating the fuzzy set",
                    "By applying the complement operation to the fuzzy set",
                    "None of the above"
                ],
                correct: 2
            }
        ]
    },

    week10: {
        title: "Week 10",
        questions: [
            {
                question: "What effect does the contrast intensifier have on membership values based on the given options?",
                options: [
                    "Increases values above 0.5 and diminishes values below 0.5.",
                    "Diminishes values above 0.5 and increases values below 0.5.",
                    "Increases values both above and below 0.5.",
                    "Diminishes values both above and below 0.5.",
                    "None of the above"
                ],
                correct: 0
            },
            {
                question: "Let fuzzy set A is defined with the universe of discourse X = {1,2,3,4} given as A = 0.1/1 + 0.3/2 + 1.0/3 + 0.5/4. What will be the membership function value at generic variable value 2 for the fuzzy set obtained by INT(A)?",
                options: ["1.00", "0.02", "0.18", "0.50"],
                correct: 2
            },
            {
                question: "For the fuzzy set defined in Q.2, what will be the membership function value at generic variable value 4 for the fuzzy set obtained by INT(A)?",
                options: ["1.00", "0.02", "0.18", "0.50"],
                correct: 3
            },
            {
                question: "For the fuzzy set defined in Q.2, what will be the membership function value at generic variable value 1 for the fuzzy set obtained by INT(A)?",
                options: ["1.00", "0.02", "0.18", "0.50"],
                correct: 1
            },
            {
                question: "For the fuzzy set defined in Q.2, what will be the membership function value at generic variable value 3 for the fuzzy set obtained by INT(A)?",
                options: ["1.00", "0.02", "0.18", "0.50"],
                correct: 0
            },
            {
                question: "For the fuzzy set defined in Q.2, what will be the complement of INT(A)?",
                options: [
                    "0.02/1 + 0.18/2 + 1.00/3 + 1.00/4",
                    "0.98/1 + 0.18/2 + 1.00/3 + 0.50/4",
                    "0.98/1 + 0.82/2 + 1.00/3 + 0.50/4",
                    "0.98/1 + 0.82/2 + 0.00/3 + 0.50/4"
                ],
                correct: 3
            },
            {
                question: "For a fuzzy IF-THEN rule defined using 'IF x is A, THEN y is B', which of the following statements are true?",
                options: [
                    "'x is A' is called as consequence and 'y is B' is called as antecedent.",
                    "'x is A' is called as antecedent and 'y is B' is called as consequent.",
                    "'x is A' is called as conclusion and 'y is B' is called as premise.",
                    "'x is A' is called as conclusion and 'y is B' is called as consequent."
                ],
                correct: 1
            },
            {
                question: "What is the primary function of a fuzzifier in a fuzzy logic system?",
                options: [
                    "Convert fuzzy values to crisp inputs",
                    "Convert crisp inputs to fuzzy values",
                    "Evaluate membership functions",
                    "Implement logical operations in fuzzy logic"
                ],
                correct: 1
            },
            {
                question: "What is the primary purpose of a defuzzifier in a fuzzy logic system?",
                options: [
                    "Convert fuzzy values to crisp outputs",
                    "Convert crisp inputs to fuzzy values",
                    "Determine membership functions",
                    "Perform fuzzy inference"
                ],
                correct: 0
            },
            {
                question: "What is the main principle behind fuzzy reasoning in fuzzy logic systems?",
                options: [
                    "Utilizing precise mathematical computations for decision-making",
                    "Handling imprecise or uncertain data using linguistic variables",
                    "Applying Boolean logic operations for inference",
                    "Implementing crisp input-output mappings"
                ],
                correct: 1
            }
        ]
    },

    week11: {
        title: "Week 11",
        questions: [
            {
                question: "Who is credited with developing the Mamdani fuzzy model?",
                options: [
                    "Lotfi A. Zadeh",
                    "E. H. Mamdani",
                    "John McCarthy",
                    "Warren McCulloch",
                    "Walter Pitts"
                ],
                correct: 1
            },
            {
                question: "Which components constitute the fundamental elements of a Mamdani fuzzy model?",
                options: [
                    "Evaluating rules",
                    "Fuzzifying input variables",
                    "Defuzzifying",
                    "Aggregating outputs of fuzzy rules",
                    "All of the above"
                ],
                correct: 4
            },
            {
                question: "What was the initial application of the Mamdani fuzzy model?",
                options: [
                    "Controlling a steam engine and boiler combination",
                    "Regulating a vehicle engine",
                    "Creating a golf diagnostic system",
                    "Implementing condition-based monitoring for machines"
                ],
                correct: 0
            },
            {
                question: "In the context of a Mamdani fuzzy model described as: Rule: IF x is A THEN y is B, Fact (Input): x is A', Conclusion: y is B'. Which type of Mamdani fuzzy model is this?",
                options: [
                    "Multiple rules with single antecedent",
                    "Single rule with multiple antecedents",
                    "Single rule with single antecedent",
                    "Multiple rules with multiple antecedents"
                ],
                correct: 2
            },
            {
                question: "Let us consider a Mamdani fuzzy model with single rule and multiple antecedents. If the points of intersection for fuzzy inputs A' and B' with A and B, respectively are represented by weights w1 = 0.70 and w2 = 0.50, what will be the value of weight obtained using max-min composition for the truncation of C to get the output C'?",
                options: ["0.70", "0.50", "0.35", "None of the above"],
                correct: 1
            },
            {
                question: "For the Mamdani fuzzy model and weights value defined in Q.5, what will be the value of weight obtained using max-product composition for the truncation of C to get the output C'?",
                options: ["0.70", "0.50", "0.35", "None of the above"],
                correct: 2
            },
            {
                question: "If the aggregated output of a Mamdani fuzzy model is a trapezoidal shaped output defined using parameters [2,5,7,8] with maximum membership function value 1.0, what will be the defuzzified crisp output value using mean of maximum?",
                options: ["6", "7", "5", "2", "8"],
                correct: 0
            },
            {
                question: "For the problem statement given in Q.7, what will be defuzzified crisp output value using smallest of maximum?",
                options: ["6", "7", "5", "2", "8"],
                correct: 2
            },
            {
                question: "For the problem statement given in Q.7, what will be defuzzified crisp output value using largest of maximum?",
                options: ["6", "7", "5", "2", "8"],
                correct: 1
            },
            {
                question: "Which statements accurately describe the defuzzification strategy using the mean of maximum?",
                options: [
                    "The defuzzified value z* is the average of the values of z for which the membership function has its maximum value.",
                    "The defuzzified value z* is the average of the values of z for which the membership function has its minimum value.",
                    "The defuzzified value z* is the maximum of the values of z.",
                    "The defuzzified value z* is the minimum of the values of z."
                ],
                correct: 0
            }
        ]
    }
};
