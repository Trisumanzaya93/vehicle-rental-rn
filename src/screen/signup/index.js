import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { signUpAction } from '../../redux/action/auth';
const {width, height} = Dimensions.get('window');

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleName = e => {
    setName(e);
  };

  const handleEmail = e => {
    setEmail(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleSignup = () => {
    const body = {
      username: name,
      email,
      password,
    };
    console.log(body);
    dispatch(signUpAction(body))
      .then(result => {
        // console.log('ini ', result.value.data.data);
        ToastAndroid.show("update profile Success", ToastAndroid.SHORT)
      })
      .catch(err => {
        console.log(err)
      });
  };

  const handlerSignup = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/img.png')}
          style={styles.background}>
          <View style={{marginTop: 150, marginLeft: 20}}>
            <Text style={styles.texttitle}>LET'S HAVE</Text>
            <Text style={styles.texttitle}>SOME RIDE</Text>
          </View>
          <View style={{marginTop: 150}}>
            <KeyboardAvoidingView>
              <TextInput
                id="text"
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor="white"
                onChangeText={handleName}
              />
              <TextInput
                id="text"
                style={styles.inputText}
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={handleEmail}
              />
              <TextInput
                secureTextEntry
                id="password"
                style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="white"
                onChangeText={handlePassword}
              />
              <TouchableOpacity style={styles.btnLogin} onPress={handleSignup}>
                <Text style={styles.textLogin}>Sign Up</Text>
              </TouchableOpacity>
              <View
                style={{marginTop: 40, marginBottom: 20, alignItems: 'center'}}>
                <Text style={styles.textForgot}>
                  already have an account?{' '}
                  <Text style={styles.textForgot} onPress={handlerSignup}>
                    Login now
                  </Text>
                </Text>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: 'row',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  texttitle: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputText: {
    backgroundColor: 'rgba(218, 218, 218, 0.58)',
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 20,
    height: 50,
    color: 'white',
  },
  textForgot: {
    color: '#fff',
  },
  btnLogin: {
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: '#FFCD61',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Signup;
