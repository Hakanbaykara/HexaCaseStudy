import { useEffect } from "react";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";

import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from "@expo-google-fonts/manrope";

import * as SplashScreen from "expo-splash-screen";

// Keep splash screen
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // Manrope fonts
  const [fontsLoaded] = useFonts({
    Manrope_800ExtraBold,
    Manrope_700Bold,
    Manrope_500Medium,
    Manrope_400Regular,
  });

  // Keep splash screen while fonts are loading
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#09090B");
    }
  }, []);

  // Turn null if fonts are not loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="screens/OutputScreen/index"
        options={{ title: "Output", headerShown: false }}
      />
    </Stack>
    // <PurpleBackground>
    //   <Slot />
    // </PurpleBackground>
  );
}
