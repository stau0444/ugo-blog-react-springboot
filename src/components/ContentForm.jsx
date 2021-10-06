import { Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import MultiSelect from './MultiSelect';
import ReactQuill  from 'react-quill';
import hljs from "highlight.js";

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
export const StyledInputLabel = styled('p')`
  color:bisque;
  font-size: 12px;
  font-weight: 400;
  margin: 15px;
  padding: 3px;
  border-radius:5px;
`

export default function ContentForm({setIsOpen,titleRef,hadleContentValue,handleSubmit,handleImageChange,image,value}) {
    return(
        <>
            <Grid item sx={{textAlign:'center' ,margin:"30px auto"}}>
                <StyledInput ref={titleRef} placeholder="Title" type='text' />
                    <Grid item xs={12} sx={{margin:"7px 0" ,}} >
                        <StyledInputLabel>대표 이미지를 업로드 해주세요 </StyledInputLabel>
                    </Grid>
                    <StyledInput  placeholder="Image" accept="image/*" id="contained-button-file" multiple type="file"  onChange={handleImageChange}/>
                    <img className="imagePreviewUrl" src={image.imagePreviewUrl} alt="imagePreview"/>
                <Grid item xs={12} sx={{justifyContent:"center"}}>
                    <MultiSelect  tags={tagList}/>
                </Grid>
            </Grid>
            <ReactQuill theme="snow"  modules={modules} formats={formats} value={value} onChange={hadleContentValue}/>
            <Grid item xs={12} sx={{width:'95%',textAlign:'right'}}>
                <Button variant="outlined" sx={{marginRight:'5px'}} onClick={()=>{setIsOpen(true)}}>본문 미리 보기</Button>  
                <Button variant="outlined" onClick={handleSubmit}>저장</Button>
            </Grid>
        </>
    );
}