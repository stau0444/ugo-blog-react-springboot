import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';


export default function ContentCard() {
  return (
    <Button sx={{borderRadius:"20px" , width :"100%"}}>
      <Card component="App" 
            sx={{ 
              borderRadius:"20px",
              color:'white' ,
              minWidth: 285 ,
              margin:'5px auto' ,
              background:'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);',
              }} >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="div" sx={{fontWeight:'bold',margin:'0 0 10px 0'}}>
                자바란 무엇인가?
              </Typography>
              <Divider color="white" />
            </Grid>
            <Grid item sm={4} xs={12}>
                <img className="content-img" src="IMG_1708.JPG" alt="" width="100%"/>
            </Grid>
            <Grid item sm={8} xs ={12}sx={{
              margin:'auto',
              lineHeight:'1.4',
              "& :hover":{
                color: "darkgray"
              }
            }}>
              <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum exercitationem vero, dolorem dicta dolorum, magnam ad nesciunt tempore animi incidunt sit inventore corporis cum voluptas eius rerum dolores commodi?
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Stack 
              direction="row" 
              spacing={1}
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Chip label="success" size="small" color="success" />
              <Chip label="success" size="small" color="success" />
              <Chip label="success" size="small" color="success" />
            </Stack>
            </Grid>
          </Grid>
          </CardContent>
      </Card>
    </Button>
  );
}