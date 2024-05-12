// select
$("[select] li").on("click", function (e) {
    let selected = $(this);
    let currentSelect = selected.closest("[select]");
    let selectField = $(this).closest("[dropdown-parent]").find("[select-field]");
    let formInput = $(this).closest("[dropdown-parent]").find("[form-input]");
    selectField.text(selected.text());
    formInput.val(selected.text());
    $(currentSelect).find("> li").removeClass("selected");
    selected.addClass("selected");
});

//searchField

$("[search-field]").on("keyup", function (e) {
    let noFound = true;
    let searchField = $(this);
    let currentSelect = searchField.closest("[dropdown]").find("[select]");
    let noResultFound = searchField.closest("[dropdown]").find("[no-result]");
    currentSelect.find("li").each(function (i, li) {
        if ($(li).text().includes(searchField.val())) {
            $(li).removeClass("hidden");
            noFound = false;
        } else {
            $(li).addClass("hidden");
        }
        if (noFound) {
            noResultFound.addClass("active");
            currentSelect.addClass("hidden");
        } else {
            noResultFound.removeClass("active");
            currentSelect.removeClass("hidden");
        }
    });
});

// all-categories-dropdown

$("#all-categories").click(function (e) {
    // show
    $("#all-categories-dropdown").toggleClass("show");

    $("#all-categories-icon").toggleClass("fa-chevron-up");

    $("#all-categories-icon").toggleClass("fa-chevron-down");
});

$(document).mouseup(function (e) {
    if (!$("#all-categories").is(e.target) && $("#all-categories").has(e.target).length === 0 && !$("#all-categories-dropdown").is(e.target) && $("#all-categories-dropdown").has(e.target).length === 0) {
        //   hide
        $("#all-categories-dropdown").addClass("show");
        $("#all-categories-icon").addClass("fa-chevron-down");
        // show
        $("#all-categories-dropdown").removeClass("show");
        $("#all-categories-icon").removeClass("fa-chevron-up");
    }
});

// popups
$("body").on("click", "[popup]", function (e) {
    let exit = $(this).find("[exit]");
    if ($(this).is(e.target) || exit.is(e.target)) {
        $(this).fadeOut();
    }
});

if ($(".tt").length > 0) {
    $(".tt").each(function (i, tt) {
        $(tt).owlCarousel({
            animateIn: "fadeIn 0.5s ease-out",
            animateOut: "fadeOut 0.5s ease-out",
            loop: true,
            margin: 0,
            dots: true,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
        });
    });
}
if ($(".bb").length > 0) {
    $(".bb").each(function (i, bb) {
        $(bb).owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
        });
    });
}
if ($(".tm").length > 0) {
    $(".tm").each(function (i, tm) {
        $(tm).owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            items: 10,
            autoplay: false,
        });
    });
}
// tm card background
const bg = ["#f2fce4", "#ecfeeb", "#fefceb", "#fdefea", "#fff2eb", "#fff2ff"];
$(".tm .item").each(function (i, card) {
    const Rn = Math.floor(Math.random() * bg.length);

    $(card).css("background-color", bg[Rn]);
});

// tm carousel nav
$("[prev]").on("click", function (e) {
    $(this).closest(".container").find(".owl-prev").trigger("click");
});
$("[next]").on("click", function (e) {
    $(this).closest(".container").find(".owl-next").trigger("click");
});

// countdown
var countDownDate = new Date("Jul 20, 2024 16:37:52").getTime();

var countDown = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    [...$(".sec")].map(item => {
        $(item).text(seconds);
    });
    [...$(".min")].map(item => {
        $(item).text(minutes);
    });
    [...$(".hours")].map(item => {
        $(item).text(hours);
    });
    [...$(".days")].map(item => {
        $(item).text(days);
    });

    if (timeLeft < 0) {
        clearInterval(countDown);
        [...$(".sec")].map(item => {
            $(item).text("0");
        });
        [...$(".min")].map(item => {
            $(item).text("0");
        });
        [...$(".hours")].map(item => {
            $(item).text("0");
        });
        [...$(".days")].map(item => {
            $(item).text("0");
        });
    }
}, 1000);

