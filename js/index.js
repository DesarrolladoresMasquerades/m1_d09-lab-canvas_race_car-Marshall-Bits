window.onload = () => {
 
  const startButton = document.getElementById("start-button")
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const car = new Car(ctx)
  const game = new Game(ctx, car)

  startButton.onclick = () => {
    game.start();
  };
  
};
