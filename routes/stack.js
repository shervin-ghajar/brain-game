import React from 'react';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Home from '../screens/home';

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