import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  flag: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: -10
  }
})
