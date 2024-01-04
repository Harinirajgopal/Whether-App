
import axios from "axios"


 let APP_KEY="6253e0fd2d8ac70b33451e77586eee66"
 let URL="https://api.openweathermap.org/data/2.5/weather"

 export const fetchweather=async(e)=>{
  let {data}=await axios.get(URL,{
    params:{
      q:e,
      APPID:APP_KEY,
      units:"metric"


    }
  })
  console.log(data)
  return data
 }


 