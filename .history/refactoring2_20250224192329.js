const $modalBox = document.querySelector('#modalBox');
const $modalBox2 = document.querySelector('#modalBox2');
const $playButton = document.querySelector('#playButton');
const $playButton2 = document.querySelector('#playButton2');
const $playground = document.querySelector('#playground');
const $timer = document.querySelector('#timer');
const $carrotCounter = document.querySelector('#carrotCounter');

const bgm = new Audio("carrot/sound/bg.mp3");
const alert = new Audio("carrot/sound/alert.wav");
const bug_pull = new Audio("carrot/sound/bug_pull.mp3");
const game_win = new Audio("carrot/sound/game_win.mp3");
const carrot_pull = new Audio("carrot/sound/carrot_pull.mp3");

class GameState {
  constructor(counter, carrotsnum, bugsnum) {
    this.initialvalue = [counter, carrotsnum, bugsnum];
    this.status = "initial";
    this.timecounter = 0;
    this.counter = counter;
    this.carrotsnum = carrotsnum;
    this.bugsnum = bugsnum;
    this.stage = 1;
  }

  getStatus() {
    return this.status;
  }

  startGame() {
    this.status = "play";
    this.timecounter = setInterval(() => {
      console.log(this.status);
      $timer.innerText = `00 : ${this.counter}`;
      this.counter -= 1;
      if (this.counter < 0) {
        alert.play();
        clearInterval(this.timecounter);
        this.status = 'timeout';
        this.endGame();
      }
    }, 1000);
  }

  makeCarrots() {
    this.carrots = [];
    for (let i = this.carrotsnum; i > 0; i--) {
      const carrot = new Carrot();
      carrot.makeItem(i);
      carrot.setCarrot();
      this.carrots.push(carrot);
    }
  }

  makeBugs() {
    this.bugs = [];
    for (let i = this.bugsnum; i > 0; i--) {
      const bug = new Bug();
      bug.makeItem(i);
      bug.setBug();
      this.bugs.push(bug);
    }
  }

  endGame() {
    if (this.status === 'timeout' || this.status === 'lose') {
      $modalBox2.showModal();
    } else {
      $modalBox.showModal();
    }
    this.resetGame();
  }

  resetGame() {
    clearInterval(this.timecounter);
    $playground.innerText = "";
    this.status = "initial";
    this.counter = this.initialvalue[0];
    this.carrotsnum = this.initialvalue[1];
    this.bugsnum = this.initialvalue[2];
  }
}

class Item {
  constructor() {
    this.img = 'noimg';
    this.name = 'noname';
    this.sound = new Audio();
  }

  makeItem(i) {
    this.x = Math.random();
    this.y = Math.random();
    this.item = document.createElement('img');
    this.item.setAttribute('id', `${this.name}${i}`);
    this.item.setAttribute('src', this.img);
    this.item.setAttribute('class', this.name);
    this.item.style.left = `${this.x * 90}%`;
    this.item.style.top = `${this.y * 90}%`;
    $playground.appendChild(this.item);
    this.item.addEventListener('click', () => {
      this.item.remove();
      this.sound.play();
    });
  }
}

class Carrot extends Item {
  constructor() {
    super();
    this.img = "carrot/img/carrot.png";
    this.name = "carrot";
    this.sound = new Audio("carrot/sound/carrot_pull.mp3");
  }

  setCarrot() {
    this.item.addEventListener('click', () => {
      game.counter -= 1;
      console.log(`Carrots left: ${game.counter}`);
    });
  }
}

class Bug extends Item {
  constructor() {
    super();
    this.img = "carrot/img/bug.png";
    this.name = "bug";
    this.sound = new Audio("carrot/sound/bug_pull.mp3");
  }

  setBug() {
    this.item.addEventListener('click', () => {
      game.status = 'lose';
      game.endGame();
    });
  }
}

let game = new GameState(10, 15, 15);

$playButton.addEventListener('click', () => {
  if (game.status === 'initial') {
    game.startGame();
    game.makeBugs();
    game.makeCarrots();
  } else {
    game.resetGame();
  }
});

$playButton2.addEventListener('click', () => {
  game.resetGame();
});