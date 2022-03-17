import { View, Text,ImageBackground,Image,TextInput,TouchableOpacity,ToastAndroid,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { forgotPasswordAction } from '../../redux/action/auth';

const {width, height} = Dimensions.get('screen');

const Forgotpassword = () => {
    const dispatch=useDispatch()
  const navigation = useNavigation();
  const [email,setEmail] = useState("")
  console.log(email);
  const handleEmail = e => {
    setEmail(e);
  };
  const handleSend =()=>{
      const body={
          email
      }
    dispatch(forgotPasswordAction(body))
    .then(result => {
      ToastAndroid.show("email terkirim", ToastAndroid.SHORT)
      // alert("succes")
      navigation.navigate('ResetPassword');
    })
    .catch(err => {
    //   setIsErr(true)
    ToastAndroid.show("email tidak terdaftar", ToastAndroid.SHORT)
    });

  }
  return (
    <View style={{width:width,height:height}}>
        <ImageBackground source={require("../../assets/img7.png")} style={{width:"100%",height:"100%"}}>
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
        <View style={{width:'100%'}}>
            <Text style={{marginLeft:"7%",fontSize:40,fontWeight:"bold",color:"#fff"}}>THAT’S OKAY, WE GOT YOUR BACK</Text>
            <Text style={{marginLeft:"7%",marginRight:"5%",marginTop:150,fontSize:15,textAlign:"center",fontWeight:"bold",color:"#fff"}}>Enter your email to get reset password code. If you don’t receive any code Resend Code</Text>
            <View style={{width:"90%",marginLeft:"5%",backgroundColor:"#808080",borderRadius:10,opacity:0.6,marginTop:20}}>
                <TextInput onChangeText={handleEmail} placeholder='Enter your email adress' style={{width:"90%",marginLeft:"5%",fontSize:15,color:"#fff",fontWeight:"bold"}}/>
            </View>
            <TouchableOpacity onPress={handleSend} style={{width:"90%",height:50,marginLeft:"5%",backgroundColor:"#FFCD61",borderRadius:10,marginTop:30,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Send Code</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
  )
}

export default Forgotpassword