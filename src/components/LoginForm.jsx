import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FindPwd, FormBtn, FormCancelBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { Link } from "react-router-dom";
import { Box,  } from "@mui/material";
import { useRef } from "react";
import { postLoginFail, postLoginStart, postLoginSuccess } from "../redux/moduels/login";
import axios from "axios";
import {  setTokenToBrowser } from "../Auth";
import { useDispatch } from "react-redux";




export default function LoginForm({setOpenLogin}) {
    const rememberMeRef = useRef();
    const userIdRef = useRef(); 
    const pwdRef = useRef();
    const dispatch = useDispatch();
    
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
          dispatch(postLoginStart());
          await axios.post("/api/user/login" , 
          {
            userId:userIdRef.current.value,
            password:pwdRef.current.value
          }).then(
            resp=>{
              setTokenToBrowser(resp);
              dispatch(postLoginSuccess(resp.data));
            }
          ).catch(error => console.log(error.response));
        }catch(error){
          dispatch(postLoginFail(error));
        }
      }
      handleLogin();
    }
    return (
      <div>   
        <CustomModal id="id01" className="modal">
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