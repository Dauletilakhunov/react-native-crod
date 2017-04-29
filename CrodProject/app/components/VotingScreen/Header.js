/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header of Voting Screen
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions,View, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux'
const profilePhoto = require("../../../img/categories/social.png")
import proposals from '../../data-manager/proposals'
const skipIcon = require("../../../img/skip-icon.png")

class Header extends Component {

  render() {

    return (
            <View style={styles.header}>
            <TouchableOpacity style={styles.profileContainer} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }}>
            <Image source={profilePhoto} style={styles.profilePhoto}/>
            </TouchableOpacity>
            <Text style={styles.daysLeftTxt}> 12 days left </Text>

            <TouchableOpacity style={styles.skipIconContainer}>
            <Image style={styles.skipIcon}source={skipIcon}  />
            </TouchableOpacity>
            </View>
    )
  }

}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: "#88B3D9",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  profileContainer: {
    flex: 1,
    marginLeft: 15,
  },
  profilePhoto: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: '#88B3D9'
  },
  daysLeftTxt: {
    flex: 2,
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginRight:20,
  },
  skipIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  skipIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginRight: 15
  },

});

module.exports = Header
