import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { BlurView } from "expo-blur";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import colors from "@/theme/colors";

const MAX_LENGTH = 500;

const Prompt = ({
  value,
  onChangeText,
  placeholder,
}: {
  value: { content: string };
  onChangeText: React.Dispatch<React.SetStateAction<{ content: string }>>;
  placeholder?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onPressSupriseMe = () =>
    onChangeText({
      content:
        "A professional logo for Harrison & Co. Law Firm, using balanced serif fonts",
    });

  return (
    <View style={styles.container}>
      <View style={styles.titleMain}>
        <Text style={styles.title}>Enter your pompt</Text>
        <TouchableOpacity
          onPress={onPressSupriseMe}
          style={styles.suprizeContainer}
        >
          <Text>🎲</Text>
          <Text style={styles.supriseText}>Surprise me</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        // Bottom gradient
        colors={["#943DFF", "#2938DC"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={[styles.gradientWrapper, isFocused && styles.focused]}
      >
        {/* BLUR + DARK OVERLAY */}
        <BlurView intensity={15} tint="dark" style={styles.blurContainer}>
          <View style={styles.innerGradient} />
          <TextInput
            style={styles.input}
            value={value.content}
            onChangeText={(text) => onChangeText({ content: text })}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            placeholderTextColor={colors.Dark500}
            multiline
            textAlignVertical="top"
            maxLength={MAX_LENGTH}
          />
          <View style={styles.charCount}>
            <Text style={styles.charCountText}>
              {value.content.length} / {MAX_LENGTH}
            </Text>
          </View>
        </BlurView>
      </LinearGradient>
    </View>
  );
};

export default Prompt;
