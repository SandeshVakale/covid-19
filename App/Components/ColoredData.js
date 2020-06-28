import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ColoredDataStyle'

export default class ColoredData extends Component {
  // Prop type warnings
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

  render () {
    const { text, color } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: color }]} />
        <Text style={[styles.sectionText, { paddingHorizontal: 5 }]}>{text}</Text>
      </View>
    )
  }
}
