# Expo 인앱 브라우저 예제 📱

이 프로젝트는 Expo와 React Native를 사용하여 **WebView**와 **인앱 브라우저**의 차이점을 보여주는 예제 애플리케이션입니다.

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 서버 실행

로컬 Express 서버를 먼저 실행해야 합니다:

```bash
npm run server
```

서버가 `http://localhost:3000`에서 실행됩니다.

### 3. Expo 앱 실행

새 터미널에서 Expo 개발 서버를 시작합니다:

```bash
npm start
```

또는

```bash
npx expo start
```

실행 후 다음 옵션을 사용할 수 있습니다:

- **Android 에뮬레이터**에서 실행
- **iOS 시뮬레이터**에서 실행
- **Expo Go** 앱으로 QR 코드 스캔

## 📋 중요 설정

### IP 주소 변경

`app/_layout.tsx` 파일의 IP 주소를 본인의 로컬 IP로 변경해야 합니다:

```typescript
/** 로컬 IP 변경 필요 */
const IP = 'http://192.168.0.29'; // 여기를 본인의 IP로 변경
```

## 🌐 WebView vs 인앱 브라우저

### WebView

- **앱 내부에 웹 콘텐츠를 임베드**하는 방식
- 앱의 일부로 통합되어 네이티브 UI와 함께 표시
- JavaScript를 통해 앱과 웹 콘텐츠 간 양방향 통신 가능
- 사용자가 앱을 떠나지 않고 웹 콘텐츠 이용 가능

### 인앱 브라우저 (In-App Browser)

- **별도의 브라우저 인스턴스**를 앱 내에서 실행
- 완전한 브라우저 기능 제공 (주소창, 뒤로가기, 새로고침 등)
- 사용자가 외부 링크를 클릭했을 때 앱을 벗어나지 않고 브라우징 가능
- 브라우저 완료 후 원래 앱으로 자연스럽게 복귀

## 🛠 주요 기술 스택

- **Expo**: React Native 개발 플랫폼
- **React Native WebView**: 웹 콘텐츠 임베딩
- **expo-web-browser**: 인앱 브라우저 기능
- **Express.js**: 로컬 웹 서버
- **TypeScript**: 타입 안전성

## 📁 프로젝트 구조

```
├── app/
│   └── _layout.tsx          # 메인 앱 컴포넌트 (WebView 구현)
├── server/
│   ├── main.js             # Express 서버
│   ├── index.html          # 메인 웹 페이지
│   └── about.html          # About 페이지
└── package.json            # 프로젝트 설정 및 스크립트
```

## 🎯 사용법

1. 서버와 Expo 앱을 모두 실행
2. 앱에서 WebView로 로컬 서버 콘텐츠 확인
3. "인앱 브라우저로 열기" 버튼을 클릭하여 차이점 체험
4. 인앱 브라우저에서 외부 링크 탐색 후 앱으로 복귀
