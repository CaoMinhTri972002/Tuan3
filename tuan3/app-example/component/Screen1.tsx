import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Screen1() {
    return (
        <View style={styles.container}>
            <Text>gg</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
});
