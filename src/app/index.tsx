import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import { useRouter } from "expo-router";

import { styles } from "./styles";
import Button from "./components/Button";
import Prompt from "./components/Prompt";
import LogoStyles from "./components/LogoStyles";
import PurpleBackground from "@/components/PurpleBackground";
import InfoComp from "./components/InfoComp";
import { checkProcess, postProcess } from "@/services/app";
import { IProcess } from "@/types/app";

const placeholder = "A blue lion logo reading ‘HEXA’ in bold letters";

const Index = () => {
  const [value, setValue] = useState<{ content: string }>({ content: "" });
  const [sendValue, setSendValue] = useState<{ content: string }>({
    content: "",
  });
  const [creating, setCreating] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const router = useRouter();

  // To create logo and art
  const onClickSend = async () => {
    if (sendValue !== value) {
      setDone(false);
    }
    // setSendValue(value);
    setCreating(true);
    await postProcess(value)
      .then((payload) => {
        setId(payload.id);
      })
      .catch((e) => {
        console.error("postProcess error:", e);
        setError(true);
      });
  };

  // To navigate Output screen
  const goToOutputScreen = () => {
    router.push("screens/OutputScreen");
  };

  useEffect(() => {
    if (!id) return;

    const interval = setInterval(() => {
      checkProcess(id).then((payload) => {
        if (payload.status === IProcess.DONE) {
          clearInterval(interval); // Stop checking if DONE
          setDone(true);
        }
      });
    }, 5000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const reset = () => {
    setSendValue({
      content: "",
    });
    setCreating(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleMain}>
          <Text style={styles.title}>AI Logo</Text>
        </View>
        <PurpleBackground>
          {creating && (
            <InfoComp
              done={done}
              error={error}
              onClick={goToOutputScreen}
              reset={reset}
            />
          )}
          <Prompt
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
          />
          <LogoStyles />
        </PurpleBackground>
        <Button onClick={onClickSend} error={error} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Index;
