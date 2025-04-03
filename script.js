const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin ", "Madrid ", "Paris ", "Lisbon "],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0 ", "1 ", "2 ", "3 "],
        answer: "2"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

// Load the first question
loadQuestion();

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

// Handle the next button click
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.classList.add('hidden');
    } else {
        showResult();
    }
});

// Show the result
function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.innerText = `${score} out of ${quizData.length}`;
}

// Restart the quiz
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    loadQuestion();
    nextButton.classList.add('hidden');
});