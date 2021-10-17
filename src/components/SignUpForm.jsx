import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { Label } from "@mui/icons-material";
import { CloseBtn, Container, CustomModal, FindPwd, FormBtn, FormCancelBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";



export default function SignUpForm({setOpenSignUp}) {
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
                type="text"
                className="signup-userid-input"
                placeholder="Enter ID"
                name="userId"
                required
              />
              <InputLabel>비밀번호</InputLabel>
              <FormInput
                className="signup-pwd-input"
                type="password"
                placeholder="Enter Password"
                name="pwd"
                required
              />
              <InputLabel>비밀번호 확인</InputLabel>
              <FormInput
                className="login-checkPwd-input"
                type="checkPwd"
                placeholder="Repeat Password"
                required
              />
              <InputLabel>이메일</InputLabel>
              <FormInput
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