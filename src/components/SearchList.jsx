import { Grid, Typography } from "@mui/material"
import ContentCard from "./ContentCard";
import LoadingAnimation from "./LoadingAnimation";
import Pagenator from "./Pagenator";


export const highlightedText = (text, query) => {
  query = query.toLowerCase();
  text = text.toLowerCase();
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));      
    return (
      <>
        {parts.map((part, index) =>
          part === query ? (
            <span className="highlighted-text" key={index}>{part}</span>
          ) : (
            part
          ),
        )}
      </>
    );
  }
  return text;
};
export default function SearchList({keyword,searchList,page,handlePageChange,totalCount}) {
    return (
      <>
      {searchList.error?
           <Grid container>
              <Grid item
                sx={{
                  width: "100%",
                  height: "200px",
                  display:'flex',
                  justifyContent:"center",
                  alignItems:"center",
                  border: "1px solid bisque",
                  borderRadius: "20px",
                  backgroundColor: "bisque",
                }}
              >
                <Typography variant="h4" sx={{padding:'px' , background:"#777",borderRadius:"15px",color:"bisque" }}>
                  {searchList.error}
                </Typography>
              </Grid>
            </Grid>
          :
        <Grid
          container
          sx={{
            width: "100%",
            margin: "0px auto",
            padding: "10px 10px",
            border: "1px solid bisque",
            borderRadius: "20px",
            backgroundColor: "bisque",
          }}
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography variant="h4" sx={{color:'#777' ,margin:"20px auto",width:"90%"}}>
              {highlightedText(`${keyword}에 대한 검색 결과 입니다.`,keyword)}
            </Typography>
            <hr className="content-divider"/>
          </Grid>
          {searchList.loading ? (
            <Grid item xs={12} sx={{ width: "90%", padding: "0px 20px" }}>
              <LoadingAnimation />
              <LoadingAnimation />
              <LoadingAnimation />
              <LoadingAnimation />
            </Grid>
          ) : (
            searchList.data.map((content,index) => (
              <Grid key={index} item  xs={12} md={6} lg={4}>
                <ContentCard  key={index} keyword={keyword} content={content} />
              </Grid>
            ))
          )}
          <Grid item xs={12}>
            <Pagenator
              page={page}
              totalCount={totalCount}
              handlePageChange={handlePageChange}
            />
          </Grid>
        </Grid>
      }
      </>
    );
}