// scripts.js

let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    const nav = document.getElementById("nav-header");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        nav.style.top = "0";
        nav.style.opacity = "1";
    } else if (scrollTop < lastScrollTop && scrollTop <= 100) {
        nav.style.top = "-60px";
        nav.style.opacity = "0";
    }
    lastScrollTop = scrollTop;
});
