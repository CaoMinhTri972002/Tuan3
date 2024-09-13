import { StyleSheet, Text,TextInput, View, Image, Pressable } from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

export default function Screen3() {
  return (
    <LinearGradient
         colors={['#C7F4F6', '#D1F4F6', '#E5F4F5','#00CCF9']}
         style={styles.container}
    >
        <View style={{flex:1, justifyContent:'center', top:50}}>
        <Image 
          source={require('../assets/images/lock-152879 1.png')} 
          style={{width:140, height:140}}
        />
        </View>

        <View style={{flex:2, justifyContent:'center', alignItems:'center', top: 50}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Forget</Text>
        <Text style={{fontSize:25, fontWeight:'bold'}}>Password</Text>
        </View>

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>Provide your account’s email for which you </Text>
        <Text style={{fontSize:15, fontWeight:'bold'}}>want to reset your password</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/images/Layer x0020 1.png')} ></Image>
          <TextInput style={{width:305, height:45, borderWidth:1 }} placeholder='Email'></TextInput>
           </View>

         <View style={{flex:1,justifyContent:'center', alignItems:'center' }}>
         <Pressable style={{backgroundColor:'#E3C000', borderRadius:10, width:305, height:45, justifyContent:'center', alignItems:'center'}}>
          <Text>NEXT</Text>
        </Pressable>
        </View>
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
