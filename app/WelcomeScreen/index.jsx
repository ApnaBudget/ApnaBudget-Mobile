import { View, Text, Image, TouchableOpacity,} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import EggTray from '../../assets/images/egg-tray.png'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to ApnaBudget</Text>
      <Text style={styles.subHeading}>Let's get your{"\n"} finances in order</Text>
     <Image source={EggTray}
       style={styles.backgroundImage}
       resizeMode="contain"
     />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.whiteButton]}>
        <Text style={[styles.buttonText, styles.whiteButtonText]}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.blackButton]}>
        <Text style={[styles.buttonText, styles.blackButtonText]}>SignUp</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.termsContainer}>
        <Text style={styles.termsText}>Terms and Conditions Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE9CA',
  },
  backgroundImage: {
    padding:0,
    width: '95%',
    height: '90%',
    position: 'absolute',
    zIndex: -1, // Behind other content
  },
  heading: {
    position: 'absolute',
    top: '10%',
    fontSize: 28,
    fontWeight: 'bold',
    zIndex: 1, // Bring heading to the top
    color:'#FFA64F'
  },
  subHeading: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    fontWeight:'800',
    top: '18%',
    zIndex: 1, // Bring subheading to the top
    textAlign: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginLeft:'20%',
    width:'100%',
    height:'100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: '3%', // Adjust padding as needed
    paddingHorizontal: '5%', // Adjust padding as needed
    marginBottom: '5%', // Adjust margin between buttons
    borderRadius: 10,
    width: '80%', // Adjust width as needed
    height:40,
    alignItems: 'center',
  },
  whiteButton: {
    position:'absolute',
    bottom:'12%',
    backgroundColor: '#ffffff',
  },
  blackButton: {
    position:'absolute',
    bottom:'20%',
    backgroundColor: '#000000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight:'600',
    textAlign: 'center',
  },
  whiteButtonText: {
    color: '#000000',
  },
  blackButtonText: {
    color: '#ffffff',
  },
  termsContainer: {
    position: 'absolute',
    bottom: 20,
  },
  termsText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight:'600',
    color:'#006ADD',
  },
});

export default WelcomeScreen