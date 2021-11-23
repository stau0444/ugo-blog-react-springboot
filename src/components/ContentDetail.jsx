import { Box, Button, Chip, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import ContentDetailSkeleton from "./ContentDetailSkeleton";

const headerTextStyle = {
  width: "85%",
  margin: "20px auto",
  display: "block",
  color: "#1976d2",
};
const ContentTitle = styled("h2")`
    width:85%;
    font-size:40px;
    margin:10px auto;
    font-weight:300;
    color:#1976d2;
    margin:20px auto;
`;


export default function ContentDetail({content,loading,deleteContent}) {
    const {login,userInfo} = useSelector(state => state.login);
    const userId = useSelector(state => state.contents.userId)

    return(
        <Grid container>
            <Grid item xs={12} >
                {loading?
                    <ContentDetailSkeleton/>
                :
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                <>
                    <ContentTitle >{content.title}</ContentTitle>
                    <hr style={{width:"90%"}}/>
                    <Typography variant='strong' sx={headerTextStyle}>{content.createdAt}</Typography>
                    <Typography variant='strong' sx={headerTextStyle}></Typography>
                    <Grid item  xs={12} className="content-tags" sx={{width:'87%',margin:'20px auto' ,display:'block'}}>
                        {
                        content.tags !== undefined 
                        ?
                        content.tags.map((tag,index)=>
                        <Chip key={index} label={tag} size="small" color="success" sx={{margin:'20px 5px'}}/>
                        )
                        :
                        ""
                        }
                    </Grid>
                    <CodeBlock value={content.article}/>
                    {login&&userId===userInfo.id?
                        <Grid item sx={{float:'right',marginRight:'40px' , marginTop:'20px'}}>
                            <NavLink to={"/content/update/"+content.id}>
                                <Button variant="outlined" color="success" sx={{marginRight:'10px'}}>
                                수정
                                </Button>
                            </NavLink>  
                            <Button onClick={()=>{deleteContent(content.id)}} variant="outlined" color="error">
                                삭제
                            </Button>
                        </Grid> 
                        :
                       <Box sx={{margin:"40px"}}></Box>
                    }
                </>
                </motion.div>
                }
            </Grid>
        </Grid>
        
    );
}