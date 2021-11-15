import { Button, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import ReactQuill  from 'react-quill';
import { formats, modules } from "../QuillConfig";
import { tagList } from "../sampleData";
import ContentPreviewModal from "./ContentPreviewModal";
import { StyledInput } from "./ContentUpdateForm";
import MultiSelect from "./MultiSelect";

export const StyledInputLabel = styled('label')`
  width: 30%;
  color:bisque;
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 20px auto;
  padding: 3px;
  border-radius:5px;
  position: "absolute";
  border: 1px solid #1976d2;
  color: "#1976d2";
  cursor: pointer;
   &:hover{
    background:#82829495;
  }
`
export const StyledTextarea = styled('textarea')`
  display: block;
  background-color: bisque;
  font-family: sans-serif;
  padding: 3px;
  margin:0 auto;
  width: 60%;
  height: 150px;
  border-radius:5px;
`

export default function ContentForm({
    hadleTitleValue,
    title,
    hadleContentValue,
    handleSubmit,
    handleImageChange,
    hadleDescriptionValue,
    description,
    image,
    value,
}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Grid container >
          <Grid
            item
            sx={{
              textAlign: "center",
              margin: "30px auto",
              position: "relative",
            }}
            xs={12}
            md={6}
          >
            <StyledInputLabel>
              제목
            </StyledInputLabel>
            <StyledInput
              onChange={hadleTitleValue}
              placeholder="Title"
              value={title}
              type="text"
              sx={{ margin: "31px 0" }}
            />
            <Grid item xs={12} sx={{ margin: "7px 0" }}>
              <StyledInputLabel htmlFor="imageInput">
                썸네일 이미지 업로드
              </StyledInputLabel>
              <StyledInput
                id="imageInput"
                placeholder="Image"
                accept="image/*"
                multiple
                type="file"
                sx={{ display: "none" }}
                onChange={handleImageChange}
              />
              <img
                className="imagePreviewUrl"
                src={image.imagePreviewUrl}
                alt="imagePreview"
              />
            </Grid>
            <Grid item xs={12} sx={{ justifyContent: "center" }}>
              <MultiSelect tags={tagList} />
            </Grid>
            <Grid item xs={12}>
            <StyledInputLabel>
               컨텐츠 설명
              </StyledInputLabel>
              <StyledTextarea value={description} onChange={hadleDescriptionValue} placeholder="리스트에 표시되는 설명을 적어 주세요"/>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{}} >
            <Typography
              variant="h5"
              sx={{
                margin:{xs:'15px 0 0 30px'},
                color:"white",
                padding: "4px",
                borderRadius: "5px",
              }}
            >
              본문
            </Typography>
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={value}
              onChange={hadleContentValue}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ width: "95%", textAlign: "right" }}>
          <Button onClick={handleOpen}>본문 미리 보기</Button>
          <Button onClick={handleSubmit} variant="outlined">
            저장
          </Button>
        </Grid>
        <ContentPreviewModal
          open={open}
          handleClose={handleClose}
          value={value}
        />
      </>
    );
}