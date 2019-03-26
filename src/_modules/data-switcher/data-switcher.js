'use strict';

// Constructor
var DataSwitcher = function() {
    var targets = $('[data-target]');
    var contents = $('[data-content]');
    var gridTargets = $('[data-button]');
    var gridContents = $('[data-list]');
    var lineupSelectbox = $('.line-up__selectbox');
    var headingStage = $('.line-up__base-grid');

    function init() {
        targets.first().addClass('-active');
        contents.first().addClass('-active');
    }

    // if (targets.length > 0 && targets.length === contents.length) {
    if (targets.length > 0) {

        targets.on('click', function() {
            var $this = $(this);
            var targettedContent = $this.data('target');

            targets.removeClass('-active');
            contents.removeClass('-active');
            gridTargets.removeClass('-active');
            gridContents.removeClass('-active');

            var filteredContent = contents.filter(function() {
                return $(this).data('content') === targettedContent;
            });

            headingStage.children(".line-up__stage").first().addClass('-active');

            $this.addClass('-active');

            filteredContent.addClass('-active');

            filteredContent.find('.line-up__stage').first().addClass('-active');

            lineupSelectbox.prop('selectedIndex', 0);
        });

        lineupSelectbox.on('change', function() {
            var $this = $(this);
            var targettedContent = $this.val();

            var filteredContent = gridContents.filter(function() {
                return $(this).data('list') === targettedContent;
            });

            gridTargets.removeClass('-active');
            gridContents.removeClass('-active');
            filteredContent.addClass('-active');
        });
        // init();
    }
}

module.exports = DataSwitcher;
