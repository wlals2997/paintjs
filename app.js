const Canvas = document.querySelector('#jsCanvas');
const context = Canvas.getContext('2d');

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
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);

    context.stroke();
  }
}
function onMousedown(event) {
  painting = true; //마우스가 클릭해졌을  때는  true로 변경
}
function onMouseup(event) {
  painting = false; //마우스가 클릭했다가 다시 땟을때  false로 변경
}
function onMouseleave(event) {
  painting = false; //마우스가 외부로 갔을 때   false로 변경
}

if (Canvas) {
  Canvas.addEventListener('mousemove', onMousemove);
  Canvas.addEventListener('mousedown', startPainting);
  Canvas.addEventListener('mouseup', onMouseup);
  Canvas.addEventListener('mouseleave', onMouseleave);
}
