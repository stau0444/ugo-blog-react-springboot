
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from "react";
import {putContentFail, putContentStart, putContentSuccess } from "../redux/moduels/contents";
import { useHistory } from "react-router";
import ContentUpdateForm from '../components/ContentUpdateForm';
import { inputsNullCheck, uploadToS3 } from './ContentFormContainer';
import axios from 'axios';


export default function ContentUpdateFormContainer({isOpen,isUpdate,setIsOpen}) {
    const [image , setImage] = useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const [title , setTitle] = useState('');
    const [value , setValue] = useState('');
    const [description,setDescription] = useState('');

    const tags = useSelector(state => state.contentTags);
    const history = useHistory();
    const dispatch = useDispatch();
    const content = useSelector(state => state.contents);
    useEffect(()=>{ 
      const getData = () => {
             setImage({file:null,imagePreviewUrl:content.imageUrl});
             setTitle(content.title);
             setValue(content.article);
             setDescription(content.description)
      }
      return getData();
    },[dispatch,content.imageUrl,content.title,content.article,content.description])
    
    // title 관리 함수
    const hadleTitleValue = useCallback((e) =>{
      setTitle(e.target.value);
    },[setTitle]);


    // 에디터 value 관리 함수
    const hadleContentValue = useCallback((e) =>{
        setValue(e);
    },[setValue]);

    //이미지 관리 함수
    const handleImageChange =  (e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    };

    const hadleDescriptionValue = useCallback( (e) =>{
      setDescription(e.target.value)
    },[setDescription]);


    //post 요청 함수
    const handleSubmit = useCallback((e) => {
        async function updateContent(){
            //DB에 저장되는 데이터
            const putData = {
                title: title,
                imageUrl: image.file?`https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/${image.file.name}`:content.imageUrl ,
                description:description,
                article: value,
                tags: tags,
            };
            console.log('putData',putData)
            try{
                const hasNull = inputsNullCheck(putData);
                if(hasNull){
                  return;
                }
                dispatch(putContentStart())
                const resp = axios.put(`/api/content/${content.id}`,putData)
                dispatch(putContentSuccess(resp));
                if(image.file){
                  uploadToS3(image);
                }
                history.replace("/")
            }catch(error){
              console.log("updateFail")
              console.log("updateError" , error.response)
                dispatch(putContentFail(error))
            }
        }
        updateContent();
    },[dispatch,title,image,value,tags,history,description,content.imageUrl,content.id]);
    
    return (
      <ContentUpdateForm
        hadleContentValue={hadleContentValue}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        hadleTitleValue={hadleTitleValue}
        hadleDescriptionValue={hadleDescriptionValue}
        description={description}
        image={image}
        title={title}
        value={value}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
}