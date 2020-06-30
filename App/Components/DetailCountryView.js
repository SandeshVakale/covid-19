import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/DetailCountryViewStyle'
import ColoredData from './ColoredData'
import { Colors } from '../Themes'
import Pie from 'react-native-pie'
import moment from 'moment'

export default class DetailCountryView extends Component {
  render () {
    const { data } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.sectionText}>{moment(data.item.Date).format('MMMM Do YYYY')}</Text>
        <View style={styles.miniContainer}>
          <View style={styles.subContainer} >
            <Pie
              radius={50}
              innerRadius={40}
              sections={[
                {
                  percentage: (data.item.Deaths / data.item.Confirmed) * 100,
                  color: Colors.error
                },
                {
                  percentage: (data.item.Recovered / data.item.Confirmed) * 100,
                  color: Colors.green
                },
                {
                  percentage: (data.item.Active / data.item.Confirmed) * 100,
                  color: Colors.blue
                }
              ]}
              dividerSize={0}
              strokeCap={'butt'}
          />
            <Text style={styles.sectionText}>Confirmed: {data.item.Confirmed}</Text>
          </View>
          <View >
            <ColoredData text={'Deaths: ' + data.item.Deaths} color={Colors.error} />
            <ColoredData text={'Recovered: ' + data.item.Recovered} color={Colors.green} />
            <ColoredData text={'Active: ' + data.item.Active} color={Colors.blue} />
          </View>
        </View>
      </View>
    )
  }
}
