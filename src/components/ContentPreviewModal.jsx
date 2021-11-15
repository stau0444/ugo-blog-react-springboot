import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import CodeBlock from "./CodeBlock";

  
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgb(32, 38, 45)',
    border: '2px solid #000',
    boxShadow: 24,
    overflow:'scroll',
    height:'90%',
    p: 4,
};

const ModalTextStyle = {
  margin: "50px 0 50px 30px",
  fontSize: "25px",
  fontWeight: "bold",
  color: "white",
};

export default function ContentPreviewModal({open,handleClose,value}) {
    return(
        <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Button sx ={{float:'right'}} onClick={handleClose}>닫기</Button>
                  <Grid item xs={12}>
                      <Grid item xs={12} sx={{marginLeft:'30px' , marginTop:{lg:''}}}>
                          <Typography sx={ModalTextStyle}>본문 미리보기</Typography>
                      </Grid>            
                      <CodeBlock value={value}/>
                  </Grid>
                </Box>
        </Modal>
    );
}