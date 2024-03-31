import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Drawer from './Drawer'

  const AppStack = createAppContainer(
    createStackNavigator({
      Drawer: Drawer,
    },
      {
        headerMode: 'none',
      }
    )
  );


  export default AppStack;