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

function adjustMainboxSize() {
  const mainbox = document.getElementById('mainbox');
  const playground = document.getElementById('playground');

  // 배경 이미지(`mainbox`)의 실제 높이를 가져옴
  const mainboxHeight = mainbox.clientHeight;
  
  // `#playground`의 높이를 `mainboxHeight`보다 커지지 않도록 제한
  playground.style.maxHeight = `${mainboxHeight * 0.4}px`; // 예: 배경 높이의 40% 이하로 제한
}

// 페이지 로드 및 화면 크기 변경 시 실행
window.addEventListener('resize', adjustMainboxSize);
window.addEventListener('load', adjustPlaygroundSize);