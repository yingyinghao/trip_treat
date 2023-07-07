import axios from 'axios';

   const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
    const options = {
      params: {
        bl_latitude: 'sw.lat',
        tr_latitude: 'ne.lat',
        bl_longitude: 'sw.lng',
        tr_longitude: 'ne.lng',
      },
      headers: {
        'x-rapidapi-key': 'f0e2e2e2aamshb3b2b3b3b3b3b3b',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',

      },
    };


export const getPlacesData = async (sw, ne) => {
  try {
    const {data: {data}} = await axios.get(URL, options);

    return data;

  }catch(error){
    console.log(error)
  }
}
