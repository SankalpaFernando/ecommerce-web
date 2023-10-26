import axios from "axios";
import { toast } from "react-toastify";


const BackendAPI = axios.create({
    baseURL:"http://127.0.0.1:5000",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("token")}` || ""
    }
})

export async function signUp(name,email,password,successCallback){
       BackendAPI.post("/auth/register",{
            name,
            email,
            password
        }).then(()=>{
            toast.success("You are successfully registered")
            toast.info("Redirecting to login page")
            successCallback()
        }).catch(err=>{
            toast.error(err.response.data.message)
        })
        
}

export async function signIn(email,password,successCallback){
    BackendAPI.post("/auth/login",{
        email,
        password
    }).then(res=>{
        localStorage.setItem("token",res.data.access_token)
        toast.success("You are successfully logged in")
        successCallback()
    }).catch(err=>{
        toast.error(err.response.data.message)
    })
}

export async function isAuthorized(roles,callback){
    BackendAPI.post(`/auth/authorized?roles=${roles}`).then(res=>{
        return res.data.allowed
    }).catch(()=>{
        return false
    }).finally(()=>callback())
}