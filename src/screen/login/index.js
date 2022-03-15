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
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {loginAction} from '../../redux/action/auth';
import {useDispatch} from 'react-redux';
const {width, height} = Dimensions.get('window');

const Login = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const handleEmail = e => {
    setEmail(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handlerSignup = () => {
    navigation.navigate('Signup');
  };

  const handleLogin = () => {
    const body = {
      email,
      password,
    };
    console.log(body);

    dispatch(loginAction(body))
      .then(result => {
        console.log('ini ', result.value.data.data);
        // alert("succes")
        navigation.navigate('Home');
      })
      .catch(err => {
        alert('email atau password salah');
      });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/img1.png')}
          style={styles.background}>
          <View style={{marginTop: 150, marginLeft: 20}}>
            <Text style={styles.texttitle}>LET'S EXPLORE</Text>
            <Text style={styles.texttitle}>THE WORLD</Text>
          </View>
          <View style={{marginTop: 200}}>
            <KeyboardAvoidingView>
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
              <TouchableOpacity style={{marginLeft: 20, marginBottom: 20}}>
                <Text style={styles.textForgot}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                <Text style={styles.textLogin}>Login</Text>
              </TouchableOpacity>
              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Hello World!</Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Hide Modal</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
              </View>
              <View
                style={{marginTop: 40, marginBottom: 20, alignItems: 'center'}}>
                <Text style={styles.textForgot}>
                  don't have account?
                  <Text style={styles.textForgot} onPress={handlerSignup}>
                    Sign Up Now
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
    marginLeft: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.7,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Login;
