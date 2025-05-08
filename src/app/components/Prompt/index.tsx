import { Text, TextInput, View } from "react-native";
import { BlurView } from "expo-blur";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import PurpleBackground from "@/components/PurpleBackground";
import colors from "@/theme/colors";

const Prompt = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}) => {
  return (
    <PurpleBackground>
      <View style={styles.titleMain}>
        <Text style={styles.title}>Enter your pompt</Text>
        <View style={styles.suprizeContainer}>
          <Text>🎲</Text>
          <Text style={styles.supriseText}>Surprise me</Text>
        </View>
      </View>
      {/* <View style={styles.wrapper}> */}
      <LinearGradient
        // Bottom gradient
        colors={["#943DFF", "#2938DC"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradientWrapper}
      >
        {/* BLUR + DARK OVERLAY */}
        <BlurView intensity={15} tint="dark" style={styles.blurContainer}>
          <LinearGradient
            colors={["#27272A", "#27272A"]}
            style={styles.innerGradient}
          >
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              placeholderTextColor={colors.Dark500}
              secureTextEntry={secureTextEntry}
              multiline
              textAlignVertical="top"
            />
          </LinearGradient>
        </BlurView>
      </LinearGradient>
    </PurpleBackground>
  );
};

export default Prompt;
