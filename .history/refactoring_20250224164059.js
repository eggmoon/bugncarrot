
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
    this.status = "play"
    //start counter
    this.timecounter = setInterval(()=>{
      $timer.innerText = `00 : ${counter}`;
      console.log(counter);
      counter = counter-1;  
      if (counter < 0){
        alert.play();
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
        carrots[i].addEventListener('click',()=>{
          this.carrotsum -= 1;
          $carrotCounter.innerText = this.carrotsum;
          if(carrotCounter === 0){
            this.status = 'timeout'
            endGame();
        }
        })
      }
    }
    //making bugs

  
  // pauseGame(){
  //   // pause counter
  // }
  endGame(){
    //check status
    if(this.status = 'timeout'){
    } elseif(this.stauts-lose) {
    } else{};
    this.resetGame()
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
    this.img = "img";
    this.name = "name";
  }
  resetGame() {

  }
}
