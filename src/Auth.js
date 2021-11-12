import axios from "axios";

//토큰 리프레쉬 후 request 재시도 
export const retryRequest = (url) =>{
    async function retryRequest(){
      console.log(axios.defaults.headers.common['Authorization'])
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
      axios.defaults.headers.common['Authorization'] =  'Bearer '+localStorage.getItem("refresh_token")
      await axios.get("/api/user/login")
      .then((resp)=>{
        const {auth_token,refresh_token} = resp.headers;
        axios.defaults.headers.common['Authorization'] =  'Bearer '+auth_token;
        localStorage.setItem("refresh_token" , refresh_token);
        retryRequest(url);
      })
      .catch(error=>console.log('refresh error',error.response))
    }
    tokenRefresh();
  }

//리퀘스트 todo action type 까지 받도록 axios.create 로 변경
export const handleRequest = (url) => {
    async function handleRequest(){
      await axios
      .get(url)
      .then((resp) => {
        console.log("success",resp);
      })
      .catch((error)=>{
        if(error.response.status === 401 && error.response.data.message === "excess token 만료"){
          console.log("refresh_token")
          tokenRefresh(url);  
        }else{
            alert("로그인에 실패했습니다 다시 로그인해주세요")
        }
      })
    }
    handleRequest()
  }
  