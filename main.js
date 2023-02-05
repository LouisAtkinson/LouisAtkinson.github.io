const intro = document.getElementById('intro');
const info = document.getElementById('info');
const header = document.getElementById('header');
const about = document.getElementById('aboutlink');
const skills = document.getElementById('skillslink');
const projects = document.getElementById('projectslink');
const contact = document.getElementById('contactlink');
const github = document.getElementById('github');

function homeAnimations() {
    setTimeout(function(){intro.style.color = 'white';},1000);
    setTimeout(function(){info.style.color = 'white';},2000);
}

header.addEventListener('click', function() {
    window.location.href="index.html";
})

about.addEventListener('click', function() {
    window.location.href="about.html";
})

skills.addEventListener('click', function() {
    window.location.href="skills.html";
})

projects.addEventListener('click', function() {
    window.location.href="projects.html";
})

contact.addEventListener('click', function() {
    window.location.href="contact.html";
})

document.getElementById('email').addEventListener('click', function() {
    window.location.href="mailto:louisatkinson.la@gmail.com";
})

github.addEventListener('click', function() {
    window.open('https://github.com/louisatkinson', '_blank');
})

function battleships() {
    window.open('https://louisatkinson.github.io/battleships', '_blank');
}

function battleshipsCode() {
    window.open('https://github.com/LouisAtkinson/battleships', '_blank');
}

function weather() {
    window.open('https://louisatkinson.github.io/weather-app', '_blank');
}

function weatherCode() {
    window.open('https://github.com/louisatkinson/weather-app', '_blank');
}

function noughtsAndCrosses() {
    window.open('https://louisatkinson.github.io/noughts-and-crosses', '_blank');
}

function noughtsAndCrossesCode() {
    window.open('https://github.com/louisatkinson/noughts-and-crosses', '_blank');
}

function library() {
    window.open('https://louisatkinson.github.io/library', '_blank');
}

function libraryCode() {
    window.open('https://github.com/louisatkinson/library', '_blank');
}

function etchASketch() {
    window.open('https://louisatkinson.github.io/etch-a-sketch', '_blank');
}

function etchASketchCode() {
    window.open('https://github.com/louisatkinson/etch-a-sketch', '_blank');
}

function calculator() {
    window.open('https://louisatkinson.github.io/calculator', '_blank');
}

function calculatorCode() {
    window.open('https://github.com/louisatkinson/calculator', '_blank');
}
