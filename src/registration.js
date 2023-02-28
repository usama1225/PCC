import { Text, View, StyleSheet, Image, SafeAreaView,TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'


const Registration= ({navigation}) => {
  const [playerName, setPlayerName]= useState();
  const [playerPassword, setPlayerPassword]= useState();
  const [playerEmail, setPlayerEmail]= useState();
  const [playerNumber, setPlayerNumber]= useState();
  const SignUpPressed = ()=>{
    Alert.alert(playerEmail)
  }
return(
<ScrollView
      style={{flex: 2, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
         
  <View> 
        <View style={{ height:'40%' , width:'100%' ,backgroundColor:'#ffafcc',justifyContent:'center',alignItems:'center'}}>
        <Image
        style={{height:200, width:200 }}
        source={require("./assets/logo2.png")}
        />
        <Text style={{fontSize:28,fontWeight:'bold',color:'#ffff'}}>Paradise Cricket Team</Text>
      </View>
      <SafeAreaView style={{height:'60%', width:'100%', backgroundColor:'#ffafcc'}}>
      <TextInput
          style={styles.input}
          placeholder="Name"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerName(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Email"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerEmail(text)}
          />

<TextInput
          style={styles.input}
          placeholder="Password"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerPassword(text)}
          />
          <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          
          />
          <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          textAlign='center'
          placeholderTextColor={'#023047'}
          backgroundColor='#ffc8dd'
          onChangeText={(text)=> setPlayerNumber(text)}
          />
          <TouchableOpacity onPress={SignUpPressed}>
            <Text style={styles.button}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <Text style={{padding:40,color:'black', }}> have an account? <TouchableOpacity onPress={()=>{navigation.navigate('login')}}><Text style={{color:'red',fontSize:15, paddingTop:10}}>Login</Text></TouchableOpacity> </Text>
          
      </SafeAreaView>
      
      </View>
      </ScrollView>
    
);
  }
const styles=StyleSheet.create({
  input:{
    height: 50,
    margin:18,
    marginHorizontal:30,
    borderWidth: 2,
    borderRadius:25,
    padding: 10,
    borderColor:'#edede9',

  },
  button:{
    height:45,
    backgroundColor:'#f1faee',
    borderWidth: 0,
    borderRadius:15,
    padding:8,
    textAlign:'center',
    fontSize:18,
    marginHorizontal:50,
    marginTop:20,
    color:'#e76f51'

  }
});


export default Registration