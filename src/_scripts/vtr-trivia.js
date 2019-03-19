'use strict';

// Constructor
var VtrTrivia = function() {
    var preguntas = $('#preguntas');
    var resultados = $('#resultados');
    var answerText = $('.trivia-lollacl__answer-text');

    var colors = [];

    function indexColorChanger {

    }

    if(resultados.length > 0) {
        var facebookShareButton = $('.trivia-lollacl__icon-facebook');
        var twitterShareButton = $('.trivia-lollacl__icon-twitter');
        var resultImages = $('.trivia-lollacl__result-images');

        var resultMessages = [
            '¡Eres un experto en LollaCL <span>2019</span>!',
            '¡CASI! Te falta solo un poquito de práctica.',
            'Te falta conocer más estilos, ¡conócelos todos mirando <a href="/vtr-shuffle">VTR Shuffle aquí!</a>',
            'Mmmm, no eres tan experto en festivales como creías. ¡Sigue intentando!',
            'Quizás sea mejor que revises el <a href="/line-up">Lineup aquí</a>'
        ];

        var correctAnswers = parseInt(getUrlParamValue('respuestascorrectas'));
        var score = correctAnswers * 5;

        function getUrlParamValue(param) {
            var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);

            return results[1] || 0;
        }

        function processResults() {
            if (score < 40) {
                updateResultsData(4);

                return;
            }

            if (score < 60) {
                updateResultsData(3);

                return;
            }

            if (score < 80) {
                updateResultsData(2);

                return;
            }

            if (score < 100) {
                updateResultsData(1);

                return;
            }

            if (score === 100) {
                updateResultsData(0);

                return;
            }
        }

        function updateResultsData(index) {
            var resultText = resultMessages[index];

            updateResultText(resultText);
            updateResultImage(index);
            updateCorrectAnswers(correctAnswers);
            updateSocialSharing();
        };

        function updateResultText(text) {
            $('#resultado-text').html(text);
        };

        function updateResultImage(activeImage) {
            $(resultImages[activeImage]).addClass('-active');
        };

        function updateCorrectAnswers(amount) {
            $('#respuestas-correctas').html(amount + ' ');
        };

        function updateSocialSharing() {
            var customMessage = '¡Soy%20' + score + '%25%20experto%20en%20Lolla!%20Conoce%20tu%20porcentaje%20con%20la%20Trivia%20%23VTResLollaCL';
            var facebookShareUrl = 'http://www.facebook.com/sharer.php?s=100&p[url]=https://vtreslollacl.cl/trivia-lollacl-2/resultado?respuestascorrectas=' + correctAnswers;
            var twitterShareUrl = 'https://twitter.com/intent/tweet?text=' + customMessage + '&url=https://vtreslollacl.cl/trivia-lollacl-2/resultado?respuestascorrectas=' + correctAnswers;

            facebookShareButton.attr('href', facebookShareUrl);
            facebookShareButton.attr('quote', customMessage);
            twitterShareButton.attr('href', twitterShareUrl);
        };

        processResults();

    }

    if (preguntas.length > 0) {
        var questions = $('.trivia-lollacl__questions-wrapper');
        var answers = $('.trivia-lollacl__answer');
        var correctAnswers = 0;

        var questionResults = [
            1,2,3,2,1,2,2,0,3,0,0,1,2,3,1,0,1,2,0,3
        ];

        var answerState = {
            value:'',
            element: '',
            question: '',
            answers: '',
            correctAnswer: ''
        };

        var currentQuestionIndex = 0;

        questions.first().addClass('-active');

        answers.on('click', processSelectedAnswer);

        function processSelectedAnswer(e) {
            var selectedAnswer = e.target;
            var currentQuestion = $(selectedAnswer).parents('.trivia-lollacl__questions-wrapper');
            var currentQuestionAnswers = currentQuestion.find('.trivia-lollacl__answer');
            var isCorrectAnswer;

            answerState.value = currentQuestionAnswers.index(selectedAnswer);
            answerState.element = selectedAnswer;
            answerState.question = currentQuestion;
            answerState.answers = currentQuestionAnswers;
            answerState.correctAnswer = questionResults[currentQuestionIndex];

            isCorrectAnswer = validateSelectedAnswer();

            $(selectedAnswer).addClass('-selected');

            disableButtons(currentQuestionAnswers);

            setTimeout(function() {
                updateSelectedAnswerState(isCorrectAnswer);
                displayAnswerMessage(isCorrectAnswer);
                updateBreadcrumb();
            }, 500);

            setTimeout(nextQuestion, 2000);
        };

        function validateSelectedAnswer() {
            var selectedAnswerValue = answerState.value;
            var correctAnswerValue = answerState.correctAnswer;

            if (selectedAnswerValue === correctAnswerValue) {
                return true;
            } else {
                return false;
            };
        }

        function updateSelectedAnswerState(isCorrectAnswer) {
            var selectedAnswer = $(answerState.element);
            var correctAnswerValue = answerState.correctAnswer;
            var currentQuestionAnswers = answerState.answers;

            if (isCorrectAnswer) {
                correctAnswers++;
                selectedAnswer.addClass('-right');
            } else {
                selectedAnswer.addClass('-wrong');
                $(currentQuestionAnswers[correctAnswerValue]).addClass('-right');
            };
        }

        function displayAnswerMessage(isCorrectAnswer) {
            var answerMessageRight = answerState.question.find('.trivia-lollacl__answer-message--right');
            var answerMessageWrong = answerState.question.find('.trivia-lollacl__answer-message--wrong');

            if (isCorrectAnswer) {
                answerMessageRight.addClass('-right');
            } else {
                answerMessageWrong.addClass('-wrong')
            };

        }

        function disableButtons(buttons) {
            buttons.each(function() {
                $(this).attr('disabled', true);
            });
        };

        function nextQuestion() {

            if (currentQuestionIndex < questions.length - 1) {
                var currentQuestion = questions.get(currentQuestionIndex);
                var nextQuestion = questions.get(currentQuestionIndex + 1);

                $(currentQuestion).removeClass('-active');
                $(currentQuestion).addClass('-done');
                $(nextQuestion).addClass('-active');

                currentQuestionIndex++;
            } else {
                window.location.href = '/trivia-lollacl-2/resultado?respuestascorrectas=' + correctAnswers;
                console.log('last question');
            }
        }

        function updateBreadcrumb() {
            var breadcrumIndicators = $('.trivia-lollacl__question-indicator');
            var currentBreadcrumIndicator = breadcrumIndicators[currentQuestionIndex];
            var breadcrumLines = $('.trivia-lollacl__breadcrumb-line');
            var currentBreadcrumLine = breadcrumLines[currentQuestionIndex];

            var isCorrectAnswer = validateSelectedAnswer();

            if (isCorrectAnswer) {
                $(currentBreadcrumIndicator).addClass('-right');
                $(currentBreadcrumLine).addClass('-active');
            } else {
                $(currentBreadcrumIndicator).addClass('-wrong');
                $(currentBreadcrumLine).addClass('-active');
            };
        }
    }
};

module.exports = VtrTrivia;
