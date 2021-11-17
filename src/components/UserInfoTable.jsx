import { Avatar,  Box,  Table, Typography } from "@mui/material";


export default function UserInfoTable({setOpenProfile,userInfo}) {

    return (
      <>
        <Box onClick={()=>{setOpenProfile(false)}} sx={{float:"right"}}>
          X
        </Box>
        <Typography
          variant="div"
          sx={{ textAlign: "center", margin: "20px auto" }}
        >
          <Typography
            sx={{fontWeight: 800, fontSize: "35px", color: "royalblue" }}
          >
            {userInfo.username}
          </Typography>
        </Typography>
        <Avatar
          src={userInfo.profileUrl}
          sx={{
            width: "30%",
            height: "100px",
            margin:"25px auto",
            borderRadius: "50%",
            background: "gray",
          }}
        />
        <Table sx={{ color: "gray", textAlign: "center" }}>
          <tbody>
            <tr>
              <th>
                Email
              </th>
              <td>{userInfo.email}</td>
            </tr>
            <tr>
              <th>
                가입일
              </th>
              <td>{userInfo.signUpAt}</td>
            </tr>
            <tr>
              <th>
                Email 구독
              </th>
              <td>
                {userInfo.emailSubscribe ? "구독 중" : "구독 안함"}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
}