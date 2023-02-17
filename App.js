// library imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useState } from 'react';

// navigation stacks
import NavigationStack from './src/navigation/NavigationStack';
import TabNavigationStack from './src/navigation/TabNavigationStack';

const Stack = createStackNavigator();

export const userContext = createContext({
  auth: false,
  setAuth: () => {}
})

export default function App() {
  const [auth, setAuth] = useState(false);

  const authContextValue = {
    auth,
    setAuth
  }

  return (
    <userContext.Provider value={authContextValue}>
      <NavigationContainer>
        {auth ? <TabNavigationStack/> : <NavigationStack/>}
      </NavigationContainer>
    </userContext.Provider>
  );
}
