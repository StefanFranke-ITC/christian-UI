import axios from "axios";

axios.defaults.baseURL = 'http://fastglobeit.de:8100/auth'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
