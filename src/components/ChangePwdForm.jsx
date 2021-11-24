import { Button, Grid, InputLabel, Typography } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { FormInput } from "../FormComponents";
import { UnverifedText, VerifedText } from "./SignUpForm";

export default function ChagePwdForm({userId,setOpenFindPwd}) {
    const pwdRef =useRef();
    const pwdCheckRef =useRef();
    const [isMatch, setIsMatch] =useState();
    const [isCorrect, setIsCorrect] = useState();
    const pwdRegExp=  new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);

    const handleChangePwd = () =>{
        async function handleChangePwd(){
          try{
            await axios.put("/api/user/change-pwd",{"pwd":pwdRef.current.value,"username":userId});
            alert("비밀번호가 변경되었습니다.");
            setOpenFindPwd(false);
          }catch(error){
            console.log("error" , error.response);
            alert("비밀번호 변경에 실패했습니다. 다시 시도해 주세요");
            setOpenFindPwd(false);
          }
        }
        handleChangePwd();
    }
    //비밀번호 정규식확인
    const checkPwdReg = () =>{
        if(!pwdRegExp.test(pwdRef.current.value)){
            setIsCorrect(false)
        }else{
            setIsCorrect(true)
        }
        if(pwdCheckRef.current.value === pwdRef.current.value){
            setIsMatch(true)
        }else{
            setIsMatch(false)
        }
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
            비밀번호 재설정
          </Typography>
          <small>비밀번호를 재설정 해주세요</small>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            margin: "20px",
          }}
        >
          <InputLabel>비밀번호</InputLabel>
          <FormInput
            type="password"
            sx={{
              fontSize: "25px",
              color: "black",
            }}
            placeholder="새로운 비밀번호를 입력해주세요"
            onChange={checkPwdReg}
            ref={pwdRef}
            required
          />
          {
                isMatch?
                ""
                :
                  <UnverifedText>
                    비밀번호가 일치하지 않습니다.
                  </UnverifedText>
              }
              {
                !isCorrect?
                  <UnverifedText sx={{color:'gray'}}>
                    비밀번호는 특수문자 ,숫자를 포함한 7~15 글자 사이로 작성해주세요
                  </UnverifedText>
                :
                ""
              }
              {
                isMatch && isCorrect ?
                <VerifedText>사용 가능한 비밀번호 입니다</VerifedText>
                :
                ""
              }
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            margin: "20px",
          }}
        >   
          <InputLabel>비밀번호 확인</InputLabel>
          <FormInput
            type="password"
            sx={{
              fontSize: "25px",
              color: "black",
            }}
            placeholder="비밀번호를 다시한번 입력해주세요"
            onChange={checkPwdReg}
            ref={pwdCheckRef}
            required
          />
        </Grid>
        <Grid item xs={12} sx={{ margin: "20px" }}>
          <Button sx={{ float: "right" }} onClick={handleChangePwd}>
            아이디 찾기
          </Button>
        </Grid>
      </Grid>
    );
}