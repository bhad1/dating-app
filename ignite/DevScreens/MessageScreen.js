import {GiftedChat} from 'react-native-gifted-chat'
import React, {Component} from 'react'
import {ScrollView, Text, Image, View} from 'react-native'

// Screens
import TopNavBar from '../../App/Components/TopNavBar.js'

import styles from './Styles/MessageScreenStyles'

class MessageScreen extends React.Component {
  state = {
    messages: [],
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <View style={styles.MessageScreenContainer}>
        <TopNavBar style={styles.TopNavBar} goBack={this.goBack} leftIcon="chevron-left" middleText="Kimberly"/>
        <View style={styles.MessageSection}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </View>
    )
  }
}

export default MessageScreen;
