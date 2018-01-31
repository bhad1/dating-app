/**
 * Created by bhadaway on 1/18/18.
 */
import React, {Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
// An All Components Screen is a great way to dev and quick-test components
import { Platform, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
//styles
import styles from './Styles/TopNavBarStyles'
import TouchableItem from "react-navigation/src/views/TouchableItem";

export default class TopNavBar extends Component {

  render() {
    let leftIcon = this.props.leftIcon;
    let leftIconJSX;
    let middleText = this.props.middleText;
    let rightIcon = this.props.rightIcon;
    let rightIconJSX;

    let RenderLeftIconJSX = () => {
      switch (leftIcon) {
        case 'chevron-left':
          return <TouchableItem onPress={this.props.goBack}><Icon name='chevron-left' style={styles.leftTopNavBarIcon} size={23} color='black'/></TouchableItem>;
          break;
        case 'cog':
          return <TouchableItem onPress={() => this.props.navigation.navigate('MyProfileScreen')} ><Icon name='cog' style={styles.leftTopNavBarIcon} size={23} color='black'/></TouchableItem>;
          break;
        default:
          return <View></View>;
      }
    }

    let RenderRightIconJSX = () => {
      switch (rightIcon) {
        case 'comment':
          return <TouchableItem onPress={() => this.props.navigation.navigate('MatchesScreen')}><Icon name='comment' style={styles.rightTopNavBarIcon} size={23} color='black'/></TouchableItem>;
          break;
        default:
          return <View></View>;
      }
    }


    return (
      <View style={styles.TopNavBarContainer}>
        <View style={styles.leftTopNavBar}>
          <RenderLeftIconJSX />
        </View>
        <View style={styles.middleTopNavBar}>
          <Text style={styles.middleTopNavBarText}>{middleText}</Text>
        </View>
        <View style={styles.rightTopNavBar}>
          <RenderRightIconJSX />
        </View>
      </View>
    )
  }
}
