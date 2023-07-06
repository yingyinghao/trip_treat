import axios from 'axios';

   const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
    const options = {
      method: 'GET',
      url: URL,
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
      },
      headers: {
        'x-rapidapi-key': 'f0e2e2e2aamshb3b2b3b3b3b3b3b',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',

      },
    };


const getPlacesData = async () => {
  try {
    const {data: {data}} = await axios.get(URL, options);

    return data;

  }catch(error){
    console.log(error)
  }
}
