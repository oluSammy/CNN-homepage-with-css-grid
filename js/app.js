const hamburger = document.querySelector('.hamburger');
const sitemap = document.querySelector('.sitemap');
const topLine = document.querySelector('.top-line');
const midLine = document.querySelector('.mid-line');
const bottomLine = document.querySelector('.bottom-line');

hamburger.addEventListener('click', ()=>{
    //toggle hamburger
    sitemap.classList.toggle('display-none');

    //animate hamburger
    if(!sitemap.classList.contains('display-none')){
        midLine.style.display = 'none';
        topLine.style.transform = 'rotate(45deg) translateY(.5rem)';        
        bottomLine.style.transform = 'rotate(-45deg) translateY(-.4rem)';        
    }else{
        midLine.style.display = 'block';
        topLine.style.transform = 'rotate(0) translateY(0)';        
        bottomLine.style.transform = 'rotate(0) translateY(0)';        
    }
});
