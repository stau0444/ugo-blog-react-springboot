import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FindPwd, FormBtn, FormCancelBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useRef } from "react";
import { postLoginFail, postLoginStart, postLoginSuccess } from "../redux/moduels/login";
import axios from "axios";
import { handleRequest } from "../Auth";


const testBtnStyle ={
  width:"50%",
  color:"black",
  top:"40px",
  margin:"5px",
  background: "rgba(231, 13, 13, 0.521);",
  zIndex:"1",
}

export default function LoginForm({setOpenLogin}) {
    const rememberMeRef = useRef();
    const userIdRef = useRef(); 
    const pwdRef = useRef();
    
    const handleRememberMe = (e) => {
      console.log(rememberMeRef.current.value)
    }
    const handleDisplay= () => {
         setOpenLogin(false);
         document.getElementById('id01').style.display='none';
    }

    
    const handleLogin =  () => {
      async function handleLogin(){
        try{
          postLoginStart();
          console.log("로그인 시도");
          await axios.post("/api/user/login" , 
          {
            userId:userIdRef.current.value,
            password:pwdRef.current.value
          }).then(
            resp=>{
              const {auth_token,refresh_token} = resp.headers;
              axios.defaults.headers.common['Authorization'] =  'Bearer '+auth_token;
              localStorage.setItem("refresh_token" , refresh_token);
            }
          ).catch(error => console.log(error));
          postLoginSuccess();
        }catch(error){
          postLoginFail(error);
        }
      }
      handleLogin();
    }
    return (
      <div>   
        <CustomModal id="id01" className="modal">
          <Box sx={{position:"fixed",right:0}}>
            <Button onClick={""} sx={testBtnStyle}>logOut-Test-Btn</Button>
            <Button onClick={()=>{handleRequest("/api/user/test")}} sx={testBtnStyle}>login-Test-Btn</Button>
          </Box> 
          <ModalContent className="modal-content animate">
            <ImgContainer className="imgcontainer">
              <CloseBtn
                onClick={handleDisplay}
                className="close"
                title="Close Modal"
              >
                &times;
              </CloseBtn>
              <FormLogo component="button" >
                  로그인
              </FormLogo>
              <LoginIcon fontSize="small" sx={{color:"gray" ,marginLeft:"3px" , marginBottom:"-2px"}}/>
            </ImgContainer>
            <Container className="container">
            <InputLabel>아이디</InputLabel>
              <FormInput
                type="text"
                className="login-id-input"
                placeholder="Enter Username"
                name="uname"
                required
                ref={userIdRef}
              />
            <InputLabel>비밀번호</InputLabel>
              <FormInput
                className="login-pwd-input"
                type="password"
                placeholder="Enter Password"
                name="pwd"
                ref={pwdRef}
                required
              />
              <Box sx={{margin:'20px 0px'}}>
                <FormBtn color="royalblue" onClick={handleLogin}>로그인</FormBtn>
                <FormBtn type="submit">네이버 로그인</FormBtn>
                <FormBtn color="gold" type="submit">카카오 로그인</FormBtn>
              </Box>
              <InputLabel>
              
                <input ref={rememberMeRef}type="checkbox"  name="remember" onChange={handleRememberMe}/>
                자동 로그인
              </InputLabel>
            </Container>
            <Container className="container">
              <FormCancelBtn type="button" onClick={handleDisplay} className="cancelbtn">취소</FormCancelBtn>
                <FindPwd className="psw"> <Link to="/findPwd">비밀번호 찾기</Link></FindPwd>
            </Container>
          </ModalContent>
        </CustomModal>
      </div>
    );
}