const cardOne = document.querySelector('[data-js="card1"]');
const cardTwo = document.querySelector('[data-js="card2"]');
const cardThree = document.querySelector('[data-js="card3"]');

const cardOneContent = document.querySelector('[data-js="card1-content"]');
const cardTwoContent = document.querySelector('[data-js="card2-content"]');
const cardThreeContent = document.querySelector('[data-js="card3-content"]');
console.log(cardOneContent);

cardOne.addEventListener('click', event => {
    cardOneContent.classList.toggle('card__content--clicked')
    
})

cardTwo.addEventListener('click', event => {
    cardTwoContent.classList.toggle('card__content--clicked')
    
})


cardThree.addEventListener('click', event => {
    cardThreeContent.classList.toggle('card__content--clicked')
    
})



// Versuch der Vereinheitlichung
// __________________________________________________________________________

// const cards = document.querySelectorAll('[data-js="card"]');
// const cardContents = document.querySelector('[js-data="card-content"]');



// cards.forEach(item => {
    
// item.addEventListener('click', event => {
//     cardContents.classList.toggle('card_content--clicked');

// })
// })
    


// Nächster Schritt Card-Content soll ebenfalls angezeigt werden

// cards.forEach(item => {
    
// item.addEventListener('click', event => {
//     cardContent.classList.toggle('card__content--clicked')
// })
// })
    