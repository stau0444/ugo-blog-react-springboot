import { Button, CircularProgress, Grid, Modal, styled, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyFail, emailVerifyStart, emailVerifySuccess } from "../redux/moduels/signUp";
import ChagePwdForm from "./ChangePwdForm";
import { StyledInput } from "./ContentUpdateForm";

export const ChangePwdModal = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius:20px;
  width: 60%;
  height: 370;
  background: white;
`
export default function FindPwdForm({setOpenFindPwd}) {
  const [openFindPwdSuccess,setOpenFindPwdSuccess] = useState(false);
  const [userId,setUserId] = useState();
  const [userEmail,setUserEmail] = useState();
  const [verifyNum,setVerifyNum] = useState();
  const [userVerifyNum,setUserVerifyNum] = useState();
  const [showVerifyForm,setShowVerifyForm] = useState(false);
  const loading = useSelector(state => state.signUp.loading);
  const dispatch = useDispatch();
  const handleVerifyNum = () => {
    
    if(verifyNum.toString() === userVerifyNum){
      alert("인증이 완료되었습니다.")
      setOpenFindPwdSuccess(true);
    }else{
      alert("인증번호가 일치하지 않습니다.")
    }
  }
  const handleFindPwd = () =>{
      async function handleFindPwd(){
        try{
          dispatch(emailVerifyStart());
          let verifyNum = "";
          await axios.get(`/api/user/find-pwd?userId=${userId}&userEmail=${userEmail}`).then((resp)=>{
            verifyNum = resp.data;
          })
          dispatch(emailVerifySuccess());
          alert("이메일로 인증번호가 전송됬습니다.")
          setVerifyNum(verifyNum);
          setShowVerifyForm(true);
        }catch(error){
          dispatch(emailVerifyFail());
          alert("해당 아이디 혹은 이메일이 존재하지 않습니다.")
          console.log("error",error.response)
        }
      }
      handleFindPwd();
  }  
  return (
    <Grid container>
      <Grid item xs={12} sx={{ margin: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "700",
            margin: "5px",
            fontFamily: "'Gowun Batang', serif",
          }}
        >
          비밀번호 찾기
        </Typography>
        <Typography sx={{ color: "tomato", fontSize: "13px" }}>
          가입시 등록한 이메일로 인증번호가 전송됩니다 이메일을 확인해주세요.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          margin: "20px",
        }}
      >
        <StyledInput
          sx={{
            fontSize: "20px",
            color: "black",
            margin: "0px 15px",
            marginBottom: "20px",
          }}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          placeholder="아이디를 입력해주세요"
        />
        <StyledInput
          sx={{
            fontSize: "20px",
            color: "black",
            margin: "0px 15px",
            marginTop: "20px",
          }}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          placeholder="이메일을 입력해주세요"
        />
      </Grid>
      <Grid item xs={12} sx={{ margin: "20px" }}>
        <Button
          onClick={handleFindPwd}
          sx={{
            float: "right",
            marginRight: "10px",
            background: "#4213c2ba",
            borderRadius: "30px",
            color: "white",
          }}
        >
          {loading ? (
            <CircularProgress
              color="info"
              size="30px"
              thickness={6}
              sx={{ color: "white" }}
            />
          ) : (
            "인증번호 전송"
          )}
        </Button>
      </Grid>
      <Modal
        open={openFindPwdSuccess}
        onClose={() => {
          setOpenFindPwdSuccess(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ChangePwdModal>
          <ChagePwdForm setOpenFindPwd={setOpenFindPwd} userId={userId} />
        </ChangePwdModal>
      </Modal>
      {showVerifyForm ? (
        <Grid
          item
          xs={12}
          sx={{
            margin: "20px",
          }}
        >
          <StyledInput
            sx={{
              color: "black",
              margin: "0px 15px",
            }}
            placeholder="인증번호를 입력해주세요."
            onChange={(e) => {
              setUserVerifyNum(e.target.value);
            }}
          />
          <Button
            onClick={handleVerifyNum}
            sx={{
              float: "right",
              marginTop: "15px",
              marginRight: "10px",
              background: "#4213c2ba",
              borderRadius: "30px",
              color: "white",
            }}
          >
            번호인증 하기
          </Button>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}