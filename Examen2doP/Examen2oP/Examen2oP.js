import { Text, StyleSheet, View, Button, Alert, ImageBackground, Animated, TextInput, ScrollView, Switch } from "react-native-web";
import React from 'react';

const DATA = [
    {id:1},
    {id:2},
    {id:3},
];

const SimpleHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Me rindo</Text>
        </View>
    );
};


const SimpleScrollView = () => {
    return (
        <View style={styles.container}>
            <SimpleHeader/>
            <ScrollView
            horizontal = {true}
            showHorinzontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
            >
                  {DATA.map(val => {
                    return (
                     <View style={styles.card} key = {val.id}>
                        <ImageBackground
                         source ={require("../assets/Pelota_tenis.png")}
                         style={styles.background}
                         resizeMode="cover"
                        ></ImageBackground>
                        <Text style={styles.subtitle}> Pelota de Tenis </Text>
                        <Text style={styles.subtitle}> 07/11/2025</Text>
                        <Text style={styles.subtitle}> Con esta pelota se promete varias horas de diversión y sin desgaste rapido, asegurando calidad </Text>
                     </View>
                      );
                 })}
            </ScrollView>
        </View>
    );
};

export default SimpleScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  header: {
    height: 120,
    backgroundColor: '#181D31',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    color: '#fff',
    fontWeigt: 'bold',
    fontSize: 20,
  },
  card: {
    height: 300,
    width: 350,
    backgroundColor: '#E6DDC4',
    marginLeft: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
  
  background: { 
    flex: 1, 
    width: "100%", 
    height: "100%", 
    justifyContent: "center", 
    alignItems: "center" 
   },
});
