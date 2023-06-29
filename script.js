const questions = [
    {
        question: "Which is the largest forest in the world?",
        answers: [
            { text: "Amazon", correct: true},
            { text: "Primorye", correct: false},
            { text: "Siberian taiga", correct: false},
            { text: "Sundarbans", correct: false},
        ]
    },
    {
        question: "Which is the largest Animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Elephant", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Africa", correct: false},
            { text: "Arctic", correct: false},
            { text: "Austrelia", correct: true},
        ]
    },
    {
        question: "Which is the largest desert in world?",
        answers: [
            { text: "Antarctica", correct: true},
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Kalahari", correct: false},
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// const previousButton = document.getElementById("previous-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    // previousButton.innerHTML = "Previous";
    showQuestion();
}
function showQuestion(){
resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => { 
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        

    });
}
function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
                        

            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
        // previousButton.style.display = "inline-block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;yy
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }

        function handleNextButton(){
            currentQuestionIndex++;
            if(currentQuestionIndex < questions.length){
                showQuestion();
            }else{
                showScore();
            }
        }
    
    nextButton.addEventListener("click", () => {
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
//     function handlePreviousButton(){
//         currentQuestionIndex--;
//         if(currentQuestionIndex > questions.length){
//             showQuestion();
//         }else{
//             showScore();
//         }
//     }

// previousButton.addEventListener("click", () => {
//     if(currentQuestionIndex > questions.length){
//         handlePreviousButton();
//     }else{
//         startQuiz();
//     }
// })

startQuiz();

