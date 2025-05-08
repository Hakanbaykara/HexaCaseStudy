import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  titleMain: {
    paddingVertical: 19,
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 20,
    lineHeight: 25,
    color: colors.Dark50,
  },
  suprizeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  supriseText: {
    fontFamily: "Manrope_400Regular",
    fontSize: 13,
    lineHeight: 18,
    color: colors.Dark50,
  },
  gradientWrapper: {
    height: 175,
    borderRadius: 20,
    overflow: "hidden",
  },
  blurContainer: {
    height: 175,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
  },
  focused: {
    borderColor: "white",
  },
  innerGradient: {
    height: 175,
    borderRadius: 20,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.75,
    zIndex: 0,
    backgroundColor: "#27272A",
  },
  input: {
    position: "relative",
    height: 175,
    color: "white",
    fontSize: 16,
    lineHeight: 21,
    padding: 12,
  },
  charCount: {
    position: "absolute",
    left: 12,
    bottom: 12,
  },
  charCountText: {
    fontSize: 12,
    lineHeight: 13,
    color: colors.Dark500,
    letterSpacing: 0,
  },
});
