import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import AuthLoadingScreen from '../screens/switch/AuthLoadingScreen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


const AuthSwitch = createAppContainer(
    createSwitchNavigator({
        AuthSwitchLoading: AuthLoadingScreen,
        App: AppStack,
        Authentication: AuthStack,
    },
    {
      initialRouteName: 'AuthSwitchLoading',
    }
    )
);


export default AuthSwitch;