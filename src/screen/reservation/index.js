import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setReservation } from '../../redux/action/vehicle'

const Reservation = () => {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const allState = useSelector(state => state);
    const user = allState.getProfile.userinfo
    const vehicle = allState.detailVehicle.datavehicle
    
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Cash', value: "Cash"},
    {label: 'Transfer', value: "Transfer"}
  ]);

  const handlerStep2=()=>{
      console.log("valuee manaaa",value);
    dispatch(setReservation({
        status:value
      }))
      navigation.navigate("payment2")
  }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 40,
          }}>
          <Image
            source={require('../../assets/icon4.png')}
            style={{width: 14, height: 22, marginLeft: 20}}
          />
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 20,
            }}>
            Payment
          </Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../../assets/icon6.png")} style={{marginLeft:-70,width:370, height:200}}/>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <View style={{width:"80%", height:50,backgroundColor:"#DFDEDE",borderRadius:10, marginBottom:20,justifyContent:'center'}} >
                <Text style={{fontSize:23, marginLeft:30, color:"black"}}>{user.displayname}</Text>
            </View>
            <View style={{width:"80%", height:50,backgroundColor:"#DFDEDE",borderRadius:10, marginBottom:20,justifyContent:'center'}} >
                <Text style={{fontSize:23, marginLeft:30, color:"black"}}>{user.phone}</Text>
            </View>
            <View style={{width:"80%", height:50,backgroundColor:"#DFDEDE",borderRadius:10, marginBottom:20,justifyContent:'center'}} >
                <Text style={{fontSize:23, marginLeft:30, color:"black"}}>{user.email}</Text>
            </View>
            <DropDownPicker
            style={{width:"80%",marginLeft:"10%", height:50,backgroundColor:"#DFDEDE",borderRadius:10, marginBottom:20,justifyContent:'center'}}
            //   style={styles.day}
              placeholder="Payment Tipe"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />

            <TouchableOpacity style={{width: "80%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFCD61',
    borderRadius: 10,}} onPress={handlerStep2}>
            <Text style={{fontSize:22 ,fontWeight:"bold"}}>Reservation</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Reservation