import { StatusBar } from "react-native";

import { NavigationContainer, TabRouter } from "@react-navigation/native";
import TabsNavigator from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"#000"}
        barStyle="light-content"
        translucent={false}
      />
      <TabsNavigator />
    </NavigationContainer>
  );
}
