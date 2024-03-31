
import React, { Component } from 'react';
import { Dimensions, ScrollView, View, Image } from 'react-native';
import { createDrawerNavigator, createAppContainer, SafeAreaView, DrawerItems } from 'react-navigation';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-community/async-storage';

import Stacks from './Stacks';
import MyIcon from '../components/common/MyIcon';
import { ProfileScreen, SettingsScreen } from '../screens/stacks';
import { FontOpt, Lang, Colors } from '../resources'
import LogoutAction from '../components/Logout/Logout';
import Version from '../components/VersionControl/Version';

const WIDTH = Dimensions.get('window').width;

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NightMode: false
    };
  }

  componentDidMount() {
    this.getNightMode()
  }


  getNightMode() {
    AsyncStorage.getItem('NightMode', (err, result) => {
      if (result != null || result != undefined) {
        if (result == 'true') {
          this.setState({ NightMode: true })
        } else {
          this.setState({ NightMode: false })
        }
      }
    });
    EventRegister.addEventListener('NightMode', (data) => {
      this.setState({ NightMode: data })
    });
  }

  render() {
    return (
      <DrawerNav screenProps={{ NightMode: this.state.NightMode, navigation: this.props.navigation }} />
    );
  }
}


const CustomDrawerContentComponent = (props) => (
  <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }} style={props.screenProps.NightMode ? { backgroundColor: Colors.DarkContainer } : { backgroundColor: '#e9e9e9' }}>
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{ width: '100%', backgroundColor: 'lightgray' }}>
        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={require('../assets/images/user-photo.png')} style={{ width: '40%', height: 150, resizeMode: 'contain' }} />
        </View>
      </View>
      <DrawerItems
        {...props}
        itemStyle={{ flexDirection: 'row-reverse', }}
        labelStyle={{
          fontWeight: 'normal',
          fontSize: FontOpt.fontSize13,
          fontFamily: FontOpt.fontFamilyM,
          marginRight: 10,
          color: props.screenProps.NightMode ? Colors.White2 : 'black'
        }}
        activeBackgroundColor={'#342b61'} />
      <LogoutAction navigation={props.screenProps.navigation} />
      <Version />
    </SafeAreaView>
  </ScrollView>
)

const DrawerNav = createAppContainer(
  createDrawerNavigator(
    {
      Stacks: {
        screen: Stacks,
        navigationOptions: {
          drawerLabel: () => null,
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          drawerLabel: Lang.Profile,
          drawerIcon: () => <MyIcon name={'person'} size={25} color={'#2883a4'} />,
        }
      },
      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          drawerLabel: Lang.Settings,
          drawerIcon: () => <MyIcon name={'settings'} size={25} color={'#2883a4'} />,
        }
      },
      ContactUs: {
        screen: Stacks,
        navigationOptions: {
          drawerLabel: Lang.ContactUs,
          drawerIcon: () => <MyIcon name={'contacts'} size={25} color={'#2883a4'} />
        }
      },
    },
    {
      contentComponent: CustomDrawerContentComponent
      ,
      drawerWidth: WIDTH * 0.70,
      drawerPosition: 'right',
      drawerBackgroundColor: '#e9e9e9',
      contentOptions: {
        activeTintColor: 'white',
        itemsContainerStyle: {
          paddingTop: 0,
        },
        iconContainerStyle: {
          marginLeft: 0,
          opacity: 1
        }
      },

    },
  )
)


export default Drawer

