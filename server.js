const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 메인 라우트 - 간단한 HTML 페이지 제공
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>간단한 HTML 서버</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                color: white;
            }
            .container {
                background: rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            h1 {
                text-align: center;
                margin-bottom: 2rem;
                font-size: 2.5rem;
            }
            .info-card {
                background: rgba(255, 255, 255, 0.1);
                padding: 1.5rem;
                border-radius: 10px;
                margin: 1rem 0;
                border-left: 4px solid #4CAF50;
            }
            .button {
                display: inline-block;
                background: #4CAF50;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                margin: 10px;
                transition: background 0.3s;
            }
            .button:hover {
                background: #45a049;
            }
            .time {
                text-align: center;
                font-size: 1.2rem;
                margin-top: 2rem;
                opacity: 0.8;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Node.js 서버가 실행 중입니다!</h1>
            
            <div class="info-card">
                <h3>서버 정보</h3>
                <p><strong>포트:</strong> ${PORT}</p>
                <p><strong>URL:</strong> http://localhost:${PORT}</p>
                <p><strong>상태:</strong> 정상 작동 중 ✅</p>
            </div>

            <div class="info-card">
                <h3>테스트 링크</h3>
                <a href="/api/test" class="button">API 테스트</a>
                <a href="/about" class="button">About 페이지</a>
            </div>

            <div class="time">
                현재 시간: <span id="currentTime"></span>
            </div>
        </div>

        <script>
            // 실시간 시간 업데이트
            function updateTime() {
                const now = new Date();
                document.getElementById('currentTime').textContent = now.toLocaleString('ko-KR');
            }
            
            updateTime();
            setInterval(updateTime, 1000);
        </script>
    </body>
    </html>
  `);
});

// API 테스트 엔드포인트
app.get('/api/test', (req, res) => {
  res.json({
    message: '서버가 정상적으로 작동하고 있습니다!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
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
