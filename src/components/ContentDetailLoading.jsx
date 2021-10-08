import { Skeleton } from "@mui/material";
import  Box  from '@mui/material/Box';

export default function ContentDetailLoading() {
    return(
    <Box sx={{width:'100%', marginLeft:'8%'}}>
        <Skeleton sx={{width:'55%' ,height:"90px" ,marginBottom:'20px' ,marginTop:"20px"}}/>
        <Skeleton sx={{width:'40%' ,height:"40px" ,marginBottom:'20px'}}/>
        <Box sx={{display:'flex' ,marginBottom:'-160px'}}>
            <Skeleton sx={{width:'15%' ,height:"40px" , marginRight:"7px",borderRadius:"15px"}}/>
            <Skeleton sx={{width:'15%' ,height:"40px" , marginRight:"7px",borderRadius:"15px"}}/>
            <Skeleton sx={{width:'15%' ,height:"40px" , marginRight:"7px",borderRadius:"15px" }}/>
        </Box>
        <Skeleton sx={{width:'85%' ,height:"800px" , margin:"10px 0"}}/>
    </Box>
    );
}