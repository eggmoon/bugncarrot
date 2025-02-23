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
      counter = 10;
      clearInterval(timecounter);
    }
    $timer.innerText = `${counter}`;
    console.log(counter);
    counter = counter-1;
    
  }, 1000);
  const timeout = setTimeout(()=>{
    $modalBox.showModal();
  }, 10000);
}

function makeCarrots(){
  let carrots = [0, 0, 0, 0, 0, 0];
  carrots = carrots.map((i)=>{
    return [Math.random()*102.4, Math.random()*330];
  });

  carrots.forEach((i)=>{
    const carrot = document.createElement('img');
    carrot.setAttribute('src', 'carrot/img/carrot.png');
    carrot.setAttribute('class', 'carrot');
    carrot.style.left = `${i[0]}px`;
    carrot.style.top = `${i[1]}px`;
    $playground.appendChild(carrot);
  })

  console.log(carrots);
}

document.addEventListener('load', () => {

})

document.addEventListener('click', (e) => {
  console.log(e.target);
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    makeCarrots();
    // makeBugs();

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    // reset();

  }
})


