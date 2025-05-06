import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradientBackground from "../components/common/GradientBackground";
import Attandance from "../pages/attendance";
import EmployeeAttandanceReport from "../pages/employeeAttendanceReport";
import Index from "../pages/index";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen
          name="Attandance"
          component={Attandance}
          options={{
            title: "দৈনিক হাজিরা বিবরণী",
            headerTintColor: "white",
            headerBackground: () => (
              <GradientBackground
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#00416A", "#E4E5E6"]}
                style={{ flex: 1 }}
                locations={[0.53, 1]}
              />
            ),
          }}
        />
        <Stack.Screen
          name="EmployeeAttandanceReport"
          component={EmployeeAttandanceReport}
          options={{
            title: "কর্মীর হাজিরা বিবরণী",
            headerTintColor: "white",
            headerBackground: () => (
              <GradientBackground
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={["#00416A", "#E4E5E6"]}
                style={{ flex: 1 }}
                locations={[0.53, 1]}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
