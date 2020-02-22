import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
// import Header from '../components/header';
// import BottomNavigation from '../components/bottomNavigation';
import { Home } from '../screens/';

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        },
    },
}, {
    initialRouteName: 'Home',
    cardStyle: {
        backgroundColor: 'white'
    },
    // headerMode: 'float',
    cardShadowEnabled: false,
    defaultNavigationOptions: ({
        navigation
    }) => ({
        // headerTransparent: false,
        // header: props => <Header {...props} />,
    }),
});


export default createAppContainer(RootStack);       