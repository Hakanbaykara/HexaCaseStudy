import { SafeAreaView, Text, View } from "react-native";

import { useState } from "react";
import { styles } from "./styles";
import Button from "./components/Button";
import Prompt from "./components/Prompt";
import LogoStyles from "./components/LogoStyles";

const Index = () => {
  const [value, setValue] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const onClickSend = () => {
    console.log("here");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleMain}>
        <Text style={styles.title}>AI Logo</Text>
      </View>
      <Prompt
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
      <LogoStyles />
      <Button onClick={onClickSend} />
    </SafeAreaView>
  );
};

export default Index;
