import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
// import ScrollScreen from './ScrollScreen';
import ActivitiIndScreen from './ActivitiIndScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'text':
      return <TextScreen />;
    case 'image':
      return <ImageScreen/>;
   // case 'scroll':
     // return <ScrollScreen/>;
    case 'actInd':
      return <ActivitiIndScreen/>
    case 'flatList':
      return <FlatListScreen/>
    case 'modal':
      return <ModalScreen/>
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>
          <View style={styles.botonesContainer}>
            <Button title="Práctica Contador" onPress={() => setScreen('contador')} />
            <Button title="Práctica Botones" onPress={() => setScreen('botones')} />
            <Button title="Práctica Text" onPress={() => setScreen('text')} />
            <Button title="Práctica ImageBackground & SplashScreen" onPress={() => setScreen('image')} />
            <Button title="Práctica ActivitiIndicator" onPress={() => setScreen('actInd')} />
            <Button title="Práctica FlatList & SectionList" onPress={() => setScreen('flatList')} />
            <Button title="Práctica Modal" onPress={() => setScreen('modal')} />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abd4efff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  botonesContainer: {
    gap: 12,
  },
});
