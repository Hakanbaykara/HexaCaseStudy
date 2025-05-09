import { type FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

import Spinner from "./Spinner";
import { styles } from "./styles";
import type { InfoCmopProps } from "@/types/app";
import Alert from "./Alert";

const title1 = "Creating Your Design...";
const title2 = "Your Design is Ready!";
const title3 = "Oops, something went wrong!";
const text1 = "Ready in 2 minutes";
const text2 = "Tap to see it.";
const text3 = "Click to try again.";
const mockImage = require("@/assets/mockSmallImage.png");

const InfoComp: FC<InfoCmopProps> = ({ done, onClick, error, reset }) => {
  const handlePress = () => {
    if (done) {
      onClick();
    } else if (error) {
      reset();
    }
  };

  const renderContent = () => {
    if (!done && !error) return <Spinner />;
    if (error) return <Alert />;
    if (done) return <Image style={styles.mockImage} source={mockImage} />;
    return undefined;
  };
  const renderTextContent = () => {
    if (!done && !error)
      return (
        <>
          <Text style={styles.text}>{title1}</Text>
          <Text style={styles.detailText}>{text1}</Text>
        </>
      );
    if (done)
      return (
        <>
          <Text style={styles.text}>{title2}</Text>
          <Text style={styles.detailText}>{text2}</Text>
        </>
      );

    return undefined;
  };

  const renderErrorTextContent = () => {
    if (error)
      return (
        <>
          <Text style={styles.text}>{title3}</Text>
          <Text style={styles.detailErrorText}>{text3}</Text>
        </>
      );

    return undefined;
  };

  return (
    <View style={styles.container}>
      <View style={styles.spinnerMain}>{renderContent()}</View>
      <TouchableOpacity style={styles.flex} onPress={handlePress}>
        {!error ? (
          <LinearGradient
            // Bottom gradient
            colors={["#943DFF", "#2938DC"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradientWrapper}
          >
            {/* Blur + Dark Overlay */}
            <BlurView intensity={10} tint="dark" style={styles.blurContainer}>
              {!done && !error && <View style={styles.innerGradient} />}
              {renderTextContent()}
            </BlurView>
          </LinearGradient>
        ) : (
          <View style={styles.errorWrapper}>
            <BlurView intensity={10} tint="dark" style={styles.blurContainer}>
              {renderErrorTextContent()}
            </BlurView>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InfoComp;
