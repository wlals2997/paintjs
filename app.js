const canvas = document.querySelector('#jsCanvas');
const context = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.querySelector('#jsRange');
const Fill = document.querySelector('#jsMode');
const Save = document.querySelector('#jsSave');
const Erase = document.querySelector('#jsErase');
const Delete = document.querySelector('#jsDelete');

const DEFAULT__COLORS = '#2c2c2c';
const CANVAS__SIZE = 700;
canvas.width = CANVAS__SIZE; //실제 픽셀사이즈 부여(css, js둘다)
canvas.height = CANVAS__SIZE; //실제 픽셀사이즈 부여(css, js둘다)
context.fillStyle = 'white'; //캔버스 색상설정(하얀색배경)
context.fillRect(0, 0, CANVAS__SIZE, CANVAS__SIZE);
context.strokeStyle = DEFAULT__COLORS;
context.fillStyle = DEFAULT__COLORS;
context.lineWidth = 2.5; //브러쉬 크기-linewidth

let painting = false; //paingting 디폴트 false이지만
let filling = false;
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
  const color = event.target.style.backgroundColor;
  context.strokeStyle = color;
  context.fillStyle = color;
}

function rangeChange(event) {
  const brushValue = event.target.value;
  context.lineWidth = brushValue;
}
function changeFillHtml() {
  if (filling === true) {
    filling = false;
    Fill.innerText = 'FILL';
  } else {
    filling = true;
    Fill.innerText = 'PAINT';
  }
}
function fillCanvas() {
  if (filling) {
    context.fillRect(0, 0, CANVAS__SIZE, CANVAS__SIZE);
  }
}
function contextMenu(event) {
  event.preventDefault();
}
function onHandleSave() {
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image; //href는 imageurl이어야한다.
  link.download = 'Paint[💌]';
  link.click(); //가짜 클릭 부여
}
function Erasebtn() {
  context.strokeStyle = 'white';
}
function Deletebtn() {
  window.location.reload(true);
}
if (canvas) {
  canvas.addEventListener('mousemove', onMousemove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', onMouseup);
  canvas.addEventListener('mouseleave', onMouseleave);
  canvas.addEventListener('click', fillCanvas);
  canvas.addEventListener('contextmenu', contextMenu);
}
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColors)
);
if (range) {
  range.addEventListener('input', rangeChange);
}

if (Fill) {
  Fill.addEventListener('click', changeFillHtml);
}
if (Save) {
  Save.addEventListener('click', onHandleSave);
}
if (Erase) {
  Erase.addEventListener('click', Erasebtn);
}
if (Delete) {
  Delete.addEventListener('click', Deletebtn);
}
