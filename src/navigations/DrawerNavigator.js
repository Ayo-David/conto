import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { HOME } from "../constants/routeNames";
import useDataLayer from "../context/Provider";
import HomeNavigator from "./HomeNavigator";
import SideMenuu from "./SideMenu";



const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    const { authDispatch: dispatch } = useDataLayer()

    return (
        <Drawer.Navigator
            drawerContent={({ navigation }) => <SideMenuu
                navigation={navigation}
                dispatch={dispatch}
            />}
            drawerType="slide"
        >
            <Drawer.Screen name={HOME} component={HomeNavigator} />
        </Drawer.Navigator >
    )
}

export default DrawerNavigator