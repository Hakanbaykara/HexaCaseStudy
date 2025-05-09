import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "@/theme/colors";

const STATUS_BAR_HEIGHT =
  Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Dark1000,
    paddingTop: STATUS_BAR_HEIGHT,
    justifyContent: "flex-start",
  },
  titleMain: {
    width: "100%",
    paddingVertical: 19,
    alignItems: "center",
  },
  title: {
    color: colors.Dark50,
    lineHeight: 22,
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 17,
  },
  button: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  flex: {
    flex: 1,
  },
});
