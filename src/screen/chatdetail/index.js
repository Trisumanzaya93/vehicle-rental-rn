import {View, Text, Image,ScrollView,TextInput} from 'react-native';
import React from 'react';

const Chatdetail = () => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
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
          Vespa Bali
        </Text>
      </View>
      <ScrollView>
      <View
        style={{
          width: '95%',
          marginLeft: '2.5%',
        //   borderWidth: 1,
          shadowOpacity: 0.3,
        //   shadowRadius: 2,
          elevation: 4,
          shadowColor: '#000',
          borderRadius: 10,
        }}>
        <Image
          source={require('../../assets/img5.png')}
          style={{
            width: '97.4%',
            height:200,
            marginTop:6,
            marginLeft:4,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <View style={{marginLeft: 20, marginTop: 20,marginBottom:20}}>
          <Text style={{fontSize: 17, fontWeight: '400', textDecorationColor: '#888888'}}>
            Kintamani, 0.1 miles from your location
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Vespa Matic
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: '15%',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#00FF00'}}>
              Available
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Rp. 120.000/day
            </Text>
          </View>
        </View>
      </View>
      <View style={{width:"100%",marginTop:50,alignItems:"flex-end"}}>
        <View style={{borderRadius:20,paddingLeft:20,paddingTop:10,paddingBottom:10,width:"50%",marginRight:"5%",backgroundColor:"#393939"}}>
            <Text style={{color:"#FFF"}}>Hey, can I book 2 vespa for January 18 to 21?</Text>
        </View>
        <Text style={{width:"50%",marginRight:"5%"}}>Read [12.04 PM]</Text>
      </View>
      <View style={{width:"100%",marginTop:50,alignItems:"flex-start"}}>
        <View style={{borderRadius:20,paddingLeft:20,paddingTop:10,paddingBottom:10,width:"50%",marginLeft:"5%",backgroundColor:"#FFCD61"}}>
            <Text style={{color:"#000   "}}>Hey thanks for asking, it’s available now you can do reservation and pay for the vespa so they’re ready for you</Text>
        </View>
        <Text style={{width:"50%",marginLeft:"5%",textAlign:"right"}}>Read [12.04 PM]</Text>
      </View>
      </ScrollView>
      <View style={{paddingLeft:10,width:"90%",height:50,backgroundColor:"#DFDEDE",marginLeft:"5%",borderRadius:5,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <TextInput style={{width:"80%"}} placeholder='Type a message'/>
          <View style={{justifyContent:"center",alignItems:"center",marginRight:15}}>
          <Image source={require("../../assets/icon11.png")} />
          </View>
      </View>
    </View>
  );
};

export default Chatdetail;
