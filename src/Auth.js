import axios from "axios";
import Cookie from "universal-cookie";

export const cookie = new Cookie();
//토큰 리프레쉬 후 request 재시도 

export const retryRequest = (url) =>{
    async function retryRequest(){
        await axios.get(url)
        .then(resp => {
          console.log("retry requset ", resp)
        })
        .catch(error => console.log("retry error" , error.response))
    }
    retryRequest();
  }
  
//토큰 리프레쉬 
export  const tokenRefresh =(url) =>{
    async function tokenRefresh(){
      axios.defaults.headers.common['Authorization'] =  'Bearer '+cookie.get("refresh_token")
      await axios.get("/api/user/login")
      .then((resp)=>{
        setTokenToBrowser(resp)
        if(url){
          retryRequest(url);
        }
      })
      .catch(error=> {
        alert("토큰이 만료되어 로그아웃되었습니다. 다시 로그인 해주세요");
        logOut();
      })
    }
    tokenRefresh();
  }

//리퀘스트 todo action type 까지 받도록 axios.create 로 변경
export const handleRequest = (url,action,data) => {
    async function handleRequest(){
      await axios({
        method: action,
        url : url,
        data:data
      })
      .then((resp) => {
        console.log("success",resp);
      })
      .catch((error)=>{
        console.log(error.response.status,error.response.data.message)
        if(error.response.status === 401 && error.response.data.message === "ACCESS_TOKEN_EXPIRED"){
          console.log("refresh_token")
          tokenRefresh(url);  
        }
      })
    }
    handleRequest()
  }
  //로그아웃
  export const logOut = (refreshPage) =>{
    cookie.remove("refresh_token");
    delete axios.defaults.headers.common['Authorization'];
    if(!refreshPage){
      window.location.href ='/';
    }  
  }

  export const  setTokenToBrowser = (resp) => {
    const {auth_token,refresh_token} = resp.headers;
    axios.defaults.headers.common['Authorization'] =  'Bearer '+auth_token;
    cookie.set("refresh_token",refresh_token);
  }