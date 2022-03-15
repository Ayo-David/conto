import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HOME } from "../constants/routeNames";
import useDataLayer from "../context/Provider";
import HomeNavigator from "./HomeNavigator";
import SideMenu from "./SideMenu";



const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    const { authDispatch: dispatch } = useDataLayer()

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => <SideMenu
                navigation={navigation}
                dispatch={dispatch}
            />}
            drawerType="slide"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={HOME} component={HomeNavigator} />
        </Drawer.Navigator >
    )
}

export default DrawerNavigator