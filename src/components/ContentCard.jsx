import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack, styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { highlightedText } from './SearchList';
import { useSelector } from 'react-redux';

const StyledCard = styled(Card)`
  text-align:center;
  width: 90%;
  border-radius: 15px;
  color: ${props =>  props.theme.nightMode?"#746d6cfd":"black"};
  min-width: 275;
  margin: 10px auto;
  padding: 0 10px;
  box-shadow: 10px 10px 20px rgba(0 , 0,  0,  0.39);
  background:rgba(255,255,255,0.1);
  border-top: 1px solid rgba(255,255,255,0.5);
  border-left: 1px solid rgba(255,255,255,0.5);
   /* "linear-gradient(to right bottom, #ff00d4, rgb(0, 89, 178) 120%);", */
  &:hover{
    background:
    ${props => props.theme.nightMode?
    "linear-gradient(to right bottom, rgba(116, 196, 162, 0.952), whitesmoke 120%)"
    :
    "linear-gradient(to right bottom, rgba(0, 128, 255, 0.781), rgb(81, 87, 94) 120%)"
    };
    transition: all 0.1s linear;
    width: 90%;
    box-shadow: 3px 3px 1px 0px rgba(5, 5, 20, 0.726);
    color: ${props => props.theme.nightMode?"#020611fb":"bisque"};
  }
`;

const ContentDescription = styled(Typography)`
  color:${props => props.theme.nightMode?"#6b4f03":"#ecebea"};
  font-size:14px ;
  font-family:"" ;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 11; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.4em;
  height: 15.2em;
  
`



const ContentTitle = styled(Typography)`
  font-weight: 700;
  font-size:25px;
  color: ${props => props.theme.nightMode?"#22ad96":"bisque"};
  font-family: Gowun Batang;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 0 0 10px 0;
`

const ContentDivider = styled(Divider)`
  margin:15px auto;
  width:98%;
  height:2px;
  background : ${props => props.theme.nightMode?"darkgray":"#337ab7"};
`


export default function ContentCard({keyword,content}) {
  const nightMode = useSelector(state => state.nightMode);
  const theme = { 
    nightMode:nightMode
  } 
  return (
      <Link to={"/content/" + JSON.stringify(content.id)}>
        <StyledCard theme={theme}  className="content-card">
          <CardContent sx={{ padding: "20px 10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ContentTitle theme={theme}>
                  {keyword
                    ? highlightedText(content.title, keyword)
                    : content.title}
                </ContentTitle>
                <ContentDivider theme={theme}/>
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
                <ContentDescription theme={theme}>
                  {keyword
                    ? highlightedText(content.description, keyword)
                    : content.description}
                </ContentDescription>
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
        </StyledCard>
      </Link>
  );
}