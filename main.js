// import {TopSelling} from './components/topSelling/TopSelling.js';
let cat = document.getElementById("category");
let dropdown = document.getElementById("dropdown");
let select = document.querySelectorAll("#select li");
let formInput = document.querySelectorAll("#form-input");
let catSearch = document.querySelectorAll("#cat-search");
formInput.value = cat.innerText;
cat.addEventListener("click", function (e) {
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("flex");
});

select.forEach((li) => {
    li.addEventListener("click", function (e) {
        cat.innerText = li.innerText;
        formInput.value = li.innerText;

        select.forEach((li) => {
            li.classList.remove("bg-gray-200");
        });
        li.classList.add("bg-gray-200");
    });
});

$("#cat-search").keyup(function (e) {
    let noFound = true;
    select.forEach((li) => {
        if (li.innerText.includes(e.target.value)) {
            li.classList.remove("hidden");
            noFound = false;
        } else {
            li.classList.add("hidden");
        }
    });
    if (noFound) {
        $("#no-result").removeClass("hidden");
    } else {
        $("#no-result").addClass("hidden");
    }
});

$("#location-input")[0].value = $("#location")[0].innerText;
[...$("#location-select li")].forEach((li) => {
    li.addEventListener("click", function (e) {
        $("#location")[0].innerText = li.innerText;
        $("#location-input")[0].value = li.innerText;

        [...$("#location-select li")].forEach((li) => {
            li.classList.remove("bg-gray-200");
        });
        li.classList.add("bg-gray-200");
    });
});

$("#location").click(function (e) {
    $("#location-dropdown").toggleClass("hidden");
    $("#location-dropdown").toggleClass("flex");
});
$("#location-search").keyup(function (e) {
    let noFound = true;
    [...$("#location-select li")].forEach((li) => {
        if (li.innerText.includes(e.target.value)) {
            li.classList.remove("hidden");
            noFound = false;
        } else {
            li.classList.add("hidden");
        }
    });
    if (noFound) {
        $("#location-no-result").removeClass("hidden");
    } else {
        $("#location-no-result").addClass("hidden");
    }
});

console.log($("#location-search"));
console.log(document.getElementById("location-search"));

// hiding menus
$(document).click(function (e) {
    if (e.target != $("#location")[0] && e.target != $("#location-search")[0]) {
        $("#location-dropdown").addClass("hidden");
        $("#location-dropdown").removeClass("flex");
    }
    if (e.target != $("#category")[0] && e.target != $("#cat-search")[0]) {
        $("#dropdown").addClass("hidden");
        $("#dropdown").removeClass("flex");
    }
    if (
        e.target != $("#all-categories")[0] &&
        e.target != $("#all-categories-icon")[0] &&
        e.target != $("#all-categories-fIcon")[0]
    ) {
        // hide
        $("#all-categories-dropdown").addClass("opacity-0 invisible top-28");
        $("#all-categories-icon").addClass("fa-chevron-down");
        // show
        $("#all-categories-dropdown").removeClass(
            "visible opacity-100 top-[100%]"
        );
        $("#all-categories-icon").removeClass("fa-chevron-up");
    }
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

$(".tt").owlCarousel({
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

$(".tm").owlCarousel({
    loop: true,
    margin: 10,

    nav: false,
    items: 10,
    autoplay: false,

});
$(".bb").owlCarousel({
    loop: true,
    margin: 10,

    nav: true,
    items: 4,
    autoplay: true,
    autoplayHoverPause: true,
});
// tm carousel nav
$("#prev")[0].addEventListener('click', function (e) {
    $(".tm .owl-prev")[0].click();
});
$("#next")[0].addEventListener('click', function (e) {
    $(".tm .owl-next")[0].click();
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
        $(item)[0].innerText = seconds;
    });
    [...$(".min")].map((item) => {
        $(item)[0].innerText = minutes;
    });
    [...$(".hours")].map((item) => {
        $(item)[0].innerText = hours;
    });
    [...$(".days")].map((item) => {
        $(item)[0].innerText = days;
    });

    if (timeLeft < 0) {
        clearInterval(countDown);
        [...$(".sec")].map((item) => {
            $(item)[0].innerText = "0";
        });
        [...$(".min")].map((item) => {
            $(item)[0].innerText = "0";
        });
        [...$(".hours")].map((item) => {
            $(item)[0].innerText = "0";
        });
        [...$(".days")].map((item) => {
            $(item)[0].innerText = "0";
        });
    }
}, 1000);
