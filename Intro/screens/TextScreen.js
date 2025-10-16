import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

export default function TextScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const enviarNombre = () => {
  if (nombre.trim() === '') {
     Alert.alert('Error', 'Por favor ingresa un nombre');
    setMensaje('Por favor ingresa un nombre');
  } else {
     Alert.alert('¡Hola!', 'Bienvenidooo, ' + nombre + '!');
    setMensaje('Bienvenidooo, ' + nombre + '!');
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button title="Enviar" onPress={enviarNombre} />
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});