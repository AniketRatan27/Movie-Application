import axios from "axios";

export default axios.create({
    baseURL:'https://api.tvmaze.com/shows',
    // params:{
    //     key:'LWtTeyFaBwWpP3uE10QJ9p7uDDMvRpw8'
    // }
})