import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import { styles } from "./styles";

const firstImage = require("@/assets/Monogram.png");
const firstImageInner = require("@/assets/slash.png");
const secondImage = require("@/assets/Abstract.png");
const thirdImage = require("@/assets/Mascot.png");

const data = [
  { id: "fixed", title: "No Style", fixed: true },
  { id: "1", title: "Monogram", image: firstImage },
  { id: "2", title: "Abstract", image: secondImage },
  { id: "3", title: "Mascot", image: thirdImage },
];

const LogoStyles = () => {
  const [selectedId, setSelectedId] = useState<string | null>("fixed");

  return (
    <View style={styles.main}>
      <Text style={styles.logoTitle}>Logo Styles</Text>
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
              style={[
                styles.title,
                selectedId === item.id && styles.selectedTitle,
              ]}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LogoStyles;
