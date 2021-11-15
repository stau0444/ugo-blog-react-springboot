import { Skeleton } from "@mui/material";
import  Box  from '@mui/material/Box';

const SkeletonStyle = {
  width: "15%",
  height: "40px",
  marginRight: "7px",
  borderRadius: "15px",
};
export default function ContentDetailSkeleton() {
    return(
    <Box sx={{width:'100%', marginLeft:'8%'}}>
        <Skeleton sx={{width:'55%' ,height:"90px" ,marginBottom:'20px' ,marginTop:"20px"}}/>
        <Skeleton sx={{width:'40%' ,height:"40px" ,marginBottom:'20px'}}/>
        <Box sx={{display:'flex' ,marginBottom:'-160px'}}>
            <Skeleton sx={SkeletonStyle}/>
            <Skeleton sx={SkeletonStyle}/>
            <Skeleton sx={SkeletonStyle}/>
        </Box>
        <Skeleton sx={{width:'85%' ,height:"800px" , margin:"10px 0"}}/>
        <Box sx={{width:"85%",display:'flex' , marginTop:'-130px',justifyContent:"right"}}>
            <Skeleton sx={{width:'10%' ,marginRight:"15px" ,height:"50px" }}/>
            <Skeleton sx={{width:'10%' ,height:"50px" }}/>
        </Box>
    </Box>
    );
}