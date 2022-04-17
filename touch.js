const topHalf = document.getElementById("top-half");

topHalf.addEventListener("touchstart", e => {
    //Prevent Click Event
    e.preventDefault();
    console.log("Touches", e.touches.length);
    console.log("Targets", e.targetTouches.length);
    console.log("Changes", e.changedTouches.length);
});

document.addEventListener("touchstart", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
        dot.id = touch.identifier;
        document.body.append(dot);
    });
});

document.addEventListener("touchmove", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
    });
});

document.addEventListener("touchend", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.remove();
    });
});