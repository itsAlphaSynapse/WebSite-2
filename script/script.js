// ================================================= NAVIGATION BAR ======================================================== //

const nav = document.querySelector(".nav")

let open = false;

nav.children[0].children[2].addEventListener("click", () => {
    if (open === false) {
        open = true;
        nav.children[0].children[1].style.maxHeight = "400px"
        nav.children[0].children[2].children[0].style.border = "1px solid transparent"
        nav.children[0].children[2].style.setProperty("--transform1", "rotate(40deg)")
        nav.children[0].children[2].style.setProperty("--transform2", "rotate(-40deg)")
        nav.children[0].children[2].style.setProperty("--top", "0px")
        nav.children[0].children[2].style.setProperty("--bottom", "0px")
    } else if (open === true) {
        open = false;
        nav.children[0].children[1].style.maxHeight = "0px"
        nav.children[0].children[2].children[0].style.border = "1px solid white"
        nav.children[0].children[2].style.setProperty("--transform1", "rotate(0deg)")
        nav.children[0].children[2].style.setProperty("--transform2", "rotate(0deg)")
        nav.children[0].children[2].style.setProperty("--top", "-10px")
        nav.children[0].children[2].style.setProperty("--bottom", "-10px")
    }
})
nav.children[0].children[2].style.setProperty("--top", "-10px")
nav.children[0].children[2].style.setProperty("--bottom", "-10px")


window.addEventListener("scroll", () => {
    if (nav.offsetTop === 0) {
        nav.style.background = "#e7272d"
        nav.children[0].children[0].children[0].children[0].style.width = "60px"
        nav.children[0].children[1].style.background = "#e7272d"
    } else {
        nav.style.background = "black"
        nav.children[0].children[0].children[0].children[0].style.width = "50px"
        nav.children[0].children[1].style.background = "black"
    }
})

// ================================================= REVIEW SECTION ======================================================== //

const slides = document.querySelectorAll(".slide")

let slideCounter = 0;

slides.forEach(
    (key, index) => {
        key.style.left = `${index * 100}%`
    }
);

const prev = () => {
    if (slideCounter > 0) {
        slideCounter--;
        slideImage();
    } else {
        slideCounter = slides.length - 1
        slideImage();
    }
}

const next = () => {
    if (slideCounter < (slides.length - 1)) {
        slideCounter++;
        slideImage();
    } else {
        slideCounter = 0
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (key, index) => {
            key.style.transform = `translateX(-${slideCounter * 100}%)`
        }
    );
}

setInterval(() => {
    next();
}, 8000);

// ================================================= VIDEO SECTION ======================================================== //

const video = document.querySelector(".video")

const videoSection = document.querySelector(".videoSection")

let videoOpen = false;

video.children[0].children[1].addEventListener("click", () => {
    video.style.display = "flex"
}, true)
video.addEventListener("click", () => [
    video.style.display = "none",
    video.children[0].children[1].pause()
], true)

videoSection.children[0].addEventListener("click", () => {
    video.style.display = "flex"
})

video.children[0].children[0].addEventListener("click", () => {
    video.style.display = "none",
        video.children[0].children[1].pause();
})