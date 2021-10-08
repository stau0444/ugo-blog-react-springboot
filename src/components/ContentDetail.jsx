import { Chip, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CodeBlock from "./CodeBlock";
import ContentDetailLoading from "./ContentDetailLoading";

export default function ContentDetail({content,loading}) {
    
    return(
        <Grid container>
            <Grid item xs={12} >
                {loading?
                    <ContentDetailLoading/>
                :
                <>
                    <Typography variant='h2' sx={{width:'85%',margin:'10px auto',fontWeight:'',color:'#1976d2'}}>{content.title}</Typography>
                    <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}>{content.createdAt}</Typography>
                    <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}></Typography>
                    <Grid item  xs={12} className="content-tags" sx={{width:'87%',margin:'20px auto' ,display:'block'}}>
                        {content.tags.map((tag)=>
                        <Chip key={tag.id} label={tag.tagName} size="small" color="success" sx={{margin:'20px 5px'}}/>
                        )}
                    </Grid>
                    <CodeBlock value={content.article}/>
                </>
                }
            </Grid>
        </Grid>
    );
}