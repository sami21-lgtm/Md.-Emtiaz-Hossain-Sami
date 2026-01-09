document.addEventListener("DOMContentLoaded", () => {
    // Sticky Navbar
    window.addEventListener("scroll", () => {
        document.querySelector(".navbar").classList.toggle("sticky", window.scrollY > 20);
    });

    // Mobile Menu
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    menuBtn.onclick = () => {
        menu.classList.toggle("active");
        menuBtn.querySelector("i").classList.toggle("active");
    };

    // Typing Animations
    new Typed(".typing", {
        strings: ["Software Engineer", "Ploughing Assistant", "Coordinator", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Ploughing Assistant", "Agri-Coordinator", "Software Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
