import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { ImagesAssets } from '@/constants/ImageAssets'
import { theme } from '@/constants/theme'

const Header = () => {
  return (
    <View style={styles.dashboardToolbarWrapper}>
      <View style={styles.appBranding}>
        <Image
          style={styles.logoWrapper}
          source={ImagesAssets.appLogo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>ApnaBudget</Text>
      </View>

      <View style={styles.profileWrapper}>
        <Feather name="search" size={moderateScale(26)} color={theme.colors.iconColor} />

        <View style={styles.userPfp}>
          <Text>M</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  dashboardToolbarWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appBranding: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },

  logoWrapper: {
    width: scale(32),
    height: verticalScale(32)
  },

  appName: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    fontFamily: 'Inter-SemiBold',
  },

  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },

  userPfp: {
    width: scale(32),
    height: verticalScale(32),
    backgroundColor: theme.colors.neutral(0.1),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})