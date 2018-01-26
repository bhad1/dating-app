import {StyleSheet, Dimensions} from 'react-native'
import {Metrics, Colors, Fonts, ApplicationStyles} from '../DevTheme/'

export default StyleSheet.create({
  MatchesScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  MatchesSection: {
    flex: 3,
  },
  MatchesTextContainer: {
    flex: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1
  },
  MatchesText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10
  },
  MatchesContainer: {
    flex: 4,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  MatchContainer: {
    width: 110,
    height: '100%',
    padding: 6,
    paddingTop: 0,
    marginRight: -13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MatchPicture: {
    width: '81%',
    height: '90%',
    borderRadius: 40,
    // justifyContent: 'center',
    // alignContent: 'center',
    // margin: 'auto'
  },
  MessagesMatchPicture: {
    width: '81%',
    height: '90%',
    borderRadius: 45,
  },
  MessagesSection: {
    flex: 12
  },
  ConversationsTextContainer: {
    flex: 1,
    borderTopColor: 'grey'
  },
  ConversationsText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10
  },
  MessagesScrollViewContainer: {
    flex: 16
  },
  MessageContainer: {
    height: 100,
    width: "100%",
    flexDirection: 'row',
    // borderBottomColor: 'grey',
    // borderBottomWidth: 1
  },
  MessageProfilePictureContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageTextSpacer: {
    flex: .1
  },
  MessageDetails: {
    flex: 12,
  },
  MessagePersonNameContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  MessagePersonNameText: {
    fontWeight: 'bold',
    fontSize: 17
  },
  MessageTextContainer: {
    flex: 2,
    paddingRight: 11
  },
  MessageText: {
    flex: 1,
  }

})
