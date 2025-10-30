"use strict";

import { gsap } from "gsap";

const quitButton = document.querySelector('.header__quit img');
const arrowButtons = document.querySelectorAll('.header__arrow img');
const arrowButtonsDiv = document.querySelectorAll('.header__arrow');
const navButton = document.querySelector('.intro__burger img');
const headerSections = document.querySelector('.header__sections');
const caseDiv = document.querySelector('.header__caseDiv');
const projectsDiv = document.querySelector('.header__projectsDiv');

const aboutmeButton = document.querySelector('.header__buttons--aboutme');
const caseButton = document.querySelector('.header__buttons--case');
const projectsButton = document.querySelector('.header__buttons--projects');
const creditsButton = document.querySelector('.header__buttons--credits');;

const janusButton = document.querySelector('.header__janus');
const dataplayButton = document.querySelector('.header__mcdollars');
const janusSection = document.querySelector('.case__display--janus');
const mcdollarsSection = document.querySelector('.case__display--dataplay');

const janusProjectButton = document.querySelector('.header__projects--janus');
const dataplayProjectButton = document.querySelector('.header__projects--dataplay');
const lolProjectButton = document.querySelector('.header__projects--lol');
const decembreProjectButton = document.querySelector('.header__projects--decembre');
const designfictionProjectButton = document.querySelector('.header__projects--designfiction');
const grindProjectButton = document.querySelector('.header__projects--grind');
const janusProject = document.querySelector('.projects__display--janus');
const dataplayProject = document.querySelector('.projects__display--mcdollars');
const lolProject = document.querySelector('.projects__display--lol');
const decembreProject = document.querySelector('.projects__display--decembre');
const designfictionProject = document.querySelector('.projects__display--designfiction');
const grindProject = document.querySelector('.projects__display--grind');

const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const aboutme = document.querySelector('.aboutme');
const caseStudy = document.querySelector('.case');
const projects = document.querySelector('.projects');
const credits = document.querySelector('.credits');

const logoImage = document.querySelector('.aboutme__image img');
var timeOut = 2;

const buttons = document.querySelectorAll('header li');
buttons.forEach(function (button) {
    button.addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        })

        button.classList.add('active');
    })

    arrowButtons.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            })
        })
    })
})

/*
var introDate = document.querySelector('.intro__fulldate');
var introHour = document.querySelector('.intro__hour');
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const hour = new Date().getHours();
const minutes = new Date().getMinutes();
*/

intro.classList.remove("hidden");

if (window.innerWidth < 1200) {

    quitButton.addEventListener('click', function() {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');

        headerSections.classList.remove('hidden');
        caseDiv.classList.add('hidden');
    });

    navButton.addEventListener('click', function() {
        header.classList.remove('hidden');
        navButton.classList.add('hidden');

        caseDiv.classList.add('hidden');
        headerSections.classList.remove('hidden');
        projectsDiv.classList.add('hidden');
    })
}

aboutmeButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    aboutme.classList.remove('hidden');

    intro.classList.add('hidden');
    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    projects.classList.add('hidden');
    credits.classList.add('hidden');

    setInterval(() => {
        logoImage.setAttribute('src', './assets/images/logo-' + timeOut + '.png');
        logoImage.setAttribute('srcset', './assets/images/@2x/logo-' + timeOut + '@2x.png');
        timeOut = timeOut + 1;
        if(timeOut > 7) {
            timeOut = 1;
        }
    }, 5000);
})

caseButton.addEventListener('click', function() {
    headerSections.classList.add('hidden');
    caseDiv.classList.remove('hidden');
    caseDiv.classList.remove('hidden');

    gsap.from(buttons, {x: -10000, duration: 0.5, ease: "power2.out"});
})

janusButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    caseStudy.classList.remove('hidden');
    janusSection.classList.remove("hidden");
    mcdollarsSection.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.add('hidden');
    credits.classList.add('hidden');
})

dataplayButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    caseStudy.classList.remove('hidden');
    janusSection.classList.add("hidden");
    mcdollarsSection.classList.remove("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.add('hidden');
    credits.classList.add('hidden');
})

projectsButton.addEventListener('click', function() {
    headerSections.classList.add('hidden');
    projectsDiv.classList.remove('hidden');

    gsap.from(buttons, {x: -10000, duration: 0.5, ease: "power2.out"});
})

janusProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.remove("hidden");
    dataplayProject.classList.add("hidden");
    lolProject.classList.add("hidden");
    decembreProject.classList.add("hidden");
    designfictionProject.classList.add("hidden");
    grindProject.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    credits.classList.add('hidden');
})

dataplayProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.add("hidden");
    dataplayProject.classList.remove("hidden");
    lolProject.classList.add("hidden");
    decembreProject.classList.add("hidden");
    designfictionProject.classList.add("hidden");
    grindProject.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    credits.classList.add('hidden');
})

lolProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.add("hidden");
    dataplayProject.classList.add("hidden");
    lolProject.classList.remove("hidden");
    decembreProject.classList.add("hidden");
    designfictionProject.classList.add("hidden");
    grindProject.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    //credits.classList.add('hidden');
})

decembreProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }
    
    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.add("hidden");
    dataplayProject.classList.add("hidden");
    lolProject.classList.add("hidden");
    decembreProject.classList.remove("hidden");
    designfictionProject.classList.add("hidden");
    grindProject.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    credits.classList.add('hidden');
})

designfictionProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }
    
    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.add("hidden");
    dataplayProject.classList.add("hidden");
    lolProject.classList.add("hidden");
    decembreProject.classList.add("hidden");
    designfictionProject.classList.remove("hidden");
    grindProject.classList.add("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    credits.classList.add('hidden');
})

grindProjectButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }
    
    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    janusProject.classList.add("hidden");
    dataplayProject.classList.add("hidden");
    lolProject.classList.add("hidden");
    decembreProject.classList.add("hidden");
    designfictionProject.classList.add("hidden");
    grindProject.classList.remove("hidden");

    intro.classList.add('hidden');
    aboutme.classList.add('hidden');
    projects.classList.remove('hidden');
    credits.classList.add('hidden');
})

creditsButton.addEventListener('click', function() {
    if (window.innerWidth < 1200) {
        header.classList.add('hidden');
        navButton.classList.remove('hidden');
    }

    aboutme.classList.add('hidden');

    intro.classList.add('hidden');
    caseStudy.classList.add('hidden');
    caseDiv.classList.add('hidden');
    projects.classList.add('hidden');
    credits.classList.remove('hidden');
})

//introDate.textContent = day + '/' + month + '/' + year;
//introHour.textContent = hour + ':' + minutes;

if (window.innerWidth >= 1200) {
    header.classList.remove("hidden");

    arrowButtonsDiv.forEach(function(arrowDiv) {
        arrowDiv.classList.remove('hidden');
    });

    arrowButtons.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            headerSections.classList.remove('hidden');
            caseDiv.classList.add('hidden');
            projectsDiv.classList.add('hidden');
        });
    });
}