import { View, Text,Image,TouchableOpacity,TextInput,ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const Updatevehicle = () => {
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Cash', value: "Cash"},
    {label: 'Transfer', value: "Transfer"}
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Cash', value: "Cash"},
    {label: 'Transfer', value: "Transfer"}
  ]);
  const onClickPrevious = () => {
    const newCounter = counter - 1 < 1 ? 1 : counter - 1;
    setCounter(newCounter);
    
  }
  const addCounter = () => {
    const newCounter =  counter + 1 ;
    setCounter(newCounter);
  };
  return (
    <ScrollView>
    <View style={{backgroundColor:"#fff"}}>
      <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:"space-between",
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 40,
            marginRight:"10%"
          }}>
            <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
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
            Add New Item
          </Text>
          </View>
          <TouchableOpacity style={{justifyContent:"center"}}>
            <Text style={{fontSize:23, fontWeight:"400",color:"#B8BECD"}}>Cencel</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:"100%",alignItems:"flex-end",display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <Image source={require("../../assets/icon12.png")} style={{width:150,height:150,borderRadius:120,marginLeft:25}}/>
          <TouchableOpacity style={{width:50,height:50,borderRadius:30,backgroundColor:"#FFCD61",marginLeft:-50,alignItems:"center"}}>
            <Text style={{fontSize:35,fontWeight:"bold",color:"#000"}}>+</Text>  
          </TouchableOpacity>
        </View>
        <View style={{width:"90%",marginLeft:"5%",marginTop:40}}>
          <View style={{width:"100%", borderBottomWidth:3,borderColor:"#B8BECD"}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Name</Text>
          <TextInput placeholder='Input the product name min. 30 characters'/>
          </View>
          <View style={{width:"100%", borderBottomWidth:3,borderColor:"#B8BECD", marginTop:35}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Price</Text>
          <TextInput placeholder='Input the product name min. 30 characters'/>
          </View>
          <View style={{width:"100%", borderBottomWidth:3,borderColor:"#B8BECD", marginTop:35}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Description</Text>
          <TextInput placeholder='Input the product name min. 30 characters'/>
          </View>
          <View style={{width:"100%", borderBottomWidth:3,borderColor:"#B8BECD", marginTop:35}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Location</Text>
          <DropDownPicker
            style={{ height:50,backgroundColor:"#DFDEDE",marginTop:20,borderRadius:10,justifyContent:'center'}}
            //   style={styles.day}
              placeholder="Select Location"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View style={{width:"100%", borderBottomWidth:3,borderColor:"#B8BECD", marginTop:35}}>
          <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Add To</Text>
          <DropDownPicker
            style={{ height:50,backgroundColor:"#DFDEDE",marginTop:20,borderRadius:10,justifyContent:'center'}}
            //   style={styles.day}
              placeholder="Category"
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
            />
          </View>
          <View style={styles.wrapselect}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              Available Stock
            </Text>
            <View style={styles.counter}>
              <TouchableOpacity style={styles.btn} onPress={onClickPrevious}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                  -
                </Text>
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                {counter}
              </Text>
              <TouchableOpacity style={styles.btn} onPress={addCounter}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width:"100%",alignItems:"center", marginBottom:40,marginTop:20}}>
          <TouchableOpacity style={{width:300,height:50,backgroundColor:"#FFCD61",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:20,fontWeight:"bold",color:"#000"}}>Save Product</Text>
          </TouchableOpacity>
          </View>
        </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  wrapselect: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  counter: {
    display: 'flex',
    flexDirection: 'row',
    width: 170,
    justifyContent: 'space-between',
    marginRight: 30,
  },
  btn: {
    width: 23,
    height: 23,
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Updatevehicle