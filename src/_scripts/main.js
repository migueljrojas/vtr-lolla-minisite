// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var DataSwitcher = require('../_modules/data-switcher/data-switcher');
var DataToggle = require('../_modules/data-switcher/data-toggle');
var VtrShuffle = require('./vtr-shuffle');
var VtrTrivia = require('./vtr-trivia');
var VtrPlaystage = require('./vtr-playstage');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');

    new Header();
    new VtrShuffle();
    new VtrTrivia();
    new DataSwitcher();
    new DataToggle();
    new VtrPlaystage();
});