// loading
// ! it will change with onload later when using api
setTimeout(() => {
    $("#loading").addClass("hidden");
}, 2000);

// dropdown

$("body").on("click", "[data-dropdown-btn]", function () {
    let btn = $(this);
    let actionType = btn.data("dropdown-btn");
    eval(actionType)(btn);
});
function dropdownToggler(btn) {
    let dropdown = btn.parent().find("[dropdown]");
    dropdown.toggleClass("active");
}

$(document).mouseup(function (e) {
    $("[data-dropdown-btn]").each(function (i) {
        var btn = $(this);
        let dropdown = btn.parent().find("[dropdown]");
        let search = btn.parent().find("[search-field]");
        if (!btn.is(e.target) && btn.has(e.target).length === 0 && !search.is(e.target)) {
            dropdown.removeClass("active");
        }
    });
});
// scroll to top
$("body").on("click", ".scrollTop", function () {
    $(window).scrollTop({top: 0, right: 0, behavior: "smooth"});
});
// scrollTop & bottomNav toggle
$(window).scroll(function () {
    // scrollTop
    if ($(this).scrollTop() > $(".tt").offset().top + 100) {
        $(".scrollTop").addClass("visible opacity-100");
        $(".scrollTop").removeClass("invisible opacity-0");
    } else {
        $(".scrollTop").addClass("invisible opacity-0");
        $(".scrollTop").removeClass("visible opacity-100");
    }
    // bottomNav
    if ($(this).scrollTop() >= $(".tt").offset().top) {
        $(".bottomNav").addClass("fixed top-0 ");
        $(".bottomNav").removeClass("top-[-50px] ");
    } else {
        $(".bottomNav").addClass("top-[-50px] ");
        $(".bottomNav").removeClass("fixed top-0");
    }
});
// wow animation

// tm carousel animation
let tmItems = $(".tm .owl-stage-outer .owl-stage .owl-item");
tmItems.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");

    $(el).attr({
        "data-wow-duration": 0.17 + "s",
        "data-wow-delay": (i * 2) / tmItems.length + "s",
    });
});

// banner animation
let bannerItems = $(".shop-now-section .row");
bannerItems.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({
        "data-wow-duration": 0.7 + "s",
        "data-wow-delay": i / 2 / bannerItems.length + "s",
    });
});
// popularProducts
let popularProducts = $(".popular-products .row ");
popularProducts.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeIn");
    $(el).attr({
        "data-wow-duration": 1 + "s",
        "data-wow-delay": i / 8 / bannerItems.length + "s",
    });
});
// dealsOfDay
let dealsOfDay = $(".deals-of-the-day .row");
dealsOfDay.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration": 1 + "s", "data-wow-delay": i / 8 + "s"});
});
// dailyBest
let dailyBest = $(".daily-best .side-banner ");
dailyBest.addClass("wow fadeIn");
dailyBest.attr({"data-wow-duration": 1 + "s", "data-wow-delay": 1 / 3 + "s"});
//dailyBest nav-bottom
let dailyBestNav = $(".daily-best .slider-arrow");
dailyBestNav.addClass("wow fadeIn");
dailyBestNav.attr({"data-wow-duration": 1 + "s", "data-wow-delay": 0.75 + "s"});
// bb carousel animation
let bbItems = $(".bb .owl-stage-outer .owl-stage .owl-item");
bbItems.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeIn");

    $(el).attr({
        "data-wow-duration": 0.5 + "s",
        "data-wow-delay": (i * 3) / tmItems.length + "s",
    });
});
// topSelling
let topSelling = $(".top-selling .row");
topSelling.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration": 1 + "s", "data-wow-delay": i / 60 + "s"});
});
// footerBanner
let footerBanner = $(".footerBanner");
footerBanner.addClass("wow fadeInUp");
footerBanner.attr({
    "data-wow-duration": 1 + "s",
    "data-wow-delay": 1 / 3 + "s",
});
// Services
let Services = $(".Services");
Services.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration": 1 + "s", "data-wow-delay": i / 7 + "s"});
});
// topFooter
let topFooter = $(".topFooter");
topFooter.find("> div").each(function (i, el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration": 1 + "s", "data-wow-delay": i / 5 + "s"});
});
