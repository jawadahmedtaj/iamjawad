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

// $(".subHeadingStop").hover(function () {
//         $(this).fadeToggle("slow", function () {
//             $(this).css("display", "none");
//             $(this).removeClass("d-inline-flex");
//             $(this).removeClass("d-flex");
//         });
//     },
//     function () {
//         $(this).fadeToggle("slow", function () {
//             $(this).addClass("d-inline-flex");
//             $(this).addClass("d-flex");
//         })
//     })