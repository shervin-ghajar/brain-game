import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import {
  NewsScreen,
  SearchScreen,
  BookmarkScreen,
  CategoryScreen
} from '../screens/tabs';
import { Colors, FontOpt, Lang } from '../resources'
import MyIcon from '../components/common/MyIcon';


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'News') {
    iconName = 'paper';
  } else if (routeName === 'Search') {
    iconName = 'md-search';
  } else if (routeName === 'Bookmarks') {
    iconName = 'bookmarks';
  } else if (routeName === 'Categories') {
    iconName = 'logo-buffer';
  }

  // You can return any component that you like here!
  return <MyIcon name={iconName} size={28} color={tintColor} />;
};

export default Tabs = createAppContainer(
  createBottomTabNavigator(
    {
      News: {
        screen: NewsScreen,
        navigationOptions: {
          tabBarLabel: Lang.News,
        }
      },
      Search: {
        screen: SearchScreen,
        navigationOptions: {
          tabBarLabel: Lang.Search,
        }
      },
      Bookmarks: {
        screen: BookmarkScreen,
        navigationOptions: {
          tabBarLabel: Lang.Bookmarks,
        }
      },
      Categories: {
        screen: CategoryScreen,
        navigationOptions: {
          tabBarLabel: Lang.Categories,
        }
      },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),

      tabBarOptions: {
        allowFontScaling: true,
        activeTintColor: '#45cdff',
        inactiveTintColor: 'gray',
        showIcon: true,
        style: {
          height: 53,
          backgroundColor: Colors.BottomNavColor,
          // flexDirection: 'row',
          paddingTop: 5,
        },
        // showLabel: false,
        labelStyle: {
          fontSize: FontOpt.fontSize11,
          fontFamily: FontOpt.fontFamily,
        },
      },
      swipeEnabled: false,
      animationEnabled: false,
      lazy: false,
    }
  )
);

