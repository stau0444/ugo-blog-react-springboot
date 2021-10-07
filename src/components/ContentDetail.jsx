import { Chip, Grid, Typography } from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function ContentDetail({content}) {
    return(
        <Grid container>
            <Grid item xs={12} >
                <Typography variant='h2' sx={{width:'85%',margin:'10px auto',fontWeight:'',color:'#1976d2'}}>{content.title}</Typography>
                <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}>{content.createdAt}</Typography>
                <Typography variant='strong' sx={{width:'85%',margin:'20px auto' ,display:'block',color:'#1976d2'}}></Typography>
                <Grid item  xs={12} className="content-tags" sx={{width:'87%',margin:'20px auto' ,display:'block'}}>
                    {content.tags.map((tag)=>
                    <Chip key={tag.id} label={tag.tagName} size="small" color="success" sx={{margin:'20px 5px'}}/>
                    )}
                </Grid>
                <CodeBlock value={content.article}/>
            </Grid>
        </Grid>
    );
}