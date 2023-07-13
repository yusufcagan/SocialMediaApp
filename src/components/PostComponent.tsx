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
import PIcon from '../assets/images/karizma.jpg';
import Heart from '../assets/images/heart_space.png';

const {width, height} = Dimensions.get('window');

const PostData = [
  {
    id: 0,
    name: 'Yusuf',
    description: 'lorem ipsum let amet.',
    commet: [],
    likes: [],
    profileImage: PIcon,
  },
];

const PostComponent = () => {
  return (
    <TouchableOpacity style={styles.postCard}>
      <View style={{width: width / 10}}>
        <TouchableOpacity style={{borderRadius: 50, backgroundColor: 'red'}}>
          <Image
            resizeMode={'contain'}
            source={PIcon}
            style={{width: width / 10, height: width / 10, borderRadius: 50}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: width / 25}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: (8 * width) / 10,
          }}>
          <TouchableOpacity>
            <Text style={styles.userNameText}>yusuf.dev</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text>22s</Text>
            <TouchableOpacity style={{marginLeft: 5}}>
              <Text style={[styles.userNameText, {fontSize: 15}]}> •••</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: (8 * width) / 10, marginTop: 5}}>
          <Text style={styles.userNameText}>
            Lorem ipsum set amet.Lorem ipsum set amet. Lorem ipsum set
            amet.Lorem ipsum set amet.Lorem ipsum set amet. Lorem ipsum set
            amet.Lorem ipsum set amet. Lorem ipsum set amet.Lorem ipsum set
            amet.Lorem ipsum set amet. Lorem ipsum set amet.Lorem ipsum set
            amet.Lorem ipsum set amet. Lorem ipsum set amet.Lorem ipsum set
            amet.Lorem ipsum set amet.
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Heart}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Heart}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Heart}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postCard: {
    width: width,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row',
  },
  userNameText: {
    color: 'black',
  },
});
export default PostComponent;
