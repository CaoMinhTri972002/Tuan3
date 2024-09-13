import { StyleSheet, Text,TextInput, View, Image, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Import đúng

export default function Screen4() {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5','#00CCF9']} 
      style={styles.container}
    >
      <View style={{flex:1, justifyContent:'center', top:50}}>
         <Text style= {{fontSize: 80}} >CODE</Text>
      </View>

      <View style={{flex:2, justifyContent:'center', alignItems:'center', top: 50}}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>VERIFICATION</Text>
      </View>

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:15, fontWeight:'bold'}}>Nhập mã OTP đã gửi tới</Text>
        <Text style={{fontSize:15, fontWeight:'bold'}}>++849092605798</Text>
      </View>

      <View style={{flexDirection:'row'}}>
        <input style={{height:50 , width:50}}  />
        <input style={{height:50 , width:50}} />
        <input style={{height:50 , width:50}}  />
        <input style={{height:50 , width:50}}  />
        <input style={{height:50 , width:50}}  />
        <input style={{height:50 , width:50}} />
      </View>

      <View style={{flex:1,justifyContent:'center', alignItems:'center' }}>
        <Pressable style={{backgroundColor:'#E3C000', borderRadius:10, width:305, height:45, justifyContent:'center', alignItems:'center'}}>
          <Text>XÁC NHẬN MÃ</Text>
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