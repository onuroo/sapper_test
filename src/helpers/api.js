// Api.js
import axios from "axios";

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL : 'https://houseofapps.com/tsb/api/' // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
    const headers = {
    };
    //using the axios instance to perform the request that received from each http method
    console.log('2222', method,
    url,
    request,
    headers)
    return axiosAPI({
        method,
        url,
        data: request,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

// function to execute the http get request
const getRequest = (url, request) => apiRequest("get",url,request);

// function to execute the http delete request
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// function to execute the http post request
const postRequest = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const putRequest = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patchRequest = (url, request) =>  apiRequest("patch", url, request);

// expose your method to other services or actions
const API ={
    getRequest,
    deleteRequest,
    postRequest,
    putRequest,
    patchRequest
};
export default API;