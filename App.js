import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Frontend/Login';
import Cursos from './Frontend/Cursos';
import Registro from './Frontend/Registro';
import RecuperarContra from './Frontend/RecuperarContra';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cursos" component={Cursos} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Recuperar" component={RecuperarContra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
