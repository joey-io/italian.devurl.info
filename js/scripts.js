$(document).ready(function(){

   //$('body').height($(window).height()*$('.slide').length);


    $('#footer .handle').click(function(e){
        e.preventDefault();
        $('#footer').toggleClass('shown');
    })

    $('#main-menu a').click(function(e){
        e.preventDefault();
        var page = $(this).attr('href').replace('/', '');
        preScroll(page);
    })




    $(window).mousewheel(_.debounce(function(event, delta, deltaY){
        event.preventDefault();

        if ( delta < 0 ) {
            scroll('down');
        } else {
            scroll('up');
        }

    }, 100 ));

    $('#footer-menu a').click(function(e){
        e.preventDefault();
        $('body').attr('data-page', $(this).attr('data-index'));
        scroll('force');
        $('#footer').removeClass('shown');
    })

    $('.arrow a').click(function(e){
        e.preventDefault();
        scroll('down');
    });

    $('.panel').each(function(){
        if ( $(this).find('>div').height() > $(this).height()*.7 ) {
            $(this).addClass('extended');
        }
    })

    $('.showmore').click(function(){
        $(this).parents('.panel').toggleClass('shownmore');
    })

});


function scroll(dir) {

    var nt = parseInt($('body').attr('data-page'));
    var tab_index = parseInt(nt)+1;

    if ( dir == 'up' ) { tab_index = parseInt(nt)-1; }
    if ( dir == 'force' ) { tab_index = parseInt(nt); }
    if ( nt < 1 ) { nt = 1; }
    if ( tab_index < 1 ) { tab_index = 1; }
    if ( nt > 13 ) { nt = 13; }
    if ( tab_index > 13 ) { tab_index = 13; }


    console.log(nt + ':' + dir);

    // If scrolling down
    if ( dir == 'down' ) {

        $('.slide[tab-index="'+tab_index+'"]').prev().removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"]').prev().addClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');

    // Scrolling up
    } else if ( dir == 'up' ) {

        $('.slide[tab-index="'+tab_index+'"] ~ .slide').removeClass('on-stage');
        $('.slide[tab-index="'+tab_index+'"] ~ .slide').removeClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').removeClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');

    } else {

        $('.slide').removeClass('on-stage');
        $('.slide').removeClass('off-stage');
        $('.slide[tab-index="'+tab_index+'"]').addClass('on-stage');

    }

    $('body').attr('data-page', tab_index);

    doChange();

}

function doChange(){
    var tab_index = $('body').attr('data-page');
    var active = $('.slide[tab-index="'+tab_index+'"]');
    var menu = active.attr('data-menu');
    var url = active.attr('data-url');

    // Main menu
    $('#main-menu a').removeClass('active');
    $('#main-menu a[href="'+url+'"]').addClass('active');

    // Set it
    if ( window.location.pathname != url ) {
        document.title = menu + ' | SPOLETO - My Italian Kitchen';
        window.history.pushState('object or string', menu, url);
    }

}

function preScroll(page){
    var tab_index = jQuery('.slide[data-url="/'+page+'"]:first').attr('tab-index');

    $('body').attr('data-page', tab_index);

    scroll('force');
}


$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            scroll('up');
            break;

        case 38: // up
            scroll('up');
            break;

        case 39: // right
            scroll('down');
            break;

        case 40: // down
            scroll('down');
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});