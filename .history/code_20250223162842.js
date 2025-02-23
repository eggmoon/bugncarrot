const $playButton = document.querySelector('#playButton');
const $modalBox = document.querySelector('#modalBox');

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

function adjustPlayground() {
  const mainbox = document.getElementById('mainbox');
  const playground = document.getElementById('playground');

  const mainboxHeight = mainbox.clientHeight;
  
  // 배경 이미지 높이를 고려하여 `#playground` 위치 조정
  playground.style.top = `${mainboxHeight * 0.6}px`; // 배경의 바닥과 맞추기 위해 조정
  playground.style.height = `${mainboxHeight * 0.3}px`; // 높이를 배경에 맞춤
}

window.addEventListener('resize', adjustPlayground);
window.addEventListener('load', adjustPlayground);