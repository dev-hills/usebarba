import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   sfpro: require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
  // });
  const loaded = true;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(Auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(Onboarding)" options={{ headerShown: false }} />
    </Stack>
  );
}
