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

const PROFILE = (props: any) => {
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
                  <SimpleLineIcons name="user" size={100} color="#f55280" />
                </View>
                <View style={styles.cardTopTextContainer}>
                  <Text style={styles.trackTitle}>KUNAAL MANGAL</Text>
                  <Text style={styles.trackType}>demo@gmail.com</Text>
                </View>
              </View>
            </View>
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
    height: '90%',
    width: '100%',
    padding: 20,
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

export default PROFILE;
