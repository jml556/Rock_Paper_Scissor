const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');


    playButton.addEventListener('click',() => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    })
  };
  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerHand = document.querySelector('.human-hand')
    const computerHand = document.querySelector('.computer-hand')
  }


  startGame();
  updateScore();

};

game();