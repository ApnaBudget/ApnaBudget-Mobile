import { Linking, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';

const AuthToolbar = () => {
  const router = useRouter();
  
  return (
    <View style={styles.appToolbarWrapper}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={32} color={theme.colors.black} />
        </Pressable>
        
        <Pressable onPress={() => Linking.openURL('https://apnabudget.com')}>
          <Ionicons name="information-circle-outline" size={32} color={theme.colors.black} />
        </Pressable>
    </View>
  )
}

export default AuthToolbar

const styles = StyleSheet.create({
    appToolbarWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})