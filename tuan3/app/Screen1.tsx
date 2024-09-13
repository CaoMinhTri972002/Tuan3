import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import React from 'react';

export default function Screen1() {
    return (
        <View style={styles.container}>
            <View style={{flex:1, justifyContent:'center', top:50}}>
               <Image source={require('../assets/images/Ellipse 8.png')} 
                 style ={{width:140, height:140}}>

            </Image>
            </View>

            <View style={{flex:2, justifyContent:'center',
             alignItems:'center' , top: 50}}>
         
              <Text style={{fontSize:25, fontWeight:'bold'}}>Grow Your</Text>
              <Text style={{fontSize:25, fontWeight:'bold'}}>Bussiness</Text>
            </View>


            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}} >We will help you to grow your businessusing</Text>
               <Text  style={{fontSize:15,fontWeight:'bold'}}> online server</Text>
            </View>



            <View style={{flex:1, flexDirection:'row'}}>
                <Pressable style={{backgroundColor:'#E3C000',borderRadius:10,width:119, height:48, justifyContent:'center', alignItems:'center', right:50}}><Text>LOGIN</Text></Pressable>
                <Pressable style={{backgroundColor:'#E3C000',borderRadius:10,width:119, height:48, justifyContent:'center', alignItems:'center', left:50}}><Text>SIGN UP</Text></Pressable>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#00CCF9'
    },
     styles1:{
        
     }
});