import { Text, StyleSheet, View, Button, Alert, ImageBackground, Dimensions, Animated, TextInput, Switch, Platform } from 'react-native';
import React, { useEffect, useRef, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function SplashScreenPro() {
  const [showMain, setShowMain] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

const mostrarAlerta = (titulo, mensaje) => {
  if (Platform.OS === 'web') {
    alert(`${titulo}\n\n${mensaje}`); // Web
  } else {
    Alert.alert(titulo, mensaje); // Móvil
  }
};

const enviarDatos = () => {
  if (!aceptaTerminos) {
    mostrarAlerta('Términos no aceptados', 'Debes aceptar los términos y condiciones para continuar.');
    alert('Términos no aceptados'); 
    setMensaje('Términos no aceptados');
    return;
  }

  if (nombre.trim() === '' || correo.trim() === '') {
    mostrarAlerta('Error', 'Por favor completa todos los campos');
    alert('Error: Por favor completa todos los campos');
    setMensaje('Faltan campos por llenar');
    return;
  }

  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexCorreo.test(correo)) {
    mostrarAlerta('Correo no válido', 'Ingresa un correo electrónico válido (ejemplo: usuario@gmail.com)');
    alert('Correo no válido');
    setMensaje('Correo no válido');
    return;
  }

  mostrarAlerta('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`);
  alert(`Registro exitoso\nNombre: ${nombre}\nEmail: ${correo}`); 
  setMensaje('Datos enviados correctamente');
};

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, { toValue: 1, duration: 1200, useNativeDriver: false }),
      Animated.spring(scaleLogo, { toValue: 1, friction: 5, useNativeDriver: false }),
      Animated.timing(rotateLogo, { toValue: 1, duration: 1200, useNativeDriver: false }),
    ]).start();

    Animated.timing(slideText, { toValue: 0, duration: 1000, useNativeDriver: false, delay: 800 }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, { toValue: 0, duration: 800, useNativeDriver: false }).start(async () => {
        await SplashScreen.hideAsync();
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/cuidad_fondo.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.text}>¡Bienvenido!</Text>

          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresa tu correo"
            value={correo}
            onChangeText={setCorreo}
          />

          {/* ✅ Switch de términos */}
          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
          </View>

          <Button title="Enviar" onPress={enviarDatos} />
          <Text style={styles.mensaje}>{mensaje}</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/dados.png")}
        resizeMode="contain"
        style={[styles.logoImage, { opacity: fadeLogo, transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }] }]}
      />
      <Animated.Text style={[styles.text, { transform: [{ translateY: slideText }] }]}>
        ¡Pantalla de registro!
      </Animated.Text>
      <Animated.View
        style={[styles.loader, { opacity: fadeLogo, transform: [{ translateX: slideText.interpolate({ inputRange: [0, height / 2], outputRange: [0, -50] }) }] }]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000000ff", 
    justifyContent: "center", 
    alignItems: "center"
   },
  loader: { 
    width: 60, 
    height: 6, 
    backgroundColor: "#fff", 
    borderRadius: 3
   },
  logoImage: {
    width: 300, 
    height: 300, 
    marginBottom: 5 
   },
  background: { 
    flex: 1, 
    width: "100%", 
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center" 
   },
  content: { 
    backgroundColor: "rgba(218, 218, 218, 0.5)", 
    padding: 20, 
    borderRadius: 10, 
    width: '70%', 
    alignItems: 'center'
   },
  text: { 
    color: "white", 
    fontSize: 24, 
    marginBottom: 10, 
    textAlign: "center"
   },
  input: { 
    width: '80%', 
    borderWidth: 3, 
    borderColor: '#fff', 
    padding: 12, 
    borderRadius: 9, 
    marginBottom: 10
   },
  mensaje: { 
    marginTop: 20, 
    fontSize: 18, 
    color: '#fff', 
    textAlign: 'center'
   },
  switchContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    justifyContent: 'space-between', 
    width: '80%'
   },
  switchText: { 
    color: '#000', 
    fontSize: 16
   }
});
