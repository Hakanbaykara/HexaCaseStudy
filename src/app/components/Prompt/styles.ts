import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
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
    color: colors.white,
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
    color: colors.white,
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
  },
  innerGradient: {
    height: 175,
    borderRadius: 20,
  },
  input: {
    height: 175,
    color: "white",
    fontSize: 16,
    padding: 12,
  },
});
