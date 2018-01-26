/**
 * Created by bhadaway on 1/18/18.
 */
import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

//styles
import styles from './Styles/ProfileSummaryStyles'

export default class ProfileSummary extends Component {

  render() {

    return (
      <View style={styles.ProfileSummary}>
        <View style={styles.ProfileSummaryDetails}>
          <Text style={styles.ProfileSummaryName}>Bryan
            <Text style={styles.ProfileSummaryAge}>, 24</Text>
          </Text>
          <Text style={styles.ProfileSummaryJob}>Stand up comedian at AMY SHUME</Text>
          <Text style={styles.ProfileSummaryUniversity}>University of AMY</Text>
        </View>
      </View>
    )
  }
}
