import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { ImagesAssets } from '@/constants/ImageAssets'
import { theme } from '@/constants/theme'
import { hpToDP, wpToDP } from '../../utils/ResponsiveScreen';

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
        <Feather name="search" size={wpToDP(8)} color={theme.colors.iconColor} />

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
    gap: wpToDP(3),
  },

  logoWrapper: {
    width: wpToDP(9),
    height: hpToDP(5)
  },

  appName: {
    fontSize: wpToDP(4),
    color: theme.colors.black,
    fontFamily: 'semibold',
  },

  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wpToDP(4),
  },

  userPfp: {
    width: wpToDP(9),
    height: hpToDP(4.5),
    backgroundColor: theme.colors.neutral(0.1),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})