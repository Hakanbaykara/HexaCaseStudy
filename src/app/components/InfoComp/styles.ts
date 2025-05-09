import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  spinnerMain: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    backgroundColor: colors.Dark1100,
  },
  gradientWrapper: {
    flex: 1,
    height: 70,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
  },
  errorWrapper: {
    flex: 1,
    height: 70,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.Red1000,
  },
  blurContainer: {
    height: 70,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 14.5,
  },
  innerGradient: {
    height: 70,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.75,
    zIndex: 0,
    backgroundColor: "#27272A",
    paddingHorizontal: 12,
    paddingVertical: 14.5,
  },
  text: {
    color: colors.Dark50,
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 16 - 16 / 100,
    lineHeight: 21,
  },
  detailText: {
    color: colors.Dark500,
    fontFamily: "Manrope_500Medium",
    fontSize: 13 - 13 / 100,
    lineHeight: 18,
  },
  detailErrorText: {
    color: colors.Dark300,
    fontFamily: "Manrope_500Medium",
    fontSize: 13 - 13 / 100,
    lineHeight: 18,
  },
  mockImage: {
    height: 70,
    width: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  flex: {
    flex: 1,
  },
});
