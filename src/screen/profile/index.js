import {View, Text, Image, StyleSheet, TouchableOpacity, Alert,
  Modal,
  Pressable,} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from '../../redux/action/user';
import { LogoutAction } from '../../redux/action/auth';

const Profile = () => {
  const dispatch= useDispatch()
    const navigation= useNavigation()
    
  const [modalVisible, setModalVisible] = useState(false);
    const allState = useSelector(state => state.getProfile.userinfo);
    const token = useSelector(state => state.auth.userData.token);
    // const [token,setToken]= useState("")
    console.log("token",token);
    // const [profile,setProfile]=useState(allState.getProfile.userinfo)
    console.log("okee",allState)
    const handlerLogout = ()=>{
      dispatch(LogoutAction(token))
      .then(res=>{
        navigation.navigate("Login")
      })
      .catch(err=>console.log(err))
    }
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
          <View>
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
                      <Text style={styles.modalText}>apakah anda yakin ingin log out!</Text>
                      <View style={{ width:"50%",display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                      <Pressable onPress={handlerLogout} style={[styles.button, styles.buttonClose]}><Text style={styles.textStyle}>yes</Text></Pressable>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>no</Text>
                      </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
          <TouchableOpacity style={styles.btnlogout} onPress={() => setModalVisible(true)}>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#000",
    opacity:0.7
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
    width:150,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginLeft:10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#FFCD61',
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

export default Profile;
