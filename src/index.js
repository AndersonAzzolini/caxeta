import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './pages/inicio';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" headerMode='none' >
        <Stack.Screen name="Inicio" component={Inicio} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;