const $modalBox = document.querySelector('#modalBox');
const $modalBox2 = document.querySelector('#modalBox2');
const $playButton = document.querySelector('#playButton');
const $playButton2 = document.querySelector('#playButton2');
const $playground = document.querySelector('#playground');
const $timer = document.querySelector('#timer');
const $carrotCounter = document.querySelector('#carrotCounter')

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

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
      clearInterval(timecounter);
      counter = 10;
      $modalBox2.showModal();
      reset();
    }
  }, 1000);
  // timeout = setTimeout(()=>{
  //   $modalBox.showModal();
  // }, 10000);

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
  carrotCounter = 6;
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
  for(let i; i >= num; i--){
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
          $modalBox2.showModal();
          reset();
      })
      return [bug.style.left, bug.style.top];
    });
console.log(bugs);
}
function reset(){
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    makeCarrots();
    makeBugs();
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


$playButton.addEventListener('click', () => {
    reset();
})

$playButton2.addEventListener('click', ()=>{
  reset();
})