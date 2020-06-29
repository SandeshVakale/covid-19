import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { SearchableFlatList } from 'react-native-searchable-list'
import CountryView from '../Components/CountryView'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CountriesScreenStyle'
import { Colors } from '../Themes'

class CountriesScreen extends Component {
  render () {
    const { summary } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
        <SearchableFlatList
          searchAttribute={'Country'}
          searchTerm={''}
          data={summary.payload.Countries}
          containerStyle={{ flex: 1 }}
          renderItem={({ item }) => <CountryView data={item} />}
          keyExtractor={item => item.id}
        />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesScreen)
