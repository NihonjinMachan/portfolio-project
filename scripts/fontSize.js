function fontResize(){
    var perc = parseInt($(window).width())/57;
    $('body').css('font-size',perc);
}

$(document).ready(function (){
    if(parseInt($(window).width()) < 500){
        fontResize();
    }
});

$(window).resize(function () {
    if(parseInt($(window).width()) < 500){
        fontResize();
    }
    else{
        location.reload();
    }
});