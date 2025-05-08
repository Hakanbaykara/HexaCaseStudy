import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  main: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  imageContainer: {
    width: 70,
    height: 70,
    position: "relative",
  },
  alertIcon: {
    position: "absolute",
    height: 32,
    width: 32,
    zIndex: 2,
    top: 19,
    left: 19,
  },
  opacityBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.7,
    backgroundColor: colors.Red100,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    zIndex: 1,
  },
  mockImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    position: "absolute",
  },
});
