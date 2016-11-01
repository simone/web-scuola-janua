(function($){
  $.fn.responseamenu = function(options) {
		options = $.extend({}, defaults, options);
						
		function responseamenu(elm,windowWidth){

                if(windowWidth <= options.width){
                    if($('#'+options.dropDownId+'').length == 0) {

                        var menuId = elm.selector;
                        if(options.type == 'dropDown'){

                            var selectMenu = $("<select id='"+options.dropDownId+"'/>").appendTo(elm);

                            if(options.currentPageSelected != true){
                                $("<option />", {
                                    "selected": "selected",
                                    "value"   : "",
                                    "text"    : options.startingText
                                }).appendTo(selectMenu);
                            }

                            var seloption = "";
                            $(menuId+" li a").each(function() {
                                var el = $(this);

                                if(options.currentPageSelected == true){
                                    if( el.attr("href") == $(location).attr('href')){
                                        $("<option />", {
                                            "value"   : el.attr("href"),
                                            "text"    : el.text(),
                                            "selected"    : 'selected'
                                        }).appendTo(selectMenu);
                                    }else{
                                        $("<option />", {
                                            "value"   : el.attr("href"),
                                            "text"    : el.text()
                                        }).appendTo(selectMenu);
                                    }
                                }else{
                                    $("<option />", {
                                        "value"   : el.attr("href"),
                                        "text"    : el.text()
                                    }).appendTo(selectMenu);
                                }

                            });

                            $(menuId+" li").css('display','none');
                            $('#'+options.dropDownId+'').change(function() {
                                window.location = $('#'+options.dropDownId+'').find("option:selected").val();
                            });

                        }else if(options.type == 'slide'){
                            var isOpen = false;
                            $('.'+options.dropDownId+"_slideTrigger").css('display','inline-block');
                            $(menuId+" li").css('display','none');

                            if($('#'+options.dropDownId+"_slide").length == 0){
                                var slideMenu = $("<div id='"+options.dropDownId+"_slide'/>").appendTo(elm);

                                var slideMenuInner = $("<div/>").appendTo(slideMenu);
                                var slideMenuItems = $("<div/>").appendTo(slideMenu);

                                if(options.currentPageSelected != true){
                                    $("<a />", {
                                        "href": "#",
                                        "class":options.dropDownId+"_slideTrigger",
                                        "text"    : options.startingText
                                    }).appendTo(elm);
                                }

                                if(options.currentPageSelected != true){
                                    $("<a />", {
                                        "href": "#",
                                        "class":options.dropDownId+"_slideTrigger",
                                        "text"    : options.startingText
                                    }).appendTo(slideMenuInner);
                                }

                                var seloption = "";
                                $(menuId+" li a").each(function() {
                                    var el = $(this);

                                    if(options.currentPageSelected == true){
                                        if( el.attr("href") == $(location).attr('href')){
                                            $("<a />", {
                                                "href"   : el.attr("href"),
                                                "text"    : el.text()
                                            }).appendTo(slideMenuItems);
                                        }else{
                                            $("<a />", {
                                                "href"   : el.attr("href"),
                                                "text"    : el.text()
                                            }).appendTo(slideMenuItems);
                                        }
                                    }else{
                                    	if (el.attr("href") != '' && el.attr("href") != '#'){
	                                        $("<a />", {
	                                            "href"   : el.attr("href"),
	                                            "text"    : el.text()
	                                        }).appendTo(slideMenuItems);
                                        }
                                    }
                                });


                                $('#'+options.dropDownId+"_slide").css('left','-300px');


                                /*--- remove animation ---*/
                                $('.'+options.dropDownId+"_slideTrigger").unbind('click');

                                /*--- SET UP ANIMATION----*/

                                $('.'+options.dropDownId+"_slideTrigger").click(function() {
                                    if(isOpen == false){
                                        $('#'+options.dropDownId+"_slide").animate({
                                            left: "0"
                                        }, 500, function() {
                                            isOpen = true;
                                        });
                                    }else{
                                        $('#'+options.dropDownId+"_slide").animate({
                                            left: "-300"
                                        }, 500, function() {
                                            isOpen = false;
                                        });
                                    }
                                });
                            }

                        }else{
                            $(menuId).css('display','none');
                            $(menuId).addClass('responseAMenuReady');
                            $('#'+options.dropDownId+'_trigger').remove();
                            var selectMenu = $("<div id='"+options.dropDownId+"_trigger'/>").appendTo($(menuId).parent().parent());
                            $("<span />").appendTo($("#"+options.dropDownId+"_trigger"));
                            $("<span />").appendTo($("#"+options.dropDownId+"_trigger"));
                            $("<span />").appendTo($("#"+options.dropDownId+"_trigger"));

                            $('#'+options.dropDownId+'_trigger').click(function(){
                                $(menuId).slideToggle();
                            });


                        }
                    }


                }else{
                    var menuId = elm.selector;
                    $(menuId).css('display','block');
                    $(menuId+" li").css('display',options.listDisplayType);
                    if($('#'+options.dropDownId+'').length != 0) {
                        $('#'+options.dropDownId+'').remove();
                    }

                    $("#"+options.dropDownId+"_trigger").remove();
                    $(menuId).removeClass('responseAMenuReady');
                    $('.'+options.dropDownId+"_slideTrigger").css('display','none');
                    $('#'+options.dropDownId+"_slide").css('left','-300px');


                }
		}
		
		windowWidth = $(window).width();
		var elm = this;
		responseamenu(elm,windowWidth);
		$(window).resize(function() {
			windowWidth = $(window).width();
			responseamenu(elm,windowWidth);
		});
  };
  
  var defaults = {
      width: 740,
	  listDisplayType : 'block',
	  startingText : 'Select Page',
	  currentPageSelected : true,
	  dropDownId : 'responseamenu',
      type: 'dropDown'
  };  
  
})(jQuery);