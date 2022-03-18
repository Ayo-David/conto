import { StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'
export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  imageHolder: {
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  chooseText: {
    color: colors.primary,
    textAlign: 'center',
    paddingBottom: 10
  },
  content: {
    paddingHorizontal: 20,
  },
  nameWrapper: {
    paddingVertical: 20
  },
  contactName: {
    fontSize: 25,
    fontWeight: '600',
  },
  seperator: {
    backgroundColor: colors.grey,
    height: 0.5,
    opacity: 0.7,
  },
  actions: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  callCenter: {
    flexDirection: 'column',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  callText: {
    color: colors.primary,
    fontSize: 16,
    paddingTop: 4,
  },
  phonePane: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  phoneNoContainer: {
    flexDirection: 'row',
  },
  phoneNumber: {
    paddingLeft: 20,
    flexDirection: 'column',
    fontSize: 16,
    alignContent: 'flex-start'
  },
  phoneIcons: {
    flexDirection: 'row',
  },
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    width: 150,
  },

})