const readMoreButton = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more");
const readMoreSpan = document.querySelector(".read-more-span");



function showMoreText() {
    moreText.style.display = "block";
    readMoreSpan.textContent = "Read Less";
}

readMoreButton.addEventListener("click", function() {
    if (moreText.style.display === "none") {
        showMoreText();
    } else {
        moreText.style.display = "none";
        readMoreSpan.textContent = "Read More";
    }
});

window.addEventListener("load", function() {
    readMoreSpan.textContent = "Read More";
    moreText.style.display = "none";
});