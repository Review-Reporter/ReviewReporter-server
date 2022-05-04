import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000'
});


const DataAPI = {
  getKeyword: async(category) => {
    const res = await api
    .get(`/keyword?category=${category}`) // 변경
    .catch(err =>
      console.log(err)
    );
    
    return res.data;
  },
  getReview: async() => {
    const res = await api
    .get(`/review`)
    .catch(err =>
      console.log(err)
    );

    return res.data;
  }
};

export default DataAPI;