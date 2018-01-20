import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import SwipingScreen from './SwipingScreen'

export default class DevscreensButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Test Login
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <SwipingScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
  }
}
