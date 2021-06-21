import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
    'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOSVNUUkFUT1IifV0sImlhdCI6MTYyNDI1MjI1OSwiZXhwIjoxNjI1MTE2MjU5fQ.27ZiAfvSmLrcYl0gw0it9kKJfE8LCTXlmxqUe32kE3pAuzQpNHE3-NQS3Dmjg7GT';

const axiosInstance = axios.create({
    baseURL: 'https://coupons-back-mysql-jwt.herokuapp.com'
});