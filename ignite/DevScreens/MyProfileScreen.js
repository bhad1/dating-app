import React, { Component } from 'react'
import { ScrollView, Text, Image, View} from 'react-native'

// Screens
import TopNavBar from '../../App/Components/TopNavBar.js'

import { Images } from './DevTheme'

import TouchableItem from "react-navigation/src/views/TouchableItem";

// Styles
import styles from './Styles/MatchesScreenStyles'

class MyProfileScreen extends React.Component {
  numberOfExpiringConnections = 16;
  goBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={styles.MyProfileScreenContainer}>

      </View>
    )
  }
}
export default MyProfileScreen

