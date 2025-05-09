import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";

import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { styles } from "./styles";

const copyImage = require("@/assets/copy.png");

const title2 = "Prompt";
const text = "Copy";
const text1 =
  "A professional logo for Harrison & Co. Law Firm, using balanced serif fonts";
const text2 = "Monogram";

const Prompt = () => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(text1);
  };

  return (
    <View style={styles.promptContainer}>
      <LinearGradient
        // Bottom gradient
        colors={["#943DFF", "#2938DC"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradientWrapper}
      >
        {/* BLUR + DARK OVERLAY */}
        <BlurView intensity={15} tint="dark" style={styles.blurContainer}>
          <View style={styles.innerGradient} />
          <View style={styles.promptTitleContainer}>
            <Text style={styles.title2}>{title2}</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyMain}>
              <Image style={styles.copyImage} source={copyImage} />
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.propmt}>{text1}</Text>
          <View style={styles.fontContainer}>
            <Text style={styles.fontText}>{text2}</Text>
          </View>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

export default Prompt;
