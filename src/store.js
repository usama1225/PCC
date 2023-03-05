import { View,TouchableOpacity ,Text,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState,useEffect, useRef } from 'react'
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

const Store = () => {
  const [
    { cameraRef, type, ratio, autoFocus, autoFocusPoint, isRecording },
   
    
  ] = useCamera();
  
 
  return (
    <View style={styles.container}>
      <View style={{flex:0.5}}>
        <RNCamera
        ref={cameraRef}
        autoFocusPointOfInterest={autoFocusPoint.normalized}
        type={type}
        ratio={ratio}
        style={{ flex: 1 }}
        autoFocus={autoFocus}
      />
      </View>
      <View  style={{flex:2}}>
      </View>
       </View>
  )};
const styles=StyleSheet.create({
  container:{
    flex:2,
   
    

  }
})


export default Store

