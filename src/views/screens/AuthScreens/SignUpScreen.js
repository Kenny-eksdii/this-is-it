import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import Colors from '../../../utils/Colors';
import { SafeAreaView } from '../../components/FoodeaComponents';

const SignUpScreen = ({ navigation }) => {
  function handleLogin (){
    navigation.push("LoginScreen");
  }

  return (
    <SafeAreaView flex statusBarColor={'rgba(0, 0, 0, 0)'}>
    <View style = {styles.topcontainer}>
        <View style = {styles.inputContainer}>
      <Text style = {styles.titleText}>
          Sign Up
        </Text>
        <TextInput style = {styles.inputText}
         placeholder='Name: '/>
      </View>
      <View TextInput style = {styles.inputContainer}>
      <TextInput style = {styles.inputText} placeholder='Email: '/>
      <TextInput style = {styles.inputText} placeholder='Password: '/>
      </View>

      <View>
        <Text style={{marginTop: 10}} >I Agree to the Terms and Condition and Privacy Policy</Text>
      </View>

      <View style = {styles.buttonContainer}>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
          <Text style={{marginTop: 15}} color={Colors.primaryLight} center weight='medium' size={16}>Already have an Account? <Text color={Colors.red}>Log In</Text></Text>
      </TouchableOpacity>

      </View>
    </View>
    </SafeAreaView>
  )
}


export default SignUpScreen

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    backgroundColor: '#F5ABAB',
    alignItems: 'center',
    justifyContent: 'center',
  }, textContainer:{
    paddingVertical: 30,
  }, titleText: {
    fontWeight: '600',
    fontSize: 24,
  },inputContainer:{
    width: "80%"
  },
   inputText: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: 'black'
  }, textDate: {
    fontWeight: 'bold',
    fontSize: 12,
    margin: 10
  }, dateContainer: {
    flexDirection: 'row',
  }, dateInput: {
    backgroundColor: 'white',
    marginHorizontal: 7,
    borderRadius: 10,
    width: "20%",
    textAlign: 'center'
  },buttonContainer: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    
  },
  button: {
    backgroundColor:'white',
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'black'
  },
  buttonText: {},    
  loginContainer: {
    flexDirection: 'row',
  },
  preLoginText: {
    fontSize: 12,
  },
  loginPress: {
    
  },
  loginText: {
    fontSize: 12,
    fontWeight: '700',
    marginHorizontal: 5
  },
})