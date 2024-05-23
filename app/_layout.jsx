import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    "regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "medium": require("../assets/fonts/Urbanist-Medium.ttf"),
    "semibold": require("../assets/fonts/Urbanist-SemiBold.ttf"),
    "bold": require("../assets/fonts/Urbanist-Bold.ttf"),
    "light": require("../assets/fonts/Urbanist-Light.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
};

const RootLayoutNav = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" options={{animationTypeForReplace: 'push', animation:'ios'}} />
      <Stack.Screen name="signup" options={{animationTypeForReplace: 'push', animation:'ios'}} />
      <Stack.Screen name="(tabs)" options={{animationTypeForReplace: 'push', animation:'fade'}} />
    </Stack>
  );
};

export default RootLayout;
