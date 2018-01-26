import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  SwipingScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopNavBar: {

  },
  ProfileImageSection: {
    flex: 15
  },
  ProfileImageContainer: {
    flex: 1,
    margin: 10
  },
  SwipePicture: {
    flex: 1,
    borderRadius: 6,
    width: 'auto'
  },
  ProfileSummaryContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfileSummary: {
    backgroundColor: 'black',
    height: 85,
    width: 330,
    borderRadius: 6,
  }

})
