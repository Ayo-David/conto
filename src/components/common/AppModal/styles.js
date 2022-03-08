import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center'
  },
  modalView: {
    minHeight: 300,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  seperator: {
    backgroundColor: colors.grey,
    height: 0.5
  },
  modalBody: {
    minHeight: 200,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 7,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    alignItems: 'center',
    flexDirection: 'row',
  },

  termsView: {
    width: 5,
    height: 5,
    borderRadius: 100,
    backgroundColor: colors.grey,
  },

  footerSeparator: {
    height: 0.5,
    backgroundColor: colors.grey,
  },

  footerItems: {
    width: '100%',
    padding: 10,
  },

  footerText: {
    fontSize: 12,
  },

})