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

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

const gameState = {
  status: initial, 
  counter : 10, 
  carrotCounter ,
  bugCounter : 6,
  timecounter,
  timeout
}

let counter = 10; 
let carrotCounter;
let bugCounter = 6;
let timecounter;
let timeout;

function startCounter(){
  timecounter = setInterval(()=>{
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
  }, 1000);
  // timeout = setTimeout(()=>{
  //   $modalBox.showModal();
  // }, 10000);
``
  // $playButton.addEventListener('click', (e)=>{
  //     clearInterval(timecounter);
  //     clearTimeout(timeout);
  //     counter = 10;
  //     $timer.innerText = `00 : ${counter}`;
  //     return;
  // })
  
}


function makeCarrots(num){
  let carrots = [];
  for(let i=num; i >0; i--){
    carrots.push('0');
  }
  carrotCounter = num;
  $carrotCounter.innerText = carrotCounter;
  carrots = carrots.map((i)=>{
    return [Math.random(), Math.random()];
  });
  
  carrots = carrots.map((i, j)=>{
      const carrot = document.createElement('img');
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
    });
}
function makeBugs(num){
  let bugs = [];
  for(let i=num; i >0 ; i--){
    bugs.push('0');
  }
  bugs = bugs.map((i)=>{
    return [Math.random(), Math.random()];
  });
  
  bugs = bugs.map((i, j)=>{
      const bug = document.createElement('img');
      bug.setAttribute('src', 'carrot/img/bug.png');
      bug.setAttribute('class', 'bug');
      bug.setAttribute('id', `bug${j}`);
      bug.style.left = `${i[0]*90}%`;
      bug.style.top = `${i[1]*90}%`;
      $playground.appendChild(bug);
      bug.addEventListener('click', () => {
          bug_pull.play();
          $modalBox2.showModal();
          reset();
      })
      return [bug.style.left, bug.style.top];
    });
console.log(bugs);
}
function reset(num){
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    makeBugs(num);
    makeCarrots(num);
  } else{
    $playground.innerHTML = "";
    clearInterval(timecounter);
    clearTimeout(timeout);
    counter = 10;
    $timer.innerText = `00 : ${counter}`;
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play'; 
 }
}
function bgmReset(){
  bgm.pause();
  bgm.currentTime = 0;
  bgm.play();
}

function eventListener(num){
  $playButton.addEventListener('click', () => {
    reset(num);
    bgmReset();
  })

  $playButton2.addEventListener('click', ()=>{
  reset(num);
  bgmReset();
  })
}

eventListener(15);