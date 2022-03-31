import { Box, Button, Chip, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
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

export default function ContentDetail({content,loading,deleteContent}) {
    const {login,userInfo} = useSelector(state => state.login);
    const userId = useSelector(state => state.contents.userId)
    console.log('content' , content)
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
                <ContentTitle>{content.title}</ContentTitle>
                <hr style={{ width: "90%" }} />
                <Typography variant="strong" sx={headerTextStyle}>
                  {content.createdAt}
                </Typography>
                <Typography variant="strong" sx={headerTextStyle}></Typography>
                <Grid
                  item
                  xs={12}
                  className="content-tags"
                  sx={{ width: "87%", margin: "20px auto", display: "block" }}
                >
                  {content.tags !== undefined
                    ? content.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          color="success"
                          sx={{ margin: "20px 5px" }}
                        />
                      ))
                    : ""}
                </Grid>
                <CodeBlock value={content.article} />
                <div style={{marginTop:"40px"}}>
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
              </>
            </motion.div>
          )}
        </Grid>
      </Grid>
    );
}