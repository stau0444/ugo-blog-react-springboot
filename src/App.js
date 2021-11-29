import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Detail from './pages/Detail';
import UpdateContent from './pages/UpdateContent';
import Test from './pages/Test';
import AWS from "aws-sdk"
import hljs from 'highlight.js';
import Search from './pages/Search';
import { useEffect, } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { cookie, handleAuthRequest, logOut, setTokenToBrowser, } from './Auth';
import { postLoginFail, postLoginStart, postLoginSuccess,  } from './redux/moduels/login';
import axios from 'axios';
import { Box, Button } from '@mui/material';

export const testBtnStyle ={
  width:"50%",
  color:"black",
  top:"40px",
  margin:"5px",
  background: "rgba(231, 13, 13, 0.521);",
  zIndex:"1",
}

hljs.configure({   // optionally configure hljs
  languages: ['javascript' ,'java','python','html']
});

function App() {
  const dispatch = useDispatch();
  let isOn = useSelector(state=>state.nightMode)
  
  useEffect(()=>{
    const initLoginState =  () => {
      async function initLoginState(){
        try{
          const headers = {"Authorization":"Bearer "+ cookie.get("refresh_token")}
          dispatch(postLoginStart());
          await axios.post("/api/user/login",null,{headers:headers}).then(
            resp=>{
              setTokenToBrowser(resp);
              dispatch(postLoginSuccess(resp.data));
            }
          )
        }catch(error){
          if(error.response === undefined){
            alert("로그인 오류")
          }else if(error.response.status === 401 && error.response.data.message === "REFRESH_TOKEN_EXPIRED"){
            alert("토큰이 만료되었습니다 다시 로그인 해주세요!")
            logOut(true);
          }else{
            return
          }
          console.log(error.response)
          dispatch(postLoginFail(error));
        }
      }
      initLoginState();
    }

    if(cookie.get("refresh_token")){
      initLoginState()
    }

    if(isOn){
      document.querySelector(".App").style.background ="whitesmoke"
    }else{
      document.querySelector(".App").style.background ="rgb(32, 38, 45)"
    }
  },[isOn,dispatch])

  //AWS  config
  AWS.config.update({
    region:'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId:"ap-northeast-2:f4eab593-5f5f-4e47-8b60-a45049ed7a5d",
    })
  })

  axios.defaults.baseURL = 'http://localhost:9050';//'http://3.37.32.130:9050';

  

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box sx={{position:"fixed",right:0,bottom:"100px"}}>
          <Button onClick={()=>{handleAuthRequest("/api/user/test")}} sx={testBtnStyle}>login-Test-Btn</Button>
        </Box>
        <Route path="/contents/search/:keyword" exact component={Search} />
        <Route path="/contents/:category" exact component={Home} />
        <Route path="/content/update/:contentId" component={UpdateContent} />
        <Route path="/content/:contentId" exact component={Detail} />
        <Route path="/add-content" exact component={AddContent} />
        <Route path="/test" exact component={Test} />
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
