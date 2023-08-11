import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View
            style={[
              styles.box,
              {
                backgroundColor: item.hexCode,
              },
            ]}
          ></View>
        )}
        refreshing={true}
        onRefresh={() => {}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    width: 40,
    height: 40,
    marginRight: 10,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: "row",
  },
});

export default PalettePreview;
