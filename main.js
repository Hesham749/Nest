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
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("flex");
        select.forEach((li) => {
            li.classList.remove("bg-gray-200");
        });
        li.classList.add("bg-gray-200");
    });
});

$('#cat-search').keyup(function (e) {
    
        select.forEach((li) => {
        if (li.innerText.includes(e.target.value)) {
            li.classList.remove("hidden");
        } else {

            li.classList.add("hidden");
        }})

});
