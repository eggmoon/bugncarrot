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
  const timeout = setTimeout()
}

document.addEventListener('load', () => {

})

$playButton.addEventListener('click', () => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter();
    // makeCarrots();
    // makeBugs();

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    // reset();

  }
})


