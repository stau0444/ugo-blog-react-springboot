import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import ReactQuill  from 'react-quill';
import hljs from "highlight.js";
import ContentFormInput from "./ContentFormInput";


hljs.configure({   // optionally configure hljs
    languages: ['javascript' ,'java','python','html']
});
const modules = {
    'history': {          // Enable with custom configurations
    'delay': 2500,
    'userOnly': true
    },
    toolbar: [
        [{'font':[]}],
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        ['link', 'image'],
        ['code-block'],
        [{ 'color': [] }],
        [{ 'background': []}],  
        [{ 'align': [] }],
    ],
    syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
    },
}

const formats = [
    'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'link', 'image','color','background','align',
    'code-block',
]
  
export const StyledInputLabel = styled('label')`

  color:bisque;
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 15px;
  padding: 3px;
  border-radius:5px;
`

export default function ContentForm({
    setIsOpen,
    titleRef,
    hadleContentValue,
    handleSubmit,
    handleImageChange,
    image,
    value,
    content,
    isOpen
}) {
  console.log('isOpen' , isOpen)
    return (
      <>
        <Grid item xs={12}>
          {isOpen ? (
            <></>
          ) : (
            <ContentFormInput
              image={image}
              handleImage={handleImageChange}
              titleRef={titleRef}
            />
          )}
        </Grid>
        <Grid item xs={12}sx={isOpen?{marginTop:'50px'}:{}}>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={hadleContentValue}
          />
        </Grid>
        <Grid item xs={12} sx={{ width: "95%", textAlign: "right" }}>
          <Button
            variant="outlined"
            sx={{ marginRight: "5px" }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
           {isOpen?"미리 보기 닫기":"본문 미리 보기"} 
          </Button>
          <Button variant="outlined" onClick={handleSubmit}>
            저장
          </Button>
        </Grid>
      </>
    );
}