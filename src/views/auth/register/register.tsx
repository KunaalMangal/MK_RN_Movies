import React, {PropsWithChildren, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {CustomButton, CustomTextInput} from '@app/components/';
import {routes} from '@app/routes/routes';
import {AppStyle} from '@app/theme/Styles/AppStyle';
import Welcome from '@app/assets/images/backgrounds/meditation_girl.svg';

const {height, width} = Dimensions.get('window');

const REGISTER = (props: any) => {
  const navigation = props?.navigation;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAgree, setISAgree] = useState(false);

  const onRegister = () => {
    console.log('REGISTER');
  };

  return (
    <LinearGradient
      colors={['#A71D31', '#3F0D12']}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.contentTopContainer}>
            <Pressable
              style={styles.skipToHome}
              onPress={() => navigation?.navigate(routes.MAIN_STACK)}>
              <Text style={{color: '#000000'}}>Skip</Text>
            </Pressable>
            <Welcome width="100%" height="100%" />
          </View>

          <View style={styles.contentCenterContainer}>
            <View style={styles.contentCenterTopContainer}>
              <CustomTextInput
                leftIcon={
                  <Ionicons
                    name="person"
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                  />
                }
                placeholder="Username"
                placeholderTextColor="#ffffff"
                textColor="#ffffff"
                value={userName}
                setValue={setUserName}
              />
              <CustomTextInput
                leftIcon={
                  <Ionicons
                    name="person"
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                  />
                }
                placeholder="Email"
                placeholderTextColor="#ffffff"
                textColor="#ffffff"
                value={userEmail}
                setValue={setUserEmail}
              />
              <CustomTextInput
                leftIcon={
                  <Ionicons
                    name="lock-closed-outline"
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                  />
                }
                rightIcon={
                  <Ionicons
                    name={!showPassword ? 'eye-outline' : 'eye-off-outline'}
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                placeholder="Password"
                placeholderTextColor="#ffffff"
                textColor="#ffffff"
                value={userPassword}
                setValue={setUserPassword}
              />
              <CustomTextInput
                leftIcon={
                  <Ionicons
                    name="lock-closed-outline"
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                  />
                }
                rightIcon={
                  <Ionicons
                    name={
                      !showConfirmPassword ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={25}
                    color="#ffffff"
                    style={AppStyle.AppIcon}
                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                }
                placeholder="Confirm Password"
                placeholderTextColor="#ffffff"
                textColor="#ffffff"
                value={userConfirmPassword}
                setValue={setUserConfirmPassword}
              />
            </View>
            <View style={styles.contentCenterBottomContainer}>
              <Pressable onPress={() => setISAgree(!isAgree)}>
                <Ionicons
                  name={!isAgree ? 'square-outline' : 'checkbox'}
                  size={25}
                  color="#ffffff"
                  style={AppStyle.AppIcon}
                />
              </Pressable>
              <View
                style={{
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{color: '#ffffff'}}>
                  Please Read and Accept our{' '}
                </Text>
                <Text
                  style={{
                    color: '#ffffff',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ffffff',
                  }}
                  onPress={() => Alert.alert('Option not available.')}>
                  Terms & Conditions{' '}
                </Text>
                <Text style={{color: '#ffffff'}}>before register.</Text>
              </View>
            </View>
          </View>

          <View style={styles.contentBottomContainer}>
            <View style={{width: '100%', height: '40%'}}>
              <CustomButton text="REGISTER" onPress={() => onRegister()} />
            </View>
            <View
              style={{
                width: '100%',
                height: '60%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Already have an accrount ? </Text>
              <Pressable
                onPress={() => navigation?.navigate(routes.LOGIN_SCREEN)}>
                <Text>Login here</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
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
    height: '100%',
    width: width,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentTopContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  contentCenterContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBottomContainer: {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentCenterTopContainer: {},
  contentCenterBottomContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipToHome: {
    width: 90,
    height: 40,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default REGISTER;
