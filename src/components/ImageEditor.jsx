import Cropper from 'react-cropper';
import { useState } from 'react';
import 'cropperjs/dist/cropper.css'
import { Box, Button, Typography } from '@mui/material';
import { StyledInput, StyledInputLabel } from './ContentUpdateForm';

export default function ImageEditor ({handleClose,image,setImage}) {
  const [cropData, setCropData] = useState();
  const [cropper, setCropper] = useState();
  const handleImageChange = (e) => {
    let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: reader.result,
            });
        };
    reader.readAsDataURL(file);
  };


  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  const setCroppedImg = ()=>{
    
    cropper.getCroppedCanvas().toBlob(blob=>{
      const croppedImg = new File([blob],image.file.name , {type:image.file.type})
      setImage({
        file: croppedImg,
        imagePreviewUrl: cropData
      })
    })
    handleClose();
  }
  const boxStyle = {
    display: 'inline-block',
    padding: '10px',
    boxSizing: 'border-box',
  }
  return (
    <div style={{ width: "100%",  textAlign: "center" }}>
      <div>
        <Typography
          sx={{
            fontWeight: "400",
            color: "bisque",
            fontSize: "30px",
          }}
        >
          프로필 편집
        </Typography>
        <Button
          sx={{
            color: "tomato",
            width: "70%",
            padding: "0",
            height: "28px",
            border: "1px solid tomato",
            margin: "15px auto",
            "&:hover": {
              color: "white",
              background: "#eb5814bc",
            },
          }}
        >
          <StyledInputLabel sx={{ padding: 0 }} htmlFor="imageInput">
            이미지 선택
          </StyledInputLabel>
        </Button>
        <StyledInput
          id="imageInput"
          placeholder="Image"
          accept="image/*"
          multiple
          type="file"
          sx={{ display: "none" }}
          onChange={handleImageChange}
        />
        <br />
        <Cropper
          style={{ margin:"0 auto" ,width:"60%",maxWidth:"300px"}}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image.imagePreviewUrl}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
          guides={true}
        />
      </div>
      <div>
        <Box
          className="box"
          sx={{
            ...boxStyle,
            width: "100%",
            float: "right",
          }}
        ></Box>
        <Button
          sx={{
            color: "black",
            background: "#099df3",
            margin: "0",
            "&:hover": {
              background: "#058f2e",
            },
          }}
          onClick={getCropData}
        >
          편집 이미지 확인
        </Button>
        <Button
          sx={{
            color: "black",
            background: "bisque",
            margin: "5px",
            "&:hover": {
              background: "#058f2e",
            },
          }}
          onClick={setCroppedImg}
        >
          현재 이미지 적용
        </Button>
      </div>
      <br style={{ clear: "both" }} />
      <img alt="cropedImg" style={{maxWidth:"300px",width:"60%"}} src={cropData?cropData:"/no-image.png"}/>
    </div>
  );
}