import React, {useEffect, useState} from 'react';
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
import Fontawesome from 'react-native-vector-icons/FontAwesome5';

import {CustomButton, CustomHeader} from '@app/components/';
import {routes} from '@app/routes/routes';

const {height, width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'Mind',
    tagLine: "Let's train it",
    icon: 'brain',
  },
  {
    id: 2,
    title: 'Sleep',
    tagLine: 'Restful sleep',
    icon: 'moon',
  },
  {
    id: 3,
    title: 'Relax',
    tagLine: 'Reframe stress',
    icon: 'om',
  },
  {
    id: 4,
    title: 'Focus',
    tagLine: 'Focus on Work',
    icon: 'bullseye',
  },
];

const HOME = (props: any) => {
  const navigation = props?.navigation;
  return (
    <LinearGradient
      colors={['#eacee5', '#eff0ff']}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          headerLeft={() => navigation?.navigate(routes.PROFILE_SCREEN)}
          headerRight={() => console.log('header right')}
          headerCenter="My name is Kunaal"
        />
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerTop}>
            <Text style={styles.contentContainerTopTitle}>
              What's your mood today?
            </Text>
          </View>

          <View style={styles.cardViewHeader}>
            <View style={{width: '50%'}}>
              <Text style={styles.cardViewHeaderLeftText}>
                Latest Practices
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'flex-end',
              }}
              onPress={() => console.log('View All')}>
              <Text style={styles.cardViewHeaderRightText}>View all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            scrollEnabled={true}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: 240,
              alignItems: 'center',
              backgroundColor: 'red',
            }}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.cardView}>
                  <View style={styles.cardIconContainer}>
                    <Fontawesome name={item?.icon} size={25} color="#f55280" />
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardViewTitle}>{item?.title}</Text>
                    <Text style={styles.cardViewTagLine}>{item?.tagLine}</Text>
                  </View>
                </View>
              );
            }}
          />
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
    flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
  },
  contentContainer: {
    height: '88%',
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainerTop: {
    width: '100%',
    padding: 15,
  },
  contentContainerTopTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
  },
  cardViewHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardViewHeaderLeftText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  cardViewHeaderRightText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    borderBottomWidth: 2,
    borderColor: '#f55280',
  },
  cardView: {
    width: 180,
    height: 180,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    elevation: 5,
  },
  cardIconContainer: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardTextContainer: {},
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
});

export default HOME;
