import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/Search/SearchScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import PostScreen from '../screens/Post/PostScreen';
import FollowScreen from '../screens/Follower/FollowScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import HomeIcon from '../assets/images/homeIcon.png';
import SearchIcon from '../assets/images/searchIcon.png';
import PostIcon from '../assets/images/postIcon.png';
import FollowIcon from '../assets/images/heartIcon.png';
import UserIcon from '../assets/images/userIcon.png';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={HomeIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={SearchIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={PostIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Follow"
        component={FollowScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={FollowIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={UserIcon}
                resizeMode="contain"
                style={{
                  width: 20,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}
