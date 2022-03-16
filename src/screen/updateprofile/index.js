import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  ToastAndroid
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
// import { updateProfile } from '../../utils/user';
import {
  getProfileAction,
  updateImageAction,
  updateProfileAction,
} from '../../redux/action/user';
import {updateImage} from '../../utils/user';

const Updateprofile = () => {
  const dispatch = useDispatch();
  const allState = useSelector(state => state);

  const [profile, setProfile] = useState(allState.getProfile.userinfo);
  console.log(profile);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(profile.gender);
  const [radio, setRadio] = useState(
    value === 'female' ? '#FFCD61' : '#9F9F9F',
  );
  const [radio1, setRadio1] = useState(
    value === 'male' ? '#FFCD61' : '#9F9F9F',
  );
  const [isEdit, setIsEdit] = useState(false);
  const [displayname, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setphone] = useState('');
  const [address, setAddress] = useState('');
  const [imageprev, setimageprev] = useState(profile.image);
  const [image, setimage] = useState(profile.image);
  const [binaryImage, setBinaryImage] = useState(profile.image);

  const handlerName = e => {
    setDisplayname(e);
  };

  const handleEmail = e => {
    setEmail(e);
  };
  const handlephone = e => {
    setphone(e);
  };
  const handleAddres = e => {
    setAddress(e);
  };

  const handlerImageSend = () => {
    const token = allState.auth.userData.token;

    // const URL = process.env.HEROKU + "/users/";
    const body = new FormData();
    body.append('image', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    });
    console.log(body);
    const URL = process.env.HEROKU + '/users/';
    fetch(URL, {
      method: 'PATCH',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        'x-access-token': token,
      },
      body,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handlerUpdate = () => {
    const token = allState.auth.userData.token;
    const body = {
      displayname,
      email,
      phone,
      birthday: dayjs(date).format('YYYY-MM-DD'),
      address,
    };
    // const body = new FormData();
    // body.append("username", this.state.username);
    // image.mimetype = image.type;
    // image.name = image.fileName;
    // console.log('displayname', displayname);
    // body.append('email', email);
    // body.append('phone', phone);
    // body.append('displayname', displayname);
    // body.append('birthday', date);
    // body.append('address', address);
    // body.append('image', binaryImage);
    // console.log('imama', image);
    // console.log('brooo', token, body);
    // try{
    //   const result = await dispatch(updateProfileAction(body, token))
    //   console.log("apa sia ",result);
    // }catch(err){
    //   console.error(err)
    // };
    console.log('body dispatch', body);
    dispatch(updateProfileAction(token, body))
      .then(result => {
        console.log('ini ', result.value.data.data);
        const data = result.value.data.data;
        const body = new FormData();
        body.append('image', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        });
        console.log(body);
        const URL = process.env.HEROKU + '/users/';
        fetch(URL, {
          method: 'PATCH',
          headers: {
            // Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            'x-access-token': token,
          },
          body,
        }).then(res => {
          ToastAndroid.show("update profile Success", ToastAndroid.SHORT)
          dispatch(
            getProfileAction({
              headers: {
                'x-access-token': token,
              },
            }),
          );
        });
      })
      // .catch(err => console.log(err));
      .catch(err => alert('password gagal'));

    //   console.log('ini ', response.value.data.data);
    //   // alert("succes")
    //   navigation.navigate("Home")
    // })
    // .catch(err => {
    //   alert(err)
    // });
    // dispatch(updateProfileAction(body, token))
    // .then((response) => {
    //   console.log(response);
    //     if(response.data.statusCode === 200){
    //       console.log("update succes");
    //     }else{

    //       console.log("update gagal");
    //     }
    // })
    // .catch((err) => console.error(err));
    // const body ={
    //   displayname,
    //   address,
    //   phone,
    //   email,
    //   image
    // }
    // updateProfile()?
  };

  const handlerRadio = () => {
    if (radio === '#9F9F9F') {
      setRadio('#FFCD61');
      setRadio1('#9F9F9F');
      setValue('Female');
    } else {
      setRadio('#9F9F9F');
      setRadio1('#FFCD61');
      setValue('Male');
    }
  };
  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('cencel image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        console.log('res', res);
        setimageprev(data.uri);
        setimage(data);
        setBinaryImage(data.base64);
        console.log(data);
      }
    });
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
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
            Update Profile
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Image
            source={{uri: imageprev}}
            style={{width: 120, height: 120, borderRadius: 100}}
          />
          <TouchableOpacity
            onPress={openCamera}
            style={{
              width: 35,
              height: 35,
              borderRadius: 30,
              backgroundColor: '#FFCD61',
              marginLeft: -40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/icon5.png')} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 35,
          }}>
          <View
            style={{display: 'flex', flexDirection: 'row', marginRight: 30}}>
            <TouchableOpacity
              onPress={handlerRadio}
              style={{
                backgroundColor: `${radio}`,
                width: 20,
                height: 20,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: 'black',
                }}></View>
            </TouchableOpacity>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
              Female
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={handlerRadio}
              style={{
                backgroundColor: `${radio1}`,
                width: 20,
                height: 20,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: 'black',
                }}></View>
            </TouchableOpacity>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
              Male
            </Text>
          </View>
        </View>
        <View style={{marginTop: 40, marginLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B8B8B8'}}>
            Name :
          </Text>
          <TextInput
            editable={isEdit}
            placeholder={`${profile.displayname ?? '-'}`}
            onChangeText={handlerName}
            style={{
              width: '80%',
              fontSize: 20,
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B8B8B8'}}>
            Email Adress :
          </Text>
          <TextInput
            editable={isEdit}
            placeholder={`${profile.email ?? '-'}`}
            onChangeText={handleEmail}
            style={{
              width: '80%',
              fontSize: 20,
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B8B8B8'}}>
            Phone Number :
          </Text>
          <TextInput
            editable={isEdit}
            placeholder={`${profile.phone ?? '-'}`}
            onChangeText={handlephone}
            style={{
              width: '80%',
              fontSize: 20,
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#B8B8B8',
              marginBottom: 10,
            }}>
            Date Of Birth :
          </Text>
          <View style={{width: 200, marginBottom: 10}}>
            <Button
              title={`${dayjs(date).format('YYYY-MM-DD')}`}
              tipe=""
              color="#808080"
              onPress={() => setOpen(true)}
            />
            <DatePicker
              modal
              mode="date"
              textColor="blue"
              androidPickerMode="spinner"
              open={open}
              costumStyles={{
                title: {
                  textColor: '#000',
                },
              }}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#B8B8B8'}}>
            Adress :
          </Text>
          <TextInput
            editable={isEdit}
            placeholder={`${profile.address ?? '-'}`}
            onChangeText={handleAddres}
            style={{
              width: '80%',
              fontSize: 20,
              paddingLeft: 20,
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </View>
        {isEdit === false ? (
          <TouchableOpacity
            style={{
              borderRadius: 20,
              marginLeft: '10%',
              marginTop: 30,
              marginBottom: 40,
              width: '80%',
              height: 60,
              backgroundColor: '#FFCD61',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setIsEdit(true)}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handlerUpdate}
            style={{
              borderRadius: 20,
              marginLeft: '10%',
              marginTop: 30,
              marginBottom: 40,
              width: '80%',
              height: 60,
              backgroundColor: '#FFCD61',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Save</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Updateprofile;
