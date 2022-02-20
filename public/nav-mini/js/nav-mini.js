$(() => {
    NavControl();
})

$(".nav-open-mini").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    setNavOpen();

    var navbutton = $(".nav-open-mini")[0];
    $(navbutton).css("display", "none");
    navbutton = $(".nav-close-mini")[0];
    $(navbutton).css("display", "inline-block");

    var navbuttonicon = $(".bi-arrow-down")[0];
    $(navbuttonicon).removeClass("bi-arrow-down");
    $(navbuttonicon).addClass("bi-arrow-up");

    var navmain = $(".nav-main-close-mini")[0];
    $(navmain).removeClass("nav-main-close-mini");
    $(navmain).addClass("nav-main-open-mini");

    localStorage.setItem("nav-mini", "open");
});

$(".nav-close-mini").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    setNavClose();

    var navbutton = $(".nav-close-mini")[0];
    $(navbutton).css("display", "none");
    navbutton = $(".nav-open-mini")[0];
    $(navbutton).css("display", "inline-block");

    var navbuttonicon = $(".bi-arrow-up")[0];
    $(navbuttonicon).removeClass("bi-arrow-up");
    $(navbuttonicon).addClass("bi-arrow-down");

    var navmain = $(".nav-main-open-mini")[0];
    $(navmain).removeClass("nav-main-open-mini");
    $(navmain).addClass("nav-main-close-mini");

    localStorage.setItem("nav-mini", "close");
});

$(".navgroup-control-mini").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    var navgroupcontrol = $(this)[0];
    var ul = $(navgroupcontrol).next("ul")[0];
    if(!$(ul).hasClass("mini-show"))
        $(ul).addClass("mini-show")
        else
        $(ul).removeClass("mini-show")
    debugger
});

let NavControl = () => {
    if (localStorage.getItem("nav-mini") == "open")
    {
        $(".nav-open-mini").click();
        setNavOpen();
    }
    if (localStorage.getItem("nav-mini") == "close")
    {
        setNavClose();
    }

}

let setNavOpen = () => {
    var nav = $(".nav-main-mini")[0];
    if(!$(nav).hasClass("mini-open"))
    $(nav).addClass("mini-open");
    if($(nav).hasClass("mini-close"))
    $(nav).removeClass("mini-close");
}
let setNavClose = () => {
    var nav = $(".nav-main-mini")[0];
    if(!$(nav).hasClass("mini-close"))
    $(nav).addClass("mini-close");
    if($(nav).hasClass("mini-open"))
    $(nav).removeClass("mini-open");
}

