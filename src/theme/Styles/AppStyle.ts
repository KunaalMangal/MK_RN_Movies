import {StyleSheet} from 'react-native';
import {AppColors} from '@app/theme/Colors/Colors';

export const AppStyle = StyleSheet.create({
  container: {},

  wrapper: {},

  button: {},

  textField: {
    height: '100%',
  },

  textFieldInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: AppColors.PrimaryDark,
    height: 50,
  },
  textFieldIconContainer: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AppIcon: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
