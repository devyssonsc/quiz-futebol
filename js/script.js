const $question = document.querySelector(".question");
const $divAnswers = document.querySelector(".div-answers");
const $levelQuestion = document.querySelector(".level-question");
const $nextQuestion = document.querySelector("#next-question");
const $seeResult = document.querySelector("#see-result");
const $body = document.querySelector("body")

// const questionsList = [

//     {
//         id: 0,
//         label: "Quanto tempo dura uma partida de futebol?",
//         possibleAnswers: ["75 Minutos","90 Minutos","100 Minutos", "60 Minutos"],
//         correctAnswer: "90 Minutos",
//         levelDifficulty: "Fácil (4pts)",
//         points: 4
//     },
//     {
//         id: 1,
//         label: "Quantos jogadores cada time de futebol tem em jogo?",
//         possibleAnswers: ["5 jogadores","7 jogadores","11 jogadores", "10 jogadores"],
//         correctAnswer: "11 jogadores",
//         levelDifficulty: "Fácil (4pts)",
//         points: 4
//     },
//     {
//         id: 2,
//         label: "Quem é conhecido como 'O Rei' do futebol?",
//         possibleAnswers: ["Pelé","Lionel Messi","Zico", "Zinedine Zidane"],
//         correctAnswer: "Pelé",
//         levelDifficulty: "Fácil (4pts)",
//         points: 4
//     },
//     {
//         id: 3,
//         label: "Qual país é o atual campeão da copa do mundo?",
//         possibleAnswers: ["Argentina","Alemanha","Brasil", "França"],
//         correctAnswer: "Argentina",
//         levelDifficulty: "Fácil (4pts)",
//         points: 4
//     },
//     {
//         id: 4,
//         label: "Qual dos seguintes times não é campeão mundial?",
//         possibleAnswers: ["Corinthians","Internacional","Flamengo", "Palmeiras"],
//         correctAnswer: "Palmeiras",
//         levelDifficulty: "Fácil (4pts)",
//         points: 4
//     },
//     {
//         id: 5,
//         label: "Qual é o país que mais tem copas do mundo?",
//         possibleAnswers: ["Itália","Espanha","Brasil", "Alemenha"],
//         correctAnswer: "Brasil",
//         levelDifficulty: "Média (6pts)",
//         points: 6
//     },
//     {
//         id: 6,
//         label: "Quais times protagonizam o famoso 'El Classico'?",
//         possibleAnswers: ["Celtics e Rangers","Real Madrid e Atlético de Madrid","Boca Júniors e River Plate", "Barcelona e Real Madrid"],
//         correctAnswer: "Barcelona e Real Madrid",
//         levelDifficulty: "Média (6pts)",
//         points: 6
//     },
//     {
//         id: 7,
//         label: "Quem é o maior campeão da história da Champions League?",
//         possibleAnswers: ["Barcelona","Real Madrid","Juventus", "Milan"],
//         correctAnswer: "Real Madrid",
//         levelDifficulty: "Média (6pts)",
//         points: 6
//     },
//     {
//         id: 8,
//         label: "Qual é o jogador com maior quantidade de bolas de ouro no mundo?",
//         possibleAnswers: ["Thierry Henry","Cristiano Ronaldo","Lionel Messi", "Neymar Jr."],
//         correctAnswer: "Lionel Messi",
//         levelDifficulty: "Média (6pts)",
//         points: 6
//     },
//     {
//         id: 9,
//         label: "Qual time é o maior campeão da Premier League(Campeonato inglês)?",
//         possibleAnswers: ["Manchester United","Tottenham","Liverpool", "Manchester City"],
//         correctAnswer: "Manchester United",
//         levelDifficulty: "Média (6pts)",
//         points: 6
//     },
//     {
//         id: 10,
//         label: "Em qual país foi realizada a primeira copa do mundo?",
//         possibleAnswers: ["Brasil","Inglaterra","Suécia", "Uruguai"],
//         correctAnswer: "Uruguai",
//         levelDifficulty: "Difícil (10pts)",
//         points: 10
//     },
//     {
//         id: 11,
//         label: "Qual foi o maior público já registrado em uma partida de futebol?",
//         possibleAnswers: ["195.974","199.854","194.375", "198.127"],
//         correctAnswer: "199.854",
//         levelDifficulty: "Difícil (10pts)",
//         points: 10
//     },
//     {
//         id: 12,
//         label: "Quais times participaram da final da Champions League na temporada 2009/2010?",
//         possibleAnswers: ["FC Internazionale x FC Bayern Munchen","Juventus FC x FC Barcelona","Real Madrid x Atlético de Madrid", "FC Liverpool x AC Milan"],
//         correctAnswer: "FC Internazionale x FC Bayern Munchen",
//         levelDifficulty: "Difícil (10pts)",
//         points: 10
//     },
//     {
//         id: 13,
//         label: "Qual é o maior campeão estadual do futebol brasileiro?",
//         possibleAnswers: ["Flamengo-RJ","Paysandu-PA","Atlético-MG", "ABC-RN"],
//         correctAnswer: "ABC-RN",
//         levelDifficulty: "Difícil (10pts)",
//         points: 10
//     },
//     {
//         id: 14,
//         label: "Quem o Brasil enfrentou na final quando conquistou a sua primeira copa do mundo?",
//         possibleAnswers: ["México","Suécia","Alemanha", "Hungria"],
//         correctAnswer: "Suécia",
//         levelDifficulty: "Difícil (10pts)",
//         points: 10
//     }
// ];

