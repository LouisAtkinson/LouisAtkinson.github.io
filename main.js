const intro = document.getElementById('intro');
const info = document.getElementById('info');
const header = document.getElementById('header');
const about = document.getElementById('aboutlink');
const projects = document.getElementById('projectslink');
const contact = document.getElementById('contactlink');

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

projects.addEventListener('click', function() {
    window.location.href="projects.html";
})

contact.addEventListener('click', function() {
    window.location.href="contact.html";
})