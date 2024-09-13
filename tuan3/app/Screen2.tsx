import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'

export default function Screen2() {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5','#00CCF9']}
      style={styles.container}
    >
      <View style={{flex:1, justifyContent:'center', top:50}}>
        <Image 
          source={require('../assets/images/Ellipse 8.png')} 
          style={{width:140, height:140}}
        />
      </View>

      <View style={{flex:2, justifyContent:'center', alignItems:'center', top: 50}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Grow Your</Text>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Business</Text>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>We will help you to grow your business using</Text>
        <Text style={{fontSize:15, fontWeight:'bold'}}>online server</Text>
      </View>

      <View style={{flex:1, flexDirection:'row'}}>
        <Pressable style={{backgroundColor:'#E3C000', borderRadius:10, width:119, height:48, justifyContent:'center', alignItems:'center', right:50}}>
          <Text>LOGIN</Text>
        </Pressable>
        <Pressable style={{backgroundColor:'#E3C000', borderRadius:10, width:119, height:48, justifyContent:'center', alignItems:'center', left:50}}>
          <Text>SIGN UP</Text>
        </Pressable>
      </View>
      <Text style={{fontSize:15, fontWeight:'bold'}}>HOW WE WORK ?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
});
