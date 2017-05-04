var axios = require('axios');

import { apiPrefix } from '../../etc/config.json';
//var apiPrefix = 'http://localhost:8080/';
console.log('api prefix', apiPrefix);

export default {
    add(eventName) {
        return axios.post(apiPrefix + 'add', {'event': eventName});
    }
}