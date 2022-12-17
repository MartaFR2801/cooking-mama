class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.intervalId = null;
    this.bg = new Background(this.ctx);
    this.chef = new Chef(this.ctx, 0, 0);
    this.ingredients = [];
    this.counter = 0;
    this.score = 0;
    this.time = 15; // seconds
    this.gameStarted = true;
    this.scoreGoal = 3;
    this.currentLevel = 1;
    this.tryAgain = false;
    this.img = new Image();
    this.img.src = "./images/NEXTLEVEL.png";
    this.sound = new Audio();
    this.sound.src = "./sound/musiquita.mp3";
    this.sound.volume = 0.7
    this.soundTwo = new Audio();
    this.soundTwo.src = "./sound/eructo.mp3";
    this.soundTwo.volume = 0.3;
    this.soundThree = new Audio;
    this.soundThree.src = "./sound/eructoniveldos.mp3";
    this.soundThree.volume = 0.7;
    this.imgEnd = new Image();
    this.imgEnd.src = "./images/fullgame.png";
  }

  start() {
    this.sound.play();
    this.intervalId =
      this.gameStarted &&
      setInterval(() => {
        console.log("entro");
        this.clear();
        this.draw();
        this.move();
        this.checkCollisions();
        this.counter++;
        if (this.counter % 50 === 0) {
          this.addIngredient();
        }
        if (this.counter % 50 === 0) {
          this.time--;
          if (this.time <= 0) {
            if (this.score < this.scoreGoal) {
              this.gameOver();
            } else { 
              this.scoreGoal = this.score + this.scoreGoal + 3;
            }
          }
        }
        if (this.score === 10 && this.currentLevel === 1) { 
          this.ctx.drawImage(this.img, 0, 0, 800, 500);
          console.log("pasar a nivel");
          this.currentLevel++;
          this.pause();
          this.soundThree.play();
          setTimeout(() => {
            this.start();
            this.time = 15;
          }, 2000);
        }
      }, 1000 / 60); 
      
  }

  draw() {
    this.bg.draw();
    this.chef.draw();
    this.ingredients.forEach((ingredient) => {
      ingredient.draw();
    });
    this.drawScore();
    this.drawTime();
  }
  move() {
    this.chef.move();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ingredients = this.ingredients.filter(
      (ingredient) => ingredient.y < this.ctx.canvas.height
    );
  }

  resetGame() {
    this.gameStarted = true;
    this.start();
  }

  addIngredient() {
    const width = 50;
    const randomX = Math.random() * (this.canvas.width - width);
    const randomY = Math.random() * (this.canvas.height - width - 100) + 100;
    const ingredient = new Ingredient(this.ctx, randomX, randomY, width);
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }

  checkCollisions() {
    const ingredientColliding = this.ingredients.find((ingredient) =>
      this.chef.isColliding(ingredient)
    );

    if (ingredientColliding) {
      this.ingredients.splice(this.ingredients.indexOf(ingredientColliding), 1);
      this.soundTwo.currentTime = 0;
      this.soundTwo.play();
      this.score++;
      
    }
  }
  drawScore() {
    this.ctx.fillStyle = "#160808";
    this.ctx.font = "24px Arial";
    this.ctx.fillText("Score: " + this.score, 10, 30);
  
  }
  drawTime() {
    this.ctx.fillStyle = "#160808";
    this.ctx.font = "24px Arial";
    this.ctx.fillText("Time: " + this.time, 10, 60);
  }

  pause() {
    clearInterval(this.intervalId);
    this.ctx.save();
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.ctx.save();
    this.gameStarted = false;
    this.ctx.drawImage(this.imgEnd, 0, 0, 800, 500);
  }
  
}
