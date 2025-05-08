import { View, Image } from "react-native";
import { styles } from "./styles";

const alertCircle = require("@/assets/alertCircle.png");
const mockImage = require("@/assets/mockSmallImage.png");

const Alert = () => {
  return (
    <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image style={styles.mockImage} source={mockImage} />
        <View style={styles.opacityBox} />
        <Image style={styles.alertIcon} source={alertCircle} />
      </View>
    </View>
  );
};

export default Alert;
