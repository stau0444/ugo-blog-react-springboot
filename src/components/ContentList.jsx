import {Grid} from "@mui/material";
import ContentCard from './ContentCard';

export default function ContentList({contentList}) {
  return (
      <>
        <Grid
          container
          sx={{
            width: "100%",
            margin: "0px auto",
          }}
        >
          {contentList.data.map((content) => (
            <Grid key={content.id} item xs={12}>
              <ContentCard content={content} />
            </Grid>
          ))}
        </Grid>
      </>
    );
}