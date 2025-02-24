
class GameState {
  constructor(counter, carrotsnum, bugsnum) {
  this.status = "initial"; // initial, play, (pause), end--<timeout, lose, win>
  this.timecounter = 0;
  this.counter = counter;
  this.carrotsnum = carrotsnum;
  this.bugsnum = bugsnum;
  this.stage = 1;
  }
  startGame(){
    // this.status = "play"
    //start counter
    this.timecounter = setInterval(()=>{
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
    makeCarrots() {
      let carrots = [];
      for(let i=this.carrotsnum; i >0; i--){
        carrots.push(new Carrot());
      }
    }
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
    this.img = 'noimg';
    this.name = 'noname';
    this.x = 0;
    this.y = 0;
    this.item = document.createElement('img');
  }
  makeItem(){
    carrot.setAttribute('src', 'carrot/img/carrot.png');
    carrot.setAttribute('class', 'carrot');
    carrot.setAttribute('id', `carrot${j}`);
    carrot.style.left = `${i[0]*90}%`;
    carrot.style.top = `${i[1]*90}%`;
    $playground.appendChild(carrot);
    carrot.addEventListener('click', () => {
      carrot.remove();
      carrot_pull.play();
      carrotCounter = carrotCounter-1;
      $carrotCounter.innerText = carrotCounter;
      if(carrotCounter === 0){
        $modalBox.showModal();
        reset();
      }
    })
    return [carrot.style.left, carrot.style.top];

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
    this.img = "img";
    this.name = "name";
  }
  resetGame() {

  }
}
