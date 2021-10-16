import {Grid} from "@mui/material";
import ContentCard from './ContentCard';
import LoadingAnimation from './LoadingAnimation';
import Pagenator from "./Pagenator";

export default function ContentList({
  totalCount,
  contentList,
  page,
  handlePageChange,
}) {
  return (
    <>
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
        {contentList.loading ? (
          <Grid item xs={12} sx={{ width: "90%", padding: "0px 20px" }}>
            <LoadingAnimation />
            <LoadingAnimation />
            <LoadingAnimation />
            <LoadingAnimation />
          </Grid>
        ) : (
          contentList.data.map((content) => (
            <Grid key={content.id} item xs={12} md={6} lg={4}>
              <ContentCard content={content} />
            </Grid>
          ))
        )}
        <Grid item xs={12}>
          <Pagenator page={page} totalCount={totalCount} handlePageChange={handlePageChange} />
        </Grid>
      </Grid>
    </>
  );
}