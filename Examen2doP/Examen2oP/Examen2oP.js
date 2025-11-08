import { Text, StyleSheet, View, Button, Alert, ImageBackground, Animated, TextInput, ScrollView } from "react-native-web";
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
                        

                    )
                }
            </ScrollView>
        </View>
    );
}