import { ACTION_STRING } from "../action/actionString";

const initialState = {
  reservation: {
    userId: null,
    vehicleId: null,
    quantityTotal: 0,
    startDate: '',
    returnDate: '',
    bookingCode: '',
    paymentCode: '',
    status: '',
    selectedDay: 1,
    totalPrice: 0,
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const setReservationReducer = (prevState = initialState, action) => {
  const { setReservation } = ACTION_STRING;
  // membuat logic berdasarkan action
  switch (action.type) {
    case setReservation:
      console.log("full", prevState);
      const reservation = {
        ...prevState.reservation,
        ...action.payload
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        reservation,
      };

    default:
      return prevState;
  }
};

export default setReservationReducer;