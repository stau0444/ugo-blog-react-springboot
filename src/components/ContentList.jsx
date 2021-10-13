import {Grid} from "@mui/material";
import ContentCard from './ContentCard';
import LoadingAnimation from './LoadingAnimation';

export default function ContentList({contentList}) {
  return (
      <>
        <Grid
          container
          sx={{
            width: "100%",
            margin: "0px auto",
            padding: "10px 0",
            border: "1px solid bisque",
            borderRadius:"20px",
            backgroundColor: "bisque",
          }}
        > 
         {contentList.loading?
          <Grid item xs={12} sx={{width:"90%",padding:'0px 20px'}}>
              <LoadingAnimation/>
              <LoadingAnimation/>
              <LoadingAnimation/>
              <LoadingAnimation/>
          </Grid>
          :contentList.data.map((content) => (
            <Grid key={content.id} item xs={12} md={6}>
              <ContentCard content={content} />
            </Grid>
          ))
        }
        </Grid>
      </>
    );
}