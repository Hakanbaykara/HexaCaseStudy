import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

import { styles } from "./styles";
import PurpleBackground from "@/components/PurpleBackground";
import Prompt from "./components/Propmt";

const cancelImage = require("@/assets/cancel.png");
const mockImage = require("@/assets/mockImage.png");

const title = "Your design";

const OutputScreen = () => {
  const router = useRouter();

  // To navigate Output screen
  const goToInputScreen = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <PurpleBackground>
        <View style={styles.titleMain}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={goToInputScreen}>
            <Image style={styles.cancelImage} source={cancelImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.mockImage} source={mockImage} />
        </View>
        <Prompt />
      </PurpleBackground>
    </SafeAreaView>
  );
};

export default OutputScreen;
