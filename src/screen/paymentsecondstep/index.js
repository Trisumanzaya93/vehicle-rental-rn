import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { setReservation } from '../../redux/action/vehicle'

const Payment2 = () => {
    const navigation=useNavigation()
    const dispatch= useDispatch()
    const allState = useSelector(state => state);
    const reservation = allState.setReservation.reservation
    const vehicle = allState.detailVehicle.datavehicle
    console.log(reservation);
    const handlerStep2=()=>{
        const bookingCode = `VEHICLE-RENT-${dayjs().format("YYm-mss-DD")}`;
        const paymentCode = `${dayjs().format("YYm-YYss-DD-MM")}`;
        console.log(bookingCode,paymentCode);
        dispatch(setReservation({
            bookingCode,
            paymentCode
          }))
        navigation.navigate("paymentfinish")
    }
  return (
      <ScrollView>
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
            Payement
          </Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../../assets/icon7.png")} style={{marginLeft:-70,width:370, height:200}}/>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../../assets/img5.png")} style={{height:201,borderRadius:20}}/>
        </View>
        <View style={{width:"100%",justifyContent:"center",paddingLeft:"5%", marginTop:20}}>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>{reservation.quantityTotal} Vehicle</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>Prepayment (no tax)</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>{reservation.selectedDay} day</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}> {reservation.startDate} to {reservation.returnDate}</Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",paddingLeft:"5%", marginTop:20,paddingRight:"5%"}}>
            <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                <Text style={{fontSize:26,fontWeight:"bold",color:"black    "}}>Rp. {reservation.totalPrice}</Text>
                <Image source={require("../../assets/icon8.png")}/>
            </View>
        </View>
        <View style={{width:"100%",justifyContent:"center",paddingLeft:"5%", marginTop:20,paddingRight:"5%"}}>
       <TouchableOpacity style={{width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFCD61',
    borderRadius: 10,}} onPress={handlerStep2}>
            <Text style={{fontSize:22 ,fontWeight:"bold"}}>Get Payment Code</Text>
          </TouchableOpacity> 
          </View>
    </View>
    </ScrollView>
  )
}

export default Payment2