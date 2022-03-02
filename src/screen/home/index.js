import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import { getPopularAction } from '../../redux/action/vehicle';
const {width} = Dimensions.get('window');
import defaultimg from "../../assets/img4.jpg"
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const allState = useSelector(state => state);
  const [popular, setPopular] = useState([]);
  console.log("dimana sii kawannn",popular);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  
  const getHistoryPopular = () => {
    dispatch(getPopularAction())
      .then((result) => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setPopular(data);
        // console.log('parameter',data);

      })
      .catch((err) => console.log(err));
  };

  const handlerDetailVehicle=(id)=>{
    console.log(id);
    navigation.navigate("Detailvehicle",{id:id})
  }

  useEffect(() => {
    getHistoryPopular();
  }, []);

  return (
    <ScrollView>
      <Image source={require('../../assets/img2.png')} style={styles.img} />
      <View style={styles.wrapsearch}>
        <View style={styles.wrapinput}>
          <TextInput
            id="text"
            style={styles.inputText}
            placeholder="location"
            placeholderTextColor="#fff"
            // onChangeText={handleEmail}
          />
          <DropDownPicker
          style={styles.dropdown}
          placeholder="Car"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <View style={styles.wrapinput}>
          <TextInput
            id="date"
            style={styles.inputText}
            placeholder="Selected Date"
            placeholderTextColor="white"
            // onChangeText={handleEmail}
          />
          <DropDownPicker
          style={styles.dropdown}
          placeholder="Car"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        <TouchableOpacity style= {styles.btnsearch}>
          <Text style={styles.searchtext} >Search Vehicle</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wraprecomended} >
        <Text style={styles.textrecomended}>Recomended</Text>
        <Text style={styles.textviewmore}  >View More</Text>
      </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.wrapimgvehicle} >
      {popular.length > 0 &&
        popular.map((item, idx) => {
          if(item.photo === null){
            item.photo = "https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg"
          }
          console.log(item.photo);
          return (
            <TouchableOpacity style={styles.card} key={idx} onPress={()=>handlerDetailVehicle(item.id)}>
              <Image source={{uri: `${item.photo}`}} style={styles.card} /> 
            </TouchableOpacity>
          );
        })}
      {/* {popular.length > 0 && (
        <FlatList 
        style={styles.card}
        data={popular}
        renderItem={({item: vehicle}) =>{
          console.log("asdadasdsa",vehicle.vehiclename);
        return(
          <View>
            <Image source={{uri: `${vehicle.photo}`}}  /> 
            <Text>{vehicle.name}</Text>
          </View>
        )
        }} 
        />
      )} */}
      {/* {popular.slice(0, 4).map((item, key) => {
            if(item.photo === null){
              item.photo = defaultimg
            }
            return (
              <View style={styles.card} key={key}>
                <Image source={{uri: `${item.photo}`}}  />
              </View>
        );
          })} */}
        {/* <Image source={require('../../assets/img3.png')} /> */}
      </View>
        </ScrollView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  img: {
    width: width,
    height: 350,
  },
  wrapsearch: {
    width: '100%',
    height: 250,
    backgroundColor: '#393939',
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: -50,
  },
  wrapinput: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputText: {
    backgroundColor: '#747474',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    paddingLeft: 20,
    borderRadius: 10,
    height: 50,
    width: 180,
    color: '#fff',
    fontSize: 20,
  },
  dropdown:{
    backgroundColor: '#747474',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    paddingLeft: 20,
    borderRadius: 10,
    height: 50,
    width: 100,
    color: '#fff',
    fontSize: 20,
  },
  btnsearch:{
    backgroundColor: "#FFCD61",
    borderRadius: 10,
    width:338,
    height:50,
    marginLeft:20,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
  },
  searchtext:{
    // fontFamily:"Nunito"
    fontSize:18,
    fontWeight:"bold",
    color:"#393939"
  },
  wraprecomended:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:20,
    marginRight:20,
    marginTop:38,
    marginBottom:20
  },
  wrapimgvehicle:{
    display:"flex",
    flexDirection:"row",
    // backgroundColor:"#000"
  },
  card:{
    resizeMode: 'cover',
    width: 240,
    height: 150,
    marginTop: 10,
    marginLeft: 23,
    marginRight: 23,
    borderRadius: 10,
  },
  textrecomended:{
    fontSize:18,
    fontWeight:"bold"
  },
  textviewmore:{
    marginTop:7,
    fontSize:12,
    fontWeight:"bold"
  },
});

export default Home;
