import React, { Component } from 'react';
import {Dimensions, ScrollView, PropTypes, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import CategoryMenu from "./CategoryMenu.js"
import ProposalFeed from "./ProposalFeed.js"

import LeftSideMenu from "./SideMenu.js";

class Body extends Component {
  render() {
    const menu = <CategoryMenu />;

    return (
      <View style={{flex:8}}>
      <LeftSideMenu menu={menu} openMenuOffset = {80} edgeHitWidth={100} >
      <ProposalFeed />
      </LeftSideMenu>
      </View>

    );
  }
}

const styles = StyleSheet.create({
});


module.exports = Body
