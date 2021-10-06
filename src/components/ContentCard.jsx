import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function ContentCard({content}) {
  return (
    <Button sx={{borderRadius:"20px" , width :"100%"}}>
      <Link to={'/content/'+JSON.stringify(content.id)}>
        <Card className="content-card"
              sx={{ 
                width:'90%',
                borderRadius:"20px",
                color:'white' ,
                minWidth: 275 ,
                margin:'5px auto' ,
                padding:'0 10px',
                fontFamily:"'Nunito', sans-serif",
                background:'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);',
                  "&>div:hover":{
                    background: 'linear-gradient(to right bottom, rgba(255, 0, 55, 0.295), rgb(0, 89, 178) 120%);'
                  }
                }} >
          <CardContent sx={{padding:'20px 0'}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{fontWeight:'bold',margin:'0 0 10px 0'
                  }}
                >
                  {content.title}
                </Typography>
                <Divider color="white" />
              </Grid>
              <Grid item sm={4} xs={12}>
                  <img className="content-img" src={content.imgLink} alt="" width="100%"/>
              </Grid>
              <Grid item sm={8} xs ={12} >
                <Typography variant="p">
                  {content.article}
                </Typography>
              </Grid>
              <Grid item xs={12}>
              <Stack 
                direction="row" 
                spacing={1}
                justifyContent="flex-end"
                alignItems="flex-end"
                marginRight="10px"
              >
                {content.tags.map((tag)=>
                  <Chip key={tag.id} label={tag.tagName} size="small" color="success" />
                )}
              </Stack>
              </Grid>
            </Grid>
            </CardContent>
        </Card>
      </Link>
    </Button>
  );
}