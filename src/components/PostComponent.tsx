import {
  Text,
  View,
  StyleSheet,
  LayoutChangeEvent,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {memo, useCallback, useMemo, useState} from 'react';
import Heart from '../assets/images/heart_space.png';
import Redheart from '../assets/images/heartIcon.png';
import CommentIcon from '../assets/images/comment.png';
import ShareIcon from '../assets/images/again.png';
import Dm from '../assets/images/dm.png';

const {width, height} = Dimensions.get('window');

const PostComponent: React.FC<any> = ({data}) => {
  const [viewHeight, setViewHeight] = useState<number>(0);
  const [like, setLike] = useState<boolean>(false);

  ////like is very slowly ------------!!!!!!-------------
  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {height} = event.nativeEvent.layout;
      setViewHeight(height);
      console.log('hL çalisti');
    },
    [viewHeight],
  );

  return (
    <TouchableOpacity onLayout={handleLayout} style={styles.postCard}>
      <View style={{width: width / 10, alignItems: 'center'}}>
        <TouchableOpacity style={{borderRadius: 50}}>
          <Image
            resizeMode={'contain'}
            source={data.profileImage}
            style={{width: width / 10, height: width / 10, borderRadius: 50}}
          />
        </TouchableOpacity>
        {data.comment.length !== 0 ? (
          <>
            <View
              style={{
                marginTop: 5,
                marginBottom: 5,
                height: viewHeight - width / 4.5,
                width: 1,
                backgroundColor: 'gray',
              }}
            />
            <View>
              <Image
                style={{
                  width: width / 25,
                  height: width / 25,
                  borderRadius: 50,
                }}
                source={data.comment[0].profileImage}
              />
            </View>
          </>
        ) : null}
      </View>
      <View style={{marginLeft: width / 25}}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: (8 * width) / 10,
          }}>
          <TouchableOpacity>
            <Text style={styles.userNameText}>{data.userName}</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text>22s</Text>
            <TouchableOpacity style={{marginLeft: 5}}>
              <Text style={[styles.userNameText, {fontSize: 15}]}> •••</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width: (8 * width) / 10, marginTop: 5}}>
          <Text style={styles.userNameText}>{data.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setLike(!like)}>
              <Image
                resizeMode="contain"
                source={like ? Redheart : Heart}
                style={[
                  {
                    width: width / 20,
                    height: width / 20,
                    margin: 10,
                  },
                  like ? {tintColor: 'red'} : null,
                ]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={CommentIcon}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={ShareIcon}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                source={Dm}
                style={{width: width / 20, height: width / 20, margin: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>
              {data.comment.length === 0 ? null : data.comment?.length}{' '}
              {data.comment.length === 0 ? null : 'Yanıt'}
            </Text>
            <TouchableOpacity>
              <Text>
                {'   '}
                {data.likes.length === 0 ? null : data.likes?.length}{' '}
                {data.likes.length === 0 ? null : 'Beğenme'}
              </Text>
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
