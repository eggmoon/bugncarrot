const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');
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
    if (counter <= 0){
      clearInterval(timecounter);
      counter = 10;
    }
    $timer.innerText = `00 : ${counter}`;
    console.log(counter);
    counter = counter-1;  
  }, 1000);
  timeout = setTimeout(()=>{
    $modalBox.showModal();
  }, 10000);

  $playButton.addEventListener('click', (e)=>{
      clearInterval(timecounter);
      clearTimeout(timeout);
      counter = 10;
      $timer.innerText = `00 : ${counter}`;
      return;
  })
  
}

function makeCarrots(){
  let carrots = [0, 0, 0, 0, 0, 0];
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

  console.log(carrots);
}

function reset(){
  $playground.innerHTML = "";
  clearInterval(timecounter);
  clearTimeout(timeout);
  counter = 10;
  $timer.innerText = `00 : ${counter}`;
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    makeCarrots();
    // makeBugs();
  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    $playButton.addEventListener('click', (e)=>{
      clearInterval(timecounter);
      clearTimeout(timeout);
      counter = 10;
      $timer.innerText = `00 : ${counter}`;
      return;
  })
}
}

$playButton.addEventListener('click', () => {
    
    startCounter();
})
$playButton2.addEventListener('click', ()=>{
  reset();
})