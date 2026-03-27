const quiz = [ 
    {
        question: "Elektro og datateknologi  1. Hva måles i Ohm (Ω)?",
        choices: [
            {
                id: 1,
                label: "Strøm",
            },
            {
                id: 2,
                label: "Motstand",
            },
            {
                id: 3,
                label: "Spenning",
            },
            {
                id: 4,
                label: "Effekt",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Helse- og oppvekstfag  2. Hva er normal kroppstemperatur hos mennesker?",
        choices: [
            {
                id: 1,
                label: "35°C",
            },
            {
                id: 2,
                label: "37°C",
            },
            {
                id: 3,
                label: "39°C",
            },
            {
                id: 4,
                label: "40°C",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Idrettsfag  3. Hva er kroppens viktigste energikilde under hard trening?",
        choices: [
            {
                id: 1,
                label: "Protein",
            },
            {
                id: 2,
                label: "Karbohydrater",
            },
            {
                id: 3,
                label: "Vann",
            },
            {
                id: 4,
                label: "Vitaminer",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Medier og kommunikasjon  4. Hva betyr målgruppe i media?",
        choices: [
            {
                id: 1,
                label: "Hvem budskapet er laget for",
            },
            {
                id: 2,
                label: "Hvor reklamen sendes",
            },
            {
                id: 3,
                label: "Hvor videoen spilles inn",
            },
            {
                id: 4,
                label: "Hvor mange som ser",
            },
        ],
        correctAnswer: 1
    },
    {
        question: "Påbygging til generell studiekompetanse  5. Hvilket fagområde studerer samfunn og politikk?",
        choices: [
            {
                id: 1,
                label: "Biologi",
            },
            {
                id: 2,
                label: "Sosiologi",
            },
            {
                id: 3,
                label: "Fysikk",
            },
            {
                id: 4,
                label: "Geografi",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Salg, service og reiseliv  6. Hva er god kundeservice?",
        choices: [
            {
                id: 1,
                label: "Å ignorere kunder",
            },
            {
                id: 2,
                label: "Å snakke lite",
            },
            {
                id: 3,
                label: "Å selge mest mulig",
            },
            {
                id: 4,
                label: "Å hjelpe kunder på en vennlig og profesjonell måte",
            },
        ],
        correctAnswer: 4
    },
    {
        question: "Teknologi- og industrifag  7. Hva brukes en dreiebenk til?",
        choices: [
            {
                id: 1,
                label: "Sveising",
            },
            {
                id: 2,
                label: "Maling",
            },
            {
                id: 3,
                label: "Bearbeiding av roterende materialer",
            },
            {
                id: 4,
                label: "Montering",
            },
        ],
        correctAnswer: 3
    },
    {
        question: "Informasjonsteknologi og medieproduksjon  8. Hva betyr html?",
        choices: [
            {
                id: 1,
                label: "HyperText Markup Language",
            },
            {
                id: 2,
                label: "HighText Machine Language",
            },
            {
                id: 3,
                label: "Hyper Transfer Media Link",
            },
            {
                id: 4,
                label: "Home Tool Markup Language",
            },
        ],
        correctAnswer: 1
    },
    {
        question: "Kombinasjonsklasse  9. Hvilket styresett har Norge?",
        choices: [
            {
                id: 1,
                label: "Republikk",
            },
            {
                id: 2,
                label: "Militærstyre",
            },
            {
                id: 3,
                label: "Konstitusjonelt monarki",
            },
            {
                id: 4,
                label: "Diktatur",
            },
        ],
        correctAnswer: 3
    },
    {
        question: "Demokrati og medborgerskap  10. Hva regnes som mobbing?",
        choices: [
            {
                id: 1,
                label: "En enkelt krangel mellom venner",
            },
            {
                id: 2,
                label: "Gjentatt negativ atferd mot en person over tid",
            },
            {
                id: 3,
                label: "Å være uenig med noen",
            },
            {
                id: 4,
                label: "Å gi konstruktiv kritikk",
            },
        ],
        correctAnswer: 2
    },
    {
        question: "Vaskmester  11. Hvilken måte er riktig?",
        video: "../vid/MVI_0691.mp4",
        choices: [
            {
                id: 1,
                label: "Spiker",
            },
            {
                id: 2,
                label: "Plugg",
            },
            {
                id: 3,
                label: "Skrue",
            },
        ],
        correctAnswer: 2
    },
];



let chosenAnswer = false;
let feedback = document.getElementById("feedback");
let count =  0;

let totalScore = 0; 


function loadQuiz() {
    let firstElement = quiz[count]; 
    let h2 = document.getElementById("question");
    let buttonsContainer = document.getElementById("buttons");
    h2.textContent += `${firstElement.question}`
    let buttons = firstElement.choices;
    buttons.forEach(button => {
        buttonsContainer.innerHTML += `<button id="${button.id}" onclick="checkAnswer(${button.id}, ${firstElement.correctAnswer})">${button.label}</button>`
    });
}



function checkAnswer(buttonId, correctAnswer) {
    
    let isCorrect = buttonId === correctAnswer;
    if(isCorrect && !chosenAnswer) {
        chosenAnswer = true;
        document.getElementById(buttonId).classList.add("correct");
        feedback.textContent = "Du hadde riktig!"
        totalScore++;
    } else if (!isCorrect && !chosenAnswer) {
        chosenAnswer = true;
        document.getElementById(buttonId).classList.add("wrong");
        feedback.textContent = "Du tok feil!"
    }
    if(chosenAnswer) {
        let nextButton = document.getElementById("next");
        nextButton.innerHTML = `<button onClick="nextQuestion()">Next</button>`
    }
}

function nextQuestion() {
    count++;
    let nextElement = quiz[count];

    let h2 = document.getElementById("question");

    let buttonsContainer = document.getElementById("buttons");

    let nextButton= document.getElementById("next")

    let quizLength = quiz.length;

    chosenAnswer = false;

    if(count < quizLength){

    feedback.textContent = "";

    h2.textContent = ``

    buttonsContainer.innerHTML = "";

    nextButton.innerHTML = "";

    h2.textContent += `${nextElement.question}`

    let isVideo = nextElement.video;

    if(isVideo) {

        let videoContainer = document.getElementById("video");

        videoContainer.style.display = "flex"

        videoContainer.innerHTML = `<video width="500" height="400" controls>

        <source src="${nextElement.video}" type="video/mp4">

        Your browser does not support the video tag.

        </video>`
    }
     
    let buttons = nextElement.choices;

    buttons.forEach(button => {

        buttonsContainer.innerHTML += `<button id="${button.id}" onclick="checkAnswer(${button.id}, ${nextElement.correctAnswer})">${button.label}</button>`

    });

    } else {

        let summaryContainer = document.getElementById("summary");

        let questionContainer = document.getElementById("questionContainer");

        let totalScoreContainer = document.getElementById("totalScore");

        summaryContainer.style.display = "flex";

        questionContainer.style.display = "none";

        totalScoreContainer.textContent = `Din total score: ${totalScore} av ${quiz.length}`

        saveScore(totalScore);

        displayLeaderboard();
    }

}


loadQuiz();


function saveScore(finalScore) {

  let name = prompt("Skriv navnet ditt:");

  if (!name) return;

  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  leaderboard.push({ name: name, score: finalScore });

  // sorter høyest først

  leaderboard.sort((a, b) => b.score - a.score);

  // lagre tilbake
  leaderboard = leaderboard.slice(0, 10);

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// når spillet er ferdig


function displayLeaderboard() {

  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  let list = document.getElementById("leaderboard");

  list.innerHTML = "";

  leaderboard.forEach((player, index) => {

    let li = document.createElement("li");

    li.textContent = `#${index + 1} ${player.name} - ${player.score}`;

    list.appendChild(li);

  });
}