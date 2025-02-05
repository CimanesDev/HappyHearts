const questions = [ 
    { question: "What’s my favorite thing about you?", answers: ["Your smile", "Your kindness", "Everything", "Your eyes"], correct: "Everything" },
    { question: "Where was our first date?", answers: ["MOA", "Binondo", "Rob", "Intramuros"], correct: "MOA" },
    { question: "Where did we first meet?", answers: ["Rob", "SSWC", "CAS", "CD"], correct: "SSWC" }
];

let currentQuestion = 0;

function startQuiz() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
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
        btn.style.fontSize = "24px";
        btn.style.margin = "15px";
        btn.style.padding = "15px 30px";
        answersDiv.appendChild(btn);
    });
    questionContainer.appendChild(answersDiv);
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        nextQuestion();
    } else {
        alert("Oops! That’s not quite right. Try again!");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("final-question").classList.remove("hidden");
    }
}

function showCelebration() {
    document.getElementById("final-question").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");
    createFloatingHearts();
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