const questions = async () => {
    const result = await fetch("http://localhost:3333/questions")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });  

    return result;
}

const response = questions();
console.log(response);

// let questionsCopy = [...questionsList]
// let sortedQuestion = 0;
// let totalPoints = 0;
// let indexQuestion = 1;

// const sortQuestion = () => {
//     sortedQuestion = Math.floor(Math.random() * (questionsCopy.length));

//     $question.innerText = `${indexQuestion} - ${questionsCopy[sortedQuestion].question}`;
//     $levelQuestion.innerText = questionsCopy[sortedQuestion].levelDifficulty;

//     indexQuestion++

//     console.log(questionsCopy[sortedQuestion].question);

//     // Crie uma cópia da lista de respostas possíveis sem modificar a original
//     let possibleAnswersCopy = [...questionsCopy[sortedQuestion].possibleAnswers];

//     for (let i = 0; i <= 3; i++) {
//         let sortedAnswer = Math.floor(Math.random() * possibleAnswersCopy.length);
//         $divAnswers.children[i].classList.remove("clicked");
//         $divAnswers.children[i].innerText = possibleAnswersCopy[sortedAnswer];
//         possibleAnswersCopy.splice(sortedAnswer, 1);
//     }

//     $nextQuestion.classList.add("hidden");
//     $seeResult.classList.add("hidden");

//     for (let i = 0; i < $divAnswers.children.length; i++){
//         $divAnswers.children[i].disabled = false;
//     }

//     console.log(questionsCopy[sortedQuestion].correctAnswer);

//     console.log(questionsCopy.length);
// }


// $divAnswers.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//         event.target.classList.add("clicked");
//         if (event.target.innerText === questionsCopy[sortedQuestion].correctAnswer) {
//             totalPoints += questionsCopy[sortedQuestion].points;
//             alert("Correto!")
//         } else {
//             alert("Incorreto! A resposta certa é: " + questionsCopy[sortedQuestion].correctAnswer);
//         }

//         for (let i = 0; i < $divAnswers.children.length; i++){
//             $divAnswers.children[i].disabled = true;
//         }

//         // Remova a pergunta da lista após verificar a resposta
//         questionsCopy.splice(sortedQuestion, 1);

//         // Verifique se ainda há perguntas restantes
//         if (questionsCopy.length > 0) {
//             $nextQuestion.classList.remove("hidden");
//         } else {
//             // Caso contrário, o quiz terminou
//             $seeResult.classList.remove("hidden");
//         }
//     }
// });

// $nextQuestion.addEventListener("click", () => {
//     sortQuestion();
// })

// $seeResult.addEventListener("click", () => {
//     alert(`Resultado: A sua pontuação final foi: ${totalPoints}`);
// })

// window.addEventListener("load", () => {
//     sortQuestion();
// })
