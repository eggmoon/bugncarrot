const $playButton = document.querySelector('#playButton');
// const $modalBox = document.querySelector('#modalBox');

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

$playButton.addEventListener('click', (e) => {
  if($playButton.dataset.id==='play'){
    $playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
    $playButton.dataset.id='pause';
  }else{
    $playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    $playButton.setAttribute(data-id, 'play'); 
  }
})