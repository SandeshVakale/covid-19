import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList } from 'react-native'
import { connect } from 'react-redux'
import Flag from 'react-native-flags'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import DayOneActions from '../Redux/DayOneRedux'
import DetailCountryView from '../Components/DetailCountryView'

// Styles
import styles from './Styles/DetailCountryScreenStyle'
import { Colors } from '../Themes'

class DetailCountryScreen extends Component {
  componentDidMount () {
    const {item} = this.props.navigation.state.params
    const { getDayOne } = this.props
    getDayOne(item.Slug)
  }

  render () {
    const {item} = this.props.navigation.state.params
    const { dayone } = this.props
    if (dayone.fetching === false && dayone.error === null && dayone.payload) {
      return (
        <View style={styles.container}>
          <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
          <Flag
            style={styles.flag}
            code={item.CountryCode}
            size={32}
          />
          <Text style={[styles.sectionText, { fontSize: 28 }]}>{item.Country}</Text>
          <FlatList data={dayone.payload} renderItem={(item) => <DetailCountryView data={item} />} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
          <ActivityIndicator style={{ alignSelf: 'center' }} />
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    dayone: state.dayone
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDayOne: (slug) => dispatch(DayOneActions.dayOneRequest(slug))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailCountryScreen)
