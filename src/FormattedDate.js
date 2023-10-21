import React from "react"

export default function FormattedDate(props) {
    let days=["Sunday", "Monday", "Tuesday", "Wednesday","Thusday", "Friday", "Saturday"]
    console.log(props.date)
    let day = days[props.date.getDay()]
    let hours = props.date.getHours()
     if (hours<10) {
        hours=`0${hours}`
    }
    let minutes = props.date.getMinutes()
    if (minutes<10) {
        minutes=`0${minutes}`
    }
    return `${day} ${hours}:${minutes}`
}