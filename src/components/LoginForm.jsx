import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FindPwd, FormBtn, FormCancelBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useRef } from "react";



export default function LoginForm({setOpenLogin}) {
    const rememberMeRef = useRef();
    const handleRememberMe = (e) => {
      console.log(rememberMeRef.current.value)
    }
    const handleDisplay= () => {
         setOpenLogin(false);
         document.getElementById('id01').style.display='none';
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
              <FormLogo component="span">
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
              />
            <InputLabel>비밀번호</InputLabel>
              <FormInput
                className="login-pwd-input"
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
              <Box sx={{margin:'20px 0px'}}>
                <FormBtn color="royalblue"type="submit">로그인</FormBtn>
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