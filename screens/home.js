import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ColorPalate"); //* we are providing name heres
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
