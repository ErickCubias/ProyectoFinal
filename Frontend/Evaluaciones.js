import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Datos de ejemplo para los curso
const courses = [
  { id: '1', title: 'Consultar nota de React Native' },
  { id: '2', title: 'Consultar nota de JavaScript' },
  { id: '3', title: 'Consultar nota de Diseño UX/UI' },
  // Agrega más cursos aquí
];

const Evaluaciones = () => {
  // Función para renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.evaluacionItem}>
      <Text style={styles.evaluacionTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#fff']}  // Colores del gradiente
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Evaluaciones</Text>
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </LinearGradient>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // Fondo transparente para el contenedor interno
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  evaluacionItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  evaluacionTitle: {
    fontSize: 18,
    color: '#333',
  },
});

export default Evaluaciones;
