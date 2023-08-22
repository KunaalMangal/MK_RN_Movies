import React, {PropsWithChildren, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {CustomButton, CustomHeader} from '@app/components/';
import {routes} from '@app/routes/routes';

const {height, width} = Dimensions.get('window');


const MOVIES = (props: any) => {

  return (
    <LinearGradient
      colors={['#eacee5', '#eff0ff']}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          headerLeft={() => console.log('header Left')}
          headerRight={() => console.log('header right')}
        />
        <View style={styles.contentContainer}>
          <View style={styles.topContentContainer}>
            <View style={styles.cardView}>
              <View style={styles.cardTopContainer}>
                <View style={styles.cardTopImageContainer}>
                  {/* <Welcome width="70%" height="70%" /> */}
                </View>
                <View style={styles.cardTopTextContainer}>
                  <Text style={styles.trackTitle}>title</Text>
                  <Text style={styles.trackType}>progress</Text>
                </View>
              </View>
              {/* <View style={styles.cardCenterContainer}>
                <SimpleLineIcons
                  name="refresh"
                  size={32}
                  color="#f55280"
                  onPress={() => console.log('MOVIES reload / refresh')}
                />
                <SimpleLineIcons
                  name="control-start"
                  size={32}
                  color="#f55280"
                  onPress={skipToPrevious}
                />
                <Pressable
                  style={styles.playContainer}
                  onPress={() => togglePlayback(playBackState)}>
                  <SimpleLineIcons
                    name={
                      playBackState === State.Playing
                        ? 'control-pause'
                        : 'control-play'
                    }
                    size={32}
                    color="#ffffff"
                  />
                </Pressable>
                <SimpleLineIcons
                  name="control-end"
                  size={32}
                  color="#f55280"
                  onPress={skipToNext}
                />
                <SimpleLineIcons
                  name="shuffle"
                  size={32}
                  color="#f55280"
                  onPress={() => console.log('MOVIES shuffle')}
                />
              </View>
              <View style={styles.cardBottomContainer}>
                <View style={styles.trackProgressContainer}>
                  <View style={styles.trackDuration}>
                    <Text style={styles.trackMinDuration}>
                      {new Date(position * 1000)
                        .toISOString()
                        .substring(15, 19)}
                    </Text>
                    <Text style={styles.trackMaxDuration}>
                      {new Date((duration - position) * 1000)
                        .toISOString()
                        .substring(15, 19)}
                    </Text>
                  </View>
                  <View style={styles.trackProgress}>
                    <Slider
                      value={position}
                      minimumValue={0}
                      maximumValue={duration}
                      thumbTintColor="#cecece"
                      minimumTrackTintColor="#f55280"
                      maximumTrackTintColor="#cecece"
                      style={{width: '100%'}}
                    />
                  </View>
                </View>
              </View> */}
            </View>
          </View>
          <View style={styles.bottomContentContainer}>
            <CustomButton
              text="Explore Smilar"
              onPress={() => console.log('Explore Smilar')}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    height: height,
    width: width,
  },
  container: {
    height: height,
    width: width,
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    height: '88%',
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topContentContainer: {
    height: '85%',
    width: '100%',
    padding: 30,
  },
  cardView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  cardTopContainer: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTopImageContainer: {
    width: '60%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#f55280',
  },
  cardTopTextContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
  },
  trackType: {
    fontSize: 18,
    fontWeight: '800',
    color: '#cecece',
  },
  cardCenterContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f55280',
  },
  cardViewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    paddingVertical: 5,
  },
  cardViewTagLine: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  cardBottomContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'flex-end',
  },
  trackProgressContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  trackDuration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackMinDuration: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  trackMaxDuration: {
    color: '#cecece',
    fontSize: 16,
    fontWeight: '500',
  },
  trackProgress: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomContentContainer: {
    width: '100%',
    height: '15%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MOVIES;
