import { Avatar,  Box,  Button,  Checkbox,  Input,  Table, Typography } from "@mui/material";
import axios from "axios";
import {useState } from "react";


export default function UserInfoUpdateForm({setOpenProfile,userInfo}) {
    const [emailSubscribe , setEmailSubscribe] = useState(userInfo.emailSubscribe)
    const [email,setEmail] = useState(userInfo.email);

    const handleUpdate = () => {
        async function handleUpdate(){
            try{
                await axios.put("/api/user")
            }catch(error){
                console.log(error)
            } 
        }
        handleUpdate();        
    }

    return (
      <>
        <Box
          onClick={() => {
            setOpenProfile(false);
          }}
          sx={{ float: "right" }}
        >
          X
        </Box>
        <Typography
          variant="div"
          sx={{ textAlign: "center", margin: "20px auto" }}
        >
          <Typography
            sx={{ fontWeight: 800, fontSize: "35px", color: "royalblue" }}
          >
            {userInfo.username}
          </Typography>
        </Typography>
        <Avatar
          src={userInfo.profileUrl}
          sx={{
            width: "30%",
            height: "100px",
            margin: "25px auto",
            borderRadius: "50%",
            background: "gray",
          }}
        />
        <Table sx={{ color: "gray", textAlign: "center" }}>
          <tbody>
            <tr>
              <th>Email</th>
              <td>
                <Input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </td>
            </tr>
            <tr>
              <th>가입일</th>
              <td>{userInfo.signUpAt}</td>
            </tr>
            <tr>
              <th>Email 구독</th>
              <td>
                <Checkbox
                  value={emailSubscribe}
                  onChange={() => {
                    setEmailSubscribe(emailSubscribe ? false : true);
                  }}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                />
                {emailSubscribe ? "구독 함" : "구독 안함"}
              </td>
            </tr>
          </tbody>
        </Table>
        <Button
          sx={{
            float: "right",
            color: "white",
            background: "#39c55c",
            marginTop:"10px"
          }}
          onClick={handleUpdate}
        >
          변경
        </Button>
      </>
    );
}