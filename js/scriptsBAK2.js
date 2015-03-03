$(document).ready(function(){

    $(window).scrollTop(0);
    var top = 0;
    var offset = ($('.slide').length+1)*$(window).height()+500;
    var dir = 'up';
    $('body, html').height(offset);


    $(window).scroll(function(){

        nt = $(window).scrollTop();

        console.log(nt);

        if ( nt < 0 ) {
            nt = 0;
        }
        if ( nt > top ) {
            dir = 'down';
        } else {
            dir = 'up';
        }


        if ( nt >= top + $(window).height() || nt <= top-$(window).height() ) {
            slide(dir);
            top = nt;
        }





    })

});


function slide(dir) {

    element = $('.on-stage');

    element.each(function(){

        // Remove class
        $(this).removeClass('on-stage');

        if ( dir == 'down' ) {

            // If not last child...
            if ( $(this).index() < $(this).parents('section').find('.slide').length-1 ) {

                // Move this one
                $(this).addClass($(this).attr('data-to'));

                // Slide in next element
                $(this).next().removeClass('offstage-right').removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom').addClass('on-stage');

            // If last child...
            } else {

                // Move parent
                $(this).parents('section').addClass($(this).parents('section').attr('data-to'));

                // Slide in next parent
                $(this).parents('section').next().removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom');

                // Add Class to first one
                $(this).parents('section').next().find('.slide:first').addClass('on-stage');

           }

        } else {

            // If not first child...
            if ( $(this).index() > 0 ) {

                // Move this one out
                $(this).addClass($(this).attr('data-from'));

                // Move in prev one
                $(this).prev().removeClass('offstage-right').removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom').addClass('on-stage');

            // If first child
            } else {

                // Move parent
                $(this).parents('section').addClass($(this).parents('section').attr('data-from'));

                // Slide in next parent
                $(this).parents('section').prev().removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom');

                // Add Class to first one
                $(this).parents('section').prev().find('.slide:last').addClass('on-stage');


            }

        }
    });
    /*
	// scroll up
    if( delta > threshold ) {

		// If not the first slide, animate the slides
		if (element.index() > 0 ) {

			// Move this
			element.addClass(element.attr('data-from')).removeClass('on-stage');

			// Show the next one
    		element.prev().removeClass('offstage-right').removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom').addClass('on-stage');

       		// Set url
       		var URL = element.prev().attr('data-url');

       	// If first slide, animate the section
       	} else {

       		// Move the parent
       		element.parents('section').addClass(element.parents().attr('data-from'));

       		// Show the next parent
       		element.parents('section').prev().removeClass('offstage-right').removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom');

       		// Set url
       		var URL = element.parents('section').prev().find('.slide:last').attr('data-url');
       	}

       	//$(window).scrollTop(threshold);

    // scroll down
    } else if ( delta < -1*threshold ) {


   		// if not last item, animate slides
   		if ( element.index() < element.parents('section').find('.slide').length-1 ) {

   			// Move this
   			element.addClass(element.attr('data-to')).removeClass('on-stage');

   			// Show the next one
       		element.next().removeClass('offstage-right').removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom').addClass('on-stage');

       		// Set URL
       		var URL = element.next().attr('data-url');

       	// if last item, animate next to data-to, and animate parent to data-from
       	} else {

       		// Move parent
       		element.parents('section').addClass(element.parents('section').attr('data-to'));

       		// Show next parent
       		element.parents('section').next().removeClass('offstage-left').removeClass('offstage-top').removeClass('offstage-bottom');

       		// Set URL
       		var URL = element.parents('section').next().find('.slide:first').attr('data-url');
       	}

    }

    if ( URL ) {
    	// Update URL
    	//updateURL(URL, 'Test', element);
    }*/

    //$(window).scrollTop(jQuery(window).height()/2);


}

function updateURL(url, title, element){

	window.history.pushState('object or string', title, '/' + url);
	$(window).scrollTop(0);

}