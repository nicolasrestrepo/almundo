import 'isomorphic-fetch'
import config from '../config'

const api = {
    hotel:{
       async getAllHotels(){
            const response = await fetch(`${config.apiUrl}/api/all-hotels`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            return{
                data,
                status: response.status
            } 
        },
        async getHotelById(id){
            const response = await fetch(`${config.apiUrl}/api/single-hotel/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            return {
                data: data,
                status: response.status
            }
        },
        async AddHotel(hotelData){
            const response = await fetch(`${config.apiUrl}/api/add-hotel`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hotelData)
            })
            const data = await response.json()
            return data
        }
    }
}

export default api