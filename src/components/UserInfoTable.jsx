import { Avatar,  Table, Typography } from "@mui/material";


export default function UserInfoTable({userInfo}) {

    return(
        <>  
            
            <Typography  sx={{textAlign:"center", margin:"20px auto"}}>
              <Typography sx={{fontWeight:800 ,fontSize:"30px",color:"royalblue"}}>
                {userInfo.username}
              </Typography>
            </Typography>
            <Avatar sx={{margin:"40px auto"}}/>
            <Table sx={{color:"gray",textAlign:"center"}}>
                <tr>
                  <td>
                    <Typography sx={{fontWeight:800, mt: 2 }}>
                      Email
                    </Typography>
                  </td>
                  <td>{userInfo.email}</td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ mt: 2 }}>
                      가입일
                    </Typography>
                  </td>
                  <td>{userInfo.signUpAt}</td>
                </tr>
                <tr>
                  <td>
                    <Typography sx={{ mt: 2 }}>
                      Email 구독
                    </Typography>
                  </td>
                  <td>
                    <Typography sx={{marginTop:"50px",color:"red"}} variant="small">{userInfo.emailSubscribe?"구독 중":"구독 안함"}</Typography>
                  </td>
                </tr>
              </Table>
        </>
    );
}