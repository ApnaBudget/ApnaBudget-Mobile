import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const Button = ( { onPress, customButton, customButtonText, placeholder } ) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={[styles.button, customButton]}>
          <Text style={[styles.buttonText, customButtonText]}>{placeholder}</Text>
        </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },

    button: {
        width: '85%',
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(12),
        borderRadius: 8,
        alignItems: 'center',
        marginTop: verticalScale(15),
    },

    buttonText: {
        fontSize: moderateScale(16),
        fontWeight: 500,
    },
})