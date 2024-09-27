import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login'; // Asegúrate de que la ruta sea correcta
import Cursos from './Cursos'; // Asegúrate de que la ruta sea correcta
import { TouchableOpacity, Text } from 'react-native';
import Evaluaciones from './Evaluaciones';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4c669f' }, // Fondo de la barra de navegación
          headerTintColor: '#fff', // Color del texto de la barra de navegación
          headerTitleStyle: { fontWeight: 'bold' }, // Estilo del título
        }}
      >
        <Stack.Screen
          name="Curso"
          component={Cursos}
          options={({ navigation }) => ({
            title: 'Curso',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Login</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: 'Login',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Curso')}
                style={{ marginLeft: 15 }}
              >
                
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
      <Stack.Screen
          name="Evaluacion"
          component={Evaluaciones}
          options={({ navigation }) => ({
            title: 'Evaluacion',
            center: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Evaluacion')}
                style={{ marginRight: 15 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Evaluaciones</Text>
              </TouchableOpacity>
            ),
          })}
        />

    </NavigationContainer>
  );
};

export default AppNavigator;
