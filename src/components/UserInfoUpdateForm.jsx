import {   Box,  Button,  Checkbox,  Input,  Table, Typography } from "@mui/material";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { handleRequest } from "../Auth";
import { updateUserProfile } from "../redux/moduels/login";
import { uploadBase64ImgToS3Bucket } from "./SignUpForm";
import UploadProfile from "./UploadProfile";
import AWS from "aws-sdk"


export default function UserInfoUpdateForm({setOpenProfileUpdate,userInfo}) {
    const dispatch = useDispatch();
    const imageUrlBeforeUpdate = userInfo.profileUrl
    const [emailSubscribe , setEmailSubscribe] = useState(userInfo.emailSubscribe)
    const [email,setEmail] = useState(userInfo.email);
    const [image , setImage] = useState({file:null,imagePreviewUrl:userInfo.profileUrl})
    

    const deleteS3Image=()=>{
      const s3 = new AWS.S3()
      console.log("imageUrlBeforeUpdate",imageUrlBeforeUpdate)
      const params = {
        Bucket: 'ugo-blog-image-bucket',
        Key: `${imageUrlBeforeUpdate}`
      };
      s3.deleteObject(params, function(err, data) {
        if (err) console.log("삭제실패",err, err.stack); 
        else     console.log("삭제성공",data);           

      });
      
    }

    const handleUpdate = () => {
        async function handleUpdate(){
            const updateData = {
                username:userInfo.username,
                email:email,
                emailSubscribe:emailSubscribe,
                profileUrl:"https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/"+image.file.name+":profile"
            }
            console.log("updateData",updateData);
            try{
                handleRequest("/api/user","put",updateData);
                if(imageUrlBeforeUpdate !== undefined){
                  console.log("delete Image",imageUrlBeforeUpdate)
                  deleteS3Image();
                }
                 uploadBase64ImgToS3Bucket(image);
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
        <Box
          sx={{
            textAlign: "center",
            margin: "30px",
          }}
        >
          <UploadProfile image={image} setImage={setImage} />
          <small style={{ display: "block", margin: "15px" }}>
            위에 이미지를 클릭하여 변경할 이미지를 선택해주세요
          </small>
        </Box>
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