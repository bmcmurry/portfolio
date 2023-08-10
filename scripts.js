document.addEventListener('DOMContentLoaded', function () {
  const flipCards = document.querySelectorAll('.flip-card');

  flipCards.forEach(flipCard => {
    const flipButton = flipCard.querySelector('.flip-button');
    const closeButton = flipCard.querySelector('.close-button');
    const cardFront = flipCard.querySelector('.card-front');

    flipButton.addEventListener('click', () => {
      const flipCardInner = flipCard.querySelector('.flip-card-inner');
      flipCardInner.style.transform = 'rotateY(180deg)';
      cardFront.classList.toggle('flipped');
    });

    closeButton.addEventListener('click', () => {
      const flipCardInner = flipCard.querySelector('.flip-card-inner');
      flipCardInner.style.transform = 'rotateY(0deg)';
      cardFront.classList.toggle('flipped');
    });
  });
});


