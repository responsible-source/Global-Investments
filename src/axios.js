import axios from "axios";
// import { BASE_URL } from "./constants";


export default axios.create({
    baseURL: "http://globaltradez.com/api"
});