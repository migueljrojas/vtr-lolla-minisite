'use strict';

// Constructor
var DataToggle = function() {
    var targets = $('[data-button]');
    var contents = $('[data-list]');

    function init() {
        targets.first().addClass('-active');
        contents.first().addClass('-active');
    }

    // if (targets.length > 0 && targets.length === contents.length) {
    if (targets.length > 0) {
        targets.on('click', function() {
            var $this = $(this);
            var targettedContent = $this.data('button');

            targets.removeClass('-active');
            contents.removeClass('-active');

            $this.addClass('-active');
            contents.filter(function() {
                return $(this).data('list') === targettedContent;
            }).addClass('-active');
        });

        // init();
    }
}

module.exports = DataToggle;
