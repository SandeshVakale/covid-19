import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/BackButtonStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors } from '../Themes'

export default class BackButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  componentDidMount () {
    Icon.loadFont()
  }

  render () {
    const { onPress } = this.props
    return (
      <View style={{ padding: 10, width: 50, borderRadius: 25, backgroundColor: Colors.silver }}>
        <Icon name='reply' size={30} color={Colors.error} onPress={onPress} />
      </View>
    )
  }
}
