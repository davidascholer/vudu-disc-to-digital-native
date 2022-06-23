import 'react-native-gesture-handler';

import React, { useState } from 'react';

import AppNavigator from './app/navigation/AppNavigator';

import AppContext from './app/config/context';

const App = () => {

  const [userData, setUserData] = useState({});

  return (
    <AppContext.Provider value={{
      userData,
      setUserData
    }} >
      <AppNavigator />
    </AppContext.Provider>

  )
}

export default App;

/*
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
*/