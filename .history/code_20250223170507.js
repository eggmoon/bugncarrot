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

function getBackgroundDisplayedHeight() {
  const mainbox = document.getElementById('mainbox');
  const playground = document.getElementById('playground');
  const bgImage = new Image();
  bgImage.src = "carrot/img/background.png";

  bgImage.onload = function () {
    function updateHeight() {
      const containerWidth = mainbox.clientWidth; // `mainbox`의 가로 길이
      const containerHeight = mainbox.clientHeight; // `mainbox`의 세로 길이
      const aspectRatio = bgImage.width / bgImage.height; // 배경 이미지의 가로/세로 비율

      let displayedHeight = containerWidth / aspectRatio; // 가로에 맞춰 세로 높이 조정

      if (displayedHeight > containerHeight) {
        displayedHeight = containerHeight; // contain일 경우 더 작은 값 선택
      }

      console.log("배경 이미지 실제 표시 높이:", displayedHeight);
      
      // `#playground`가 배경을 넘어가지 않도록 제한
      playground.style.maxHeight = `${displayedHeight * 0.4}px`;
      mainbox.style.maxHeight =`${displayedHeight}px`; 
    }

    // 초기 실행
    updateHeight();

    // 창 크기가 변할 때 다시 실행
    window.addEventListener("resize", updateHeight);
  };
}

// 최초 실행
getBackgroundDisplayedHeight();