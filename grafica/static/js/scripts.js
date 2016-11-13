// Custom Template JavaScript Document
jQuery.fn.spectragram.accessData = {
    accessToken: '3620259858.14d76a8.c31faf69cf8f47498f3e31171abdaa23',
    clientID: '14d76a8c537d4a19bf5216a715f31943'
};

jQuery(document).ready(function() {
	jQuery('#menu-main-menu').responseamenu({
		width : 768,
		listDisplayType : 'inline-block',
		startingText : 'Menu',
		currentPageSelected : false,
		dropDownId : 'responseamenu',
		type : 'slide'
	});

    if (jQuery('#programs-nav > .container > .row > div[class*="col"] > ul').is(":empty")){
        jQuery("#programs-nav").hide();
    }

	jQuery( ".accordion" ).accordion({
		heightStyle: "content"
	});
	
	
	jQuery( '.cycle-slideshow' ).cycle();
	jQuery( '.testimonial-slideshow' ).cycle();
	
	jQuery( '.gallery > div' ).cycle();
	
	jQuery('.slider-panel').hover(function() { 
	    var slide_num = jQuery(this).attr('id');
	    	jQuery('.cycle-slideshow').cycle('goto', slide_num);
	    return false; 
	});
	
	jQuery('.gallery-group').colorbox({rel:'gallery-group', fixed:'false', maxWidth:'100%', height:'auto', maxHeight:'100%'});

    jQuery('#instagram-scroll').spectragram('getRecentMedia',{
            query: 'self',
            max: 50,
            size: 'small',
            wrapEachWith: '<p></p>',
            complete: function() {
                jQuery("#instagram-scroll").smoothDivScroll({
                    autoScrollingMode: "onStart",
                    touchScrolling: true,
                    hotSpotScrolling: false
                });
            }
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 50) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    jQuery('#back-to-top').click(function () {
        jQuery('#back-to-top').tooltip('hide');
        jQuery('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
    jQuery('#back-to-top').tooltip('show');

});


