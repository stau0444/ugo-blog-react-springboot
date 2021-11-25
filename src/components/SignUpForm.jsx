import "../Form.scss";
import LoginIcon from '@mui/icons-material/Login';
import { CloseBtn, Container, CustomModal, FormBtn, FormInput, FormLogo, ImgContainer, InputLabel, ModalContent } from "../FormComponents";
import { useRef, useState } from "react";
import { Box, Button, Chip, CircularProgress, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";
import UploadProfile from "./UploadProfile";
import AWS from "aws-sdk"
import { StyledInput } from "./ContentUpdateForm";
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyFail, emailVerifyStart, emailVerifySuccess } from "../redux/moduels/signUp";

export const UnverifedText = styled('p')`
  color:tomato;
  font-size:12px;
  margin:3px 10px;
`

export const VerifedText = styled('p')`
  color:green;
  font-size:12px;
  margin:3px 10px;

`

export const uploadBase64ImgToS3Bucket = (image) => {
  async function uploadBase64ImgToS3Bucket(){
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
    await promise.then(
      
      function (data) {
        console.log("after upload",data)
      },
      function (error) {
        console.log("S3 업로드 오류 발생 ", error.message);
      })
      console.log("s3 upload")
  }
  uploadBase64ImgToS3Bucket();
} 

