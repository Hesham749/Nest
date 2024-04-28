// select
$("[select] li").on("click", function (e) {
    let selected = $(this);
    let currentSelect = selected.closest("[select]");
    let selectField = $(this).closest("[dropdownParent]").find("[selectField]");
    let formInput = $(this).closest("[dropdownParent]").find("[formInput]");
    selectField.text(selected.text());
    formInput.val(selected.text());
    $(currentSelect).find("> li").removeClass("bg-gray-200");
    selected.addClass("bg-gray-200");
});

//searchField

$("[searchField]").on("keyup", function (e) {
    let noFound = true;
    let searchField = $(this);
    let currentSelect = searchField.closest("[dropdown]").find("[select]");
    let noResultFound = searchField.closest("[dropdown]").find("[noFound]");
    $(currentSelect)
        .find("li")
        .each(function (i, li) {
            if ($(li).text().includes(searchField.val())) {
                $(li).removeClass("hidden");
                noFound = false;
            } else {
                $(li).addClass("hidden");
            }
            noFound
                ? noResultFound.removeClass("hidden")
                : noResultFound.addClass("hidden");
        });
});

// all-categories-dropdown

$("#all-categories").click(function (e) {
    // show
    $("#all-categories-dropdown").toggleClass("visible opacity-100 top-[100%]");
    $("#all-categories-icon").toggleClass("fa-chevron-up");

    // hide
    $("#all-categories-dropdown").toggleClass("opacity-0 invisible top-28");
    $("#all-categories-icon").toggleClass("fa-chevron-down");
});

$(document).mouseup(function (e) {
    if (
        !$("#all-categories").is(e.target) &&
        $("#all-categories").has(e.target).length === 0
    ) {
        //   hide
        $("#all-categories-dropdown").addClass("opacity-0 invisible top-28");
        $("#all-categories-icon").addClass("fa-chevron-down");
        // show
        $("#all-categories-dropdown").removeClass(
            "visible opacity-100 top-[100%]"
        );
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
            animateIn: "fadeIn",

            // animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            dots: true,
            nav: true,
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
        });
    });
}
if ($(".bb").length > 0) {
    $(".bb").each(function (i, bb) {
        $(bb).owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 4,
            autoplay: true,
            autoplayHoverPause: true,
        });
    });

}
if ($(".tm").length > 0) {
    $(".tm").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 10,
        autoplay: false,
    });

}



// tm carousel nav
$("#prev").on("click", function (e) {
    $(".tm .owl-prev").click();
});
$("#next").on("click", function (e) {
    $(".tm .owl-next").trigger("click");
});

// countdown
var countDownDate = new Date("Jul 20, 2024 16:37:52").getTime();

var countDown = setInterval(function () {
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    [...$(".sec")].map((item) => {
        $(item).text(seconds);
    });
    [...$(".min")].map((item) => {
        $(item).text(minutes);
    });
    [...$(".hours")].map((item) => {
        $(item).text(hours);
    });
    [...$(".days")].map((item) => {
        $(item).text(days);
    });

    if (timeLeft < 0) {
        clearInterval(countDown);
        [...$(".sec")].map((item) => {
            $(item).text("0");
        });
        [...$(".min")].map((item) => {
            $(item).text("0");
        });
        [...$(".hours")].map((item) => {
            $(item).text("0");
        });
        [...$(".days")].map((item) => {
            $(item).text("0");
        });
    }
}, 1000);

// loading
// ! it will change with onload later when using api
setTimeout(() => {
    $("#loading").addClass("hidden");
},2000)

// dropdown

$("body").on("click", "[data-dropdown-btn]", function () {
    let btn = $(this);
    let actionType = btn.data("dropdown-btn");
    eval(actionType)(btn);
});
function dropdownToggler(btn) {
    let dropdown = btn.parent().find("[dropdown]");
    dropdown.toggleClass("hidden flex top-12 top-[100%]");
}

$(document).mouseup(function (e) {
    $("[data-dropdown-btn]").each(function (i) {
        var btn = $(this);
        let dropdown = btn.parent().find("[dropdown]");
        let search = btn.parent().find("[searchField]");
        if (
            !btn.is(e.target) &&
            btn.has(e.target).length === 0 &&
            !search.is(e.target)
        ) {
            dropdown.addClass("hidden top-12");
            dropdown.removeClass("flex top-[100%]");
        }
    });
});
// scroll to top
$('body').on("click",'.scrollTop' , function () {
    console.log("clicked");
    $(window).scrollTop({top: 0, right: 0, behavior: 'smooth'});
})
// scrollTop & bottomNav toggle
$(window).scroll(function () {
    // scrollTop
    if ($(this).scrollTop() > ($('.tt').offset().top)+100) {
        $('.scrollTop').addClass("visible opacity-100");
        $('.scrollTop').removeClass("invisible opacity-0");
    } else {
        $('.scrollTop').addClass("invisible opacity-0");
        $('.scrollTop').removeClass("visible opacity-100");
    }
    // bottomNav
    if ($(this).scrollTop() >= $(".tt").offset().top){
        $('.bottomNav').addClass("fixed top-0 ");
        $('.bottomNav').removeClass("top-[-50px] ");
    }else{
        $('.bottomNav').addClass("top-[-50px] ");
        $('.bottomNav').removeClass("fixed top-0");
    }
})
// wow animation


// tm carousel animation
let tmItems = $('.tm .owl-stage-outer .owl-stage .owl-item');
tmItems.find('> div').each(function (i,el) {
$(el).addClass("wow fadeInUp");

$(el).attr({"data-wow-duration":(.17)+"s", "data-wow-delay":(i*2)/(tmItems.length)+"s"});
})

// banner animation
let bannerItems = $('.banner');
bannerItems.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration":(.7)+"s", "data-wow-delay":(i/2)/(bannerItems.length)+"s"});
})
// popularProducts
let popularProducts = $('.popularProducts');
popularProducts.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeIn");
    $(el).attr({"data-wow-duration":(1)+"s", "data-wow-delay":(i/8)/(bannerItems.length)+"s"});
})
// dealsOfDay
let dealsOfDay = $('.deals-of-day');
dealsOfDay.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration":(1)+"s", "data-wow-delay":(i/9)+"s"});
})
// dailyBest
let dailyBest = $('.dailyBest ');
dailyBest.addClass("wow fadeIn");
dailyBest.attr({"data-wow-duration":(1)+"s", "data-wow-delay":(1/3)+"s"});
// tm carousel animation
let bbItems = $('.bb .owl-stage-outer .owl-stage .owl-item');
bbItems.find('> div').each(function (i,el) {
$(el).addClass("wow fadeIn");

$(el).attr({"data-wow-duration":(.50)+"s", "data-wow-delay":(i*3)/(tmItems.length)+"s"});
})
// topSelling
let topSelling = $('.topSelling');
topSelling.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration":(1)+"s", "data-wow-delay":(i/9)+"s"});
})
// footerBanner
let footerBanner = $('.footerBanner');
footerBanner.addClass("wow fadeInUp");
footerBanner.attr({"data-wow-duration":(1)+"s", "data-wow-delay":(1/3)+"s"});
// Services
let Services = $('.Services');
Services.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration":(1)+"s", "data-wow-delay":(i/7)+"s"});
})
// topFooter
let topFooter = $('.topFooter');
topFooter.find('> div').each(function (i,el) {
    $(el).addClass("wow fadeInUp");
    $(el).attr({"data-wow-duration":(1)+"s", "data-wow-delay":(i/5)+"s"});
})