import {   Box,  Button,  Checkbox,  Table, Typography } from "@mui/material";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { handleAuthRequest } from "../Auth";
import { updateUserProfile } from "../redux/moduels/login";
import UploadProfile from "./UploadProfile";
import CancelIcon from '@mui/icons-material/Cancel';


export default function UserInfoUpdateForm({setOpenProfileUpdate,userInfo}) {
    const dispatch = useDispatch();
    const imageUrlBeforeUpdate = userInfo.profileUrl
    const [emailSubscribe , setEmailSubscribe] = useState(userInfo.emailSubscribe)
    const [image , setImage] = useState({file:null,imagePreviewUrl:userInfo.profileUrl})
    

    const handleUpdate = () => {
        async function handleUpdate(){
            const frm = new FormData();
            frm.append("username",userInfo.username);
            frm.append("email",userInfo.email);
            frm.append("profile",image.file);
            frm.append("emailSubscrib",emailSubscribe);
            frm.append("imageUrlBeforeUpdate",imageUrlBeforeUpdate); 
            try{
              handleAuthRequest("/api/user","put",frm);
                alert("회원정보가 수정되었습니다.")
                setOpenProfileUpdate(false);     
            }catch(error){
                alert("회원정보 수정에 실패했습니다");
                console.log(error)
            } 
        }
        handleUpdate();   
    }

    return (
      <>
        <Box
          onClick={() => {
            setOpenProfileUpdate(false);
          }}
          sx={{ float: "right" }}
        >
          <CancelIcon
            sx={{
              color: "#16ec89",
              "&:hover": {
                color: "lightgray",
                backgroundColor: "inherit",
              },
            }}
            fontSize="large"
          />
        </Box>
        <Typography
          variant="div"
          sx={{ textAlign: "center", margin: "20px auto" }}
        >
          <Typography
            sx={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: "35px",
              color: "royalblue",
            }}
          >
            {userInfo.username}
          </Typography>
          <hr/>
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            margin: "30px",
          }}
        >
          <UploadProfile image={image} setImage={setImage} />
          <small style={{ display: "block", margin: "15px" }}>
            이미지를 클릭하여 변경할 이미지를 선택해주세요
          </small>
        </Box>
        <Table sx={{ color: "gray", textAlign: "center" }}>
          <tbody>
            <tr>
              <th>Email</th>
              <td>{userInfo.email}</td>
            </tr>
            <tr>
              <th>가입일</th>
              <td>{userInfo.signUpAt}</td>
            </tr>
            <tr>
              <th>Email 구독</th>
              <td>
                <Checkbox
                  checked={emailSubscribe}
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
            marginTop: "10px",
          }}
          onClick={() => {
            handleUpdate(image);
            dispatch(updateUserProfile(image.imagePreviewUrl));
          }}
        >
          변경
        </Button>
      </>
    );
}