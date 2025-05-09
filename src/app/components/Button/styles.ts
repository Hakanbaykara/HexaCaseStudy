import { StyleSheet } from "react-native";
import colors from "@/theme/colors";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    height: 56,
    borderRadius: 50,
    left: 24,
    right: 24,
  },
  buttonText: {
    color: colors.Dark50,
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
