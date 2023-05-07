const expandables = document.querySelectorAll(".cursor-expandable");

const cursor = document.querySelector("[data-cursor]");

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursor.style.display = "block";

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 200, fill: "forwards" });
});

expandables.forEach(element => {
    element.addEventListener("mouseover", function() {
        cursorDot.animate({
            width: "10px",
            height: "10px"
        }, { duration: 200, fill: "forwards" });
    });
});

expandables.forEach(element => {
    element.addEventListener("mouseleave", function() {
        cursorDot.animate({
            width: "5px",
            height: "5px"
        }, { duration: 100, fill: "forwards" });
    });
});

document.addEventListener("mouseout", function() {
    cursor.style.display = "none";
});