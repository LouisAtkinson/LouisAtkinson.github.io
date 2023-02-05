const intro = document.getElementById('intro');
const info = document.getElementById('info');

function homeAnimations() {
    setTimeout(function(){intro.style.color = 'white';},1000);
    setTimeout(function(){info.style.color = 'white';},2000);
}