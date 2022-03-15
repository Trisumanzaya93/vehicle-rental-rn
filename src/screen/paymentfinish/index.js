import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createHistoryAction } from '../../redux/action/history';
import { sendLocalNotification } from '../../utils/notifications';

const Paymentfinish = () => {
    const allState = useSelector(state => state);
    const dispatch = useDispatch()
    const token = allState.auth.userData.token
    const reservation = allState.setReservation.reservation
    const paymentHandler = () => {
        const body = {
        userId: reservation.userId,
        vehicleId: reservation.vehicleId,
        quantityTotal: reservation.quantityTotal,
        startDate: reservation.startDate,
        returnDate: reservation.returnDate,
        bookingCode: reservation.bookingCode,
        paymentCode: reservation.paymentCode,
        status: reservation.status,
        total_price : reservation.totalPrice
        //   // bookingCode: "BE84220119175854",
        //   // paymentCode: "PY84220119175854",
        //   // quantityTotal: 2,
        //   // returnDate: "2022-01-22",
        //   // selectedDay: 3,
        //   // startDate: "2022-01-19",
        //   // status: "Transfer",
        //   // totalPrice: 1200000,
        //   // userId: 84,
        //   // vehicleId: 4
        };
        // const body = reservation
    
        console.log(body,token);
        dispatch(createHistoryAction(body,token)).then((result) => {
          console.log(result);
          alert("payment success")
          sendLocalNotification("kendaraan berhasil dipesan")
                // navigate("/history", { replace: true })
    
        }).catch((err) => { console.log(err);});
    };
  return (
      <ScrollView>
    <View style={{backgroundColor:"#fff"}}>
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
              color: '#000000',
              marginLeft: 20,
            }}>
            Payment
          </Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../../assets/icon9.png")} style={{width:370, height:200}}/>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#000000"}}>Payment Code :</Text>
            <Text style={{fontSize:36,fontWeight:"bold",color:"#000000"}}>{reservation.paymentCode}</Text>
            <Text style={{fontSize:14,fontWeight:"400",marginTop:10}}>Insert your payment code while you transfer booking order</Text>
            <Text style={{fontSize:14,fontWeight:"400",marginBottom:15,marginTop:5}}>Pay before :</Text>
            <Text style={{fontSize:24,fontWeight:"bold",color:"#FF0000"}}>1:59:34</Text>
            <Text style={{fontSize:16,fontWeight:"400",marginTop:10}}>Bank account information :</Text>
            <Text style={{fontSize:24,fontWeight:"bold", color:"#000000",marginTop:10}}>0290-90203-345-2</Text>
            <Text style={{fontSize:18,fontWeight:"400", marginBottom:15}}>Vespa Rental Jogja</Text>
            <View style={{width:"80%",height:3, backgroundColor:"#DEDEDE",marginBottom:15}}></View>
            <Text style={{fontSize:16,fontWeight:"bold"}}>Booking code : <Text style={{fontSize:16,fontWeight:"bold",color:'#228B22'}}>{reservation.bookingCode}</Text></Text>
            <Text>Use booking code to pick up your vespa</Text>
            <TouchableOpacity style={{width: "70%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFCD61',
    borderRadius: 10,}} >
            <Text style={{fontSize:15 ,fontWeight:"bold", color:"#000000"}}>Copy Payment & Booking Code</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:"100%",justifyContent:"center",paddingLeft:"5%", marginTop:20}}>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>{reservation.quantityTotal} Vehicle</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>Prepayment (no tax)</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>{reservation.selectedDay} day</Text>
            <Text style={{fontSize:17, fontWeight:'500',marginBottom:10}}>{reservation.startDate} to {reservation.returnDate}</Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",paddingLeft:"5%", marginTop:20,paddingRight:"5%"}}>
            <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row"}}>
                <Text style={{fontSize:26,fontWeight:"bold",color:"#000000"}}>Rp. {reservation.totalPrice}</Text>
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
    borderRadius: 10,}} onPress={paymentHandler} >
            <Text style={{fontSize:22 ,fontWeight:"bold"}}>Finish Payment</Text>
          </TouchableOpacity> 
          </View>
    </View>
    </ScrollView>
  )
}

export default Paymentfinish