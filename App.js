import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import ColorPalate from "./screens/colorpalate";
import AddNewPaletteModal from "./screens/AddNewPaletteModal";

const App = () => {
  const RootStack = createStackNavigator();
  const MainStack = createStackNavigator();

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="ColorPalette"
          component={ColorPalate}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </MainStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddNewPalette" component={AddNewPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
