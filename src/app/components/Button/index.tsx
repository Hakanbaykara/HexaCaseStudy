import type { FC } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

type ButtonProps = {
  onClick: () => void;
};

const starsImage = require("@/assets/stars.png");

const Button: FC<ButtonProps> = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
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
