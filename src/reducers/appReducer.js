import React from "react"
import { geolocated } from "react-geolocated"
import { CONSTANS } from '../actions'

const API_KEY = "288f6eab4f8a85fc1c207e194d70f482"
let lat = 52.23

function success(position) {
   lat = position.coords.latitude
   const longitude = position.coords.longitude
}

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(success)
}

console.log(lat)

const initialState = {
   api_key: API_KEY,
   defaultCityCoords: { lon: 21.01, lat: 52.23 }

}

const appReducer = (state = initialState, action) => {

   switch (action.type) {
      // case CONSTANS.FIND_CITY: {
      //    return state
      // }
      default:
         return state
   }

}
export default appReducer