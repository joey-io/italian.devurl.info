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

    $('#main-menu a').click(function(e){
        e.preventDefault();
        var page = $(this).attr('href').replace('/', '');
        preScroll(page);
    })

});


function scroll(dir, nt, index) {

    nt = nt;
    var height = $(window).height();

    // Keep positive
    if ( nt <= 0 ) { nt = 0; }

    var tab_index = Math.floor(nt/height)+1;

    console.log(tab_index);
    console.log(dir);

    // If scrolling down
    if ( dir == 'down' ) {

        //tab_index = parseInt($('.slide.on-stage').attr('tab-index'))+1;
        $('.slide[tab-index="'+tab_index+'"]').prev().removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').prev().addClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');

    // Scrolling up
    } else {

        //tab_index = $('.slide.on-stage').attr('tab-index')-1;

        $('.slide[tab-index="'+tab_index+'"] ~ .slide').removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"] ~ .slide').removeClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').removeClass('off-stage');

    }


    doChange(tab_index);

}

function doChange(tab_index){
    var active = $('.slide[tab-index="'+tab_index+'"]');
    var menu = active.attr('data-menu');
    var url = active.attr('data-url');

    console.log(url);

    // Main menu
    $('#main-menu a').removeClass('active');
    $('#main-menu a[href="'+url+'"]').addClass('active');

    // Set it
    document.title = menu + ' | SPOLETO - My Italian Kitchen';
    window.history.pushState('object or string', menu, url);
}

function preScroll(page){
    var nt = (jQuery('.slide[data-url="/'+page+'"]:first').attr('tab-index')-1)*jQuery(window).height();
    var dir = 'down';
    if ( jQuery('.slide[data-url="/'+page+'"]:first').attr('tab-index') > $('body').attr('data-page') ) {
        dir = 'down';
    } else {
        dir = 'up';
    }

    $('body').attr('data-page', jQuery('.slide[data-url="/'+page+'"]').attr('tab-index'));

    console.log(nt);

    $('html, body').stop().animate({
        'scrollTop' : nt
    }, 1, function(){
        scroll(dir, nt-jQuery(window).height()*2);
    });

}