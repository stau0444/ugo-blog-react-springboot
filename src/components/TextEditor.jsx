import 'highlight.js/styles/base16/google-dark.css';
import { useState } from "react";
import Typography from '@mui/material/Typography';
import { Grid} from "@mui/material";
import CodeBlock from './CodeBlock';
import { useSelector } from 'react-redux';
import ContentFormContainer from '../containers/ContentFormContainer';

/*todo
  redux로 state 전환
*/

export default function TextEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const value = useSelector(state => state.contentValue);
  if(isOpen){
    return (
      <>  
        <Grid container>
          <Grid item xs={12} lg={6}>
            <ContentFormContainer setIsOpen={()=>{setIsOpen(false)}}/>
          </Grid>
          <Grid item xs={12} lg={6}>
              <Grid item xs={12} sx={{marginLeft:'30px'}}>
                  <Typography sx={{  fontSize:'25px' , fontWeight:'bold' ,color:'white'}}>본문 미리보기</Typography>
              </Grid>            
              <CodeBlock value={value}/>
          </Grid>
        </Grid>
      </>
    );
  }
  return(
    <>
        <ContentFormContainer setIsOpen={()=>{setIsOpen(true)}} />
    </>
  )
}

