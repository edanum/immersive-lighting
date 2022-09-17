
const cards = document.querySelectorAll('[data-js="card"]');
const cardContents = document.querySelector('[js-data="card-content"]');



cards.forEach(item => {
    
item.addEventListener('click', event => {
    item.classList.toggle('card--clicked');
    cardContents[item].classList.toggle('card__content--clicked'); //Funktioniert noch nicht. Ich weiß an dieser stelle noch nicht, wie ich das n-te Element von cardContents greifen soll. Eventuell (andere) Schleife notwendig?
})
})
    


// Nächster Schritt Card-Content soll ebenfalls angezeigt werden

// cards.forEach(item => {
    
// item.addEventListener('click', event => {
//     cardContent.classList.toggle('card__content--clicked')
// })
// })
    