import React, { useEffect, useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import PalettePreview from "../components/PalettePreview";

const SOLARIZED = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" },
];

const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];

const COLOR_PALETTES = [
  { paletteName: "Solarized", colors: SOLARIZED },
  { paletteName: "Frontend Masters", colors: FRONTEND_MASTERS },
  { paletteName: "Rainbow", colors: RAINBOW },
];

const URL = "https://color-palette-api.kadikraman.vercel.app/palettes";

const Home = ({ navigation, route }) => {
  const newPallette = route.params ? route.params.newPalette : null;
  const [palettes, setPalettes] = useState([]);
  const handleFetchPalettes = useCallback(async () => {
    let response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, []);

  useEffect(() => {
    if (newPallette) {
      setPalettes((current) => [newPallette, ...current]);
    }
  }, [newPallette]);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("AddNewPalette")}>
        <Text>Add a Color Scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate("ColorPalette", item);
            }}
            colorPalette={item}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default Home;
