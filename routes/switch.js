import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import RootStack from './stack';
import { Intro } from '../screens';

const RootSwitch = createAppContainer(
    createSwitchNavigator({
        Intro,
        App: RootStack,
    },
        {
            initialRouteName: 'Intro',
        }
    )
);


export default RootSwitch;