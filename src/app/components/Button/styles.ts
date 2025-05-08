import { Dimensions, StyleSheet } from "react-native";
import colors from "@/theme/colors";

const { width: screenWidth } = Dimensions.get("window");
const horizontalMargin = screenWidth * 0.0615;
const buttonWidth = screenWidth - 2 * horizontalMargin;

export const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: 56,
    borderRadius: 50,
    marginBottom: 12,
    position: "absolute",
    bottom: 12,
    left: horizontalMargin,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 17,
    lineHeight: 22,
  },
  stars: {
    height: 20,
    width: 20,
  },
  gradient: {
    flex: 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
  },
});
