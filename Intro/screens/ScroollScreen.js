import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

export default function ScroollScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ScroollScreen Próximamente...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});