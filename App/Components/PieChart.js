import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/PieChartStyle'
import Pie from 'react-native-pie'
import { Colors } from '../Themes'

export default class PieChart extends Component {
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

  /* NewConfirmed: 191909
NewDeaths: 4873
NewRecovered: 106636
TotalConfirmed: 9905480
TotalDeaths: 502735
TotalRecovered: 4944906 */

  render () {
    const { global } = this.props
    console.log(global)
    return (
      <View style={styles.container}>
        <View style={styles.subContainer} >
          <Pie
            radius={80}
            innerRadius={60}
            sections={[
              {
                percentage: (global.TotalDeaths / global.TotalConfirmed) * 100,
                color: Colors.error
              },
              {
                percentage: (global.TotalRecovered / global.TotalConfirmed) * 100,
                color: Colors.green
              },
              {
                percentage: (global.NewConfirmed / global.TotalConfirmed) * 100,
                color: Colors.blue
              },
              {
                percentage: (global.NewDeaths / global.TotalConfirmed) * 100,
                color: Colors.yellow
              },
              {
                percentage: (global.NewRecovered / global.TotalConfirmed) * 100,
                color: Colors.bloodOrange
              }
            ]}
            dividerSize={0}
            strokeCap={'butt'}
          />
        </View>
        <Text style={styles.sectionText}>Total Cases: {global.TotalConfirmed}</Text>
      </View>
    )
  }
}
