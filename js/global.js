window.onscroll = function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

// ##########################################

document.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        
        if (section.offsetTop <= scrollPos + 50 && section.offsetTop + section.offsetHeight > scrollPos + 50) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ##########################################

document.addEventListener("DOMContentLoaded", function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.navbar-nav a');
    var body = document.body;
    if (!navbarToggler.classList.contains('collapsed')) {
        navbarToggler.classList.add('collapsed');
    }
    navbarToggler.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
