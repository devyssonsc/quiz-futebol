const $question = document.querySelector(".question");
const $divAnswers = document.querySelector(".div-answers");

const questionsList = [
    {
        id: 0,
        question: "Quanto tempo dura uma partida de futebol?",
        possibleAnswers: ["75 Minutos","90 Minutos","100 Minutos", "60 Minutos"],
        correctAnswer: 1,
        levelDifficulty: "Easy"
    },
    {
        id: 1,
        question: "Quantos jogadores cada time de futebol tem em jogo?",
        possibleAnswers: ["5 jogadores","7 jogadores","11 jogadores", "10 jogadores"],
        correctAnswer: 2,
        levelDifficulty: "Easy"
    },
    {
        id: 2,
        question: "Quem é conhecido como 'O Rei' do futebol?",
        possibleAnswers: ["Pelé","Lionel Messi","Zico", "Zinedine Zidane"],
        correctAnswer: 0,
        levelDifficulty: "Easy"
    },
    {
        id: 3,
        question: "Qual país é o atual campeão da copa do mundo?",
        possibleAnswers: ["Argentina","Alemanha","Brasil", "França"],
        correctAnswer: 0,
        levelDifficulty: "Easy"
    },
    {
        id: 4,
        question: "Qual dos seguintes times não é campeão mundial?",
        possibleAnswers: ["Corinthians","Internacional","Flamengo", "Palmeiras"],
        correctAnswer: 3,
        levelDifficulty: "Easy"
    },
    {
        id: 5,
        question: "Qual é o país que mais tem copas do mundo?",
        possibleAnswers: ["Itália","Espanha","Brasil", "Alemenha"],
        correctAnswer: 2,
        levelDifficulty: "Medium"
    },
    {
        id: 6,
        question: "Quais times protagonizam o famoso 'El Classico'?",
        possibleAnswers: ["Celtics e Rangers","Real Madrid e Atlético de Madrid","Boca Júniors e River Plate", "Barcelona e Real Madrid"],
        correctAnswer: 3,
        levelDifficulty: "Medium"
    },
    {
        id: 7,
        question: "Quem é o maior campeão da história da Champions League?",
        possibleAnswers: ["Barcelona","Real Madrid","Juventus", "Milan"],
        correctAnswer: 1,
        levelDifficulty: "Medium"
    },
    {
        id: 8,
        question: "Qual é o jogador com maior quantidade de bolas de ouro no mundo?",
        possibleAnswers: ["Thierry Henry","Cristiano Ronaldo","Lionel Messi", "Neymar Jr."],
        correctAnswer: 2,
        levelDifficulty: "Medium"
    },
    {
        id: 9,
        question: "Qual time é o maior campeão da Premier League(Campeonato inglês)?",
        possibleAnswers: ["Manchester United","Tottenham","Liverpool", "Manchester City"],
        correctAnswer: 0,
        levelDifficulty: "Medium"
    },
    {
        id: 10,
        question: "Em qual país foi realizada a primeira copa do mundo?",
        possibleAnswers: ["Brasil","Inglaterra","Suécia", "Uruguai"],
        correctAnswer: 3,
        levelDifficulty: "Hard"
    },
    {
        id: 11,
        question: "Qual foi o maior público já registrado em uma partida de futebol?",
        possibleAnswers: ["195.974","199.854","194.375", "198.127"],
        correctAnswer: 1,
        levelDifficulty: "Hard"
    },
    {
        id: 12,
        question: "Quais times participaram da final da Champions League na temporada 2009/2010?",
        possibleAnswers: ["FC Internazionale x FC Bayern Munchen","Juventus FC x FC Barcelona","Real Madrid x Atlético de Madrid", "FC Liverpool x AC Milan"],
        correctAnswer: 0,
        levelDifficulty: "Hard"
    },
    {
        id: 13,
        question: "Qual é o maior campeão estadual do futebol brasileiro?",
        possibleAnswers: ["Flamengo-RJ","Paysandu-PA","Atlético-MG", "ABC-RN"],
        correctAnswer: 3,
        levelDifficulty: "Hard"
    },
    {
        id: 14,
        question: "Quem o Brasil enfrentou na final quando conquistou a sua primeira copa do mundo?",
        possibleAnswers: ["México","Suécia","Alemanha", "Hungria"],
        correctAnswer: 1,
        levelDifficulty: "Hard"
    }
];

let questionsCopy = [...questionsList]

while (questionsCopy.length > 0) {
    
    let sortedQuestion = Math.floor(Math.random() * (questionsCopy.length));

    $question.innerText = questionsCopy[sortedQuestion].question;
    console.log(questionsCopy[sortedQuestion].question);
    possibleAnswersCopy = [...questionsCopy[sortedQuestion].possibleAnswers];

    for(let i = 0; i <= 3; i++){

        let sortedAnswer = Math.floor(Math.random() * possibleAnswersCopy.length);
        $divAnswers.children[i].innerText = possibleAnswersCopy[sortedAnswer];

        possibleAnswersCopy.splice(sortedAnswer,1);
    }


    questionsCopy.splice(sortedQuestion,1);

    console.log(questionsCopy.length);
}

console.log(questionsCopy.length);