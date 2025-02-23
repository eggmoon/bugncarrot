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

  // 배경 이미지 높이 가져오기
  const mainboxHeight = mainbox.clientHeight;
  
  // `#playground` 높이 및 위치 조정
  playground.style.top = `${mainboxHeight * 0.65}px`; // 배경의 땅과 일치하도록 설정
  playground.style.height = `${mainboxHeight * 0.25}px`; // 배경 높이에 맞게 조정
}

// 페이지 로드 및 화면 크기 변경 시 위치 조정
window.addEventListener('resize', adjustPlayground);
window.addEventListener('load', adjustPlayground);