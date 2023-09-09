import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://frame-lancer2-wgiz.vercel.app/api/",
    withCredentials:true,
});

export default newRequest;