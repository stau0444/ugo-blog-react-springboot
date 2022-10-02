import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailVerifyFail, emailVerifyStart, emailVerifySuccess } from "../../redux/moduels/signUp";
import { StyledInput } from "../content/ContentUpdateForm";

export default function FindIdForm({setOpenFindId}) {
    const [userMail,setUserMail] = useState();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.signUp.loading);
    const handleFindId = () =>{
        async function handleFindId(){
            try{
                dispatch(emailVerifyStart());
                await axios.get("/api/user/find-id?email="+userMail);
                dispatch(emailVerifySuccess());
                alert("이메일로 아이디가 전송되었습니다.");
                setOpenFindId(false);
            }catch(error){
                dispatch(emailVerifyFail());
                alert("해당 이메일로 등록된 아이디가 없습니다.")
                console.log(error.response);
            }
        }
        handleFindId();
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
            아이디 찾기
          </Typography>
          <Typography sx={{ color: "tomato", fontSize: "13px" }}>
            가입시 등록한 이메일로 아이디가 전송됩니다.
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
              fontSize: "25px",
              color: "black",
            }}
            placeholder="이메일을 입력해주세요"
            onChange={(e) => {
              setUserMail(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ margin: "20px" }}>
          <Button
            sx={{
              float: "right",
              marginLeft: "10px",
              background: "#4213c2ba",
              borderRadius: "30px",
              color: "white",
            }}
            onClick={handleFindId}
          >
            {loading ? (
            <CircularProgress
              color="info"
              size="30px"
              thickness={6}
              sx={{ color: "white" }}
            />
          ) : (
            "아이디 찾기"
          )}
          </Button>
        </Grid>
      </Grid>
    );
}