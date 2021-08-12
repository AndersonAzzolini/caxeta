import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './pages/inicio';
import Lista from './pages/lista';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio" headerMode='none' >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Lista" component={Lista} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;