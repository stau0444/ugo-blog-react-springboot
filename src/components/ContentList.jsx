import {Grid} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContentCard from './ContentCard';
import LoadingSkeleton from "./LoadingSkeleton";
import Pagenator from "./Pagenator";

export default function ContentList({
  totalCount,
  contentList,
  page,
  handlePageChange,
}) {
  const [listBgc,setListBgc] = useState();
  const isOn = useSelector(state => state.nightMode);
  useEffect(()=>{
    console.log(isOn)
    if(isOn){
      setListBgc("#c9e0df")
    }else{
      setListBgc("#34343a")
    }
  },[isOn])
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          margin: "0px auto",
          padding: "12px 12px",
          borderRadius: "20px",
          backgroundColor: listBgc,
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
                <Grid key={content.id} item xs={12}  md={contentList.data.length !== 1 ? 6 : ""} lg={contentList.data.length !== 1 ? 4 : ""}>
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
  )
}