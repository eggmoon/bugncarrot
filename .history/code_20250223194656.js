const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');
const $playground = document.querySelector('#playground');

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

let counter = 10; 
function startCounter(){
  const timecounter = setInterval(()=>{
    if (counter === 0){
      return counter;
    }
    console.log(counter);
    counter = counter-1;
    
  }, 1000);
}

document.addEventListener('load', () => {

})

$playButton.addEventListener('click', () => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
   const countResult = new Promise(resolve) startCounter();
   if(!countResult){
    $modalBox.showModal();
   }
    // makeCarrots();
    // makeBugs();

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    // reset();

  }
})


