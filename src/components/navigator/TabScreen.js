import React from 'react'

//React-Navigation Imports
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

//Import Telas da aplicacao
import Home from '../../components/screen/Home';
import Publications from '../screen/Publications';

import {footerColor, white} from '../../assets/helper/Colors';

const Tab = createMaterialBottomTabNavigator();

function TabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor={white}
            barStyle={{backgroundColor: footerColor}}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                    <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Publicações"
                component={Publications}
                options={{
                    tabBarLabel: 'Publicações',
                    tabBarIcon: ({color}) => (
                    <Icon name="ios-eye" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabScreen
