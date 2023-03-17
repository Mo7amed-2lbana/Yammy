let cls = $("#ev .close");
let shw = $("#ev .show");

cls.click(function(){
    $("#menu").animate({left:-$("#menu .col-9").outerWidth(true)},500);
    cls.addClass("d-none");
    shw.removeClass("d-none");
});
shw.click(function(){
    $("#menu").animate({left:0},500)
    shw.addClass("d-none");
    cls.removeClass("d-none");
});
