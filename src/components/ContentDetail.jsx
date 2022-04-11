import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CodeBlock from "./CodeBlock";
import ContentDetailSkeleton from "./ContentDetailSkeleton";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Comments from "./Comments";
import { ContentTag } from "./ContentCard";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const headerTextStyle = {
  width: "85%",
  margin: "20px auto",
  display: "block",
  color: "#1976d2",
  
};
const ContentCreatedAt = styled(Typography)`
  width: 85%;
  margin:20px auto;
  display:block;
  font-size: 15px;
  color: #c1f1d4;
  font-family: inherit;
 text-align: right;
`
const ContentTitle = styled("h2")`
    width:85%;
    font-size:40px;
    margin:10px auto;
    font-weight:300;
    color:#2d93f8;
    margin:20px auto;
    border-radius: 15px;
    padding: 15px;
    overflow: hidden;
    box-shadow: inset 0px 1px 3px 0px black;
    background-color: rgba(97, 140, 190, 0.226);
    font-weight: 300;

`;

const PrevContent =styled("p")`
 padding: 5px 0;
 padding-left: 15px ;
 width: 85%;
 margin:0 auto;
 font-size: 15px;
 border-radius: 10px;
 & > a {
    color: #23ca98ef;
 }
 &:hover{
     transition: all 0.3s linear;
     background-color: #e1e7e11a;
 }
`

const NextContent =styled("p")`
 padding: 5px 0;
 padding-left: 15px ;
 width: 85%;
 margin:0 auto;
 margin-bottom: 20px;
 border-radius: 10px;
 font-size: 15px;
 & > a {
    color: #23ca98ef;
 }
 &:hover{
     transition: all 0.3s linear;
     background-color: #e1e7e11a;
 }
`

const PrevNextDivider = styled('hr')`
width: 85%;
margin:0 auto;
height: 0;
border: 1px solid gray;
`


export default function ContentDetail({commentList,login,userInfo,content,loading,deleteContent,addComment}) {
    const userId = useSelector(state => state.contents.userId)
    
    return (
      <Grid container>
        <Grid item xs={12}>
          {loading ? (
            <ContentDetailSkeleton />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <>
                <ContentTitle>
                  <MenuBookRoundedIcon
                    fontSize="large"
                    sx={{ color: "#3ef1bcee;", margin: "0 20px" }}
                  />
                  {content.title}
                </ContentTitle>
                <ContentCreatedAt>{content.createdAt}</ContentCreatedAt>
                <hr style={{ width: "90%" }} />
                <Typography variant="strong" sx={headerTextStyle}></Typography>
                <Grid
                  item
                  xs={12}
                  className="content-tags"
                  sx={{
                    width: "87%",
                    margin: "20px auto",
                    marginTop: "0px",
                    display: "block",
                  }}
                >
                  <LocalOfferOutlinedIcon
                    fontSize="medium"
                    sx={{
                      marginRight: "5px",
                      color: "lightgray",
                      verticalAlign:"middle",

                    }}
                  />
                  {content.tags !== undefined
                    ? content.tags.map((tag, index) => (
                        <ContentTag
                          key={index}
                          label={tag}
                          size="small"
                          color="success"
                          sx={{ margin: "10px 5px" }}
                        />
                      ))
                    : ""}
                </Grid>
                <CodeBlock value={content.article} />
                <div style={{ marginTop: "40px" }}>
                  {content.prevContent ? (
                    <PrevContent>
                      <Link to={"/content/" + content.prevContent.id}>
                        이전글 - {content.prevContent.title}
                      </Link>
                    </PrevContent>
                  ) : (
                    ""
                  )}
                  <PrevNextDivider />
                  {content.nextContent ? (
                    <NextContent>
                      <Link to={"/content/" + content.nextContent.id}>
                        다음글 - {content.nextContent.title}
                      </Link>
                    </NextContent>
                  ) : (
                    ""
                  )}
                </div>
                {login && userId === userInfo.id ? (
                  <Grid
                    item
                    sx={{
                      float: "right",
                      marginRight: "40px",
                      marginTop: "20px",
                    }}
                  >
                    <NavLink to={"/content/update/" + content.id}>
                      <Button
                        variant="outlined"
                        color="success"
                        sx={{ marginRight: "10px" }}
                      >
                        수정
                      </Button>
                    </NavLink>
                    <Button
                      onClick={() => {
                        deleteContent(content.id);
                      }}
                      variant="outlined"
                      color="error"
                    >
                      삭제
                    </Button>
                  </Grid>
                ) : (
                  <Box sx={{ margin: "40px" }}></Box>
                )}
                <Comments
                  addComment={addComment}
                  contentId={content.id}
                  commentList={commentList}
                  login={login}
                  userInfo={userInfo}
                />
              </>
            </motion.div>
          )}
        </Grid>
      </Grid>
    );
}