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
                    // Cacher toutes les images
                    container.find('img').hide();
                    // Suppression des attributs de taille de l'image
                    img.attr('width', '');
                    img.attr('height', '');
                    // Redimentionner l'image et le conteneur a la meme taille que le corps
                    var containerSize = body.width();
                    container.css({
                        width: containerSize + 'px',
                        maxWidth: containerSize + 'px',
                        marginLeft: (parseInt(body.offset().left) - parseInt($('#content-container').offset().left)) + 'px',
                        textAlign: 'center'
                    });
                    // Si l'image est trop grande verticalement, rendimentionner
                    var imgSize = getSize(img);
                    var visibility = jQuery(window).height() - imgSize.offset.top + $(document).scrollTop() - 20;
                    if (getSize(img).height > visibility) {
                        img.css({
                            height: visibility + 'px',
                            width: ''
                        });
                    }
                    // Afficher les bons elements
                    overlay.show();
                    container.show();
                    img.fadeIn(function() {
                        
                    });
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
    
    function getSize(element) {
        var container = element.closest('div');
        
        var contDisplay = container.css('display');
        var elPosition = element.css('position');
        var elVisibility = element.css('visibility');
        var elDispay = element.css('display');
        
        container.css('display', 'block');
        element.css({
            position:   'static',
            visibility: 'visible'
        });

        var optionHeight = element.outerHeight();
        var optionWidth = element.width();
        var optionOffset = container.offset();

        container.css('display', contDisplay);
        element.css({
            position:   elPosition,
            visibility: elVisibility,
            display:    elDispay
        });
        return {
            height: optionHeight,
            width: optionWidth,
            offset: optionOffset
        };
    }
    
})(jQuery);