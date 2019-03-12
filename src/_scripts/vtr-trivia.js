'use strict';

// Constructor
var VtrTrivia = function() {
    var context = $('.trivia-lollacl');

    if (context.length > 0) {
        var questions = $('.trivia-lollacl__questions-wrapper');
        var answers = $('.trivia-lollacl__answer');
        var facebookShareButton = $('.trivia-lollacl__icon-facebook');
        var facebookShareUrl = "http://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=https://vtreslollacl.cl/";

        var questionResults = [
            1,2,3,2,1,2,2,0,3,0,0,1,2,3,1,0,1,2,0,3
        ];

        var currentQuestionIndex = 0;

        questions.first().addClass('-active');

        function disableButtons(buttons) {
            buttons.each(function() {
                $(this).attr('disabled', true);
            });
        };

        function validateQuestion(e) {

            var selectedAnswer = e.target;
            var currentQuestion = $(selectedAnswer).parents('.trivia-lollacl__questions-wrapper');
            var currentQuestionAnswers = currentQuestion.find('.trivia-lollacl__answer');
            var selectedAnswerValue = currentQuestionAnswers.index(selectedAnswer);
            var correctAnswerValue = questionResults[currentQuestionIndex];
            var answerMessageRight = currentQuestion.find('.trivia-lollacl__answer-message--right');
            var answerMessageWrong = currentQuestion.find('.trivia-lollacl__answer-message--wrong');
            var breadcrumIndicators = $('.trivia-lollacl__question-indicator');
            var currentBreadcrumIndicator = breadcrumIndicators[currentQuestionIndex];
            var breadcrumLines = $('.trivia-lollacl__breadcrum-line');
            var currentBreadcrumLine = breadcrumLines[currentQuestionIndex];

            console.log(currentBreadcrumIndicator);

            disableButtons(currentQuestionAnswers);

            $(selectedAnswer).addClass('-selected');

            function validate() {
                if (selectedAnswerValue === correctAnswerValue) {
                    $(selectedAnswer).addClass('-right');
                    answerMessageRight.addClass('-right');
                    $(currentBreadcrumIndicator).addClass('-right');
                    $(currentBreadcrumLine).addClass('-active');
                } else {
                    $(selectedAnswer).addClass('-wrong');
                    $(currentQuestionAnswers[correctAnswerValue]).addClass('-right')
                    answerMessageWrong.addClass('-wrong')
                    $(currentBreadcrumIndicator).addClass('-wrong');
                    $(currentBreadcrumLine).addClass('-active');
                };
            }

            setTimeout(validate, 500);
            setTimeout(nextQuestion, 2000);
        }

        answers.on('click', function(e){
            validateQuestion(e);
        });

        function nextQuestion() {
            if (currentQuestionIndex < questions.length - 1) {
                var currentQuestion = questions.get(currentQuestionIndex);
                var nextQuestion = questions.get(currentQuestionIndex + 1);

                $(currentQuestion).removeClass('-active');
                $(currentQuestion).addClass('-done');
                $(nextQuestion).addClass('-active');

                currentQuestionIndex++;
            } else {
                window.location.href = '/trivia-lollacl/resultado';
                console.log('last question');
            }
        }
    }
};

module.exports = VtrTrivia;
