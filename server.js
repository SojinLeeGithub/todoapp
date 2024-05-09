// 서버를 express로 하기 위한(?) 기본 명령어
// 아래는 아까 설치한 'express 라이브러리를 참고 해주세요' 라는 뜻
const express = require("express");
// 설치한 라이브러리로 '새로운 개체를 만들어주세요' 라는 뜻
const app = express();

// 서버띄울 포트번호, 띄운 후 실행할 코드
app.listen(9000, function () {
  console.log("listening on 9000");
});

// 누군가가 /pet 으로 방문을 하면 pet 관련된 안내문을 띄워주자
app.get("/beauty", function (req, res) {
  res.send("뷰티용품 쇼핑 페이지입니다.");
});

app.get("/pet", function (요청, 응답) {
  응답.send("펫용품 쇼핑 페이지입니다.");
});

// 서버 껐다 켰다 자동으로 해주는 친구
// npm install -g nodemon

// 홈페이지 접속('/')시 html 파일로 응답하는 방법

app.get("/write", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
