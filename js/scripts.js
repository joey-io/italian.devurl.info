$(document).ready(function(){



    var height = ($('.slide').length+1)*$(window).height();
    var top =  $(window).scrollTop();
    var dir = 'up';

    $('body,html').height(height);

    $(window).scroll(function(){

        nt = $(window).scrollTop();

        if ( nt < 0 ) { nt = 0; }

        if ( nt > top ) {
            dir = 'down';
        } else {
            dir = 'up';
        }

        scroll(dir, nt);
        top = nt;

    });

    $('#footer .handle').click(function(e){
        e.preventDefault();
        $('#footer').toggleClass('shown');
    })

});


function scroll(dir, nt) {

    nt = nt;
    var height = $(window).height();

    // Keep positive
    if ( nt <= 0 ) { nt = 0; }

    var tab_index = Math.floor(nt/height)+1;

    // If scrolling down
    if ( dir == 'down' ) {

        //tab_index = parseInt($('.slide.on-stage').attr('tab-index'))+1;

        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').prev().removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').prev().addClass('off-stage');

    // Scrolling up
    } else {

        //tab_index = $('.slide.on-stage').attr('tab-index')-1;

        $('.slide[tab-index="'+tab_index+'"]').next().removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').next().removeClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').removeClass('off-stage');

    }


    doChange();

}

function doChange(){
    var active = $('.slide.on-stage');
    var menu = active.attr('data-menu');
    var url = active.attr('data-url');

    // Main menu
    $('#main-menu a').removeClass('active');
    $('#main-menu a[href="'+url+'"]').addClass('active');

    console.log(url);

    // Set it
    document.title = menu + ' | SPOLETO - My Italian Kitchen';
    //window.history.pushState('object or string', menu, url);
}