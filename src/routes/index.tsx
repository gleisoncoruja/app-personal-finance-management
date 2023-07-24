import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/Home";
import ExpenseScreen from "../pages/Expense";
import { MaterialIcons } from "@expo/vector-icons";
import IncomeScreen from "../pages/Income";
import ReportScreen from "../pages/Report";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "../pages/Categories";

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#1565c0",
        tabBarInactiveTintColor: "#757575",
        tabBarStyle: { height: 80, backgroundColor: "#f5f5f5" },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 4 },
        tabBarIconStyle: { marginTop: 4, fontSize: 50 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Receitas"
        component={IncomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Despesas"
        component={ExpenseScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="money-off" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Relatórios"
        component={ReportScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="line-chart" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
