const questions = [ 
    { question: "What’s my favorite thing about you?", answers: ["Your smile", "Your kindness", "Everything", "Your eyes"], correct: "Everything" },
    { question: "Where was our first date?", answers: ["MOA", "Binondo", "Rob", "Intramuros"], correct: "MOA" },
    { question: "Where did we first meet?", answers: ["Rob", "SSWC", "CAS", "CD"], correct: "SSWC" },
    { question: "Wow! ang galing naman. Want more questions?", answers: ["No", "Ayaw", "Habo", "YESSS"], correct: "YESSS" }
];

let currentQuestion = 0;

document.getElementById("start-btn").addEventListener("click", function() {
    let song = new Audio("lover.mp3");
    song.volume = 0.2;
    song.play();
    song.loop = true;
});


function startQuiz() {
    transitionScreens("landing", "quiz");
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `<h2>${questions[currentQuestion].question}</h2>`;
    
    const answersDiv = document.createElement("div");
    questions[currentQuestion].answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(answer);
        btn.classList.add("answer-btn");
        answersDiv.appendChild(btn);
    });
    questionContainer.appendChild(answersDiv);
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        nextQuestion();
    } else {
        alert("Grrr! bat di mo alam hmppp. Try again!!!");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        transitionScreens("quiz", "final-question");
    }
}

function showCelebration() {
    transitionScreens("final-question", "celebration");
    createFloatingHearts();
}

function transitionScreens(hideScreen, showScreen) {
    document.getElementById(hideScreen).classList.add("fade-out");
    setTimeout(() => {
        document.getElementById(hideScreen).classList.add("hidden");
        document.getElementById(showScreen).classList.remove("hidden");
        document.getElementById(showScreen).classList.add("fade-in");
    }, 500); 
}

function createFloatingHearts() {
    const heartContainer = document.getElementById("hearts");
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

