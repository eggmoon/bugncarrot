const $playButton = document.querySelector('#playButton');
// const $modalBox = document.querySelector('#modalBox');

// document.addEventListener('click', () => {  
//     $modalBox.showModal();
//   }
// );

$playButton.addEventListener('click', (e) => {
  e.target.innerText = '<i class="fa-solid fa-pause"></i>';
})