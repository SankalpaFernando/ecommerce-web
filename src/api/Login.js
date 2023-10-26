import axios from "axios";
import { toast } from "react-toastify";


const BackendAPI = axios.create({
    baseURL:"http://127.0.0.1:5000"
})

export async function signUp(name,email,password){
       BackendAPI.post("/auth/register",{
            name,
            email,
            password
        }).then(res=>{

        }).catch(err=>{
            toast.error(err.response.data.message)
        })
        
}