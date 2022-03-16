import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Chat = () => {
  const navigation= useNavigation()
  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
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
            Chat
          </Text>
        </View>
        <View style={{width:"90%",height:50,backgroundColor:"#EFEEEE",paddingLeft:10,marginLeft:"5%", borderRadius:20, alignItems:"center",display:"flex",flexDirection:"row"}}>
          <Image source={require("../../assets/icon10.png")}/>
          <Text style={{fontSize:19,marginLeft:10}} >Search</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("DetailChat")} style={{width:"90%",marginLeft:"5%",display:"flex",flexDirection:"row", marginTop:40,borderBottomWidth:1,paddingBottom:20}}>
          <View style={{width:"70%"}}>
          <Text style={{fontSize:19, fontWeight:"bold",color:"#000"}}>Vespa Rental Jogja</Text>
          <Text style={{fontSize:15, fontWeight:"bold",color:"#000"}}>Hey, there are 3 vespa left</Text>  
          </View>
          <View style={{width:"30%",alignItems:"center"}}>
          <Text>Just now</Text>
          <View style={{width:20,height:20,backgroundColor:"#FFCD61",marginTop:5,borderRadius:10}}></View>  
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default Chat