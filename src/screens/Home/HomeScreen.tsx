import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import PostComponent from '../../components/PostComponent';
import PIcon from '../../assets/images/karizma.jpg';
import PIcon2 from '../../assets/images/karizma2.jpg';

const {width, height} = Dimensions.get('window');

const PostData = [
  {
    id: 0,
    userName: 'yusuf.dev',
    description: 'lorem ipsum let amet.',
    comment: [{id: 5, userName: 'emirhancagan', profileImage: PIcon2}],
    likes: [
      {id: 5, userName: 'emirhancagan', profileImage: PIcon2},
      {id: 6, userName: 'emir', profileImage: PIcon},
    ],
    profileImage: PIcon,
  },
  {
    id: 0,
    userName: 'emirhancagan',
    description:
      'lorem ipsum let amet.lorem ipsum let amet.lorem ipsum let amet.',
    comment: [
      {id: 5, userName: 'yusuf.dev', profileImage: PIcon},
      {id: 6, userName: 'emir', profileImage: PIcon},
    ],
    likes: [{id: 5, userName: 'emirhancagan', profileImage: PIcon}],
    profileImage: PIcon2,
  },
];

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      {PostData.map((item, index) => (
        <PostComponent key={index} data={item} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postCard: {
    width: width,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row',
  },
});
export default HomeScreen;
