const axios = require('axios');
// // Add a request interceptor
// axios.interceptors.request.use(
//     (config) => {
//       // Do something before sending the request
//       console.log('Request Interceptor - Request Config:', config);
//       // You can modify the config or add headers here
//       return config;
//     },
//     (error) => {
//       // Do something with request error
//       console.error('Request Interceptor - Error:', error);
//       return Promise.reject(error);
//     }
//   );
  
//   // Add a response interceptor
//   axios.interceptors.response.use(
//     (response) => {
//       // Do something with the response data
//       console.log('Response Interceptor - Response Data:', response.data);
//       // You can modify the response data here
//       return response;
//     },
//     (error) => {
//       // Do something with response error
//       console.error('Response Interceptor - Error:', error);
//       return Promise.reject(error);
//     }
//   );
  
//   // Making a sample GET request
//   axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//       // Handle success
//       response.data.userId=100;
//       console.log('Main Code - Response Data:', response.data);
//     })
//     .catch((error) => {
//       // Handle error
//       console.error('Main Code - Error:', error);
//     });
//.....................making a post requ................
let data={
    device_type:'Roku/Telstra'
}
let headers={
    'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}
let val=axios.post('http://localhost:5000/get_release/device',data,{headers:headers}
).then((res)=>{console.log(res.data)})


