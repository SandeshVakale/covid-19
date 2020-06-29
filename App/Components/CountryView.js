import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CountryViewStyle'
import ColoredData from './ColoredData'
import { Colors } from '../Themes'
import PieChart from './PieChart'

export default class CountryView extends Component {
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

  render () {
    const {data} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.sectionText}>{data.Country}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
          <View style={{ flexDirection: 'column', paddingLeft: 5 }} >
            <ColoredData color={Colors.error} text={'Total Deaths: ' + data.TotalDeaths} />
            <ColoredData color={Colors.green} text={'Total Recovered: ' + data.TotalRecovered} />
            <ColoredData color={Colors.blue} text={'New Confirmed: ' + data.NewConfirmed} />
            <ColoredData color={Colors.yellow} text={'New Deaths: ' + data.NewDeaths} />
            <ColoredData color={Colors.bloodOrange} text={'New Recovered: ' + data.NewRecovered} />
          </View>
          <PieChart global={data} />
        </View>
      </View>
    )
  }
}
