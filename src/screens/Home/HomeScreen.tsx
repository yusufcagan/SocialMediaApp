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

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PostComponent />
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
