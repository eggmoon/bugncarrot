const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');
const $playground = document.querySelector('#playground');
const $timer = document.querySelector('#timer');

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

let counter = 10; 
function startCounter(){
  const timecounter = setInterval(()=>{
    if (counter <= 0){
      clearInterval(timecounter);
      counter = 10;
    }
    $timer.innerText = `00 : ${counter}`;
    console.log(counter);
    counter = counter-1;  
  }, 1000);
  const timeout = setTimeout(()=>{
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
  carrots = carrots.map((i)=>{
    return [Math.random(), Math.random()];
  });
  
  carrots = carrots.map((i, j)=>{
      const carrot = document.createElement('img');
      carrot.setAttribute('src', 'carrot/img/carrot.png');
      carrot.setAttribute('class', 'carrot');
      carrot.setAttribute('id', `carrot${j}`);
      carrot.style.left = `${left}%`;
      carrot.style.top = `${top}%`;
      $playground.appendChild(carrot);
      return [carrot.style.left, carrot.style.top];
    });

  console.log(carrots);
}

function reset(){
  $playground.innerHTML = "";
}

document.addEventListener('load', () => {

})

document.addEventListener('click', (e) => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    const makeCarrot = new Carrot();
    makeCarrot.makecarrot();
    // makeBugs();

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    reset();

  }
})


