import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';

const proposals = [
  {proposalName: "firstOne", proposalIcon: "firstOne"},
  {proposalName: "two", proposalIcon: "firstOne"},
  {proposalName: "firstOne", proposalIcon: "firstOne"},
  {proposalName: "three", proposalIcon: "firstOne"},
]

class ProposalFeed extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      viewsTab: [],
      isTabClosed: false,
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(proposal) => {return this._renderProposalRow(proposal)} }
        />
      </View>


    )
  }

  _renderProposalRow(proposal){
    return(
      <View style={styles.rowProposalRoot}>
        <Text>
          {proposal.proposalIcon}
        </Text>
        <Text style={{marginRight: 40,}}>
          {proposal.proposalName}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowProposalRoot:{
    flexDirection: 'row',
  },
  proposalFeed:{
    flex:8,
    backgroundColor: '#9370DB'
  }
});


module.exports = ProposalFeed
