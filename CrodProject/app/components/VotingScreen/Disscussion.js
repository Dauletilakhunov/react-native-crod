/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Disscussion tab bar
*/
'use strict'

import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,ListView,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProposalVotes from './ProposalVotes';
import proposals from '../../data-manager/proposals'
const repliesIcon = require("../../../img/replies-icon.png")

const disscussion = [
  {profileImage: require("../../../img/notification/man3.png"),
   comment: "Yes, Facebook is totally awesome! It's so cool, you can connect with peepz all over your State and even all the way down to Oklahoma. I have more than 1000 friendz by now, duh!",
   fullName: 'Saba Saba',
   upvoted: 5,
   downvoted: 1,},
  {profileImage: require("../../../img/notification/woman1.png"),
   comment: "I believe there's many sides to this story and it's hard to depict the entire picture. It may look like are spending more time interacting through Facebook than in real life, but the time Americans spend behind their computers is significant anyway. I applaud Facebook for giving us the means to connect to people easily from a long distance and the ease of gathering people from an area. Also, it gives us a break whenever we're vegetating behind our office desks!",
   fullName: 'Coby Babani',
   upvoted: 10,
   downvoted: 2,},

]


class Disscussion extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(disscussion),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={{flex:1,}}
        dataSource={this.state.dataSource}
        renderRow={(disscussion, sectionID, rowID) => {return this._renderDisscussionRow(disscussion, sectionID, rowID)} }
        />

        <View style={styles.createDiscussion}>
        <TextInput style={styles.shareText} placeholder="your opinion counts" />
        <TouchableOpacity style={styles.shareButton} onPress={this.shareClicked}>
          <Text>Share</Text>
        </TouchableOpacity>
        </View>
      </View>

    )
  }

  _renderDisscussionRow(disscussion, sectionID, rowID){
    console.log(disscussion);
    return(
      <View style={[styles.disscussionContainer]}>

        <View style={styles.disscussionContainerTop}>

                <View style={styles.topBarContainer}>
                    <View style={styles.discussionImageContainer}>
                    <Image style={styles.profileImage} source={disscussion.profileImage}/>
                    <ProposalVotes isClickable={true}
                                   votedYes={disscussion.upvoted}
                                   style={styles.votes}
                                   votedNo={disscussion.downvoted}
                                   votedClicked={this.votedClicked}/>
                    </View>



                <View style={styles.commentContainer}>

                    <Text style={styles.fullNameText}>{disscussion.fullName} </Text>
                    <Text style={styles.commentText}>
                    {disscussion.comment}
                    </Text>
                </View>

                </View>

            <View style={styles.bottomBarCommentContainer}>
              <TouchableOpacity style={styles.replyTextContainer} onPress={this.replyClicked.bind(this, rowID)}>
                <Text style={styles.replyText}>Reply</Text>
                <Icon name="reply" style={styles.arrowIcon} size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.replyTextContainer} onPress={this.replyClicked.bind(this, rowID)}>
                <Text style={styles.replyText}>10</Text>
                <Image style={styles.repliesIcon} source={repliesIcon} />
              </TouchableOpacity>



            </View>

        </View>

        {disscussion.selected &&
          <View style={styles.replyContainer}>
          <TextInput style={styles.shareText} multiline={true} blurOnSubmit={true} placeholder="leave a reply" />
          <TouchableOpacity style={styles.shareButton} onPress={this.repliedToComment}>
            <Text>Reply</Text>
          </TouchableOpacity>
          </View>
        }

      </View>
    )
  }

  /*
    @param vote: {bolean} true: voted yes, false: voted no
    TODO: Add votes
  */
  votedClicked = (vote) =>{

  }

  /*
    When reply button clicked, it shows the TextInput on
    _renderDisscussionRow; it clones the database and put selected to true on
    rowID
    TODO: it is a bad practice to clone the rows for checking selected reply,
    check other solutions.
  */
  replyClicked = (rowID) => {
    var clone = disscussion.map((disscussion, i) => {
      return {
        ...disscussion,
        selected: i == rowID ? true : false
      }
    });
    this.setState({dataSource: this.state.dataSource.cloneWithRows(clone)})
  }

  /*
    When the user replied to a comment
    TODO: check for validation
    TODO: Add reply
    TODO: it is a bad practice to clone the rows for checking selected reply,
    check other solutions.
  */
  repliedToComment = () => {
    // Hide reply
    var clone = disscussion.map((disscussion, i) => {
      return {
        ...disscussion,
        selected: false
      }
    });
    this.setState({dataSource: this.state.dataSource.cloneWithRows(clone)})

  }

  shareClicked = () => {
    // TODO: If its not empty
    // TODO: Add Comments
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E9EBEE',
  },
  disscussionContainer: {
    flex:1,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5
  },
  createDiscussion: {
    flexDirection: 'row',
  },
  replyContainer:{
    borderWidth: 1,
    flexDirection: 'row',
  },
  shareText: {
    flex:1,
  },
  shareButton:{
    justifyContent: 'center'
  },
  disscussionContainerTop:{
    flex:1,
    alignItems: 'center',
  },
  votes: {
    justifyContent:'center',
    alignItems: 'center',
    paddingTop: 20,
    borderWidth: 1
  },
  profileImage: {

    width:70, height: 70,
    resizeMode: 'contain',
  },
  discussionImageContainer: {
    flex:1,
    alignItems: 'center'

  },
  topBarContainer: {
    flex:1,
    flexDirection: 'row',
  },
  commentContainer: {
    flex: 4,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  fullNameText: {
    fontSize: 20,
    fontFamily: 'Roboto'
  },
  commentText: {
    fontSize: 16,
    paddingTop: 15,
    fontFamily: 'Roboto'
  },
  bottomBarCommentContainer : {
    flexDirection: 'row',
    marginTop: 20,
  },
  replyTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderWidth: 1
  },
  replyText: {
    fontSize: 12,
    color: '#bcbcbb'
  },
  repliesIcon: {
    height: 21, width: 21,
    resizeMode: 'contain',
    tintColor: '#88B3D9'
  },
  arrowIcon: {
    marginLeft:2,
    color: '#bcbcbb'
  },
  votesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesImageContainer:{
    flex:1,
    marginRight: 10,
  },
  votesImage:{
    flex:1,
    width: null, height: null,
    resizeMode: 'contain',
  },
});

module.exports = Disscussion
