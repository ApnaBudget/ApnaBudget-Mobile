import { View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
const LoginScreen = ({ navigation, isSignUp }) => {
    const handleBack = () => {
       // navigation.goBack();
      };
    
      const handleAction = () => {
        // Implement action based on whether it's a login or sign up
        if (isSignUp) {
          // Handle sign up action
        } else {
          // Handle login action
        }
      };
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Image source={require('./path_to_your_image/back_arrow.png')} style={styles.backIcon} />
            </TouchableOpacity> */}
            <View style={styles.headingContainer}>
          <Text style={styles.heading}>ApnaBudget</Text>
        </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.subHeading}>{isSignUp ? 'Sign Up your Account' : 'Sign In your Account'}</Text>
            {isSignUp && <TextInput style={styles.input} placeholder="Email" />}
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            {isSignUp && <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />}
            <TouchableOpacity style={styles.button} onPress={handleAction}>
              <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>{isSignUp ? 'Sign Up with Google' : 'Login with Google'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton}>
              <Text style={styles.bottomButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    },
    backButton: {
      padding: 10,
    },
    backIcon: {
      width: 24,
      height: 24,
      resizeMode: 'contain',
    },
    headingContainer: {
        flex: 1,
        alignItems: 'center',
      },
    heading: {
      fontSize: 34,
      fontWeight: 'bold',
      marginLeft: 20,
      color:'#9E5FE6',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    subHeading: {
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#007bff',
      width: '80%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    bottomButton: {
      padding: 10,
    },
    bottomButtonText: {
      color: '#007bff',
      fontSize: 16,
    },
  });
export default LoginScreen;