import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { theme, createRgba } from "../../constants/theme"

export const WelcomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '90%',
    height: verticalScale(300),
    position: 'absolute',
    top: verticalScale(50),
  },

  heading: {
    width: '85%',
    color: theme.colors.black,
    marginTop: verticalScale(90),
    fontSize: moderateScale(32),
    textAlign: 'center',
  },

  subheading: {
    width: '85%',
    color: theme.colors.gray,
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginTop: verticalScale(12),
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: verticalScale(50),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  button: {
    width: '85%',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(16),
    borderRadius: theme.radius.xs,
    display: 'flex',
    alignItems: 'center',
    marginTop: verticalScale(15),
  },

  buttonText: {
    fontSize: moderateScale(18),
    fontWeight: theme.fontWeights.medium,
  },

  signupButton: {
    backgroundColor: theme.colors.primary,
  },

  signupButtonText: {
    color: theme.colors.white,
  },

  loginButton: {
    backgroundColor: createRgba(theme.colors.primary, 0.2),
  },

  loginButtonText: {
    color: theme.colors.primary,
  },
})
