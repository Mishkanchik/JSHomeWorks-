let quizData = [];
let currentQuizIndex = 0;


document.getElementById('Exit').addEventListener('click', () => {
    location.reload;
    
    
})

document.getElementById('add-question-block').addEventListener('click', function() {

    const questionBlock = document.querySelector('.question-block').cloneNode(true);

    questionBlock.querySelectorAll('input').forEach(input => input.value = '');


    document.getElementById('questions-wrapper').appendChild(questionBlock);
});

document.addEventListener('click', function(e) {

    if (e.target.classList.contains('add-wrong-answer')) {

        const wrongAnswerGroup = e.target.previousElementSibling.cloneNode(true);

        wrongAnswerGroup.querySelector('input').value = '';


        e.target.before(wrongAnswerGroup);
    }
});



document.getElementById('start-quiz').addEventListener('click', function() {

    quizData = [];

    document.querySelectorAll('.question-block').forEach(block => {

        const question = block.querySelector('.question').value;

        const correctAnswer = block.querySelector('.correct-answer').value;


        const wrongAnswers = Array.from(block.querySelectorAll('.wrong-answer')).map(input => input.value);


        if (question && correctAnswer) {


            quizData.push({

                question,

                correctAnswer,

                answers: [correctAnswer, ...wrongAnswers.sort(() => Math.random() - 0.5)]


            });
        }
    });

    

    if (quizData.length > 0) {


        startQuiz();

    } else {


        alert('Додайте хоча б одне запитання!');


    }
});







function startQuiz() {

    const quizWindow = window.open('', 'quizWindow', 'width=800,height=600');


    function showQuestion(index) {

        if (index >= quizData.length) {

            showResults();


            return;
        }

        const quiz = quizData[index];

        let answersHtml = '';


        quiz.answers.forEach(answer => {

            answersHtml += `<label><input type="radio" name="answer" value="${answer}"> ${answer}</label><br>`;

        });

        quizWindow.document.body.innerHTML = `

            <h1>${quiz.question}</h1>
            <form id="quiz-form">
                ${answersHtml}
                <button type="button" id="next-question">Завершити вікторину</button>
            </form>

        `;

        quizWindow.document.getElementById('next-question').addEventListener('click', function() {

            const selected = quizWindow.document.querySelector('input[name="answer"]:checked');


            quizData[index].userAnswer = selected ? selected.value : null;

            showQuestion(index + 1);
        });
    }

    function showResults() {

        let resultsHtml = '<h1>Результати вікторини</h1>';

        quizData.forEach((quiz, index) => {

            resultsHtml += `
                <h2>Запитання ${index + 1}: ${quiz.question}</h2>
                <p>Правильна відповідь: ${quiz.correctAnswer}</p>
                <p>Ваша відповідь: ${quiz.userAnswer || 'Не вибрано'}</p>
                 
            `;

        });
       
      
        quizWindow.document.body.innerHTML = resultsHtml;
       
        
    }

    

    showQuestion(currentQuizIndex);

    

}



