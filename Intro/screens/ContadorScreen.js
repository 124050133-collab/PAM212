//1. Import zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import React, {useState} from 'react';

// 2. Zona de componentes
export default function App() {

  const[contador, setContador]=useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Contador:  </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}>
      <Button color="blue" title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button color="orange" title="Disminuir" onPress={()=>setContador(contador-1)}/>
      <Button color="red" title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// 3. Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fd5fbff',
    alignItems: 'center', //mueve los componentes en el eje horizontalmente o eje x
    justifyContent: 'center',
  },

  texto:{
    color: '#154661ff',
    fontSize: 30,
    fontFamily: 'Timer New Roman',
    fontStyle:'italic',
    textDecorationLine: 'line-through',
  },

  texto2:{
    color: '#005685ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },

  contenedorBotones:{
    marginTop:25,
    flexDirection: 'row',
    gap: 15,
  },

});
