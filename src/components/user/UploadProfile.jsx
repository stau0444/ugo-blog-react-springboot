import { Grid, Modal } from "@mui/material";
import { useState } from "react";
import ImageEditor from "../common/ImageEditor";
const modalStyle = {
    margin: "80px auto",
    width: '40%',
    height:'400px',
    bgcolor: '#03e3f3eb',
    borderRadius:'20px',
    boxShadow: 24,
    p: 4,
    overflowY:"auto" ,
  };
export const profileStyle = {
    width:"30%",
    height: "140px",
    borderRadius: "50%",
    background:"gray",
}
export default function UploadProfile({image,setImage}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
            <img className="profileImg" style={profileStyle} src={image.imagePreviewUrl?image.imagePreviewUrl:"/no-image.png"} alt="profileImg" onClick={handleOpen}/>
            <Modal
                sx={{...modalStyle, width:"80%", height:"70%" , maxWidth:"600px"}}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Grid container>
                    <ImageEditor handleClose={handleClose} image={image} setImage={setImage}/>
                </Grid>
            </Modal>
        </>
    );
}