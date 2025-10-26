import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './Botones/BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScroollScreen from './ScroollScreen';
import ScrollScreen2 from './ScrollScreen2';
import ActivitiIndScreen from './ActivitiIndScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import Repaso1 from './Repaso1';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textInput':
      return <TextScreen />;
    case 'image':
      return <ImageScreen/>;
    case 'scroll':
      return <ScroollScreen/>;
    case 'scroll2':
      return <ScrollScreen2/>;
    case 'actInd':
      return <ActivitiIndScreen/>
    case 'flatList':
      return <FlatListScreen/>
    case 'modal':
      return <ModalScreen/>
    case 'repaso1':
      return <Repaso1/>
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>
          <View style={styles.botonesContainer}>
            <Button title="Práctica Contador" onPress={() => setScreen('contador')} />
            <Button title="Práctica Botones" onPress={() => setScreen('botones')} />
            <Button title="Práctica Text" onPress={() => setScreen('textInput')} />
            <Button title="Práctica ImageBackground & SplashScreen" onPress={() => setScreen('image')} />
            <Button title="Práctica Scroll" onPress={() => setScreen('scroll')} />
            <Button title="Práctica Scroll2" onPress={() => setScreen('scroll2')} />
            <Button title="Práctica ActivitiIndicator" onPress={() => setScreen('actInd')} />
            <Button title="Práctica FlatList & SectionList" onPress={() => setScreen('flatList')} />
            <Button title="Práctica Modal" onPress={() => setScreen('modal')} />
            <Button title="Práctica Repaso 1" onPress={() => setScreen('repaso1')} />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff', // fondo suave azulado
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#185681ff', // azul oscuro elegante
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  botonesContainer: {
    width: '100%',
    gap: 16,
    alignItems: 'center',
  },
  button: {
    width: '85%',
    backgroundColor: '#14949C',
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

