(function ($) {
    
    "use strict";
    
    $(document).ready(function() {
        
        // Facebook link
        // Pour ajouter un nouveau lien, ajouter une "," puis le selecteur css
        // Par ex. $('.menu-item-30 a, .menu-item-21 a, ...')
        $('.menu-item-30 a,.menu-item-105 a').click(function() {
            window.open($(this).attr('href'));
            return false;
        });
    });
    
})(jQuery);