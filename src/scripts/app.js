"use strict";

const quitButton = document.querySelector('.header__quit img');
const navButton = document.querySelector('.intro__burger img');
const headerSections = document.querySelector('.header__sections');
const headerCase = document.querySelector('.header__case');

const aboutmeButton = document.querySelector('.header__buttons--aboutme');
const caseButton = document.querySelector('.header__buttons--case');
const projectsButton = document.querySelector('.header__buttons--projects');
const creditsButton = document.querySelector('.header__buttons--credits');

const header = document.querySelector('.header');
const aboutme = document.querySelector('.aboutme');
const caseStudy = document.querySelector('.case');
const projects = document.querySelector('.projects');
const credits = document.querySelector('.credits');

var introDate = document.querySelector('.intro__fulldate');
var introHour = document.querySelector('.intro__hour');
const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const hour = new Date().getHours();
const minutes = new Date().getMinutes();

quitButton.addEventListener('click', function() {
    header.classList.add('hidden');

    headerSections.classList.remove('hidden');
    headerCase.classList.add('hidden');
});

navButton.addEventListener('click', function() {
    header.classList.remove('hidden');
})

aboutmeButton.addEventListener('click', function() {
    header.classList.add('hidden');
    aboutme.classList.remove('hidden');

    caseStudy.classList.add('hidden');
    projects.classList.add('hidden');
    credits.classList.add('hidden');
})

caseButton.addEventListener('click', function() {
    headerSections.classList.add('hidden');
    headerCase.classList.remove('hidden');
})

introDate.textContent = day + '/' + month + '/' + year;
introHour.textContent = hour + ':' + minutes;