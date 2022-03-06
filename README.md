# 그림판

### HTHML,CSS, JS로 만든 그림판입니다.
👉🏼[웹페이지 링크](https://wlals2997.github.io/paintjs/)


#### 목차
1. [구현목록](#1-%EA%B5%AC%ED%98%84%EB%AA%A9%EB%A1%9D)
2. [화면](#2-%ED%8A%B9%EC%A7%95)



## 1. 구현목록
##### 2D context
* 캔버스안에 그림을 그리기 위해서 getContext () 메소드를 호출하였다.
* 사용자가 마우스를 이동할 시 offsetX와 offsetY의 값을 받아와 캔버스를 클릭하면 painting을 true 로 바꿈(마우스를 클릭하지 않으면 false가 되도록 설정)
* context strokeStyle을 통해서 색 지정과, lineWidth로 선 두께 지정 할 수 있도록 함
* beginPath 를 통해 새로운 시작지점을 만들어 마우스가 움직일 때마다 새로운 시작점을 만든다(사용하지 않은 값은 사라진다).
* moveTo 를 통해 시작지점에 값을 넣어준다
* lineTo를 통해 시작지점부터 현재 값 까지 라인을 선으로 잇는다.
* stroke 를 통해 이어진 선에 두께를 입힌다.
* addEventListener를 통해 캔버스에 마우스 이벤트를 추가함.

##### 브러쉬 두께 조절기능
* range 엘리먼트에 input 이벤트를 통하여 range가 변화할때, 해당 값 사이즈를 가져오도록 하였습니다.

##### 브러쉬 색상
- jsColor 라는 클래스를 부여하여 불러온다.
- Array.from을 통해 Colors 객체를 배열로 변환해주고 그 배열안에서 forEach로 color를 가진다.
- 각 color 엘리먼트의 이벤트리스너를 통하여 클릭시 stroke 의 색상을 변경시켜준다. 

#### 캔버스 전체 색상 채우기
- fill 버튼을 누르면 paint로 paint버튼을 누르면 fill로 바뀔수 있도록 하였다.
- fillRect를 통해 fillStyle로 선택된 색상을 캔버스위에 채운다.
- filling이 true인 경우에만 동작하도록 설정한다.

#### 지우기 버튼
- erase 버튼을 클릭 시 strokeStyle을 white로 바꾼다.

#### 그림저장
- canvas.toDataURL을 통해 그림 그린 캔버스의 파일 url을 얻는다.
- a tag를 이용하여 href와 다운로드를 설정.

## 2. 화면
<img src="https://postfiles.pstatic.net/MjAyMjAzMDZfMTM0/MDAxNjQ2NTc4NzE4NjEw.EKGJGL5Kisg7Xh0N8KO7EQGyrzbq5m_kddUTNAFZkpog.dSDzVpT_SIbqNwxi7xA0u7scFtNswMBZMIrrF4t0hNUg.PNG.wlals2997/screencapture-file-C-Users-JiMin-LEE-Projects-Coding-paintjs-index-html-2022.png?type=w966">


