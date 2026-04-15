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
                correct: [2]
            },
            {
                question: "If a set A has 4 elements, how many proper subsets does it have?",
                options: ["8", "15", "16", "14"],
                correct: [1]
            },
            {
                question: "Which of the following best represents a fuzzy set?",
                options: [
                    "Set of integers less than 10",
                    "Set of students scoring exactly 90 marks",
                    "Set of days in a week",
                    "Set of people considered 'young'"
                ],
                correct: [3]
            },
            {
                question: "A set B contains 6 elements. What is the number of elements in its power set?",
                options: ["12", "36", "64", "32"],
                correct: [2]
            },
            {
                question: "Let the universal set U = {1, 2, 3, 4, 5, 6}, A = {2, 4, 6}, B = {1, 4}. What is the complement of A ∪ B with respect to U?",
                options: ["{3,5}", "{2,6}", "{1,3,5}", "{4,6}"],
                correct: [0]
            }
        ]
    },



    week1: {
        title: "Week 1 Solutions - Fuzzy Logic",
        questions: [
            {
                question: "What is the membership value for a triangular membership function with parameters a=2, b=6, and c=10 when x=8?",
                options: ["1.0", "0.5", "0.0", "None of the above"],
                correct: [1]
            },
            {
                question: "For a triangular membership function with parameters a=2, b=6, and c=10, find the value of x for which the membership value is maximized.",
                options: ["6", "2", "10", "None of the above"],
                correct: [0]
            },
            {
                question: "For a triangular membership function with parameters a=2, b=6, and c=10, if b is changed to 8, which of the following statements are true:",
                options: [
                    "At x=4 and x=8, the degree of membership will be 0.5",
                    "At x=5 and x=9, the degree of membership will be 0.5",
                    "At x=6 and x=8, the degree of membership will be 0.5",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "What is the membership value for a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9 when x=7?",
                options: ["1.0", "0.5", "0.0", "None of the above"],
                correct: [0]
            },
            {
                question: "For a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9, find the values of x for which the membership value is maximized.",
                options: ["x ≤ 1", "x ≥ 9", "3 ≤ x ≤ 7", "None of the above"],
                correct: [2]
            },
            {
                question: "For a trapezoidal membership function with parameters a=1, b=3, c=7, and d=9, if b is changed to 5, which of the following statements are true:",
                options: [
                    "At x=2 and x=8, the degree of membership will be 0.5",
                    "At x=3 and x=8, the degree of membership will be 0.5",
                    "At x=5 and x=8, the degree of membership will be 0.5",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "Which of the following is the correct expression for a Gaussian membership function, if the parameters are specified by [μ, σ]?",
                options: [
                    "e^{-1/2 ((x-μ)/σ)^2}",
                    "e^{-((x-μ)^2/(2σ^2))}",
                    "e^{-(0.5 × ((x-μ)/σ^2)^2)}",
                    "None of the above"
                ],
                correct: [0, 1]
            },
            {
                question: "How does the width of a Gaussian membership function change with an increase in the value of sigma (σ)?",
                options: ["Increases", "Decreases", "Remains constant", "Unpredictable or not determined by sigma"],
                correct: [0]
            },
            {
                question: "For a generalized bell shaped membership function specified by three parameters [a,b,c], which of the following statements are true?",
                options: [
                    "Parameter a defines the shape of the curve",
                    "Parameter a defines the width of the membership function",
                    "Parameter a defines the centre of the membership function",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "For a generalized bell shaped membership function specified by three parameters [a,b,c], which of the following statements are true?",
                options: [
                    "Larger value of b creates a wider membership function",
                    "Larger value of b creates steeper transition",
                    "Parameter b defines the shape of the curve on either side of the central plateau",
                    "None of the above"
                ],
                correct: [1, 2]
            }
        ]
    },

    week2: {
        title: "Week 2 Solutions - Fuzzy Logic",
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
                correct: [3]
            },
            {
                question: "What does an Open Left membership function imply about the leftmost part of the function?",
                options: [
                    "It has a sharp peak",
                    "It has a gradual slope",
                    "It extends infinitely to the left",
                    "None of the above"
                ],
                correct: [2]
            },
            {
                question: "What characterizes an Open Left membership function?",
                options: [
                    "It has a sharp peak on the left side",
                    "It extends infinitely to the left",
                    "It has a gradual slope on the left side",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "An Open Right membership function is characterized by:",
                options: [
                    "An infinite extension to the right",
                    "An abrupt cut-off on the right side",
                    "Being symmetric around the peak",
                    "None of the above"
                ],
                correct: [0]
            },
            {
                question: "Given an Open Left membership function with a peak at x = 4, if the degree of membership at x = 2 is 1.0, what is the degree of membership at x = 1?",
                options: ["0.2", "0.4", "1.0", "None of the above"],
                correct: [2]
            },
            {
                question: "In a Left-Right membership function defined by parameters [a = 2, b = 3, c = 5], what does parameter 'c' represent?",
                options: [
                    "The width of the left region",
                    "The width of the right region",
                    "The point where the membership value is 1",
                    "None of the above"
                ],
                correct: [2]
            },
            {
                question: "If you have two Left-Right membership functions with parameters [1, 4, 6] and [3, 2, 7], which function has a wider right region?",
                options: [
                    "[1, 4, 6]",
                    "[3, 2, 7]",
                    "Both have the same right region width",
                    "None of the above"
                ],
                correct: [1]
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
                correct: [1]
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
                correct: [1]
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
                correct: [1]
            }
        ]
    },

    week: {
        title: "Week 3 Solutions - Fuzzy Logic",
        questions: [
            {
                question: "What is the key difference between classical set union and fuzzy set union?",
                options: [
                    "Classical set union considers only the elements present in both sets, while fuzzy set union considers membership values too.",
                    "Classical set union involves finding the minimum of membership values for corresponding elements.",
                    "Fuzzy set union disregards membership values and focuses only on elements present in both sets.",
                    "None of the above"
                ],
                correct: [0]
            },
            {
                question: "In the context of fuzzy sets, what does the term 'intersection' refer to?",
                options: [
                    "Evaluating the maximum of membership values for corresponding elements.",
                    "Finding the common elements between two fuzzy sets.",
                    "Computing the difference between two fuzzy sets.",
                    "None of the above"
                ],
                correct: [1]
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
                correct: [4]
            },
            {
                question: "What property of sets is violated by fuzzy sets?",
                options: [
                    "Law of Contradiction",
                    "Commutativity",
                    "Involution",
                    "None of the above"
                ],
                correct: [0]
            },
            {
                question: "Which property ensures that the intersection of a set with its complement results in a null set for crisp sets, but not for fuzzy sets?",
                options: [
                    "Idempotency",
                    "Law of Contradiction",
                    "Law of Excluded Middle",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "What does the Law of Excluded Middle state regarding the union of a set with its complement?",
                options: [
                    "It always results in a null set.",
                    "It always results in the set itself.",
                    "It never results in the set itself.",
                    "None of the above"
                ],
                correct: [2]
            },
            {
                question: "Which property ensures that taking the intersection of a set with itself returns the same set?",
                options: [
                    "Law of Contradiction",
                    "Law of Excluded Middle",
                    "Idempotency",
                    "None of the above"
                ],
                correct: [2]
            },
            {
                question: "What does the involution property state regarding taking the double complement of a set?",
                options: [
                    "It always results in a null set.",
                    "It always results in the set itself.",
                    "It never results in the set itself.",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "Which condition determines the outcome of A union B union C when verifying the associativity property for union in fuzzy sets?",
                options: [
                    "Taking the minimum of corresponding membership values",
                    "Applying the maximum of corresponding membership values",
                    "Finding the average of membership values",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "For crisp sets A, B, and C, which property is valid, stating that the intersection of A with the union of B and C equals the union of the intersection of A and B with the intersection of A and C?",
                options: [
                    "Distributivity of union over intersection",
                    "Distributivity of intersection over union",
                    "Commutativity",
                    "None of the above"
                ],
                correct: [1]
            }
        ]
    },

    week4: {
        title: "Week 4 Solutions - Fuzzy Logic",
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
                correct: [3]
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
                correct: [0]
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
                correct: [0]
            },
            {
                question: "What does δ represent in the context of computing the distance between fuzzy sets A and B?",
                options: [
                    "The universe of discourse for fuzzy sets A and B",
                    "The maximum membership value between fuzzy sets A and B",
                    "The difference between the corresponding generic variables of fuzzy sets A and B",
                    "None of the above"
                ],
                correct: [2]
            },
            {
                question: "How is the membership value for a specific delta calculated in the table for finding the distance between two fuzzy sets?",
                options: [
                    "By averaging the membership values for all pairs with the same delta",
                    "By taking the maximum of the membership values for all pairs with the same delta",
                    "By summing the membership values for all pairs with the same delta",
                    "None of the above"
                ],
                correct: [1]
            },
            {
                question: "What conclusion is drawn from the comparison of the distances between fuzzy sets A and B and between fuzzy sets B and A?",
                options: [
                    "The distances are equal",
                    "The distances are never equal",
                    "The distances cannot be calculated accurately",
                    "None of the above"
                ],
                correct: [0]
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
                correct: [1]
            },
            {
                question: "What is a fuzzy number?",
                options: [
                    "A fuzzy set that satisfies normality and convexity conditions",
                    "A discrete set with no variability",
                    "A singleton fuzzy set with infinite elements",
                    "None of the above"
                ],
                correct: [0]
            },
            {
                question: "How is a fuzzy number different from a crisp number?",
                options: [
                    "Crisp numbers have infinite membership values, while fuzzy numbers have only one membership value",
                    "Crisp numbers have variability, while fuzzy numbers have fixed membership values",
                    "Crisp numbers are singletons with only one membership value, while fuzzy numbers are sets with variable membership values",
                    "None of the above"
                ],
                correct: [2]
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
                correct: [0]
            }
        ]
    }


};
