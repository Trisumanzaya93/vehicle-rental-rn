import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../redux/action/user';

const Profile = () => {
  const dispatch= useDispatch()
    const navigation= useNavigation()
    const allState = useSelector(state => state.getProfile.userinfo);
    const token = useSelector(state => state.auth.userData.token);
    // const [token,setToken]= useState("")
    console.log("token",token);
    // const [profile,setProfile]=useState(allState.getProfile.userinfo)
    console.log("okee",allState)

    const getProfil = async() =>{
      // const token =token
      // setToken(token)
      try {
        const result = await dispatch(getProfileAction({
            headers: {
              "x-access-token": token,
            },
          }))
          console.log("hasil result", result);
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getProfil();
      // getHistoryPopular();
      //  hendleDEtailVehicle ()
    }, [token]);
  return (

    <View>
      <View style={styles.title}>
        <Image
          source={{uri:(allState.image)}}
          style={styles.img}
        />
        <Text style={{marginLeft: 20, fontSize: 22, fontWeight: 'bold'}}>
          {allState.displayname?? "-"}
        </Text>
      </View>
      <View style={styles.section} >
          <View>
          <TouchableOpacity style={styles.btn} >
              <Text style={{fontSize:18,fontWeight:"bold"}}>Your Favorite</Text>
              <Image source={require("../../assets/icon2.png")} style={{width:8,height:10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
              <Text style={{fontSize:18,fontWeight:"bold"}}>FAQ</Text>
              <Image source={require("../../assets/icon2.png")} style={{width:8,height:10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} >
              <Text style={{fontSize:18,fontWeight:"bold"}}>Help</Text>
              <Image source={require("../../assets/icon2.png")} style={{width:8,height:10}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Update Profile")}>
              <Text style={{fontSize:18,fontWeight:"bold"}}>Update profile</Text>
              <Image source={require("../../assets/icon2.png")} style={{width:8,height:10}}/>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnlogout}>
              <View style={{width:"80%", justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:24,fontWeight:"bold"}}>Log Out</Text>
              </View>
              <View style={{width:"20%", justifyContent:"center",alignItems:"center"}}>
              <Image source={require("../../assets/icon3.png")} />
              </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom:10
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 20,
  },
  section:{
    display: 'flex',
    justifyContent:"space-between",
    width: '100%',
    backgroundColor: '#fff',
    height:627
  },
  btn:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      height:50,
      paddingLeft:20,
      paddingRight:20
  },
  btnlogout:{
      width:338,
      height:57,
      backgroundColor:"#FFCD61",
      marginLeft:25,
      marginBottom:70,
      borderRadius:10,
      display:"flex",
      flexDirection:"row",
  }
});

export default Profile;
