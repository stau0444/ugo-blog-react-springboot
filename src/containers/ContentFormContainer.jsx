import ContentForm from "../components/ContentForm";
import { useDispatch, useSelector } from 'react-redux';
import { handleContentValue, resetContentValue } from '../redux/moduels/contentValue';
import { useCallback, useRef, useState } from "react";
import { postContentFail, postContentStart, postContentSuccess } from "../redux/moduels/contents";
import { resetContentTags } from "../redux/moduels/contentTags";
import AWS from "aws-sdk"

export default function ContentFormContainer({isOpen, isUpdate,setIsOpen}) {
    
    const [image , setImage] =useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const titleRef = useRef('');
    const value = useSelector(state => state.contentValue);
    const tags = useSelector(state => state.contentTags);

    const dispatch = useDispatch();
    

    AWS.config.update({
        region:'ap-northeast-2',
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:'ap-northeast-2:f4eab593-5f5f-4e47-8b60-a45049ed7a5d',
        })
    })
    

    // 에디터 value 관리 함수
    const hadleContentValue = (e) =>{
        dispatch(handleContentValue(e))
    };

    //이미지 관리 함수
    const handleImageChange = (e)=>{

        let reader = new FileReader();
        let file = e.target.files[0];

        console.log('file' , file);
        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);

        const upload = new AWS.S3.ManagedUpload({
            params:{
                Bucket : 'ugo-blog-image-bucket',
                Key : file.name,
                Body: file ,
            },
        })
        /*
            버킷에 저장되는 이름
            https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/
            %E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB
            %E1%84%89%E1%85%A3%E1%86%BA+2021-06-12+%E1%84%8B%E1%85%A9%E1%84%
            92%E1%85%AE+8.42.12.png
            
            decodeURI() 로 디코딩 할 수 있다.  

            1. 저장 버튼 누를 때 S3 upload 함수가 실행되도록한다 . 
            2. 함수가 실행될때 마지막에 위의 형태고 파일명을 encodeURI 해서 DB에 저장한다 . 
            3. 불러올때 해당 링크를 이미지 링크로 사용한다.

        */


        console.log('file.name' , file.name)
        const promise = upload.promise()

        promise.then(
            function (data) {
                alert("S3에 이미지 업로드 됨")
            },
            function (error) {
                return alert("S3 업로드 오류 발생 " , error.message)
            }
        )        
    }

    

    //post 요청 함수
    const handleSubmit = useCallback((e) => {
        async function postContent(){
            //인풋 초기화 함수
            const resetInputValues = () =>{
                dispatch(resetContentValue());
                dispatch(resetContentTags());
                setImage({file:null,imagePreviewUrl:'/logo_transparent.png'})
            }

            const data = {
                    title: titleRef.current.value,
                    image: image,
                    content: value,
                    tags: tags,
            };
            console.log('data' , data);
            try{
                dispatch(postContentStart())
                const resp = data;
                // const resp = await axios.post("www.naver.com",data);
                dispatch(postContentSuccess(resp));
                resetInputValues();
            }catch(error){
                dispatch(postContentFail(error))
            }
        }
        postContent();
    },[dispatch,titleRef,image,value,tags]);
    
    return (
    <>
      <ContentForm
        hadleContentValue={hadleContentValue}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        image={image}
        value={value}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      </>
    );
}