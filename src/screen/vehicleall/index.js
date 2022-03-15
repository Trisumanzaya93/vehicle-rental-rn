import {View, Text, TextInput, Image, FlatList,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllVehicleAction} from '../../redux/action/vehicle';
import {useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Vehicleall = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [allVehicle, setAllVehicle] = useState({});
  const [allVehicleData, setAllVehicleData] = useState();
  const [param, setParam] = useState({});
  const [isLoading,setIsLoading]=useState(false)

  const handlerDetailVehicle = id => {
    console.log(id);
    navigation.navigate('Detailvehicle', {id: id});
  };

  const handlersearch= e =>{
    setParam({search:e})
    getAllVehicle()
  }

  const getAllVehicle = () => {
    dispatch(getAllVehicleAction(param))
      .then(result => {
        console.log('result', result);
        const data = result.value.data;
        // setdetailhistory(data);
        setAllVehicle(data);
        setAllVehicleData(data.data);
        console.log('hayooo apa inii', data);
      })
      .catch(err => console.log(err));
  };

  const getAllVehicleMore = () => {
    setIsLoading(true)
    dispatch(getAllVehicleAction(param))
      .then(result => {
        console.log('result', result);
        const data = result.value.data;
        // setdetailhistory(data);

        setAllVehicle(data);
        setAllVehicleData([ ...allVehicleData ,...data.data]);
        console.log('hayooo apa inii', data);
        setIsLoading(false)
      })
      .catch(err => console.log(err));
  };

  const getPagination=()=>{
    const nextPage = (allVehicle.page ?? 1) + 1;
    console.log(nextPage, allVehicle.total_page);
    if(nextPage <= allVehicle.total_page){
      setParam({...param,page: nextPage})
      getAllVehicleMore();
      
    }
    
  }
  const loadingPagination=()=>{
    return<View style={{width:"100%",alignItems:"center"}}>
      {isLoading?<Text style={{fontSize:30}}>Loading . . .</Text>:null}
      </View>
    
  }

  useEffect(() => {
    getAllVehicle();
  }, []);

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
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
        <TextInput onChangeText={handlersearch} placeholder="search" />
      </View>
      <FlatList
        data={allVehicleData}
        keyExtractor={item => item.key}
        ListFooterComponent={loadingPagination}
        onEndReachedThreshold={0.2}
        onEndReached={getPagination}
        renderItem={({item, index}) => {
          if (item.photo === null) {
            item.photo =
              'https://png.pngtree.com/element_our/sm/20180516/sm_5afbf1d28feb1.jpg';
          }
          return <View
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '5%',
            marginTop: 40,
          }}>
          <View style={{width: 150, height: 140}}>
            <Image
              source={{uri: `${item.photo}`}}
              style={{borderRadius: 20, width: '100%', height: '100%'}}
            />
          </View>
          <TouchableOpacity onPress={() => handlerDetailVehicle(item.id)} style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              {item.vehiclename}
            </Text>
            <Text style={{color: '#000', marginTop: 10}}>{item.description ??"-"}</Text>
            <Text style={{color: '#000'}}>{item.location}</Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 17,
                fontWeight: 'bold',
                color: '#228B22',
              }}>
              {item.status}
            </Text>
            <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
              Rp. {item.price}/day
            </Text>
          </TouchableOpacity>
        </View>
        }}
      />
    </View>
  );
};

export default Vehicleall;
