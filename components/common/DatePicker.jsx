import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { theme } from '@/constants/theme'
import { moderateScale } from 'react-native-size-matters'

const DatePicker = () => {
  return (
    <View style={styles.datePickerContainer}>
      <FontAwesome6 name="chevron-left" size={24} color={theme.colors.iconColor} />
      
      <View style={styles.dateWrapper}>
        <FontAwesome6 name="calendar" size={18} color={theme.colors.iconColor} />

        <Text style={styles.date}>May, 2024</Text>
      </View>

      <FontAwesome6 name="chevron-right" size={24} color={theme.colors.iconColor} />
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  datePickerContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
    backgroundColor: theme.colors.neutral(0.1),
    borderRadius: 20,
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(12),
  },

  date: {
    color: theme.colors.lightBlack,
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(12),
  },
})