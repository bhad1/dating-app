import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View >
        {/*<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />*/}
        {/*<ScrollView style={styles.center}>*/}
          {/*<View style={styles.centered}>*/}
            {/*<Image source={Images.launch} style={styles.logo} />*/}
          {/*</View>*/}

          <View style={styles.loginButtonContainer} >
            <DevscreensButton />
          </View>

        {/*</ScrollView>*/}
      </View>
    )
  }
}
