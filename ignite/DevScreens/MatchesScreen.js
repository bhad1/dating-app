import React, { Component } from 'react'
import { ScrollView, Text, Image, View} from 'react-native'

// Screens
import TopNavBar from '../../App/Components/TopNavBar.js'

import { Images } from './DevTheme'

import TouchableItem from "react-navigation/src/views/TouchableItem";

// Styles
import styles from './Styles/MatchesScreenStyles'

class MatchesScreen extends React.Component {
  numberOfExpiringConnections = 16;
  goBack = () => {
    this.props.navigation.goBack()
  }

  render () {
    return (
      <View style={styles.MatchesScreenContainer}>
        {/*top navbar, same one on all screens except with different icons and text*/}
        <TopNavBar style={styles.TopNavBar} goBack={this.goBack} leftIcon="chevron-left" middleText="Connections"/>
        {/* end top navbar*/}



        {/* horizontal scrolling matches list section, this is before a message happens, after a message is sent it will go the conversations section, or if the match expires before a message it will dissapear*/}
        <View style={styles.MatchesSection}>

          {/* just container for title of section*/}
          <View style={styles.MatchesTextContainer}>
            <Text style={styles.MatchesText}>Expiring Connections <Text>{this.numberOfExpiringConnections}</Text></Text>
          </View>
          {/* end title section*/}

          {/* container for actual matches that shows a bar for how long until the expire*/}
          <View style={styles.MatchesContainer}>
            <ScrollView horizontal={true}>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
              <View style={styles.MatchContainer}>
                <Image source={Images.datingProfileImage} style={styles.MatchPicture} resizeMode='stretch' />
              </View>
            </ScrollView>
          </View>
           {/*end actual matches section*/}

        </View>
        {/* end horizontal scrolling matches list section*/}



         {/*begin list of messages section*/}
        <View style={styles.MessagesSection}>

           {/*section for title, title text is 'conversations'*/}
          <View style={styles.ConversationsTextContainer}>
            <Text style={styles.ConversationsText}>Messages</Text>
          </View>
           {/*end title section*/}

          <View style={styles.MessagesScrollViewContainer}>
            <ScrollView>
              <TouchableItem onPress={() => this.props.navigation.navigate('MessageScreen')} style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </TouchableItem>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
              <View style={styles.MessageContainer}>
                <View style={styles.MessageProfilePictureContainer}>
                  <Image source={Images.datingProfileImage} style={styles.MessagesMatchPicture} resizeMode='stretch' />
                </View>
                <View style={styles.ImageTextSpacer}>

                </View>
                <View style={styles.MessageDetails}>
                  <View style={styles.MessagePersonNameContainer}>
                    <Text style={styles.MessagePersonNameText}>Kimberly</Text>
                  </View>
                  <View style={styles.MessageTextContainer}>
                    <Text style={styles.MessageText} ellipsizeMode='tail' numberOfLines={3}>Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers? Hey :) This is kind of weird but I guess Ill go ahead and ask. Why do you have 2 computers?</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

        </View>
         {/*end list of messages section*/}

      </View>
    )
  }
}
export default MatchesScreen