export default function SignUpForm({setOpenSignUp}) {
    
    const [pwdMatch,setPwdMatch] = useState(false);
    const [pwdRegMatch,setPwdRegMatch] = useState(false);
    const [isExistId,setIsExistId] = useState(false);
    const [isChecked,setIsChecked] = useState(false);
    const [idRegMatch , setIdRegMatch] = useState(false);
    const [isEmailverified,setIsEmailVerified] = useState(false);
    const [verifyNum , setVerifyNum] = useState();
    const [userVerifyNum,setUserVerifyNum] = useState();
    const [showVerifyForm,setShowVerifyForm] = useState(false);
    const [image , setImage] = useState({file:null,imagePreviewUrl:'/no-image.png'})
    const userIdRef = useRef('')
    const pwdRef = useRef('')
    const pwdCheckRef = useRef('')
    const emailRef =useRef('')
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
    const idRegExp = new RegExp(/^[A-za-z0-9]{5,15}$/);
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.signUp.loading);
    //인증번호 전송
    const handleEmailVerify = () => {
      async function handleEmailVerify(){
        try{
          dispatch(emailVerifyStart());
          await axios.get(`/api/user/email-verify?email=${emailRef.current.value}`)
          .then((resp)=>{
            alert("이메일로 인증번호가 전송되었습니다.");
            setVerifyNum(resp.data);
            setShowVerifyForm(true);
            dispatch(emailVerifySuccess());
          })
        }catch(error){
            alert(error.response.data.message);
            dispatch(emailVerifyFail());
        }
      }
      handleEmailVerify();
    }

    //인증번호 검증
    const handleVerifyNum = () => {
      console.log(userVerifyNum,verifyNum)
      if(userVerifyNum === verifyNum.toString()){
        alert("인증에 성공했습니다")
        setIsEmailVerified(true);
        setShowVerifyForm(false);
      }else{
        alert("인증에 실패했습니다")
        setIsEmailVerified(false)
      }
    }
    
    //회원가입 요청
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
        if(image.file===null){
          alert("프로필 이미지를 등록해 주세요.");
          return;
        }
        if(!isEmailverified){
          alert("이메일 인증이 필요합니다 .인증을 시도 해주세요")
          return;
        }

        uploadBase64ImgToS3Bucket(image);

        const userPostData = {
          userId:userIdRef.current.value,
          password:pwdRef.current.value,
          email:emailRef.current.value,
          profile:"https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/"+image.file.name+":profile"
        }
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
      if(userIdRef.current.value === ""){
        alert("아이디를 입력해주세요.");
      }
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
              <FormLogo component="span">회원가입</FormLogo>
              <LoginIcon
                fontSize="small"
                sx={{ color: "gray", marginLeft: "3px", marginBottom: "-2px" }}
              />
            </ImgContainer>
            <Container className="container">
              <Box sx={{ textAlign: "center" }}>
                <Chip color="success" label="프로필 이미지" />
              </Box>
              <Box sx={{ textAlign: "center", margin: "10px" }}>
                <UploadProfile image={image} setImage={setImage} />
              </Box>
              <Grid container>
                <Grid item xs={12}>
                  <InputLabel>아이디</InputLabel>
                  <FormInput
                    width="100%"
                    ref={userIdRef}
                    type="text"
                    onChange={checkIdReg}
                    className="signup-userid-input"
                    placeholder="Enter ID"
                    name="userId"
                    required
                    disabled={isChecked && !isExistId}
                  />
                  <Button
                    sx={{
                      float: "right",
                      marginTop: "10px",
                      marginLeft: "10px",
                      background: "#4213c2ba",
                      borderRadius: "30px",
                      color: "white",
                      display: isChecked && !isExistId ? "none" : "",
                    }}
                    onClick={checkID}
                  >
                    중복확인
                  </Button>
                  {isExistId ? (
                    <UnverifedText sx={{ display: isChecked ? "" : "none" }}>
                      이미 존재하는 아이디 입니다.
                    </UnverifedText>
                  ) : (
                    <VerifedText sx={{ display: isChecked ? "" : "none" }}>
                      사용가능한 아이디 입니다.
                    </VerifedText>
                  )}
                  {!idRegMatch ? (
                    <UnverifedText>
                      아이디는 5~15자 영문 또는 숫자로 조합으로 만들어주세요
                    </UnverifedText>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>비밀번호</InputLabel>
                  <FormInput
                    sx={{ width: "100%" }}
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
                    sx={{ width: "100%" }}
                    ref={pwdCheckRef}
                    className="login-checkPwd-input"
                    type="password"
                    placeholder="Repeat Password"
                    onChange={checkPwd}
                    required
                  />
                  {pwdMatch ? (
                    ""
                  ) : (
                    <UnverifedText>비밀번호가 일치하지 않습니다.</UnverifedText>
                  )}
                  {!pwdRegMatch ? (
                    <UnverifedText sx={{ color: "gray" }}>
                      비밀번호는 특수문자 ,숫자를 포함한 7~15 글자 사이로
                      작성해주세요
                    </UnverifedText>
                  ) : (
                    ""
                  )}
                  {pwdMatch && pwdRegMatch ? (
                    <VerifedText>사용 가능한 비밀번호 입니다</VerifedText>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>이메일</InputLabel>
                  <FormInput
                    ref={emailRef}
                    className="login-email-input"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                    disabled={isEmailverified}
                  />
                  {isEmailverified ? (
                    <Typography
                      variant="p"
                      sx={{
                        marginTop: "-80px",
                        marginLeft: "5px",
                        fontSize: "15px",
                        color: "royalblue",
                        float: "right"
                      }}
                    >
                      인증됨
                      <CheckIcon sx={{ color: "royalblue" }} />
                    </Typography>
                  ) : (
                    <Button
                      sx={{
                        float: "right",
                        marginTop: "6px",
                        marginLeft: "10px",
                        background: "#4213c2ba",
                        borderRadius: "30px",
                        color: "white",
                      }}
                      onClick={handleEmailVerify}
                    >
                      {loading?<CircularProgress color="info" size="30px" thickness={6}  sx={{color:"white"}}/>:"인증번호 받기"}
                    </Button>
                  )}
                  {showVerifyForm ? (
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
                      <StyledInput
                        sx={{
                          margin: "30px 0",
                          width: "100%",
                          color: "black",
                          fontSize: "15px",
                        }}
                        placeholder="인증번호를 입력해주세요."
                        onChange={(e) => {
                          setUserVerifyNum(e.target.value);
                        }}
                      />
                      <Button
                        onClick={handleVerifyNum}
                        sx={{
                          backgroundColor: "lightgray",
                          borderRadius: "30px",
                        }}
                      >
                        번호인증
                      </Button>
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
              <FormBtn
                sx={{ width: "100%", margin: "20px 0" }}
                onClick={handleSubmit}
              >
                가입
              </FormBtn>
            </Container>
          </ModalContent>
        </CustomModal>
      </div>
    );
}