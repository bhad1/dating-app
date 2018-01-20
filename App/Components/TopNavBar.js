/**
 * Created by bhadaway on 1/18/18.
 */
import React, { Component } from 'react'
import { Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//styles
import styles from './Styles/TopNavBarStyles'

export default class TopNavBar extends Component {

  render () {

    return (
      <View style={styles.TopNavBarContainer}>
        <View style={styles.leftTopNavBar}>
          <Icon name='cog' style={styles.leftTopNavBarIcon} size={23} color='black' />
        </View>
        <View style={styles.middleTopNavBar}>
          <Text style={styles.middleTopNavBarText}>Harmony</Text>
        </View>
        <View style={styles.rightTopNavBar}>
          <Icon name='comment' style={styles.rightTopNavBarIcon} size={23} color='black' />
        </View>
      </View>
    )
  }
}
