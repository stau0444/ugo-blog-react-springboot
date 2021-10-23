import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FormBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { useRef, useState } from "react";
import { Button, styled } from "@mui/material";


const UnverifedText = styled('p')`
  color:tomato;
  font-size:12px;
  margin:3px 10px;
`

const VerifedText = styled('p')`
  color:green;
  font-size:12px;
  margin:3px 10px;

`

export default function SignUpForm({setOpenSignUp}) {
    const [pwdMatch,setPwdMatch] = useState(false);
    const [pwdRegMatch,setPwdRegMatch] = useState(false);
    const [isExistId,setIsExistId] = useState(false);
    const [isClicked,setIsClicked] = useState(false);
    const userIdRef = useRef('')
    const pwdRef = useRef('')
    const pwdCheckRef = useRef('')
    const emailRef =useRef('')
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
    
    const checkID = () =>{
      //중복확인 요청
      setIsExistId(true);
      setIsClicked(true);
    }
    
    const checkPwd = () =>{
        if(!pwdRegExp.test(pwdRef.current.value)){
          setPwdRegMatch(false)
        }else{
          setPwdRegMatch(true)
        }
        if(pwdCheckRef.current.value === pwdRef.current.value){
          setPwdMatch(true)
        }else{
          setPwdMatch(false)
        }
    }

    const handleDisplay= () => {
         setOpenSignUp(false);
         document.getElementById('id02').style.display='none';
    }
    return (
      <div>        
        <CustomModal id="id02" className="modal">
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
                  회원가입
              </FormLogo>
              <LoginIcon fontSize="small" sx={{color:"gray" ,marginLeft:"3px" , marginBottom:"-2px"}}/>
            </ImgContainer>
            <Container className="container">
            <InputLabel>아이디</InputLabel>
              <FormInput
                width="85%"
                ref={userIdRef}
                type="text"
                className="signup-userid-input"
                placeholder="Enter ID"
                name="userId"
                required
              />
              <Button onClick={checkID}>중복확인</Button>
              {
              isExistId?
                <UnverifedText sx={{display:(isClicked?"":"none")}}>
                  이미 존재하는 아이디 입니다.
                </UnverifedText>
              :
                <VerifedText sx={{display:(isClicked?"":"none")}}
                  >사용가능한 아이디 입니다.
                </VerifedText>
              }
              <InputLabel>비밀번호</InputLabel>
              <FormInput
                ref={pwdRef}
                className="signup-pwd-input"
                type="password"
                placeholder="Enter Password"
                name="pwd"
                onChange={checkPwd}
                required
              />
              <InputLabel>비밀번호 확인</InputLabel>
              <FormInput
                ref={pwdCheckRef}
                className="login-checkPwd-input"
                type="password"
                placeholder="Repeat Password"
                onChange={checkPwd}
                required
              />
              {
                pwdMatch?
                ""
                :
                  <UnverifedText>
                    비밀번호가 일치하지 않습니다.
                  </UnverifedText>
              }
              {
                !pwdRegMatch?
                  <UnverifedText sx={{color:'gray'}}>
                    비밀번호는 특수문자 ,숫자를 포함한 7~15 글자 사이로 작성해주세요
                  </UnverifedText>
                :
                ""
              }
              {
                pwdMatch && pwdRegMatch ?
                <VerifedText>사용 가능한 비밀번호 입니다</VerifedText>
                :
                ""
              }
              <InputLabel>이메일</InputLabel>
              <FormInput
                ref={emailRef}
                className="login-email-input"
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
              <FormBtn margin="20px 0" type="submit">가입</FormBtn>
              
            </Container>
          </ModalContent>
        </CustomModal>
      </div>
    );
}