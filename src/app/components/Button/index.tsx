import type { FC } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./styles";
import type { ButtonProps } from "@/types/app";

const starsImage = require("@/assets/stars.png");

const Button: FC<ButtonProps> = ({ onClick, error }) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[styles.button, { bottom: insets.bottom + 33 }]}
      onPress={onClick}
      disabled={error}
    >
      <LinearGradient
        colors={["#2938DC", "#943DFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>Create</Text>
        <Image source={starsImage} style={styles.stars} resizeMode="cover" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
