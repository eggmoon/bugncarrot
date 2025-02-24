const $modalBox = document.querySelector('#modalBox');
const $modalBox2 = document.querySelector('#modalBox2');
const $playButton = document.querySelector('#playButton');
const $playButton2 = document.querySelector('#playButton2');
const $playground = document.querySelector('#playground');
const $timer = document.querySelector('#timer');
const $carrotCounter = document.querySelector('#carrotCounter')

const bgm = new Audio("carrot/sound/bg.mp3");

const alert = new Audio("carrot/sound/alert.wav");
const bug_pull = new Audio("carrot/sound/bug_pull.mp3");
const game_win = new Audio("carrot/sound/game_win.mp3");
const carrot_pull = new Audio("carrot/sound/carrot_pull.mp3");

bgm.loop = true;
bgm.volumn = 0.4;
bgm.play();



class GameState {
  constructor(counter, carrotsnum, bugsnum) {
  this.status = "initial"; // initial, play, (pause), end--<timeout, lose, win>
  this.timecounter = 0;
  this.counter = counter;
  this.carrotsnum = carrotsnum;
  this.bugsnum = bugsnum;
  this.stage = 1;
  }
  status(){
    return this.status;
  }
  startGame(){
    this.status = "play"
    //start counter
    this.timecounter = setInterval(()=>{
      $timer.innerText = `00 : ${counter}`;
      console.log(counter);
      counter = counter-1;  
      if (counter < 0){
        alert.play();
        clearInterval(timecounter);
        this.status = 'timeout';
        this.endGame();
      }}, 1000)}
    //making carrots
    makeCarrots(){
      let carrots = [];
      for(let i=this.carrotsnum; i >0; i--){
        carrots.push(new Carrot());
        carrots[i].addEventListener('click',()=>{
          this.carrotsum -= 1;
          $carrotCounter.innerText = this.carrotsum;
          if(carrotCounter === 0){
            this.status = 'timeout';
            this.endGame();
          };
        });
      }
    }
    // makingbugs
    makeBugs(){
      let bugs = [];
      for(let i=this.bugsnum; i >0; i--){
        bugs.push(new Bug());
        bugs[i].addEventListener('click',()=>{
          this.status = 'lose';
          this.endGame();
        });
      }
    }
  
  
  // pauseGame(){
  //   // pause counter
  // }

  endGame(){
    //check status
    if(this.status = 'timeout'){
      $modalBox.showModal();
      this.resetGame();
    } else if(this.stauts = 'lose'){
      $modalBox.showModal();
      this.resetGame();
    } else{
      $modalBox2.showModal();
    };
  }
  resetGame(){
    $playground.innerText = "";
    this.status = "initial";
    this.counter = counter;
    this.carrots = carrots;
    this.bugs = bugs;
 
  }
}


class Item{
  constructor(){
    this.img = 'noimg';
    this.name = 'noname';
    this.x = 0;
    this.y = 0;
    this.item = document.createElement('img');
    this.sound = 'nosound'
  }
  makeItem(i, j){
    this.item.setAttribute('src', this.img);
    this.item.setAttribute('class', this.name);
    this.item.setAttribute('id', `${this.name}${j}`);
    this.item.style.left = `${i[0]*90}%`;
    this.item.style.top = `${i[1]*90}%`;
    $playground.appendChild(this.item);
    this.item.addEventListener('click', () => {
      this.item.remove();
      this.sound.play();
      
    })
    return [this.item.style.left, this.item.style.top];
  }
   
}

class Carrot extends Item {
  constructor(){
    super();
    this.img = "carrot/img/carrot.png";
    this.name = "Carrot";
  }
  carrotCounter() {

  }
  removeItem(){

  }
}
class Bug extends Item {
  constructor(){
    super();
    this.img = "carrot/img/bug.png";
    this.name = "Bug";
  }
  resetGame() {

  }
}


const game = new GameState(10, 15, 15);

$playButton.addEventListener('click', () => {
  if(game.status() = 'initial'){
    game.startGame();
  } else{
    game.resetGame();
  }
})

$playButton2.addEventListener('click', () )
