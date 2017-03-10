import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, TextInput, Image} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import CircleSwipe from '../components/CircleSwipe.js'


class LauncherScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>

        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          style={styles.input}/>
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          style={styles.password}/>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already a member</Text>
        </TouchableOpacity>

      </View>

      <CircleSwipe />


      </ViewContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  password: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 30
  },
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginBottom: 10,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white',
    alignSelf: "center"
  },
  circles: {
    color: "white",
    marginLeft: 5
  },
});

module.exports = LauncherScreen
