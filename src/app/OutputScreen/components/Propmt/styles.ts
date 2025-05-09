import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  promptContainer: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  gradientWrapper: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "transparent",
  },
  blurContainer: {
    borderRadius: 12,
    overflow: "hidden",
  },
  innerGradient: {
    borderRadius: 12,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.75,
    zIndex: 0,
    backgroundColor: "#27272A",
  },
  promptTitleContainer: {
    flexDirection: "row",
    width: "100%",
    paddingTop: 12,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title2: {
    fontFamily: "Manrope_700Bold",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
    color: colors.Dark50,
  },
  copyMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
  },
  copyImage: {
    height: 16,
    width: 16,
  },
  text: {
    fontFamily: "Manrope_400Regular",
    fontSize: 11,
    lineHeight: 13,
    textAlign: "center",
    color: colors.Dark400,
  },
  propmt: {
    paddingHorizontal: 12,
    marginTop: 12,
    fontFamily: "Manrope_400Regular",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "left",
    color: colors.Dark50,
  },
  fontContainer: {
    alignSelf: "flex-start",
    marginLeft: 12,
    marginVertical: 12,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: colors.Dark51,
  },
  fontText: {
    fontFamily: "Manrope_400Regular",
    fontSize: 12,
    lineHeight: 16,
    color: colors.Dark50,
  },
});
