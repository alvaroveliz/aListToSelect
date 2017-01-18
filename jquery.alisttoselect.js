/**
* Alvaro's List to Select
* A jQuery plugin that converts a list into a choice menu
*
* Licence: MIT
*/
(function($) {

    $.fn.aListToSelect = function(options) {

        var $this = this;
        var settings = $.extend({
            'target': $this,
            'selectedClass': 'selected',
            'addButton': true,
        }, options);

        return this.each(function() {
            if (settings.addButton == true) {
                $button = $('<a class="mobile-menu" href="javascript:void(0);">Menu</a>').appendTo(settings.target);
            }
            $select = $('<select class="select-main-menu">').appendTo(settings.target);

            $this.children('li').each(function(e, elem) {
                $li = $(elem);
                $a = $('a', elem);


                if ($li.children('ul').length > 0) {
                    $optionGroup = $('<optgroup />').attr('label', $a.html());


                    $li.children('ul').children('li').each(function(ge, gelem) {
                        $childA = $('a', gelem);
                        $optionChild = $('<option>')
                            .text($childA.html())
                            .val($childA.attr('href'))
                            .appendTo($optionGroup);

                        if ($childA.hasClass(settings.selectedClass)) {
                            $optionChild.attr('selected', 'selected');
                        }
                    });

                    $optionGroup.appendTo($select);
                } else {
                    $option = $('<option>')
                        .text($a.html())
                        .val($a.attr('href'))
                        .appendTo($select);

                    if ($a.hasClass(settings.selectedClass)) {
                        $option.attr('selected', 'selected');
                    }
                }

                $this.hide();
            })
        });

    };
})(jQuery);
