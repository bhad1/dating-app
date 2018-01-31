import React, {Component} from 'react'
import {ScrollView, Text, Image, View} from 'react-native'

// Screens
import TopNavBar from '../../App/Components/TopNavBar.js'

import {Images} from './DevTheme'

import TouchableItem from "react-navigation/src/views/TouchableItem";

// Styles
import styles from './Styles/ProfileScreenStyles'

class MyProfileScreen extends React.Component {
  numberOfExpiringConnections = 16;
  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.ProfileScreenContainer}>
        <TopNavBar navigation={this.props.navigation} goBack={this.goBack} style={styles.TopNavBar}
                   leftIcon='chevron-left' middleText="Bryan" rightIcon='none'/>


        <View style={styles.ProfileSection}>
          <View style={styles.ProfileContainerBorder}>
            <View style={styles.ProfileContainer}>
              <ScrollView style={styles.ProfileScrollView}>
                <View style={styles.PhotosContainer}>
                  <View style={styles.PhotosRowOne}>
                    <View style={styles.Photo1Section}>
                      <View style={styles.Photo1Container}>
                        <Image source={Images.datingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                    <View style={styles.Photo2Section}>
                      <View style={styles.Photo2Container}>
                        <Image source={Images.myDatingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                    <View style={styles.Photo3Section}>
                      <View style={styles.Photo3Container}>
                        <Image source={Images.datingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                  </View>
                  <View style={styles.PhotosRowTwo}>
                    <View style={styles.Photo4Section}>
                      <View style={styles.Photo4Container}>
                        <Image source={Images.myDatingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                    <View style={styles.Photo5Section}>
                      <View style={styles.Photo5Container}>
                        <Image source={Images.datingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                    <View style={styles.Photo6Section}>
                      <View style={styles.Photo6Container}>
                        <Image source={Images.myDatingProfileImage} style={styles.ProfilePicture} resizeMode='stretch' />
                      </View>
                    </View>
                  </View>

                </View>


                <View style={styles.ProfilePersonalDetailsSection}>
                  <View style={styles.ProfilePersonalDetailsContainer}>
                    <View style={styles.NameAndAgeContainer}>
                      <Text style={styles.NameText}>Bryan, <Text>24</Text></Text>
                    </View>
                    <View style={styles.OccupationContainer}>
                      <Text>Investing analyst at Tendies Returns</Text>
                    </View>
                    <View style={styles.EducationContainer}>
                      <Text>AMY Tech Institute, 2016</Text>
                    </View>
                  </View>
                </View>


                <View style={styles.ProfileOtherDetailsSection}>
                  <View style={styles.CurrentLocationSection}>
                    <View style={styles.CurrentLocationContainer}>
                      <Text style={styles.CurrentLocationTitleContainer}>Location</Text>
                      <Text>Nashville, TN</Text>
                    </View>
                  </View>
                  <View style={styles.SharedFriendsSection}>
                    <View style={styles.SharedFriendsContainer}>
                      <Text style={styles.SharedFriendsTitleContainer}>Shared Friends</Text>
                      <Text>None</Text>
                    </View>
                  </View>
                  <View style={styles.OtherInfoSection}>
                    <View style={styles.OtherInfoContainer}>
                      <Text style={styles.OtherInfoTitleContainer}>Other Info</Text>
                      <Text style={styles.OtherInfoText}>I like to sing, play music, and dance, I have been apart of the
                        movement for many years. Although I do consider myself still growing up, I am also learning how
                        to be an adult.</Text>
                    </View>
                  </View>
                </View>


              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default MyProfileScreen

