import React, { Component } from 'react'
import { ScrollView, Text, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import SummaryActions from '../Redux/SummaryRedux'
import PieChart from '../Components/PieChart'
import FullButton from '../Components/FullButton'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/LaunchScreenStyles'
import ColoredData from '../Components/ColoredData'

class LaunchScreen extends Component {
  componentDidMount () {
    const { summaryRequest } = this.props
    summaryRequest()
  }

  render () {
    console.log('props', this.props)
    const { summary } = this.props
    if (summary.fetching === false && summary.error === null && summary.payload) {
      let global = summary.payload.Global
      return (
        <View style={styles.mainContainer}>
          <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
          <ScrollView style={styles.container}>
            <View style={styles.section}>
              <Text style={[styles.sectionText, { fontSize: 36 }]}>
                Covid-19
              </Text>
              <PieChart global={global} />
              <ColoredData color={Colors.error} text={'Total Deaths: ' + global.TotalDeaths} />
              <ColoredData color={Colors.green} text={'Total Recovered: ' + global.TotalRecovered} />
              <ColoredData color={Colors.blue} text={'New Confirmed: ' + global.NewConfirmed} />
              <ColoredData color={Colors.yellow} text={'New Deaths: ' + global.NewDeaths} />
              <ColoredData color={Colors.bloodOrange} text={'New Recovered: ' + global.NewRecovered} />
              <RoundedButton text={'rounded'} />
            </View>
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
          <ActivityIndicator style={styles.centered} />
        </View>
      )
    }
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
