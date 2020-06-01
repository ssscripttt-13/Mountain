var scrolled;
window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 50) {
        $(".header").css({ "background-color": "white" });
        $(".header").css({ "border-bottom": "1px solid #000" });
        $(".logo").css({ "color": "#000" });
        $(".nav").css({ "color": "#000" });
        $(".number").css({ "color": "#000" });
    }
    if (50 > scrolled) {
        $(".header").css({ "background-color": "transparent" });
        $(".header").css({ "border-bottom": "1px solid transparent" });
        $(".logo").css({ "color": "#FCFCFC" });
        $(".nav").css({ "color": "#FCFCFC" });
        $(".number").css({ "color": "#FCFCFC" });
    }
};
