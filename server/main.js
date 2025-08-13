const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 메인 라우트 - index.html 파일을 불러와서 제공
app.get('/', (req, res) => {
  try {
    // index.html 파일을 읽어옴
    const htmlPath = path.join(process.cwd(), 'server', 'index.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // 템플릿 변수 치환 (${PORT}를 실제 포트 번호로 변경)
    htmlContent = htmlContent.replace(/\$\{PORT\}/g, PORT);

    res.send(htmlContent);
  } catch (error) {
    console.error('index.html 파일을 읽는 중 오류 발생:', error);
    res.status(500).send('서버 오류가 발생했습니다.');
  }
});

// About 페이지
app.get('/about', (req, res) => {
  try {
    // about.html 파일을 읽어옴
    const htmlPath = path.join(process.cwd(), 'server', 'about.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // 템플릿 변수 치환 (${PORT}를 실제 포트 번호로 변경)
    htmlContent = htmlContent.replace(/\$\{PORT\}/g, PORT);

    res.send(htmlContent);
  } catch (error) {
    console.error('about.html 파일을 읽는 중 오류 발생:', error);
    res.status(500).send('서버 오류가 발생했습니다.');
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT}에서 실행 중입니다.`);
  console.log(`📱 Expo 앱에서 이 URL로 접속해보세요!`);
});
