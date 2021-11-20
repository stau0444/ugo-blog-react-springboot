import { Box, Button, Modal } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import ChattingModal from "./ChattingModal";


export const testBtnStyle ={
  width:"50%",
  color:"black",
  top:"40px",
  margin:"5px",
  background: "rgba(231, 13, 13, 0.521);",
  zIndex:"1",
}
export default function RealtimeChatting() {    

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const user = useSelector(state=>state.login.userInfo);

    const addUser = () =>{
        async function addUser(){
            const headers = {
                "PRIVATE-KEY" : "b76fd0f1-990b-4fb0-8375-1ca310dadf18"
            }
            const userData = {
                "username": user.username,
                "first_name": "user",
                "last_name": user.username,
                "secret": "asdasd12",
            }
            console.log("userData" , userData);
            await axios
              .post("https://api.chatengine.io/users/", userData, {headers:headers})
              .then((resp) => {
                console.log("채팅 유저 추가",resp);
              })
              .catch(() => {
                console.log("채팅 유저 추가 실패");
                return;
              });
        }
        addUser();
    }
  
    const addChatDetail = () => {
        async function addChatDetail(){
            console.log("addChatMember ,user " , user)
            const headers = {
                "Project-ID": "efceb88f-d825-4c90-99de-9d5dbb1dcd4a",
                "User-Name":user.username,
                "User-Secret":"asdasd12"
            }
            console.log("chat header" , headers)
            const body = {
                "username":user.username
            }
            console.log("chat body",body);
            await axios
              .post("https://api.chatengine.io/chats/71269",null,{headers:headers})
              .then((resp)=>{
                console.log("채팅성공" ,resp)
              })
              .catch((error) => {console.log(error.response)});
        }
        addChatDetail();
    }
    const addChatMember= () => {
      async function addChatMember(){
          console.log("addChatMember ,user " , user)
          const headers = {
              "Project-ID": "efceb88f-d825-4c90-99de-9d5dbb1dcd4a",
              "User-Name":user.username,
              "User-Secret":"asdasd12"
          }
          console.log("chat header" , headers)
          const data = {
              "username":user.username
          }
          console.log("chat body",data);
          await axios
            .post("https://api.chatengine.io/chats/71269/people/",data,{headers:headers})
            .then((resp)=>{
              console.log("채팅성공" ,resp)
            })
            .catch((error) => {console.log(error.response)});
      }
      addChatMember();
  }

    return(
        <>
        <Box sx={{ position: "fixed", right: 0 }}>
          <Button onClick={addUser}>채팅 신청</Button>
          <Button onClick={addChatDetail}>채팅 참여</Button>
          <Button onClick={addChatMember}>채팅 들어가기</Button>
          <Button
            onClick={handleOpen}
            sx={{ ...testBtnStyle, background: "green" }}
          >
            open chat
          </Button>
          {/* <Button onClick={()=>{handleRequest("/api/user/test")}} sx={testBtnStyle}>login-Test-Btn</Button> */}
        </Box>
        <Modal
          sx={{
            width: {xs:"80%",sm:"90%"},
            margin: "100px auto",
            // left:{xs:"0",sm:"-25%"}
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ChattingModal />
        </Modal>
        </>
    );
}