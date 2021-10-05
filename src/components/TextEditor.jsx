import 'highlight.js/styles/base16/google-dark.css';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { Grid} from "@mui/material";

import ContentForm from "./ContentForm";
import CodeBlock from './CodeBlock';

//value , data  리덕스로 전환

export default function TextEditor() {
  const [isOpen, setIsOpen] = useState(false);

  if(isOpen){
    return (
      <>  
        <Grid container>
          <Grid item xs={12} lg={6}>
            <ContentForm setIsOpen={()=>{setIsOpen(false)}}/>
          </Grid>
          <Grid item xs={12} lg={6}>
              <Grid item xs={12} sx={{marginLeft:'30px'}}>
                  <Typography sx={{  fontSize:'25px' , fontWeight:'bold' ,color:'white'}}>본문 미리보기</Typography>
              </Grid>            
              <CodeBlock value={''}/>
          </Grid>
        </Grid>
      </>
    );
  }
  return(
    <>
        <ContentForm setIsOpen={()=>{setIsOpen(true)}} />
    </>
  )
}

