import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useState } from "react";
import { styles } from "./styles";
import Button from "./components/Button";
import Prompt from "./components/Prompt";
import LogoStyles from "./components/LogoStyles";
import PurpleBackground from "@/components/PurpleBackground";

const Index = () => {
  const [value, setValue] = useState("");
  const placeholder = "A blue lion logo reading ‘HEXA’ in bold letters";

  const onClickSend = () => {
    console.log("here");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleMain}>
          <Text style={styles.title}>AI Logo</Text>
        </View>
        <PurpleBackground>
          <Prompt
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
          />
          <LogoStyles />
        </PurpleBackground>
        <Button onClick={onClickSend} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Index;
