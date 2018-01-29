import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TabBarIOS } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
// Screens
import APITestingScreen from './APITestingScreen'
import ComponentExamplesScreen from './ComponentExamplesScreen'
import DeviceInfoScreen from './DeviceInfoScreen'
import MatchesScreen from './MatchesScreen'
import ThemeScreen from './ThemeScreen'
import FaqScreen from './FaqScreen'
import TopNavBar from '../../App/Components/TopNavBar.js'
import ProfileSummary from '../../App/Components/ProfileSummary'
import MessageScreen from './MessageScreen'
import Icon from 'react-native-vector-icons/FontAwesome';

import Swiper from 'react-native-swiper';

// Styles
import styles from './Styles/SwipingScreenStyles'
import styles2 from '../../App/Themes/ApplicationStyles'

class SwipingScreen extends React.Component {
  openSettings = () => {
    this.props.navigation.navigate('ComponentExamplesScreen')
  }

  openMatches = () => {
    this.props.navigation.navigate('MatchesScreen')
  }

  openApi = () => {
    this.props.navigation.navigate('APITestingScreen')
  }

  openTheme = () => {
    this.props.navigation.navigate('ThemeScreen')
  }

  openDevice = () => {
    this.props.navigation.navigate('DeviceInfoScreen')
  }

  openFaq = () => {
    this.props.navigation.navigate('FaqScreen')
  }

  render () {
    return (
      <View style={styles.SwipingScreenContainer}>
        <TopNavBar navigation={this.props.navigation} style={styles.TopNavBar} leftIcon='cog' middleText="App" rightIcon='comment' />

        <View style={styles.ProfileImageSection}>
          <View style={styles.ProfileImageContainer}>
            <Swiper style={styles.wrapper} horizontal={false}>
              <View style={styles.slide1}>
                <Image source={Images.myDatingProfileImage} style={styles.SwipePicture} resizeMode='stretch' />
              </View>
              <View style={styles.slide2}>
                <Image source={Images.datingProfileImage} style={styles.SwipePicture} resizeMode='stretch' />
              </View>
              <View style={styles.slide3}>
                <Image source={Images.myDatingProfileImage} style={styles.SwipePicture} resizeMode='stretch' />
              </View>
            </Swiper>
            <View style={styles.ProfileSummaryContainer}>
              <ProfileSummary/>
            </View>
          </View>

        </View>

      </View>
    )
  }
}

export default StackNavigator({
  SwipingScreen: {screen: SwipingScreen},
  MessageScreen: {screen: MessageScreen},
  APITestingScreen: {screen: APITestingScreen},
  ComponentExamplesScreen: {screen: ComponentExamplesScreen},
  DeviceInfoScreen: {screen: DeviceInfoScreen},
  MatchesScreen: {screen: MatchesScreen},
  ThemeScreen: {screen: ThemeScreen},
  FaqScreen: {screen: FaqScreen}
}, {
  cardStyle: {
    // opacity: 1,
    // backgroundColor: '#3e243f'
  },
  initialRouteName: 'SwipingScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        // backgroundColor: '#3e243f'
      }
    }
  }
})
