
class GameState {
  constructor(counter, carrots, bugs) {
  this.status = "initial"; // initial, play, (pause), end--<timeout, lose, win>
  this.counter = counter;
  this.carrots = carrots;
  this.bugs = bugs;
  this.stage = 1;
  }
  startGame(){
    // this.status = "play"
    //start counter
    //making carrots
    //making bugs

  }
  // pauseGame(){
  //   // pause counter
  // }
  endGame(){
    //check status
    // if(this.status = timeout){
    // } elseif(this.stauts-lose) {
    // } else{};
    // this.resetGame()
  }
  resetGame(){
    //this.status = "initial";
    //this.counter = counter;
    //this.carrots = carrots;
    //this.bugs = bugs;
    //makeNextGame();
  }
  makeNextGame(){

  }
}

const game = new GameState(10, 15, 15);




class Item{
  constructor(){
    this.img = img;
    this.name = name;
    this.x = 0;
    this.y = 0;
  }
  makeItem(){

  }
 
}

class Carrot extends Item {
  constructor(){
    super();
    this.img = "img";
    this.name = "name";
  }
  carrotCounter() {

  }
  removeItem(){

  }
}
class Bug extends Item {
  constructor(){
    super();
    this.img = "img";
    this.name = "name";
  }
  resetGame() {

  }
}

for(i=0; i<=10; i++)
const carrot = new Carrot();
const bug = new Bug();

