import { useCallback, useEffect, useState } from 'react'
import WelcomeScreen from './welcome/WelcomeScreen'
import DashboardScreen from './dashboard/index'
import { SplashScreen } from 'expo-router'

const index = () => {
  const [appIsReady, setAppIsReady] = useState(false)
  const [isNewUser, setIsNewUser] = useState(true)

  useEffect(() => {
    // TODO("make `appIsReady` true when we have fetched all the data from the remote source")
    setAppIsReady(true)
  })

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if(isNewUser) {
    return <WelcomeScreen onLayout={onLayoutRootView} />
  } else {
    return <DashboardScreen onLayout={onLayoutRootView} />
  }
}

export default index