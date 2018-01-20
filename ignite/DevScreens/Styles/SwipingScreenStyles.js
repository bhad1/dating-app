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
    flex: 12
  },
  ProfileImageContainer: {
    flex: 1,
    margin: 10
  },
  SwipePicture: {
    flex: 1,
    borderRadius: 15,
    width: 'auto'
  },
  ProfileSummaryContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }






  // premade styles
  // container: {
  //   marginBottom: 36,
  //   paddingTop: Metrics.section
  // },
  // logo: {
  //   height: Metrics.images.logo,
  //   width: Metrics.images.logo,
  //   resizeMode: 'contain',
  //   marginTop: Metrics.doubleBaseMargin
  // },
  // buttonsContainer: {
  //   flexDirection: 'row',
  //   flex: 1
  // },
  // centered: {
  //   alignItems: 'center'
  // },
  // componentButton: {
  //   borderColor: Colors.border,
  //   borderTopWidth: 1,
  //   borderRightWidth: 1,
  //   borderBottomWidth: 1
  // },
  // apiButton: {
  //   borderColor: Colors.border,
  //   borderRightWidth: 1,
  //   borderBottomWidth: 1
  // },
  // usageButton: {
  //   borderColor: Colors.border,
  //   borderTopWidth: 1,
  //   borderBottomWidth: 1
  // },
  // deviceButton: {
  //   borderColor: Colors.border,
  //   borderRightWidth: 1,
  //   borderTopWidth: 1
  // },
  // sectionText: {
  //   textAlign: 'center',
  //   fontFamily: Fonts.base,
  //   fontSize: 14,
  //   marginHorizontal: Metrics.baseMargin,
  //   lineHeight: 30,
  //   marginVertical: Metrics.doubleBaseMargin,
  //   color: Colors.text
  // },
  // banner: {
  //   position: 'absolute',
  //   width: Metrics.screenWidth,
  //   backgroundColor: Colors.banner,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 36
  // },
  // bannerLabel: {
  //   ...Fonts.style.h5,
  //   fontSize: 12,
  //   color: Colors.snow
  // }
})
