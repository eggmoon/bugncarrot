const $playButton = document.querySelector('#playButton');
// const $modalBox = document.querySelector('#modalBox');

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

$playButton.addEventListener('click', (e) => {
  if(e.target.dataset.id==='play'){
    e.target.innerText = '<i class="fa-solid fa-pause"></i>'
    $playButton.setAttribute(data-id, 'pause');
  }else{
    e.target.innerText = '<i class="fa-solid fa-play"></i>'
    $playButton.setAttribute(data-id, 'play'); 
  }
})