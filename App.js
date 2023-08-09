import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import ColorPalate from "./screens/colorpalate";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalate" component={ColorPalate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
