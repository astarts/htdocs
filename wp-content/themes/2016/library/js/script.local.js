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
        
        // Menu items
        if ($('.menu-image-title-below').length) {
            var body = $('section#content');
            // Creation du conteneur d'images et le cacher
            var container = $('<div />').addClass('menu-image-container');
            container.hide();
            // Overlay permettant de cacher le contenu de la page
            var overlay   = $('<div />').addClass('overlay');
            overlay.hide();
            body.prepend(overlay);
            // Parcourrir les sous-menus contenant une image
            $('.menu-image-title-below').each(function() {
                // Ressortir les principaux elements
                var link = $(this);
                var linkContainer = link.closest('li');
                var img  = link.find('img');
                // Cacher l'image par defaut
                img.hide();
                // Au passage de la souris sur le lien
                linkContainer.mouseenter(function(event) {
                    if (img.is(':visible') || $('.menu-toggle').first().is(':visible')) {
                        return false;
                    }
                    // Suppression des attributs de taille de l'image
                    img.attr('width', '');
                    img.attr('height', '');
                    // Redimentionner l'image et le conteneur a la meme taille que le corps
                    var containerSize = body.width();
                    img.css({width: containerSize + 'px'});
                    container.css({
                        width: containerSize + 'px',
                        marginLeft: (parseInt(body.offset().left) - parseInt($('#content-container').offset().left)) + 'px'
                    });
                    
                    // Afficher les bons elements
                    overlay.show();
                    img.fadeIn();
                    container.show();
                    
                });
                // Lorsque la souris sors du lien
                linkContainer.mouseleave(function(event) {
                    if (!img.is(':visible')) {
                        return false;
                    }
                    // Cacher les differents elements
                    img.hide();
                    container.hide();
                    overlay.hide();
                });
                container.append(img);
                
            });
            $('#site-nav').prepend(container);
        }
        
        
    });
    
})(jQuery);