
class GameState {
  constructor(counter, carrots, bugs) {
  this.status = "initial"; // initial, play, (pause), end--<timeout, lose, win>
  this.counter = counter;
  this.carrots = carrots;
  this.bugs = bugs;
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
  }
  makeNextGame(){

  }
}

const game = new GameState(10, 15, 15);




class Item{
  constructor(){
    this.img = "basic img src";
    this.name = "item";
    this.x = 0;
    this.y = 0;
  }
  makeItem(){

  }
 
}

class Carrot extends Item {
  constructor(){
    super();
    this.img = "carrot img src";
    this.name = "carrot";
  }
  carrotCounter() {

  }
  removeItem(){

  }
}
class Bug extends Item {
  constructor(){
    super(..., "bug");
  }
  resetGame() {

  }
}

