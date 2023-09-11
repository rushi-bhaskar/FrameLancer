import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://framelanceapi.onrender.com/API/",
    withCredentials:true,
});

export default newRequest;
