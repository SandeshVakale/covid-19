import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { SearchableFlatList } from 'react-native-searchable-list'
import CountryView from '../Components/CountryView'
import BackButton from '../Components/BackButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CountriesScreenStyle'
import { Colors } from '../Themes'

class CountriesScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  render () {
    const { summary } = this.props
    return (
      <View style={styles.container}>
        <View style={[styles.backgroundImage, { backgroundColor: Colors.ember }]} />
        <TextInput
          style={styles.sectionText}
          placeholder={'Search Country'}
          placeholderTextColor={Colors.silver}
          onChangeText={searchTerm => this.setState({ searchTerm })}
        />
        <SearchableFlatList
          searchAttribute={'Country'}
          searchTerm={this.state.searchTerm}
          data={summary.payload.Countries}
          containerStyle={{ flex: 1 }}
          renderItem={({ item }) => <CountryView key={item.slug} data={item} onPress={() => this.props.navigation.navigate('DetailCountryScreen', {item})} />}
          keyExtractor={item => item.slug}
        />
        <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
          <BackButton onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.summary
  }
}

export default connect(mapStateToProps, null)(CountriesScreen)
