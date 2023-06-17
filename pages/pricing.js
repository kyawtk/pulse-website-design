let priceCard  = document.querySelectorAll('.price-card')

priceCard.forEach(card => {
     let ul = card.querySelector('ul')
    card.addEventListener('mouseenter',()=>{
       ul.classList.remove('grey-text')
       console.log('hely')
    })
    card.addEventListener('mouseleave',()=>{
        ul.classList.add('grey-text')
    })
});