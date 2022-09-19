const cards = document.querySelectorAll('[data-js="card"]');
const cardContents = document.querySelectorAll('[data-js="card-content"]');
const cardArrows = document.querySelectorAll('[data-js="card-arrow"]');

console.log(cards);
console.log(cardContents);
console.log(cardArrows);



for (const key in cards) {
    cards[key].addEventListener('click', event => {
        cardContents[key].classList.toggle("card__content--clicked");
        cardArrows[key].classList.toggle("card__arrow--clicked");
    })
}
    
    
    
