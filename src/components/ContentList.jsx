import {Grid} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ContentCard from './ContentCard';
import LoadingSkeleton from "./LoadingSkeleton";
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
          borderRadius: "20px",
          backgroundColor: "bisque",
        }}
      >
        {contentList.loading ? (
          <Grid item xs={12} sx={{ width: "90%", padding: "0px 20px" }}>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </Grid>
        ) : (
          <AnimatePresence exitBeforeEnter  initial={true}>
            {contentList.data.map((content) => (
                <Grid key={content.id} item xs={12}  md={contentList.data.length !== 1 ? 6 : 12} lg={contentList.data.length !== 1 ? 4 : 12}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ContentCard content={content} />
                  </motion.div>
                </Grid>
              
            ))}
          </AnimatePresence>
        )}
        <Grid item xs={12}>
          <Pagenator page={page} totalCount={totalCount} handlePageChange={handlePageChange} />
        </Grid>
      </Grid>
    </>
  );
}