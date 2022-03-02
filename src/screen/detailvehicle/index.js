import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {getDetailVehicleAction, setReservation} from '../../redux/action/vehicle';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
const {width, height} = Dimensions.get('window');

const Detailvehicle = ({route}) => {
  const navigation= useNavigation()
  const dispatch = useDispatch();
  const [detailVehicle, setdetailvehicle] = useState({});
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1 day', value: 1},
    {label: '2 day', value: 2},
    {label: '3 day', value: 3},
  ]);
  const [date, setDate] = useState(new Date());
  const [openKalender, setOpenKalender] = useState(false);
  const allState = useSelector(state => state.getProfile.userinfo);
  console.log("date",allState);

  const onClickPrevious = () => {
    const newCounter = counter - 1 < 1 ? 1 : counter - 1;
    setCounter(newCounter);
    
  }
  const addCounter = () => {
    const stock = detailVehicle.stock
    console.log(stock);
    const newCounter = counter+1 <= stock ?  counter + 1 : stock ;
    setCounter(newCounter);
  };

  const getDetailVehicle = () => {
    const id = route.params.id;
    dispatch(getDetailVehicleAction(id))
      .then(result => {
        console.log('ini ', result.value.data.data);
        const data = result.value.data.data[0];
        setdetailvehicle(data);
      })
      .catch(err => console.log(err));
  };
  console.log("iyaaaaaa",detailVehicle)

  const handleReservation2=()=>{
    navigation.navigate("reservation")
  }

  const handleReservation = () => {
    const calTotalPrice = detailVehicle.price * counter* value;
    console.log(calTotalPrice);
    // const{bookingCode, paymentCode} = generateCode()
    const returnDate = dayjs(date)
      .add(parseInt(value), "day")
      .format("YYYY-MM-DD");
     
    dispatch(setReservation({
      userId: allState.id,
      vehicleId: detailVehicle.id,
      quantityTotal: counter,
      returnDate,
      selectedDay:value,
      startDate:dayjs(date).format("YYYY-MM-DD"),
      totalPrice:calTotalPrice
    }))
    navigation.navigate("reservation")
  };

  // const returnDateDropdown = () => {
  //   const returnDate = dayjs(reservationDetail.startDate)
  //     .add(parseInt(selected), "day")
  //     .format("YYYY-MM-DD");

  //   setReservationDetail({
  //     ...reservationDetail,
  //     returnDate,
  //     selectedDay: selected
  //   });
  //   calculatePrice(reservationDetail.quantityTotal, selected);
  // };

  useEffect(() => {
    getDetailVehicle();
    // will unmount
    return () => {};
  }, []);
  return (
    <ScrollView>
      <View style={{backgroundColor: '#FFF'}}>
        <Image
          source={{
            uri: `${detailVehicle.photo}`,
          }}
          style={{ height:220}}
        />
        <View style={{marginTop: 20, marginLeft: 20}}>
          <View style={{marginBottom: 20}}>
            <Text style={styles.title}>{detailVehicle.vehiclename}</Text>
            <Text style={styles.title}>Rp. {detailVehicle.price}/day</Text>
          </View>
          <View style={{marginBottom: 20}}>
            <Text style={{fontSize: 14, marginBottom: 2, color: '#000'}}>
              Max for 2 person{' '}
            </Text>
            <Text style={{fontSize: 14, marginBottom: 5, color: '#000'}}>
              No prepayment
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'green'}}>
              {detailVehicle.status}
            </Text>
          </View>
          <View style={styles.wraplocation}>
            <View
              style={{
                width: 38,
                height: 38,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFD57933',
              }}>
              <Image source={require('../../assets/icon.png')} />
            </View>
            <View>
              <Text style={{fontSize: 16, color: '#999999'}}>
                {detailVehicle.location}
              </Text>
            </View>
          </View>
          <View style={styles.wraplocation}>
            <View
              style={{
                width: 38,
                height: 38,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFD57933',
              }}>
              <Image source={require('../../assets/icon1.png')} />
            </View>
            <View>
              <Text style={{fontSize: 16, color: '#999999'}}>
              3.2 miles from your location
              </Text>
            </View>
          </View>
          <View style={styles.wrapselect}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
              Select bikes
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
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 30,marginBottom:25}}>
            <View style={styles.selectday}>
            <Button
              title={`${dayjs(date).format('YYYY-MM-DD')}`}
              tipe=""
              color={'#DEDEDE'}
              onPress={() => setOpenKalender(true)}
            />
            <DatePicker
              modal
              mode="date"
              textColor="blue"
              androidPickerMode="spinner"
              open={openKalender}
              date={date}
              onConfirm={date => {
                setOpenKalender(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpenKalender(false);
              }}
            />
            </View>
            <DropDownPicker
              style={styles.day}
              placeholder="1 day"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <TouchableOpacity style={styles.reservation} onPress={handleReservation}>
            <Text style={styles.textreservation}>Reservation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  wraplocation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
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
  selectday: {
    paddingTop: 5,
    paddingLeft: 10,
    width: 190,
    height: 36,
    backgroundColor: '#d3d3d3',
    marginRight: 55,
    borderRadius: 10,
  },
  day: {
    paddingTop: 5,
    paddingLeft: 10,
    width: 100,
    height: 36,
    backgroundColor: '#d3d3d3',
    marginRight: 20,
    borderRadius: 10,
  },
  reservation: {
    width: "93%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFCD61',
    borderRadius: 10,
  },
  textreservation: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Detailvehicle;
