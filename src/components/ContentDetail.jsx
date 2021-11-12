import { Button, Chip, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import ContentDetailSkeleton from "./ContentDetailSkeleton";

export default function ContentDetail({content,loading,deleteContent}) {
    return(
        <Grid container>
            <Grid item xs={12} >
                {loading?
                    <ContentDetailSkeleton/>
                :
                <>
                    <Typography variant='h2' sx={{width:'85%',margin:'10px auto',fontWeight:'',color:'#1976d2'}}>{content.title}</Typography>
                    <hr style={{width:"90%"}}/>
                    <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}>{content.createdAt}</Typography>
                    <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}></Typography>
                    <Grid item  xs={12} className="content-tags" sx={{width:'87%',margin:'20px auto' ,display:'block'}}>
                        {content.tags.map((tag,index)=>
                        <Chip key={index} label={tag} size="small" color="success" sx={{margin:'20px 5px'}}/>
                        )}
                    </Grid>
                    <CodeBlock value={content.article}/>
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
                </>
                }
            </Grid>
        </Grid>
    );
}