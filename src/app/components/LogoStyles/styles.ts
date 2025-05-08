import { StyleSheet } from "react-native";

import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  main: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  logoTitle: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 20,
    lineHeight: 25,
    color: colors.Dark50,
  },
  scrollViewContent: {
    paddingTop: 12,
    alignItems: "flex-start",
  },
  itemContainer: {
    alignItems: "center",
  },
  square: {
    width: 90,
    height: 90,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  selectedBorder: {
    borderWidth: 2,
    borderColor: colors.Dark50,
  },
  title: {
    marginTop: 6,
    fontFamily: "Manrope_400Regular",
    color: colors.Dark500,
    fontSize: 13,
    lineHeight: 18,
  },
  selectedTitle: {
    color: colors.Dark50,
    fontFamily: "Manrope_700Bold",
    fontSize: 13 - 13 / 100,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.75,
    zIndex: 0,
    borderRadius: 12,
    backgroundColor: "#27272A",
  },
  firstImageMain: {
    backgroundColor: "#2938DC",
    borderRadius: 12,
    position: "relative",
  },
  firstImageInner: {
    position: "absolute",
    width: 40,
    height: 40,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },
});
