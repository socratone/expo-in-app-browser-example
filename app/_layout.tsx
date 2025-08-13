import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

/** 로컬 IP 변경 필요 */
const IP = 'http://192.168.0.29';
const URL = `${IP}:3000`;

export default function App() {
  const colorScheme = useColorScheme();

  /**
   * WebView에서 받은 메시지를 처리하는 함수
   * HTML에서 postMessage로 보낸 메시지를 받아서 처리
   */
  const handleWebViewMessage = async (event: any) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      if (message.type === 'OPEN_IN_APP_BROWSER') {
        // expo-web-browser로 인앱 브라우저 열기 (새 인스턴스 방지)
        await WebBrowser.openBrowserAsync(message.url, {
          presentationStyle: WebBrowser.WebBrowserPresentationStyle.AUTOMATIC,
          controlsColor: '#000000',
          toolbarColor: '#ffffff',
          showInRecents: false, // 최근 앱 목록에서 숨김
          createTask: false, // 새 태스크 생성 방지 (Android)
        });
      }
    } catch (error) {
      console.error('WebView 메시지 처리 중 오류:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <WebView
        source={{ uri: URL }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        onMessage={handleWebViewMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
});
