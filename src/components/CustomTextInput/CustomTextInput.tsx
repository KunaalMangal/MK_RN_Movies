import {AppColors} from '@app/theme/Colors/Colors';
import {AppStyle} from '@app/theme/Styles/AppStyle';
import React from 'react';
import {Text, TextInput, View} from 'react-native';

const CustomTextInput = (props: any) => {
  return (
    <View style={{width: '100%', marginBottom: 15}}>
      <View style={AppStyle.textFieldInnerContainer}>
        {props?.leftIcon && (
          <View style={AppStyle.textFieldIconContainer}>{props?.leftIcon}</View>
        )}
        <TextInput
          placeholder={props?.placeholder}
          placeholderTextColor={props?.placeholderTextColor}
          style={[
            AppStyle.textField,
            {
              minWidth: '80%',
              width:
                props?.leftIcon && props?.rightIcon
                  ? '80%'
                  : '100%' || props?.leftIcon || props?.rightIcon
                  ? '90%'
                  : '100%',
            },
            props?.textColor,
          ]}
          value={props?.value}
          onChangeText={props?.setValue}
          keyboardType={props?.keyboardType}
          secureTextEntry={props?.secureTextEntry}
        />
        {props?.rightIcon && (
          <View style={AppStyle.textFieldIconContainer}>
            {props?.rightIcon}
          </View>
        )}
      </View>
      {props?.errorMsg && (
        <View style={{margin: 5}}>
          <Text style={[{fontSize: 12, fontWeight: 'bold'}]}>
            Error: {props?.errorMsg}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
