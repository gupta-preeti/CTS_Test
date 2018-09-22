import axios from "axios";

export const userDataService = axios.get("https://reqres.in/api/users?page=1&per_page=10")
   .then(res => {
    return res.data;
   }).catch(Error => console.log(Error))
