import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images } from '../Themes'
import SummaryActions from '../Redux/SummaryRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  componentDidMount () {
    const { summaryRequest } = this.props
    summaryRequest()
  }

  render () {
    console.log('props', this.props)
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.backgroundImage, {backgroundColor: Colors.ember}]} />
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={[styles.sectionText, { fontSize: 36 }]}>
              Covid-19
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    summaryRequest: () => dispatch(SummaryActions.summaryRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
