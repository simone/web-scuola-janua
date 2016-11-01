// Custom Template JavaScript Document

jQuery(document).ready(function() {
	jQuery('#menu-main-menu').responseamenu({
		width : 768,
		listDisplayType : 'inline-block',
		startingText : 'Menu',
		currentPageSelected : false,
		dropDownId : 'responseamenu',
		type : 'slide'
	});
	
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

});


