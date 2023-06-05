const toggleModeBtn = document.querySelector('#toggle-mode');
const blob = document.querySelector("#blob");
const modeCircle = document.querySelector("#mode-circle");
const horizontalText = document.querySelector(".horizontal-text");

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const blobRect = blob.getBoundingClientRect();
const blobSizes = {
    width: blobRect.width,
    height: blobRect.height
};

const move = (event) => {
    let mouseX = event.pageX - blobSizes.width / 2;
    let mouseY = event.pageY - blobSizes.height / 2;
    document.body.style.setProperty(`--blob-x`, mouseX);
    document.body.style.setProperty(`--blob-y`, mouseY);
};

const resize = () => {
    const rect = blob.getBoundingClientRect();
    blobSizes.width = rect.width;
    blobSizes.height = rect.height;
};

let isDark = false;

const toggleMode = (event) => {
    event.stopPropagation();
    isDark = !isDark;
    let morphSVG = isDark ? moon : '' ;

    let animateTo = isDark ? {
        duration: 2,
        scale: 50,
        translateX: 0,
        translateY: 0,
    } : {
        duration: 1,
        scale: 0,
        translate: '-50%, -50%',
    };

    gsap.to(modeCircle, Object.assign({}, animateTo));

    // Afficher la forme sun sans morphing
    if (isDark) {
        // sun.style.display = "block";
        // moon.style.display = "none";
        horizontalText.style.color = "black";
        moon.style.display = "none";
        sun.style.display = "block";
    }
    else {
        horizontalText.style.color = "white";
        moon.style.display = "block";
        sun.style.display = "none";
    }
};

window.addEventListener("mousemove", move);
window.addEventListener("resize", resize);
toggleModeBtn.addEventListener('click', toggleMode);
