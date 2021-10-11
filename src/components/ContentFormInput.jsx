import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import MultiSelect from "./MultiSelect";

const tagList = [
    {
        id: 0,
        tagName: "JAVA",
    },
    {
        id: 2,
        tagName: "JAVASCIPT",
    },
    {
        id: 3,
        tagName: "JPA",
    },
    {
        id: 4,
        tagName: "SPRING-BOOT",
    },
    {
        id: 5,
        tagName: "REACT",
    },
    ];

const StyledInput = styled('input')`
  width: 90%;
  text-align: center;
  color:bisque;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom:1px solid bisque;
  background-color: transparent;
`
export const StyledInputLabel = styled('label')`

  color:bisque;
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 15px;
  padding: 3px;
  border-radius:5px;
`

export default function ContentFormInput({titleRef,handleImageChange,image}) {
    return (
      <>
        <Grid
          item
          sx={{
            textAlign: "center",
            margin: "30px auto",
            position: "relative",
          }}
        >
          <StyledInputLabel
            sx={{
              width: "30%",
              margin: "0 auto",
              border: "1px solid #1976d2",
              color: "#1976d2",
            }}
          >
            제목
          </StyledInputLabel>
          <StyledInput
            ref={titleRef}
            placeholder="Title"
            type="text"
            sx={{ margin: "31px 0" }}
          />
          <Grid item xs={12} sx={{ margin: "7px 0" }}>
            <StyledInputLabel
              htmlFor="imageInput"
              sx={{
                position: "absolute",
                border: "1px solid #1976d2",
                color: "#1976d2",
                top: "85px",
                left: "25%",
                right: "25%",
                zIndex: "0",
                backgroundColor: "transparent",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#82829495",
                },
              }}
            >
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
        </Grid>
      </>
    );
}