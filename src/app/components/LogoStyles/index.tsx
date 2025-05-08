import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

const firstImage = require("@/assets/Monogram.png");
const firstImageInner = require("@/assets/slash.png");
const secondImage = require("@/assets/Abstract.png");
const thirdImage = require("@/assets/Mascot.png");

const data = [
  { id: "fixed", title: "Fixed", fixed: true },
  { id: "1", title: "Mood 1", image: firstImage },
  { id: "2", title: "Mood 2", image: secondImage },
  { id: "3", title: "Mood 3", image: thirdImage },
];

const LogoStyles = () => {
  const [selectedId, setSelectedId] = useState<string | null>("fixed");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      {data.map((item, index) => (
        <View
          key={item.id}
          style={[styles.itemContainer, index !== 0 && { marginLeft: 12 }]}
        >
          <TouchableOpacity
            onPress={() => setSelectedId(item.id)}
            activeOpacity={0.8}
          >
            {item.fixed ? (
              <View style={[styles.firstImageMain]}>
                <View style={styles.background} />
                <View
                  style={[
                    styles.square,
                    selectedId === item.id && styles.selectedBorder,
                  ]}
                />
                <Image
                  source={firstImageInner}
                  style={styles.firstImageInner}
                />
              </View>
            ) : (
              <View
                style={[
                  styles.square,
                  selectedId === item.id && styles.selectedBorder,
                ]}
              >
                <Image
                  source={item.image}
                  style={{ width: 90, height: 90, borderRadius: 12 }}
                />
              </View>
            )}
          </TouchableOpacity>
          <Text
            style={
              (selectedId === item.id && styles.selectedTitle, styles.title)
            }
          >
            {item.title}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default LogoStyles;
