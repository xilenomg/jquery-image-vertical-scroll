/**
 * Author: Luis Felipe Corrêa Pérez
 * Date: Mon, Sep 2 2013
*/
;

$.fn.imageVerticalScrollfy = function(options){
    var collection = $(this);
    console.log(collection);
    this.each(function(){

        var settings = $.extend({
            showButton: true,
            imageSection: $(this),
            collection: collection,
            imageDown: "./images/icons/arrow-big.png"
        }, options);

        var addButton = function(){

            if ( !settings.imageSection.is(":last-child") ){
                //creating element
                var image = $("<img />");
                image.attr("src", settings.imageDown);
                image.addClass("arrow-down-image");

                var localImage = settings.imageSection.find("img");

                //centralizing button
                image.addClass("center");


                // appending button
                settings.imageSection.append(image);

            }
        };

        addButton();

        settings.imageSection.on("click", ".arrow-down-image", function(event){
            $('html,body').animate({
                scrollTop: settings.imageSection.next().offset().top
            });
        });

    });
};
