import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/constants/theme'
import { moderateScale } from 'react-native-size-matters'

const AuthInputBox = ( {  value, setValue, isPassword, iconName, inputPlaceholder } ) => {
  return (
    <View style={styles.inputWrapper}>
        <Ionicons name={iconName} style={styles.inputIcon} size={24} color={theme.colors.iconColor}/>
        
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => {setValue(text)}}
            secureTextEntry={isPassword}
            placeholder={inputPlaceholder}
        />
    </View>
  )
}

export default AuthInputBox

const styles = StyleSheet.create({
    inputWrapper: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(12),
        borderColor: theme.colors.borderColor,
        borderWidth: moderateScale(1),
        borderRadius: 8,
        backgroundColor: theme.colors.white,
    },

    inputIcon: {
        position: 'absolute',
        marginStart: moderateScale(10),
    },

    input: {
        width: '100%',
        paddingLeft: moderateScale(34),
        fontSize: moderateScale(14),
        color: theme.colors.black,
    }
})