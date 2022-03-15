import PushNotification from "react-native-push-notification"

export const sendLocalNotification = (message)=>{
    PushNotification.localNotification({
        channelId:"123",
        title:'vehicle-reantal',
        message
    })
}

export const sendScheduleNotification = ()=>{
    PushNotification.localNotificationSchedule({
        channelId:"123",
        title:'vehicle-reantal-schadule',
        message:"ayo sewa kendaraan disini delay 5 detik",
        date: new Date(date.now() + 5 * 1000),
    })
}