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

// ##########################################

function toggleProgramacao(element) {
    const containerProgramacao = element.nextElementSibling;
    const seta = element.querySelector('.seta');

    // Alterna a exibição da programação com uma animação suave
    if (containerProgramacao.style.maxHeight === '0px' || !containerProgramacao.style.maxHeight) {
        containerProgramacao.style.maxHeight = containerProgramacao.scrollHeight + 'px';
        seta.classList.add('expandido');
    } else {
        containerProgramacao.style.maxHeight = '0px';
        seta.classList.remove('expandido');
    }
}

// Ao carregar a página, defina o primeiro dia como expandido
window.addEventListener('DOMContentLoaded', () => {
    const primeiroDia = document.querySelector('.container-dia .container-programacao');
    const primeiraSeta = document.querySelector('.container-dia .seta');
    if (primeiroDia) {
        primeiroDia.style.maxHeight = primeiroDia.scrollHeight + 'px';
        primeiraSeta.classList.add('expandido');
    }
});


