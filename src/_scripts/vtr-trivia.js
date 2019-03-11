'use strict';

// Constructor
var VtrTrivia = function() {
    var context = $('.vtr-trivia');    

    if (context.length > 0) {
        // var questions = $('.trivia-question');
        // var questionResults = [
        //     1,
        //     2,
        // ];
        // var currentQuestion = 0;

        // questions.first().addClass('-active');

        // function validateQuestion() {
            
        //     var selectedAnswer = e.target.index();

        //     if (selecedAnswer === questionResults[currentQuestion]) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // function nextQuestion() {
        //     if (currentQuestion <= questions.lenght) {
        //         nextQestion.addClass('-active');
        //         currentQuestion++;
        //     } else {
        //         window.location.href = '/trivia-vtr/resultado?correctAnswers=' + correctAnswers;
        //     }
        // }

        // function submitAnswer() {
        //     validateQuestion();
        //     nextQuestion();
        // }
    }
};

module.exports = VtrTrivia;