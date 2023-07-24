import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/Home";
import ExpenseScreen from "../pages/Expense";
import { MaterialIcons } from "@expo/vector-icons";
import IncomeScreen from "../pages/Income";
import ReportScreen from "../pages/Report";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={IncomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Despesas"
        component={ExpenseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="money-off" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Relatórios"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="line-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
