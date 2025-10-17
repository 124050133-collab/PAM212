import { useState, useEffect, useRef } from 'react' 

import { Text, StyleSheet, View, Pressable, Animated } from 'react-native'

export default function SwitchButton({ temporal, isButton }) {

  const toggle = useRef(new Animated.Value(temporal ? 1 : 0)).current
 
  const [value, setValue] = useState(temporal)

  useEffect(() => {
    Animated.timing(toggle, {
      toValue: value ? 1 : 0, // a dónde queremos animar: 1 = ON, 0 = OFF
      duration: 250,          // duración de la animación en milisegundos
      useNativeDriver: false  // no usamos driver nativo porque animamos posiciones
    }).start() // iniciamos la animación
  }, [value]) // se ejecuta solo cuando 'value' cambia

  const animatedStyles = {
    transform: [
      {
        translateX: toggle.interpolate({
          inputRange: [0, 1],         // rango de valor del estado animado
          outputRange: [2.5, 25.4],   // posición del círculo en px (inicio y fin)
          extrapolate: 'clamp'        // evita que el círculo se mueva fuera del rango
        })
      }
    ]
  }

  return (
    <View style={styles.container}>
      {isButton ? (
        // Si es interactivo, usamos Pressable para detectar clicks/taps
        <Pressable onPress={() => setValue(!value)}>
          {/* Contenedor del switch */}
          <View style={[styles.button, { backgroundColor: value ? '#14949c' : '#adadad' }]}>
            {/* Círculo blanco que se mueve */}
            <Animated.View style={[styles.circle, animatedStyles]} />
            {/* Texto "ON"/"OFF" dentro del switch */}
            <View style={[styles.titlebox, { left: value ? 8 : 27 }]}>
              <Text style={styles.titletext}>{value ? 'on' : 'off'}</Text>
            </View>
          </View>
        </Pressable>
      ) : (
        // Si no es interactivo, solo mostramos el switch sin Pressable
        <View style={[styles.button, { backgroundColor: value ? '#14949c' : '#adadad' }]}>
          <Animated.View style={[styles.circle, animatedStyles]} />
          <View style={[styles.titlebox, { left: value ? 8 : 27 }]}>
            <Text style={styles.titletext}>{value ? 'on' : 'off'}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center',     // centra horizontalmente
    borderRadius: 5
  },
  button: {
    width: 48,               // ancho del switch
    height: 24.8,            // alto del switch
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 35,        // hace el switch ovalado
    overflow: 'hidden'       // para que el círculo no sobresalga del contenedor
  },
  circle: {
    width: 20,               // diámetro del círculo
    height: 20,
    borderRadius: 35,        // círculo perfecto
    position: 'absolute',    // posición absoluta dentro del switch
    backgroundColor: '#fff', // color del círculo
    left: 0                   // posición inicial en OFF
  },
  titlebox: {
    position: 'absolute'     // para poder mover el texto con left
  },
  titletext: {
    color: '#ffffff',        // texto blanco
    fontWeight: 'bold',      // negrita para visibilidad
    fontSize: 7.5,           // tamaño pequeño para caber en el switch
    paddingBottom: 1.5       // ajuste fino vertical
  }
})