import axios from 'axios';

const api = axios.create({
  baseURL: 'https://review-reporters.herokuapp.com/api'
});


const DataAPI = {
  getKeyword: async(category) => {
    const res = await api
    .get(`/keyword?category=${category}`)
    .catch(err =>
      console.log(err)
    );
    
    return res.data;
  },
  getReview: async(category, keyword) => {
    const res = await api
    .get(`/review?category=${category}&keyword=${keyword}`)
    .catch(err =>
      console.log(err)
    );

    return res.data;
  },
  getSelectedKeyword: async(category) => {
    const res = await api
    .get(`/total_analysis?category=${category}`)
    .catch(err =>
      console.log(err)
    );

    return res.data;
  },
  getAnalysis: async(category, keyword) => {
    const res = await api
    .get(`/analysis?category=${category}&keyword=${keyword}`)
    .catch(err =>
      console.log(err)
    );

    return res.data;
  }
};

export default DataAPI;