import ContentForm from "../components/ContentForm";
import { useDispatch, useSelector } from 'react-redux';
import { handleContentValue, resetContentValue } from '../redux/moduels/contentValue';
import { useCallback, useState } from "react";
import {postContentFail, postContentStart, postContentSuccess } from "../redux/moduels/contents";
import {resetContentTags } from "../redux/moduels/contentTags";
import { useHistory } from "react-router";
import AWS from "aws-sdk"
import axios from "axios";


/*
    이미지 선택시 thumbnail 이미지 보여주는 방식 

    1. 파일 인풋에서 이미지 선택시에 업로드 시키고 선택한 이미지 url을 img 태그에 넣어 보여준다.
        - 전체 폼 전송 이전에 이미지 업로드가 일어나 폼 전송 실패시에도 이미지가 업로드될 수 있다.  
        - 비동기 코드 catch 부분에서 문제있을시에 이미지 삭제함수를 호출한다 .
        * 요청이 여러번 일어난다. 

    2. 이미지 선택시  FileReadr를 통해 이미지를 보여준다 . 전체폼 전송시 성공시에 이미지를 전송한다.
*/

//s3 이미지 업로드 함수
export const uploadToS3 = (image) =>{
    const upload = new AWS.S3.ManagedUpload({
        params:{
            Bucket : 'ugo-blog-image-bucket',
            Key : image.file.name,
            Body: image.file,
        },
    })
    const promise = upload.promise()
    promise.then(
        function (data) {
             console.log("S3 업로드 성공");
        },
        function (error) {
             console.log("S3 업로드 오류 발생 ", error.message);
        }
    )        
}
export const inputsNullCheck = (data) =>{
    if(data.title === ''){
      alert("제목을 입력해주세요");
      return true;
    }else if(data.imageUrl === ''){
      alert("썸네일 이미지를 선택해주세요");
      return true;
    }else if(data.article === ''){
      alert("글 내용을 입력해주세요");
      return true;
    }else if(data.tags.length === 0){
      alert("관련 태그를 선택해 주세요");
      return true;
    }
  }

export default function ContentFormContainer({isOpen,setIsOpen}) {
    
    const [image , setImage] = useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const [title , setTitle] = useState('');
    const [description,setDescription] = useState('');
    const userId = useSelector(state => state.login.userInfo.id)
    const value = useSelector(state => state.contentValue);
    const tags = useSelector(state => state.contentTags);
    const history = useHistory();
    const dispatch = useDispatch();
    
    //이미지 관리 함수
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
    
    // title 관리 함수
    const hadleTitleValue = useCallback((e) =>{
        setTitle(e.target.value);
    },[setTitle]);

    // 에디터 value 관리 함수
    const hadleContentValue = useCallback( (e) =>{
        dispatch(handleContentValue(e))
    },[dispatch]);

    const hadleDescriptionValue = useCallback( (e) =>{
        setDescription(e.target.value)
    },[setDescription]);

    
    //인풋 초기화 함수
    const resetInputValues = () =>{
        dispatch(resetContentValue());
        dispatch(resetContentTags());
        setImage({file:null,imagePreviewUrl:'/logo_transparent.png'})
    }

    //post 요청 함수
    const handleSubmit = (e) => {
        async function postContent(){
            //DB에 저장되는 데이터
            const postData = {
                    title: title,
                    imageUrl: `https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/${image.file.name}`,
                    article: value,
                    tags: tags,
                    description:description,
                    userId:userId
            };

            try{
                const hasNull =inputsNullCheck(postData);
                if(hasNull){
                    return;
                }
                dispatch(postContentStart())
                //응답 데이터 
                // const resp = postData;
                const resp = await axios.post("/api/content",postData);
                dispatch(postContentSuccess(resp));
                uploadToS3(image);
                resetInputValues();
                history.push('/')
            }catch(error){
                console.log("add content error ",error.response);
                dispatch(postContentFail(error))
                if(error.response.status === 403){
                    alert("관리자만이 글을 작성할 수 있습니다. 홈페이지로 돌아갑니다.")
                    history.push("/");
                }
            }
        }
        postContent();
    };
    
    return (
      <ContentForm
        hadleContentValue={hadleContentValue}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        hadleTitleValue={hadleTitleValue}
        hadleDescriptionValue={hadleDescriptionValue}
        image={image}
        title={title}
        value={value}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
}