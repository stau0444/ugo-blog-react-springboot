import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { highlightedText } from './SearchList';
import { useSelector } from 'react-redux';

export default function ContentCard({keyword,content}) {
  const nightMode = useSelector(state => state.nightMode);
  return (
      <Link to={"/content/" + JSON.stringify(content.id)}>
        <Card
          className="content-card"
          sx={{
            textAlign:"center",
            width: "90%",
            borderRadius: "15px",
            color: nightMode?"#746d6cfd":"bisque",
            minWidth: 275,
            margin: "10px auto",
            padding: "0 10px",
            boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.39)",
            background:"rgba(255,255,255,0.1)",
            borderTop:"1px solid rgba(255,255,255,0.5)",
            borderLeft:"1px solid rgba(255,255,255,0.5)",
            backdropFilter:"blur(5)",
            // "linear-gradient(to right bottom, #ff00d4, rgb(0, 89, 178) 120%);",
            "&:hover": {
              background:
               nightMode ?
               "linear-gradient(to right bottom, rgba(116, 196, 162, 0.952), whitesmoke 120%);"
                :
                "linear-gradient(to right bottom, rgba(0, 128, 255, 0.781), rgb(81, 87, 94) 120%);"
              ,
              transition: "all 0.1s linear",
              width: "90%",
              boxShadow: "3px 3px 1px 0px rgba(5, 5, 20, 0.726)",
              color:nightMode?"#020611fb":"bisque"
            },
          }}
        >
          <CardContent sx={{ padding: "20px 10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: nightMode?"#22ad96":"bisque",
                    fontFamily: "'Gowun Batang'",
                    margin: "0 0 10px 0",
                  }}
                >
                  {keyword
                    ? highlightedText(content.title, keyword)
                    : content.title}
                </Typography>
                <Divider color={nightMode?"darkgray":"bisque"}/>
              </Grid>
              <Grid item sm={4} xs={12}>
                <img
                  className="content-img"
                  src={content.imageUrl}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Grid>
              <Grid
                item
                sm={8}
                xs={12}
                sx={{
                  marginTop: "10px",
                  maxHeight: 230,
                  minHeight:190,
                  overflow: "hidden",
                }}
              >
                <Typography sx={{fontWeight:"450",color:nightMode?"#6b4f03":"#ecebea",fontSize:"14px" ,fontFamily:"" }}>
                  {keyword
                    ? highlightedText(content.description, keyword)
                    : content.description}
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
                  {
                  content.tags !== undefined 
                  ? content.tags.map((tag,index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      color="success"
                    />
                  ))
                  :
                    ""
                  }
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
  );
}