const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');
const $playground = document.querySelector('#playground');

document.addEventListener('click', () => {  
    $modalBox.showModal();
  }
);

$playButton.addEventListener('click', (e) => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';

  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.dataset.id='play';
  }
})


