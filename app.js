const Canvas = document.querySelector('#jsCanvas');
const context = Canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');

Canvas.width = 700; //실제 픽셀사이즈 부여(css, js둘다)
Canvas.height = 700; //실제 픽셀사이즈 부여(css, js둘다)
context.strokeStyle = '#2c2c2c';
context.lineWidth = 2.5; //브러쉬 크기-linewidth

let painting = false; //paingting 디폴트 false이지만

function startPainting() {
  painting = true;
}
function onMousemove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    //경로를 만든다
    context.beginPath(); //경로생성
    context.moveTo(x, y); //선 시작 좌표
  } else {
    //그린다
    context.lineTo(x, y); //선 끝 좌표

    context.stroke(); //선 그리기
  }
}
// function onMousedown(event) {
//   painting = true; //마우스가 클릭해졌을  때는  true로 변경
// }
function onMouseup(event) {
  painting = false; //마우스가 클릭했다가 다시 땟을때  false로 변경
}
function onMouseleave(event) {
  painting = false; //마우스가 외부로 갔을 때   false로 변경
}
function handleColors(event) {
 const color=event.target.style.backgroundColor;
 context.strokeStyle = color;
}

if (Canvas) {
  Canvas.addEventListener('mousemove', onMousemove);
  Canvas.addEventListener('mousedown', startPainting);
  Canvas.addEventListener('mouseup', onMouseup);
  Canvas.addEventListener('mouseleave', onMouseleave);
}
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColors)
);
