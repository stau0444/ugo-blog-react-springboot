import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal,  FormBtn,  FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { Box,Modal, styled, Typography,  } from "@mui/material";
import { useRef, useState } from "react";
import { postLoginFail, postLoginStart, postLoginSuccess } from "../redux/moduels/login";
import axios from "axios";
import {  setTokenToBrowser } from "../Auth";
import { useDispatch } from "react-redux";
import FindIdForm from "./FindIdForm";
import FindPwdForm from "./FindPwdForm";



const FindLink = styled("a")`
  color:black;
  font-weight: 700;
  cursor: pointer;
    &:hover{
      color:royalblue
    }
`

export const FindFormContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius:20px;
  width: 60%;
  height: 370;
  background: white;
`
export default function LoginForm({setOpenLogin}) {
    
    const userIdRef = useRef(); 
    const pwdRef = useRef();
    const dispatch = useDispatch();
    const [openFindId,setOpenFindId] = useState(false);
    const [openFindPwd,setOpenFindPwd] = useState(false);
    
    const handleDisplay= () => {
         setOpenLogin(false);
         document.getElementById('id01').style.display='none';
    }


    const handleLogin =  () => {
      async function handleLogin(){
        try{
          dispatch(postLoginStart());
          await axios
            .post("/api/user/login", {
              userId: userIdRef.current.value,
              password: pwdRef.current.value,
            })
            .then((resp) => {
              setTokenToBrowser(resp);
              dispatch(postLoginSuccess(resp.data));
            })
            .catch(
              (error) => {
                if(error){
                  alert("아이디 혹은 비밀번호가 잘못되었습니다 .");
                }
                console.log(error.response)
              }
            );
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
              <FormLogo component="button">로그인</FormLogo>
              <LoginIcon
                fontSize="small"
                sx={{ color: "gray", marginLeft: "3px", marginBottom: "-2px" }}
              />
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
              <Box sx={{ margin: "50px 0px" }}>
                <FormBtn color="royalblue" onClick={handleLogin}>
                  로그인
                </FormBtn>
                {/* <FormBtn type="submit">네이버 로그인</FormBtn>
                <FormBtn color="gold" type="submit">카카오 로그인</FormBtn> */}
              </Box>
              <Typography variant="p" sx={{ color: "black", float: "right" }}>
                <FindLink
                  onClick={() => {
                    setOpenFindId(true);
                  }}
                >
                  아이디
                </FindLink>{" "}
                /{" "}
                <FindLink
                  onClick={() => {
                    setOpenFindPwd(true);
                  }}
                >
                  비밀번호{" "}
                </FindLink>
                찾기
              </Typography>
            </Container>
            <Container className="container">
              {/* <FormCancelBtn type="button" onClick={handleDisplay} className="cancelbtn">취소</FormCancelBtn> */}
            </Container>
            <Modal
              open={openFindId}
              onClose={() => {
                setOpenFindId(false);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <FindFormContainer>
                <FindIdForm/>
              </FindFormContainer>
            </Modal>
            <Modal
              open={openFindPwd}
              onClose={() => {
                setOpenFindPwd(false);
              }}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <FindFormContainer>
                <FindPwdForm setOpenFindPwd={setOpenFindPwd}/>
              </FindFormContainer>
            </Modal>
          </ModalContent>
        </CustomModal>
      </div>
    );
}