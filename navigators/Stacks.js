import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Tabs from '../navigators/Tabs';
import MyIcon from '../components/common/MyIcon';
import {
    ProfileScreen,
    SettingsScreen,
    ContactUsScreen,
    FullNewsScreen,
    EditProfileScreen,
    SendCommentScreen,
    ChangePasswordScreen,
    CategoryNewsScreen,
} from '../screens/stacks';
import { FontOpt,Lang } from '../resources'


const Stacks = createAppContainer(
    createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({ }) => {
                    return {
                        headerLeft: (
                            <View style={{ flex: 1, flexDirection: 'row-reverse', }}>
                                <TouchableOpacity
                                    onPress={() => {}//this.searchBar.show()
                                    }
                                    style={{paddingHorizontal: 25,paddingVertical:15 }}>
                                    {/* <MyIcon name={'search'} color={'#c7c7c7'} size={25} /> */}
                                </TouchableOpacity>
                            </View>
                        ),
                        headerTitle: Lang.AppName
                    };
                }
            },
            Settings: {
                screen: SettingsScreen,
                navigationOptions: {
                    headerTitle: Lang.Settings
                }
            },
            Profile: {
                screen: ProfileScreen,
                navigationOptions: {
                    headerTitle: Lang.Profile
                }
            },
            ContactUs: {
                screen: ContactUsScreen,
                navigationOptions: {
                    headerTitle: Lang.ContactUs
                }
            },
            FullNews: {
                screen: FullNewsScreen,
                navigationOptions:{
                    headerTitle: Lang.AppName
                }
            },
            EditProfile:{
                screen:EditProfileScreen,
                navigationOptions: {
                    headerTitle: Lang.Edit
                }
            },
            // SendComment:{
            //     screen: SendCommentScreen,
            //     navigationOptions: {
            //         headerTitle: Lang.Comments
            //     }
            // },
            ChangePassword:{
                screen: ChangePasswordScreen,
                navigationOptions:{
                    headerTitle: Lang.ChangePassword
                }
            },
            CategoryNews:{
                screen: CategoryNewsScreen,
                navigationOptions:{
                    headerTitle: Lang.AppName
                }
            }
        },
        {
            defaultNavigationOptions: ({ navigation }) => {
                return {
                    headerRight: (
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={{paddingHorizontal: 25,paddingVertical:15}}
                            >
                            <MyIcon name={'md-menu'} color={'#c7c7c7'} size={25}/>
                        </TouchableOpacity>
                    ),
                    headerLeft: (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{paddingHorizontal: 25,paddingVertical:15}}
                                >
                                <MyIcon name={'arrow-back'} color={'#c7c7c7'} size={25} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: "#26223a",
                    },
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        flex: 1,
                        color: '#45cdff',
                        textAlign: 'center',
                        fontFamily : FontOpt.fontFamilyB,
                        fontSize: FontOpt.fontSize17,
                    }
                };
            },
        }
    )
);
export default Stacks;