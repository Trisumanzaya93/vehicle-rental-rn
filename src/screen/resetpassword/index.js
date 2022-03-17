import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { resetPasswordAction } from '../../redux/action/auth';
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const Resetpassword = () => {
  const dispatch = useDispatch();
  const navigation=useNavigation()
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  console.log(pin, password);
  const handlePin = e => {
    setPin(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleSend = () => {
    const body = {
      pin,
      password,
    };

    dispatch(resetPasswordAction(body))
      .then(result => {
        ToastAndroid.show('password telah diganti', ToastAndroid.SHORT);
        // alert("succes")
        navigation.navigate('Login');
      })
      .catch(err => {
        //   setIsErr(true)
        ToastAndroid.show('pin salah, silahkan cek kembali email', ToastAndroid.SHORT);
      });
  };
  return (
    <View style={{width: width, height: height}}>
      <ImageBackground
        source={require('../../assets/img7.png')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 40,
          }}>
          <Image
            source={require('../../assets/icon14.png')}
            style={{width: 14, height: 22, marginLeft: 20}}
          />
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: '#fff',
              marginLeft: 20,
            }}>
            Back
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Text
            style={{
              marginLeft: '7%',
              fontSize: 40,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            THAT’S OKAY, WE GOT YOUR BACK
          </Text>
          <View
            style={{
              width: '90%',
              marginLeft: '5%',
              backgroundColor: '#808080',
              borderRadius: 10,
              opacity: 0.6,
              marginTop: 170,
            }}>
            <TextInput
              onChangeText={handlePin}
              placeholder="Enter your pin"
              style={{
                width: '90%',
                marginLeft: '5%',
                fontSize: 15,
                color: '#fff',
                fontWeight: 'bold',
              }}
            />
          </View>
          <View
            style={{
              width: '90%',
              marginLeft: '5%',
              backgroundColor: '#808080',
              borderRadius: 10,
              opacity: 0.6,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={handlePassword}
              placeholder="Enter your new password"
              style={{
                width: '90%',
                marginLeft: '5%',
                fontSize: 15,
                color: '#fff',
                fontWeight: 'bold',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={handleSend}
            style={{
              width: '90%',
              height: 50,
              marginLeft: '5%',
              backgroundColor: '#FFCD61',
              borderRadius: 10,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Resetpassword;
