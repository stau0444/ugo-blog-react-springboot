import { Button, Grid, Modal, styled, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
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
          let verifyNum = "";
          await axios.get(`/api/user/find-pwd?userId=${userId}&userEmail=${userEmail}`).then((resp)=>{
            verifyNum = resp.data;
          })
          alert("이메일로 인증번호가 전송됬습니다.")
          console.log('verifyNum',verifyNum);
          setVerifyNum(verifyNum);
          setShowVerifyForm(true);
        }catch(error){
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
        <small>
          가입시 등록한 이메일로 전송됩니다 인증 링크를 확인해주세요
        </small>
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
            fontSize: "25px",
            color: "black",
            margin: "20px",
          }}
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          placeholder="아이디를 입력해주세요"
        />
        <StyledInput
          sx={{
            fontSize: "25px",
            color: "black",
            margin: "20px",
          }}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          placeholder="이메일을 입력해주세요"
        />
      </Grid>
      <Grid item xs={12} sx={{ margin: "20px" }}>
        <Button onClick={handleFindPwd} sx={{ float: "right" }}>
          인증링크 전송
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
          <ChagePwdForm setOpenFindPwd={setOpenFindPwd} userId={userId}/>
        </ChangePwdModal>
      </Modal>
      {showVerifyForm ? (
        <Grid item xs={12} sx={{ margin: "20px" }}>
          <StyledInput
            sx={{ color: "black" }}
            placeholder="인증번호를 입력해주세요."
            onChange={(e)=>{setUserVerifyNum(e.target.value)}}
          />
          <Button onClick={handleVerifyNum} sx={{ float: "right" }}>
            번호인증 하기
          </Button>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}