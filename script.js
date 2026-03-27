// 🔥 Typing effect for name
const text = "Hi, I'm Sivani 👋";
let index = 0;
const speed = 60;

const typingElement = document.querySelector("header h1");
typingElement.innerText = "";

function typeEffect() {
    if (index < text.length) {
        typingElement.innerText += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();


// ✨ Welcome toast (clean & fast)
window.addEventListener("load", () => {
    const welcome = document.createElement("div");
    welcome.innerText = "Welcome to my portfolio ✨";

    Object.assign(welcome.style, {
        position: "fixed",
        top: "15px",
        right: "15px",
        background: "#4a90e2",
        color: "#fff",
        padding: "10px 15px",
        borderRadius: "8px",
        opacity: "0",
        transition: "0.3s",
        zIndex: "1000"
    });

    document.body.appendChild(welcome);

    setTimeout(() => welcome.style.opacity = "1", 50);
    setTimeout(() => {
        welcome.style.opacity = "0";
        setTimeout(() => welcome.remove(), 300);
    }, 1500);
});


// 🎬 Scroll reveal animation (smooth)
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.5s ease";
});

const reveal = () => {
    const trigger = window.innerHeight * 0.9;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < trigger) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
};

reveal();
window.addEventListener("scroll", reveal);


// 📊 Scroll progress bar
const progressBar = document.createElement("div");

Object.assign(progressBar.style, {
    position: "fixed",
    top: "0",
    left: "0",
    height: "4px",
    background: "#4a90e2",
    width: "0%",
    zIndex: "999"
});

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    progressBar.style.width = progress + "%";
});


// 🖱️ Click ripple effect
document.addEventListener("click", function(e) {
    const ripple = document.createElement("span");

    Object.assign(ripple.style, {
        position: "absolute",
        width: "10px",
        height: "10px",
        background: "#4a90e2",
        borderRadius: "50%",
        left: e.pageX + "px",
        top: e.pageY + "px",
        transform: "scale(0)",
        opacity: "0.6",
        pointerEvents: "none",
        transition: "transform 0.6s, opacity 0.6s"
    });

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.style.transform = "scale(15)";
        ripple.style.opacity = "0";
    }, 10);

    setTimeout(() => ripple.remove(), 600);
});