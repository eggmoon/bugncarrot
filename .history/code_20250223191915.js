const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');
const $playground = document.querySelector('#playground');

document.addEventListener('click', () => {  
    $modalBox.showModal();
  }
);

function startCounter(){
  let conunter = 10;
  const timecounter = setTimeout(()=>{

  }, 1000)
  setInterval
}

document.addEventListener('load', () => {

})

$playButton.addEventListener('click', (e) => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
    startCounter()
    makeCarrots();
    makeBugs();

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
    reset();

  }
})


