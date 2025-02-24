
class GameState {
  constructor(counter, carrots, bugs) {
  this.status = "initial"; // initial, play, (pause), end--<timeout, lose, win>
  this.timecounter = 
  this.counter = counter;
  this.carrots = carrots;
  this.bugs = bugs;
  this.stage = 1;
  }
  startGame(){
    // this.status = "play"
    //start counter
    this.counter = setInterval(()=>{
      $timer.innerText = `00 : ${counter}`;
      console.log(counter);
      counter = counter-1;  
      if (counter < 0){
        alert.play();``
        clearInterval(timecounter);
        counter = 10;
        $modalBox2.showModal();
        reset();
      }
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

const game = new GameState();




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
