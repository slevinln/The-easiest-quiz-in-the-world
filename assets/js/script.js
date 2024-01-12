// This Code is from https://simplestepscode.com/javascript-quiz-tutorial/ and was meant only for testing //
let myQuestions = [
    {
        question: "How long was the Hundred Years' War?",
        answers: {
            a: '100 years',
            b: '150 years',
            c: '116 years',
            d: '99 years'
        },
        correctAnswer: 'c'
    },
    {
        question: "In which country was the Panama hat invented?",
        answers: {
            a: 'Brazil',
            b: 'Ecuador',
            c: 'Panama',
            d: 'Chile'
        },
        correctAnswer: 'b'
    },
    {
        question: "In which month does Russia celebrate the October Revolution?",
        answers: {
            a: 'January',
            b: 'September',
            c: 'October',
            d: 'November'
        },
        correctAnswer: 'd'
    },
    {
        question: "What was the real name of King George VI?",
        answers: {
            a: 'Albert',
            b: 'George',
            c: 'John',
            d: 'Martin'
        },
        correctAnswer: 'a'
    },
    {
        question: "The Canary Islands are named after which animal?",
        answers: {
            a: 'Canary',
            b: 'Kangaroo',
            c: 'Rat',
            d: 'Harbor seal'
        },
        correctAnswer: 'd'
    },
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;

        // for each question...
        for (let i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}    
