// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery = require('jquery');
global._ = require('underscore');
var Header = require('../_modules/header/header');
var VtrShuffle = require('./vtr-shuffle');

$(function() {
    require('../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.min');

    new Header();
    new VtrShuffle();
});
