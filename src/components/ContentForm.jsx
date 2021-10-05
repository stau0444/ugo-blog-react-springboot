import { Button, Grid, Input } from "@mui/material";
import { styled } from '@mui/material/styles';
import MultiSelect from './MultiSelect';
import ReactQuill  from 'react-quill';
import { useRef ,useEffect,useState} from 'react';
import hljs from "highlight.js";

const tagss = [
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
  
const StyledInput = styled(Input)`
  width: 90%;
  text-align: center;
  color:bisque;
  border-bottom:1px solid bisque;
`
export const StyledInputLabel = styled('p')`
  color:bisque;
  font-size: 12px;
  font-weight: 400;
  margin: 15px;
  padding: 3px;
  border-radius:5px;
`



export default function ContentForm({setIsOpen}) {
    const [value, setValue] = useState('');
    const [image , setImage] =useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const [tags ,setTags] = useState([])
    const titleRef = useRef('');
    const imageRef = useRef('');
    const tagsRef =useRef([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
    }

    const handleImageChange = (e)=>{
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        setImage({
        file: file,
        imagePreviewUrl: reader.result
        });
    }

    console.log(file);
    reader.readAsDataURL(file);
    }

    const getTags = () =>{
    return tagss;
    }

    useEffect(()=>{
    console.log('image' , image);
    console.log('tags',tagsRef)
    setTags(getTags());
    },[image,tagsRef])
        
    return(
        <>
            <Grid sx={{textAlign:'center' ,margin:"30px auto"}}>
                <StyledInput ref={titleRef} placeholder="Title" inputProps={{name:'title'}} />
                    <Grid xs={12} sx={{margin:"7px 0" ,}} >
                        <StyledInputLabel>대표 이미지를 업로드 해주세요 </StyledInputLabel>
                    </Grid>
                    <StyledInput ref={imageRef} placeholder="Image" accept="image/*" id="contained-button-file" multiple type="file" inputProps={{name:'image'}} onChange={handleImageChange}/>
                    <img className="imagePreviewUrl" src={image.imagePreviewUrl} alt="imagePreview"/>
                <Grid xs={12} sx={{justifyContent:"center"}}>
                    <MultiSelect tagsRef={tagsRef} tags={tags}/>
                </Grid>
            </Grid>
            <ReactQuill theme="snow"  modules={modules} formats={formats} value={value} onChange={setValue}/>
            <Grid item xs={12} sx={{width:'95%',textAlign:'right'}}>
                <Button variant="outlined" sx={{marginRight:'5px'}} onClick={()=>{setIsOpen(true)}}>본문 미리 보기</Button>  
                <Button variant="outlined">저장</Button>
            </Grid>
        </>
    );
}