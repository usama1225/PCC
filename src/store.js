import { View,TouchableOpacity ,Text,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const Store = () => {
  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
   
    
  ] = useCamera();
  
 
  return (
    <View style={{flex:1}}>
      <View style={{flex:2}}>
        <RNCamera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{ flex: 1}}
        autoFocus={autoFocus}
      />
      <TouchableOpacity style={styles.camButton}>
        
      </TouchableOpacity>
      </View>
      <View  style={{flex:2, backgroundColor:'green'}}>
        <Text>Hellow world</Text>
      </View>
       </View>
  )};
const styles=StyleSheet.create({
  
  camButton: {
    height:60,
    width:60,
    backgroundColor:'white',
    borderRadius:60,
    alignSelf:'center' 
  }
})


export default Store

