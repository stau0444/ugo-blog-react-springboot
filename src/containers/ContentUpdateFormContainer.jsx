
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from "react";
import {postContentFail, postContentStart, postContentSuccess } from "../redux/moduels/contents";
import { useHistory } from "react-router";
import ContentUpdateForm from '../components/ContentUpdateForm';
import { inputsNullCheck, uploadToS3 } from './ContentFormContainer';




/*
  update 함수 
  -본문 미리보기시에 컴포넌트가 초기화되어  이전에 작성한 input의 value 가  사라짐
  - 컨텐츠 이외의 인풋들을 모으고 다음단계에서 컨텐츠를 작성한 후 한번에 전송하는 방식으로 바꾼다. 
  - 컴포넌트를 다시 랜더하는 것이아니라 css display만 none으로 하는 방식으로 바꾼다.
*/
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
    const handleImageChange = useCallback((e)=>{
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    },[]);

    const hadleDescriptionValue = useCallback( (e) =>{
      setDescription(e.target.value)
    },[setDescription]);


    //post 요청 함수
    const handleSubmit = useCallback((e) => {
        async function postContent(){
            //DB에 저장되는 데이터
            const putData = {
                title: title,
                imageUrl: image.file?image.imagePreviewUrl:content.imageUrl ,
                description:description,
                article: value,
                tags: tags,
            };
            try{
                const hasNull = inputsNullCheck(putData);
                if(hasNull){
                  return;
                }
                dispatch(postContentStart())
                //put 요청 전송 데이터 
                const resp = putData;
                console.log(resp);
                // const resp = await axios.put("www.naver.com",data);
                dispatch(postContentSuccess(resp));
                if(image.file){
                  setImage({file:null,imagePreviewUrl: `https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/${image.file.name}`})
                  uploadToS3(image);
                }
                // resetInputValues();
                history.push('/')
            }catch(error){
                dispatch(postContentFail(error))
            }
        }
        postContent();
    },[dispatch,title,image,value,tags,history,description,content.imageUrl]);
    
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