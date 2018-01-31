import {StyleSheet, Dimensions} from 'react-native'
import {Metrics, Colors, Fonts, ApplicationStyles} from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  ProfileScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  TopNavBar: {
    flex: 1
  },
  ProfileSection: {
    flex: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileContainerBorder: {
    borderRadius: 10,
    width: '95%',
    height: '97%',
    borderWidth: 3,
    borderColor: '#d6d7da',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfileContainer: {
    borderRadius: 10,
    width: '97%',
    height: '98%',
  },
  ProfileScrollView: {
    borderRadius: 10,
  },
  PhotosContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 'auto',
    height: 200,
  },
  PhotosRowOne: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 7
  },
  PhotosRowTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Photo1Section: {
    width: '32%'
  },
  Photo1Container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  Photo2Section: {
    width: '32%'
  },
  Photo2Container: {
    flex: 1,
    backgroundColor: 'red'
  },
  Photo3Section: {
    width: '32%'
  },
  Photo3Container: {
    flex: 1,
    backgroundColor: 'green'
  },
  Photo4Section: {
    width: '32%'
  },
  Photo4Container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  Photo5Section: {
    width: '32%'
  },
  Photo5Container: {
    flex: 1,
    backgroundColor: 'black'
  },
  Photo6Section: {
    width: '32%'
  },
  Photo6Container: {
    flex: 1,
    backgroundColor: 'brown'
  },
  ProfilePicture: {
    width: '100%',
    height: '100%'
  },
  ProfilePersonalDetailsSection: {
    width: 'auto',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ProfilePersonalDetailsContainer: {
    width: '95%',
    height: 50,
  },
  NameAndAgeContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  NameText: {
    fontWeight: 'bold',
    fontSize: 17
  },
  OccupationContainer: {
    flex: 1
  },
  EducationContainer: {
    flex: 1,
  },
  ProfileOtherDetailsSection: {
    height: 250,
  },
  CurrentLocationSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CurrentLocationContainer: {
    width: '95%',
  },
  CurrentLocationTitleContainer: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  SharedFriendsSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SharedFriendsContainer: {
    width: '95%',
  },
  SharedFriendsTitleContainer: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  OtherInfoSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OtherInfoContainer: {
    width: '95%',
  },
  OtherInfoTitleContainer: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  OtherInfoText: {

  },

})
