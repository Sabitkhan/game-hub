import axios from "axios";

export default axios.create(
     {
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'53b72ceeab06478e8715b92a6b482094'
        }
     }
)