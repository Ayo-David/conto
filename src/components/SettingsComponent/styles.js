import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  option: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  subTitle: {
    fontSize: 14,
    opacity: 0.6
  },
  divisionLine: {
    backgroundColor: colors.grey,
    height: 0.6,
  },
  bodyTouchable: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 4,
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  viewBodyText: {
    paddingLeft: 20,
  }
})