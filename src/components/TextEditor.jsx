import 'highlight.js/styles/base16/google-dark.css';
import { useState } from "react";
import {Grid} from "@mui/material";
import ContentFormContainer from '../containers/ContentFormContainer';
import ContentUpdateFormContainer from '../containers/ContentUpdateFormContainer';

export default function TextEditor({isUpdate}) {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <>  
        <Grid container>
          <Grid item xs={12}>
            {isUpdate ? 
            <ContentUpdateFormContainer isUpdate={isUpdate} isOpen={isOpen} setIsOpen={()=>{setIsOpen(false)}}/> : 
            <ContentFormContainer isUpdate={isUpdate} isOpen={isOpen} setIsOpen={()=>{setIsOpen(false)}}/>
            }
          </Grid>
        </Grid>
      </>
    );
  }
  

