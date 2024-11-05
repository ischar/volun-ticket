import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontProvider } from "./contexts/FontContext";
import { MainScreen } from "./screens/MainScreen.jsx";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  // 스플래시 화면 자동 숨기기 방지
  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // 스플래시 화면이 자동으로 사라지지 않도록 설정
    loadResourcesAndDataAsync(); // 리소스나 데이터를 불러오는 함수 호출
  }, []);

  // 앱 로딩이 완료되면 스플래시 화면 숨기기
  const loadResourcesAndDataAsync = async () => {
    try {
      // 리소스 불러오기, 데이터 로딩 등 비동기 작업 실행
      // 예: await loadFonts() 또는 await fetchData()

      // 필요한 모든 작업이 완료되면 스플래시 화면을 숨깁니다.
      await SplashScreen.hideAsync();
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <FontProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontProvider>
  );
}
