import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { styles } from "./styles";

const loadingPng = require("@/assets/loading.png");

const Spinner = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.main}>
      <Animated.Image
        style={[styles.circle, { transform: [{ rotate: rotation }] }]}
        source={loadingPng}
      />
    </View>
  );
};

export default Spinner;
