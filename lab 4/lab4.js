// 1. Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Which programming language is used for web styling?",
        answer: "css"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        answer: "let"
    },
    {
        question: "JavaScript runs on the ________ side.",
        answer: "client"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {

    // 3. Score Initialization
    let score = 0;

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // If user cancels (null), treat as empty answer
        if (userAnswer === null) {
            userAnswer = "";
        }

        // 6. Normalize Input
        userAnswer = userAnswer.toLowerCase().trim();

        // 7. Check the Answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            // 8. Provide Immediate Feedback
            alert("Correct! 🎉");
        } else {
            alert("Wrong! ❌ The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // 9. Display Final Score
    alert("Quiz Finished!\nYour score: " + score + " / " + quizQuestions.length);
}

// 10. Run the Quiz
runQuiz();
