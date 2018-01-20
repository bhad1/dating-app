import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../Themes/'

export default StyleSheet.create({
  TopNavBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  leftTopNavBar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  middleTopNavBar: {
    flex: 1,
    alignItems: 'center'
  },
  rightTopNavBar: {
    flex: 1,
    alignItems: 'flex-end'
  },
  middleTopNavBarText: {
    fontSize: 20
  },
  leftTopNavBarIcon: {
    marginLeft: 10
  },
  rightTopNavBarIcon: {
    marginRight: 10
  }
})
