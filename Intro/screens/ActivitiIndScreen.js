import { Text, StyleSheet, View, Button, ActivityIndicator, } from 'react-native-web';
import React, {useState} from 'react';

export default function ActivitiIndScreen() {
  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {setCargando(true);setTimeout(() => setCargando(false), 3000)};;
  const detenerCarga = () => {setCargando(false);}

  return (
    <View style={styles.container}>
      <Text style = {styles.texto}>Practica ActivitiIndScreen</Text>

      <View style = {styles.boton}>
        <Button color = 'green'
          title = {cargando ? 'Cargando...' : 'Iniciar carga'}
          onPress={iniciarCarga}
          />
    </View>

    <View style = {styles.boton}>
      <Button color = 'red'
      title = "Detener carga"
      onPress={detenerCarga} />
    </View>

    <View style = {styles.carga}>
      <ActivityIndicator
      size = "large"
      color = "black"
      animating={cargando}
      hidesWhenStopped={true}/>

      <Text styles={styles.textoCarga}>
        {cargando ? 'Cargando datos...' : 'Presiona el boton verde :)'}
      </Text>
    </View></View>

  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
},
texto: {
    color: "#000000ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
},
boton: {
    width: 220,
    marginBottom: 16,
},
carga: {
    alignItems: 'center',
    marginTop: 20,
},
textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#000000',
},
});
