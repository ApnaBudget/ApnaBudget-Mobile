import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/constants/theme'
import { hpToDP, wpToDP } from '../../utils/ResponsiveScreen'

const AuthInputBox = ( {  value, setValue, isPassword, iconName, inputPlaceholder , onBlurEffect } ) => {
  return (
    <View style={styles.inputWrapper}>
        <Ionicons name={iconName} style={styles.inputIcon} size={24} color={theme.colors.iconColor}/>
        
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => {setValue(text)}}
            secureTextEntry={isPassword}
            placeholder={inputPlaceholder}
            onBlur = {onBlurEffect}
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
        paddingStart: wpToDP(12),
        paddingEnd: wpToDP(5),
        borderColor: theme.colors.borderColor,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: theme.colors.white,
    },

    inputIcon: {
        position: 'absolute',
        marginStart: wpToDP(3),
    },

    input: {
        width: '100%',
        paddingVertical: hpToDP(1.75),
        fontSize: wpToDP(4.5),
        fontFamily: 'medium',
        color: theme.colors.black,
    }
})