// make h2 text color lightblue
const elements = document.getElementsByTagName("h2");
for (const h2 of elements) {
    h2.style.color = "lightblue";
};

// backpack section bg color tomato
document.getElementById("backpack").style.backgroundColor = "tomato";

// set border radius 30px of all card
const cards = document.getElementsByClassName("card");
for (const card of cards) {
    card.style.borderRadius = "30px";
};

// click submit btn to console.log
function carouselBtn() {
    console.log("Submit Your Email!");
};

// click to remove card from the website
const pandaBtnBuyNow = document.getElementsByClassName("panda-btn");
for (const btn of pandaBtnBuyNow) {
    btn.addEventListener("click", function (event) {
        event.target.parentNode.parentNode.style.display = "none";
    })
};

// write "email" to active submit btn
document.getElementById("exampleInputEmail1").addEventListener("keyup", function (event) {
    const text = event.target.value;
    const submitBtn = document.getElementById("submit-btn");
    if (text === "email") {
        submitBtn.removeAttribute("disabled");
    }
    else {
        submitBtn.setAttribute("disabled", true);
    }
});

// mouseenter to change image
const images = document.getElementsByClassName("card-img-top");
for (const image of images) {
    image.addEventListener("mouseenter", function (event) {
        // event.target.parentNode.removeChild(event.target);

        // append img depend on event.target
        const img = document.createElement("img");
        img.setAttribute("src", "images/banner-images/headphone.png");
        img.classList.add("card-img-top");
        event.target.parentNode.appendChild(img);

        // then, remove event.target
        event.target.parentNode.removeChild(event.target);
    })
};

// double click to change bg color
document.getElementById("subscribe").addEventListener("dblclick", function (event) {
    event.target.style.backgroundColor = "blue";
});