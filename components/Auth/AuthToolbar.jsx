import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { hpToDP, wpToDP } from '@/utils/ResponsiveScreen';

const AuthToolbar = ({ isDark, heading }) => {
  const router = useRouter();
  
  return (
    <View style={styles.appToolbarWrapper}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={wpToDP(8)} color={isDark ? theme.colors.black : theme.colors.white} />
        </Pressable>

        <Text style={styles.heading}>{heading}</Text>
        
        <Pressable onPress={() => Linking.openURL('https://apnabudget.com')}>
          <Ionicons name="information-circle-outline" size={wpToDP(8)} color={isDark ? theme.colors.black : theme.colors.white} />
        </Pressable>
    </View>
  )
}

export default AuthToolbar

const styles = StyleSheet.create({
  appToolbarWrapper: {
    position: 'absolute',
    top: hpToDP(3),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
  },

  heading: {
    fontFamily: 'semibold',
    alignSelf:'center',
    fontSize: wpToDP(5),
    color: theme.colors.black,
  },
})