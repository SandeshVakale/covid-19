import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import Flag from 'react-native-flags'
import styles from './Styles/CountryViewStyle'
import ColoredData from './ColoredData'
import { Colors } from '../Themes'
import PieChart from './PieChart'
import moment from 'moment'
import RoundedButton from './RoundedButton'

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
    const {data, onPress} = this.props
    return (
      <View style={styles.container}>
        <Flag
          style={styles.flag}
          code={data.CountryCode}
          size={32}
        />
        <View style={{justifyContent: 'space-around', flexDirection: 'row'}} >
          <Text style={[styles.sectionText, {fontWeight: 'bold'}]}>{data.Country}</Text>
          <Text style={styles.sectionText}>{moment(data.Date).format('MMMM Do YYYY')}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
          <View style={{ flexDirection: 'column', paddingLeft: 5 }} >
            <ColoredData color={Colors.error} text={'Total Deaths: ' + data.TotalDeaths} />
            <ColoredData color={Colors.green} text={'Total Recovered: ' + data.TotalRecovered} />
            <ColoredData color={Colors.blue} text={'New Confirmed: ' + data.NewConfirmed} />
            <ColoredData color={Colors.yellow} text={'New Deaths: ' + data.NewDeaths} />
            <ColoredData color={Colors.bloodOrange} text={'New Recovered: ' + data.NewRecovered} />
          </View>
          <PieChart global={data} radius={50} innerRadius={40} />
        </View>
        <RoundedButton text={'By Date'} onPress={onPress} />
      </View>
    )
  }
}
