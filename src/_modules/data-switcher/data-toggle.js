'use strict';

// Constructor
var DataToggle = function() {
    var targets = $('[data-button]');
    var contents = $('[data-list]');

    if (targets.length > 0) {
        targets.on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var targettedContent = $this.data('button');

            console.log(targettedContent);
            $this.toggleClass('-active');
            contents.filter(function() {
                return $(this).data('list') === targettedContent;
            }).toggleClass('-active');
        });
    };
}

module.exports = DataToggle;
