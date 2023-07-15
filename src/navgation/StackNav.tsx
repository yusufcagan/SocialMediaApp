import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import LikesScreen from '..//screens/Home/Likes';
import PostDetailsScreen from '../screens/Home/PostDetails';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LikesScreen" component={LikesScreen} />
      <Stack.Screen name="PostDetailsScreen" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}
