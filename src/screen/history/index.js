import {View, Text,Image,TouchableOpacity,ScrollView,TextInput,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailHistoryAction } from '../../redux/action/history';
import dayjs from 'dayjs';

const History = () => {
  const dispatch= useDispatch()
  const token = useSelector(state => state.auth.userData.token);
  const [detailhistory, setdetailhistory] = useState([]);
  const [isLoading,setIsLoading]= useState(false)
  const [parameter, setParameter] = useState({
    search: '',
    sortBy: '',
    sort: '',
  });
  const getHistory = () => {
    setIsLoading(true)
    dispatch(getDetailHistoryAction(parameter,token))
      .then((result) => {
        const data = result.value.data.data;
        setdetailhistory(data);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getHistory();
    // will unmount
    return () => {};
  }, []);
  return (
    <View style={{backgroundColor: '#fff',height:"100%"}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#000'}}>
          History Order
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          marginLeft: '5%',
          backgroundColor: '#cdcdcd',
          marginTop: 20,
          borderRadius: 10,
          paddingLeft: 15,
          marginBottom:20
        }}>
        <TextInput  placeholder="search" />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop:40}}>
        <View style={{width:"60%",alignItems:"center"}}>
          <Text style={{fontSize:19, color:"#C4C4C4"}}>a week ago</Text>
        </View>
        <View style={{width:"30%",alignItems:"center"}}>
          <Text style={{fontSize:19, color:"#C4C4C4"}}>delete</Text>
        </View>
      </View>
      {isLoading?(<>
      <View style={{width:"100%",alignItems:"center"}}>
      <ActivityIndicator size="large" color="#FFCD61"/>
      </View>
      </>):(<>
        <ScrollView>
      <View style={{paddingBottom:100}}>
      {detailhistory.length===0 ? (<>
      <View style={{width:"100%", alignItems:"center",marginTop:20}}>
        <Text style={{fontSize:30,fontWeight:"bold"}}>No Order Yet</Text>
      </View>
      </>):(<>
        {detailhistory.length > 0 &&
        detailhistory.map((item, idx) => {
          if(item.photo === null){
            item.photo = "https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg"
          }
          console.log(detailhistory.length );
          return (
      <View style={{display: 'flex', flexDirection: 'row', marginTop:40}} key={idx}>
        <View style={{width:"60%", marginLeft:10,display: 'flex', flexDirection: 'row'}}>
          <Image source={{uri: `${item.photo}`}} style={{width:100,height:100,borderRadius:20}}/>
          <View style={{marginLeft:10}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{item.vehiclename}</Text>
            <Text style={{fontSize:15,fontWeight:"500" ,marginTop:5}}>{dayjs(item.start_date).format('DD-MMM')} to {dayjs(item.return_date).format("DD-MMM")}</Text>
            <Text style={{fontSize:10,fontWeight:"bold",marginTop:5}}>Prepayment : Rp. {item.total_price}</Text>
            <Text style={{fontSize:15,fontWeight:"bold", marginTop:5,color:"#228B22"}}>{item.status_return}</Text>
          </View>
        </View>
        <View style={{width:"30%",alignItems:"center",justifyContent:"center"}}>
          <TouchableOpacity style={{width:51,height:40,backgroundColor:"#FFCD61", justifyContent:"center",alignItems:"center", borderRadius:10}}>
            <Image source={require("../../assets/Vector.png")}/>
          </TouchableOpacity>
        </View>
      </View>
          )
        })}
      </>)}
      
      </View>
        </ScrollView>
      </>)}
        
    </View>
  );
};

export default History;
