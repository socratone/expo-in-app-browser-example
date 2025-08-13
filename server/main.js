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
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About - 간단한 HTML 서버</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 600px;
                margin: 0 auto;
                padding: 2rem;
                background: #f5f5f5;
                line-height: 1.6;
            }
            .container {
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .back-button {
                display: inline-block;
                background: #007bff;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-bottom: 2rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="/" class="back-button">← 홈으로 돌아가기</a>
            <h1>About</h1>
            <p>이 서버는 Expo 프로젝트의 인앱 브라우저 테스트를 위해 만들어진 간단한 Node.js 서버입니다.</p>
            <h3>기능:</h3>
            <ul>
                <li>간단한 HTML 페이지 제공</li>
                <li>API 엔드포인트 테스트</li>
                <li>실시간 시간 표시</li>
                <li>반응형 디자인</li>
            </ul>
        </div>
    </body>
    </html>
  `);
});

// 404 에러 핸들링
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 - 페이지를 찾을 수 없습니다</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                text-align: center;
                padding: 2rem;
                background: #f8f9fa;
            }
            .error-container {
                max-width: 500px;
                margin: 0 auto;
                background: white;
                padding: 2rem;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .back-button {
                display: inline-block;
                background: #007bff;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
                margin-top: 1rem;
            }
        </style>
    </head>
    <body>
        <div class="error-container">
            <h1>404</h1>
            <p>요청하신 페이지를 찾을 수 없습니다.</p>
            <a href="/" class="back-button">홈으로 돌아가기</a>
        </div>
    </body>
    </html>
  `);
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT}에서 실행 중입니다.`);
  console.log(`📱 Expo 앱에서 이 URL로 접속해보세요!`);
});
