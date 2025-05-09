import { ImageBackground, View } from "react-native";
import { styles } from "./styles";

const backgroundImage = require("../../assets/PurpleBackground.png");

const PurpleBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.safeArea}>{children}</View>
    </ImageBackground>
  );
};

export default PurpleBackground;
