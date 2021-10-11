import ContentForm from "../components/ContentForm";
import { useDispatch, useSelector } from 'react-redux';
import { handleContentValue, resetContentValue } from '../redux/moduels/contentValue';
import { useCallback, useRef, useState } from "react";
import { postContentFail, postContentStart, postContentSuccess } from "../redux/moduels/contents";
import { resetContentTags } from "../redux/moduels/contentTags";
import AWS from "aws-sdk"
import { useHistory } from "react-router";


/*
    이미지 선택시 thumbnail 이미지 보여주는 방식 

    1. 파일 인풋에서 이미지 선택시에 업로드 시키고 선택한 이미지 url을 img 태그에 넣어 보여준다.
        - 전체 폼 전송 이전에 이미지 업로드가 일어나 폼 전송 실패시에도 이미지가 업로드될 수 있다.  
        - 비동기 코드 catch 부분에서 문제있을시에 이미지 삭제함수를 호출한다 .
        * 요청이 여러번 일어난다. 

    2. 이미지 선택시  FileReadr를 통해 이미지를 보여준다 . 전체폼 전송시 성공시에 이미지를 전송한다.
*/


export default function ContentFormContainer({isOpen, isUpdate,setIsOpen}) {
    
    const [image , setImage] =useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const titleRef = useRef('');
    const value = useSelector(state => state.contentValue);
    const tags = useSelector(state => state.contentTags);
    const history = useHistory();
    const dispatch = useDispatch();
    
    //AWS  config

    AWS.config.update({
        region:'ap-northeast-2',
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId:'ap-northeast-2:f4eab593-5f5f-4e47-8b60-a45049ed7a5d',
        })
    })
    
    //S3 이미지 삭제 함수
    // const deleteImageFromS3 = (fileName) =>{
    //     new AWS.S3().deleteObject({
    //         Bucket: 'ugo-blog-image-bucket',
    //         Key: fileName 
    //       },(err, data) => {
    //         if (err) { console.log(err) ; throw err; }
    //         console.log('s3 deleteObject ', data)
    //       })
    // }

    // 에디터 value 관리 함수
    const hadleContentValue = useCallback( (e) =>{
        dispatch(handleContentValue(e))
    },[dispatch]);

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

    //post 요청 함수
    const handleSubmit = useCallback((e) => {
        async function postContent(){
            //s3 이미지 업로드 함수
            const uploadToS3 = () =>{
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
                        return console.log("S3 업로드 성공");
                    },
                    function (error) {
                        return console.log("S3 업로드 오류 발생 ", error.message);
                    }
                )        
            }
            //인풋 초기화 함수
            const resetInputValues = () =>{
                dispatch(resetContentValue());
                dispatch(resetContentTags());
                setImage({file:null,imagePreviewUrl:'/logo_transparent.png'})
            }
            
            //DB에 저장되는 데이터
            const postData = {
                    title: titleRef.current.value,
                    imageUrl: `https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/${image.file.name}`,
                    content: value,
                    tags: tags,
            };

            try{
                dispatch(postContentStart())
                //응답 데이터 
                const resp = postData;
                // const resp = await axios.post("www.naver.com",data);
                dispatch(postContentSuccess(resp));
                uploadToS3();
                resetInputValues();
                history.push('/')
            }catch(error){
                dispatch(postContentFail(error))
            }
        }
        postContent();
    },[dispatch,titleRef,image,value,tags,history]);
    
    return (
      <ContentForm
        hadleContentValue={hadleContentValue}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        image={image}
        value={value}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    );
}