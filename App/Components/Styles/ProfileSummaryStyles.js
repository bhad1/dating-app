import {StyleSheet} from 'react-native'
import {Colors, Metrics, Fonts} from '../../Themes/'

export default StyleSheet.create({
  ProfileSummary: {
    backgroundColor: 'white',
    height: 85,
    width: 330,
    borderRadius: 6
  },
  ProfileSummaryDetails: {
    flex: 1,
    padding: 10
  },
  ProfileSummaryName: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
  },
  ProfileSummaryAge: {
    fontSize: 14,
  },
  ProfileSummaryJob: {
    flex: 1,
    fontSize: 14,
  },
  ProfileSummaryUniversity: {
    flex: 1,
    fontSize: 14,
  }
})
