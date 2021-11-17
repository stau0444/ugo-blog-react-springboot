import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FormBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { useRef, useState } from "react";
import { Box, Button, Chip, styled } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";
import UploadProfile from "./UploadProfile";
import AWS from "aws-sdk"


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

const uploadBase64ImgToS3Bucket = (image) => {
  const buf = Buffer.from(image.imagePreviewUrl.replace(/^data:image\/\w+;base64,/, ""),'base64')
  const upload = new AWS.S3.ManagedUpload({
      params:{
          Key: image.file.name+":profile", 
          Body: buf,
          Bucket : 'ugo-blog-image-bucket',
          ContentEncoding: 'base64',
          ContentType: 'image/jpeg'
      },
  })
  const promise = upload.promise()
  promise.then(
    function (data) {
      console.log("after upload",data)
    },
    function (error) {
      console.log("S3 업로드 오류 발생 ", error.message);
    })
}  

export default function SignUpForm({setOpenSignUp}) {
    
    const [pwdMatch,setPwdMatch] = useState(false);
    const [pwdRegMatch,setPwdRegMatch] = useState(false);
    const [isExistId,setIsExistId] = useState(false);
    const [isChecked,setIsChecked] = useState(false);
    const [idRegMatch , setIdRegMatch] = useState(false);
    const [image , setImage] = useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const userIdRef = useRef('')
    const pwdRef = useRef('')
    const pwdCheckRef = useRef('')
    const emailRef =useRef('')
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
    const idRegExp = new RegExp(/^[A-za-z0-9]{5,15}$/);
    const history = useHistory();
   
     
       
    const handleSubmit = () => {   
      async function handleSubmit(){  
        if(isExistId){
          alert("이미 존재하는 아이디입니다.")
          return;
        }
        if(!pwdMatch){
          alert("비밀번호가 일치하지 않습니다.")
          return;
        }
        if(!pwdRegMatch){
          alert("비밀번호가 형식에 맞지 않습니다. 비밀번호는 특수문자 ,숫자를 포함한 7~15 글자 사이로 작성해주세요")
          return;
        }
        if(!isChecked){
          alert("중복확인이 필요합니다.");
          return;
        }
        if(!image){
          alert("프로필 이미지를 등록해 주세요.");
          return;
        }

        uploadBase64ImgToS3Bucket(image);

        const userPostData = {
          userId:userIdRef.current.value,
          password:pwdRef.current.value,
          email:emailRef.current.value,
          profile:"https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/"+image.file.name+":profile"
        }
        console.log("userPostData",userPostData)
        axios.post("/api/user",userPostData)
        .then(()=>{
          setOpenSignUp(false);
          alert("회원가입에 성공했습니다 로그인을 해주세요")
          history.push("/") 
        })
        .catch((error)=>{
          alert("로그인에 실패했습니다 다시 시도해주세요.")
        });
      }
      handleSubmit();
    }

    const checkID = () =>{
      //중복확인 요청
      axios.get(`/api/user/duplication-check?userId=${userIdRef.current.value}`)
      .then((resp)=>{
          setIsExistId(resp.data);
          setIsChecked(true);
      })
    }
    
    //아이디 정규식 확인
    const checkIdReg = () => {
      setIsChecked(false);
      if(!idRegExp.test(userIdRef.current.value)){
        setIdRegMatch(false);
      }else{
        setIdRegMatch(true);
      }
    }
    //비밀번호 정규식확인
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
            <Box sx={{textAlign:"center"}}>
              <Chip sx={{margin:"0 auto"}} color="success" label="프로필 이미지"/>
            </Box>
            <Box sx={{textAlign:"center" , margin:"10px"}}>
              <UploadProfile image={image} setImage={setImage}/>
            </Box>
            <InputLabel>아이디</InputLabel>
              <FormInput
                width="85%"
                ref={userIdRef}
                type="text"
                onChange={checkIdReg}
                className="signup-userid-input"
                placeholder="Enter ID"
                name="userId"
                required
              />
              <Button onClick={checkID}>중복확인</Button>
              {
              isExistId?
                <UnverifedText sx={{display:(isChecked?"":"none")}}>
                  이미 존재하는 아이디 입니다.
                </UnverifedText>
              :
                <VerifedText sx={{display:(isChecked?"":"none")}}>
                  사용가능한 아이디 입니다.
                </VerifedText>
              }
              {
                !idRegMatch?
                <UnverifedText>
                  아이디는 5~15자 영문 또는 숫자로 조합으로 만들어주세요
                </UnverifedText>
                :""
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
              <FormBtn margin="20px 0" onClick={handleSubmit}>가입</FormBtn>
            </Container>
          </ModalContent>
        </CustomModal>
      </div>
    );
}