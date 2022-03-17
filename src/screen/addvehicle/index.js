import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

const Addvehicle = () => {
  const allState = useSelector(state => state);
  const [imageprev, setimageprev] = useState(
    'http://cdn.onlinewebfonts.com/svg/img_211436.png',
  );
  const [isErr,setIsErr]=useState(false)
  const [image, setimage] = useState(null);
  const [counter, setCounter] = useState(1);
  const [vehicleName, setVehicleName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Car', value: 'Car'},
    {label: 'motorcycle', value: 'motorcycle'},
    {label: 'bicycle', value: 'bicycle'},
  ]);
  const handleName = e => {
    setVehicleName(e);
  };
  const handleLocation = e => {
    setLocation(e);
  };
  const handledeskripsi = e => {
    setDescription(e);
  };
  const handleprice = e => {
    let pricing = parseInt(e);
    setPrice(pricing);
  };
  const onClickPrevious = () => {
    const newCounter = counter - 1 < 1 ? 1 : counter - 1;
    setCounter(newCounter);
  };
  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const openCamera = () => {
    setIsErr(false)
    const option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('cencel image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        console.log('res', res);
        setimageprev(data.uri);
        setimage(data);
        // setBinaryImage(data.base64);
        if(data.fileSize>2000000){
          setIsErr(true)
        }
        console.log("filesize",data.fileSize);
      }
    });
  };
  const handleSave = () => {
    const token = allState.auth.userData.token;
    // const body = new FormData();
    // body.append("[vehiclename]",JSON.stringify(vehicleName))
    // body.append("[location]",JSON.stringify(location))
    // body.append("[price]",JSON.stringify(price))
    // body.append("[stock]",JSON.stringify(counter))
    // body.append("[category]",JSON.stringify(value1))
    // body.append({name:"description",data:JSON.stringify(description)})
    // body.append(
    //   {
    //     name:"photo",
    //     uri: image.uri,
    //     type: image.type,
    //     name: image.fileName,
    //   },
    // );
  //   body.append([
  //   {name: 'vehiclename', data: JSON.stringify(vehicleName)},
  //   {name: 'location', data: JSON.stringify(location)},
  //   {name: 'price', data: JSON.stringify(price)},
  //   {uri:image.uri,type:image.type,name:image.fileName},
  //   {name: 'stock', data: JSON.stringify(counter)},
  //   {name: 'category', data: JSON.stringify(value1)},
  //   {name: 'description', data: JSON.stringify(description)},
  // ])

    // console.log(body);
    const URL = process.env.HEROKU + '/vehicle/createVehicle';
    RNFetchBlob.fetch('POST',
    URL,
        // Accept: 'application/json',
        {
          'Content-Type': 'multipart/form-data',
          'x-access-token': token,
        },
      [
        {uri:image.uri,type:image.type,name:"image",filename:image.fileName,data: RNFetchBlob.wrap(image.uri),},
        {name: 'vehiclename', data: JSON.stringify(vehicleName)},
        {name: 'location', data: JSON.stringify(location)},
        {name: 'price', data: JSON.stringify(price)},
        {name: 'stock', data: JSON.stringify(counter)},
        {name: 'category', data: JSON.stringify(value1)},
        {name: 'description', data: JSON.stringify(description)}
      ]
    )
      .then(res => {ToastAndroid.show("Add Vehicle Success", ToastAndroid.SHORT)})
      .catch(err => console.log(err));
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#fff'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 40,
            marginRight: '10%',
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
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 23, fontWeight: '400', color: '#B8BECD'}}>
              Cencel
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: imageprev}}
            style={{width: 150, height: 150, borderRadius: 120, marginLeft: 25}}
          />
          <TouchableOpacity
            onPress={openCamera}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              backgroundColor: '#FFCD61',
              marginLeft: -50,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 35, fontWeight: 'bold', color: '#000'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        {isErr?(<><View style={{width: '90%', marginLeft: '5%', marginTop: 40, alignItems:"center"}}><Text style={{fontSize:17,fontWeight:"bold",color:"#ff0000"}}>image is over size</Text></View></>):null}
        <View style={{width: '90%', marginLeft: '5%', marginTop: 40}}>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 3,
              borderColor: '#B8BECD',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Name
            </Text>
            <TextInput
              onChangeText={handleName}
              placeholder="Input the product name min. 30 characters"
            />
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 3,
              borderColor: '#B8BECD',
              marginTop: 35,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Price
            </Text>
            <TextInput
              onChangeText={handleprice}
              placeholder="Input the product name min. 30 characters"
            />
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 3,
              borderColor: '#B8BECD',
              marginTop: 35,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Description
            </Text>
            <TextInput
              onChangeText={handledeskripsi}
              placeholder="Input the product name min. 30 characters"
            />
          </View>
          <View
            style={{
              width: '100%',
              borderBottomWidth: 3,
              borderColor: '#B8BECD',
              marginTop: 35,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Location
            </Text>
            <TextInput
              onChangeText={handleLocation}
              placeholder="Input the product name min. 30 characters"
            />
          </View>
          <View style={{width: '100%', marginTop: 35}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Add To
            </Text>
            <DropDownPicker
              style={{
                height: 50,
                backgroundColor: '#DFDEDE',
                position: 'relative',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'center',
              }}
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
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginBottom: 40,
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={handleSave}
              style={{
                width: 300,
                height: 50,
                backgroundColor: '#FFCD61',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Save Product
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
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
});

export default Addvehicle;
