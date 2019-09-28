$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
})

$(".card").hover(function () {
    $(this).toggleClass("skillsItemsBorder");
})

$(".contactBox").hover(function () {
    $(this).toggleClass("contactBoxColor");
    $(".contactHeading", this).toggleClass("contactBoxColor");
    $(".contentText", this).toggleClass("contactBoxColor");
    $(".contactImgs", this).fadeToggle(0);
})