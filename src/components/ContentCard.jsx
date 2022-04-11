import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack, styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { highlightedText } from './SearchList';
import { useSelector } from 'react-redux';
import BookIcon from '@mui/icons-material/Book';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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
  transition: 'background 1s linear';
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
  color:${props => props.theme.nightMode?"#70633f":"#dfdff1"};
  font-size:14px ;
  font-family:"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 13; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.3em;
  height: 16.2em;
  
`

const ContentTitle = styled(Typography)`
  font-weight: 700;
  font-size:25px;
  box-shadow: inset 0px 1px 3px 0px gray;
  background-color: rgba(97, 140, 190, 0.226);
  padding:10px;
  border-radius: 10px;
  color: ${props => props.theme.nightMode?"#22ad96":"bisque"};
  font-family: Gowun Batang;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 10px 0 15px 0;
`
export const ContentTag=styled(Chip)`
background-color: green;
font-size:14px;
font-family: 'Righteous', cursive;
`

const ContentDivider = styled(Divider)`
  margin:15px auto;
  width:98%;
  height:2px;
  background : ${props => props.theme.nightMode?"darkgray":"#337ab7"};
`
const CreatedDate = styled("p")`
  margin:-3px 5px 12px 0;
  color:${props => props.theme.nightMode?"gray":"rgb(38, 93, 151)"};
  float:right;  
  background-color: rgba(170, 236, 215, 0.87);
  font-size: 12px;
  border:1px solid gray;
  padding:3px 8px;
  box-shadow: inset 0px 1px 3px 0px gray;
  border-radius: 15px;
  font-weight: bold;
  border: 1px solid #a5dfaf;
`

export default function ContentCard({keyword,content}) {
  const nightMode = useSelector(state => state.nightMode);
  const theme = { 
    nightMode:nightMode
  } 
  return (
    <Link to={"/content/" + JSON.stringify(content.id)}>
      <StyledCard theme={theme} className="content-card">
        <CardContent sx={{ padding: "10px 10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ContentTitle theme={theme}>
                <BookIcon
                  fontSize="midium"
                  sx={{
                    margin: "0 10px  -2px 0",
                    color: "lightgray",
                  }}
                />
                {keyword
                  ? highlightedText(content.title, keyword)
                  : content.title}
              </ContentTitle>
              <CreatedDate theme={theme}>
                <AccessTimeIcon
                  fontSize="small"
                  sx={{
                    fontSize: "15px",
                    margin: "0 3px -3px 0",
                  }}
                />
                {content.createdAt}
              </CreatedDate>
              <ContentDivider theme={theme} />
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
                maxHeight: 232,
                minHeight: 190,
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
                {content.tags !== undefined
                  ? content.tags.map((tag, index) => (
                      <ContentTag
                        key={index}
                        label={tag}
                        size="small"
                        color="success"
                      />
                    ))
                  : ""}
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Link>
  );
}