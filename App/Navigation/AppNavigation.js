import { createAppContainer } from 'react-navigation'
import DetailCountryScreen from '../Containers/DetailCountryScreen'
import CountriesScreen from '../Containers/CountriesScreen'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DetailCountryScreen: { screen: DetailCountryScreen },
  CountriesScreen: { screen: CountriesScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
