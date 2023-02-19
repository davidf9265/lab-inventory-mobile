// library imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";

// screens
import UserRegisterItems from "../screens/fragments/user/userRegisterItems";
import genericRegisterContainer from "../screens/dashboards/genericRegisterContainer";

// contexts
import { userContext } from "../../App";
import userViewContainers from "../screens/dashboards/genericContainersView";

const Tab = createBottomTabNavigator();



export default function TabNavigatorStack() {

    const { auth, setAuth } = useContext(userContext);

    const handleLogout   = () => {
        setAuth(false);
    }

  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => <TouchableLogoutIcon handleLogout={handleLogout}/>,
      }}
    >
      <Tab.Screen
        name="New Item"
        component={UserRegisterItems}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add Container"
        component={genericRegisterContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Containers"
        component={userViewContainers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={UserViewItems} /> */}
    </Tab.Navigator>
  );
}

const TouchableLogoutIcon = (props) => {
    const { handleLogout } = props; 
    return (
        <TouchableOpacity onPress={ handleLogout } style={styles.TouchableLogoutIcon}>
            <MaterialCommunityIcons name="logout" size={25} />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    TouchableLogoutIcon: {
        marginRight: 15,
    }
});

