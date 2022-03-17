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
  ActivityIndicator
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {getPopularAction, getVehicleTypeAction} from '../../redux/action/vehicle';
const {width} = Dimensions.get('window');
import defaultimg from '../../assets/img4.jpg';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const allState = useSelector(state => state);
  const role = useSelector(state => state.auth.userData.user.role);
  const [popular, setPopular] = useState([]);
  const [location, setLocation] = useState("");
  const [isLoading,setIsLoading]= useState(false)
  const [isLoading1,setIsLoading1]= useState(false)
  const [isLoading2,setIsLoading2]= useState(false)
  const [isLoading3,setIsLoading3]= useState(false)
  const [car, setCar] = useState([]);
  const [motorBike, setMotorBike] = useState([]);
  const [bycycle, setBycycle] = useState([]);
  
  const handlerLocation =e=>{
    setLocation(e)
  }

  const getHistoryPopular = () => {
    setIsLoading(true)
    dispatch(getPopularAction())
      .then(result => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setPopular(data);
        setIsLoading(false)
        // console.log('parameter',data);
      })
      .catch(err => console.log(err));
  };

  const handlerViewAll = () => {
    navigation.navigate('Allvehicle', {location: location});
  };

  const handlerDetailVehicle = id => {
    console.log(id);
    navigation.navigate('Detailvehicle', {id: id});
  };

  const getVehicleCar = () => {
    setIsLoading1(true)
    dispatch(getVehicleTypeAction("car"))
      .then((result) => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setCar(data);
        setIsLoading1(false)

      })
      .catch((err) => console.log(err));
    };

    const getVehicleMotorBike = () => {
      setIsLoading2(true)
      dispatch(getVehicleTypeAction("motorcycle"))
        .then((result) => {
          const data = result.value.data.data;
          // setdetailhistory(data);
          setMotorBike(data);
          setIsLoading2(false)
  
        })
        .catch((err) => console.log(err));
      };

      const getVehicleBycicle = () => {
        setIsLoading3(true)
        dispatch(getVehicleTypeAction("bicycle"))
          .then((result) => {
            const data = result.value.data.data;
            // setdetailhistory(data);
            setBycycle(data);
            setIsLoading3(false)
    
          })
          .catch((err) => console.log(err));
        };

  useEffect(() => {
    getHistoryPopular();
  }, []);

  useEffect(() => {
    getVehicleCar();
  }, []);

  useEffect(() => {
    getVehicleMotorBike();
  }, []);

  useEffect(() => {
    getVehicleBycicle();
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
            onChangeText={handlerLocation}
          />
        </View>
        <TouchableOpacity style={styles.btnsearch} onPress={handlerViewAll}>
          <Text style={styles.searchtext}>Search Vehicle</Text>
        </TouchableOpacity>
      </View>
      {role==="admin"?(<>
        <View style={{alignItems: 'center', margin: 40}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Vehicleadd')}
          style={{
            width: '50%',
            height: 50,
            borderRadius: 10,
            backgroundColor: '#FFCD61',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
            Add Vehicle
          </Text>
        </TouchableOpacity>
      </View>
      </>):null}
      
      <View style={styles.wraprecomended}>
        <Text style={styles.textrecomended}>Recomended</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Allvehicle')}>
          <Text style={styles.textviewmore}>View More</Text>
        </TouchableOpacity>
      </View>
      {!isLoading? (
        <>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapimgvehicle}>
          {popular.length > 0 &&
            popular.map((item, idx) => {
              if (item.photo === null) {
                item.photo =
                  'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
              }
              console.log(item.photo);
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={idx}
                  onPress={() => handlerDetailVehicle(item.id)}>
                  <Image source={{uri: `${item.photo}`}} style={styles.card} />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
        </>
      ):(
      <>
      <View style={{height:150,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#FFCD61"/>
      </View>
      </>)}
      
      <View style={styles.wraprecomended}>
        <Text style={styles.textrecomended}>Car</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Allvehicle',{type:"car"})}>
          <Text style={styles.textviewmore}>View More</Text>
        </TouchableOpacity>
      </View>
      {!isLoading1?(<>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapimgvehicle}>
          {car.length > 0 &&
            car.map((item, idx) => {
              if (item.photo === null) {
                item.photo =
                  'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
              }
              console.log(item.photo);
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={idx}
                  onPress={() => handlerDetailVehicle(item.id)}>
                  <Image source={{uri: `${item.photo}`}} style={styles.card} />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      </>):(<>
        <View style={{height:150,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#FFCD61"/>
      </View>
      </>)}
      
      <View style={styles.wraprecomended}>
        <Text style={styles.textrecomended}>bike</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Allvehicle',{type:"bicycle"})}>
          <Text style={styles.textviewmore}>View More</Text>
        </TouchableOpacity>
      </View>
      {!isLoading2?(<>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapimgvehicle}>
          {bycycle.length > 0 &&
            bycycle.map((item, idx) => {
              if (item.photo === null) {
                item.photo =
                  'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
              }
              console.log(item.photo);
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={idx}
                  onPress={() => handlerDetailVehicle(item.id)}>
                  <Image source={{uri: `${item.photo}`}} style={styles.card} />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      </>):(<>
        <View style={{height:150,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#FFCD61"/>
      </View>
      </>)}
      
      <View style={styles.wraprecomended}>
        <Text style={styles.textrecomended}>Motorcycle</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Allvehicle',{type:"motorcycle"})}>
          <Text style={styles.textviewmore}>View More</Text>
        </TouchableOpacity>
      </View>
      {!isLoading3?(<>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.wrapimgvehicle}>
          {motorBike.length > 0 &&
            motorBike.map((item, idx) => {
              if (item.photo === null) {
                item.photo =
                  'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
              }
              console.log(item.photo);
              return (
                <TouchableOpacity
                  style={styles.card}
                  key={idx}
                  onPress={() => handlerDetailVehicle(item.id)}>
                  <Image source={{uri: `${item.photo}`}} style={styles.card} />
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      </>):(<>
        <View style={{height:150,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" color="#FFCD61"/>
      </View>
      </>)}
      
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
    height: 175,
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
    width: "85%",
    color: '#fff',
    fontSize: 20,
  },
  dropdown: {
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
  btnsearch: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: 338,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchtext: {
    // fontFamily:"Nunito"
    fontSize: 18,
    fontWeight: 'bold',
    color: '#393939',
  },
  wraprecomended: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 38,
    marginBottom: 20,
  },
  wrapimgvehicle: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:"#000"
  },
  card: {
    resizeMode: 'cover',
    width: 240,
    height: 150,
    marginTop: 10,
    marginLeft: 23,
    marginRight: 23,
    borderRadius: 10,
  },
  textrecomended: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textviewmore: {
    marginTop: 7,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Home;
