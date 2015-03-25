var on = true;
var myVar = setInterval(function () { if (on) { slides() } on = true; }, 5000);

function slides(i) {
    document.getElementsByTagName("span")[1].style.width = "0px";
    document.getElementsByTagName("span")[2].style.width = "100%";
    var slide = document.getElementsByTagName("span")[0];
    document.getElementById("slide").appendChild(slide);
    if (i) {
        on = false;
    }
}
function back_slide(i) {
    document.getElementsByTagName("span")[1].style.width = "0px";
    document.getElementsByTagName("span")[0].style.width = "100%";
    var slide = document.getElementsByTagName("span")[4];
    var slide2 = document.getElementsByTagName("span")[0];
    document.getElementById("slide").insertBefore(slide, slide2);
    if (i) {
        on = false;
    }
}
function is_touch_device() {
    return !!('ontouchstart' in window)
        || !!('onmsgesturechange' in window);
};

$(document).ready(function () {
    if (is_touch_device()) {
        $('p').unbind('mousenter mouseleave touchend touchstart');
        $('p').bind('touchstart', function () {
            $('p').removeClass('hover');
            $(this).addClass('hover');
        });
    }
});