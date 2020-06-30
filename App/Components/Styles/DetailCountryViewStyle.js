import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    borderColor: Colors.silver,
  },
  subContainer: {
    paddingVertical: 15,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  miniContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
})
