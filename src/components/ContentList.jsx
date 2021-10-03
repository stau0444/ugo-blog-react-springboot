import { Grid } from "@mui/material";
import ContentCard from './ContentCard';

export default function ContentList() {
    return(
        <>
            <Grid container sx={{width:"90%" ,margin:"0 auto" , padding:0}}>
            <Grid item xs={24}>
              <ContentCard />
            </Grid>
            <Grid item xs={24}>
              <ContentCard />
            </Grid>
            <Grid item xs={24}>
              <ContentCard />
            </Grid>
            <Grid item xs={24}>
              <ContentCard />
            </Grid>
          </Grid>
        </>
    );
}