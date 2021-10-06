import ContentForm from "../components/ContentForm";
import { useDispatch, useSelector } from 'react-redux';
import { handleContentValue, resetContentValue } from '../redux/moduels/contentValue';
import { useCallback, useRef, useState } from "react";
import { postContentFail, postContentStart, postContentSuccess } from "../redux/moduels/contents";
import { resetContentTags } from "../redux/moduels/contentTags";

export default function ContentFormContainer({setIsOpen}) {
    const [image , setImage] =useState({file:null,imagePreviewUrl:'/logo_transparent.png'})
    const titleRef = useRef('');
    const value = useSelector(state => state.contentValue);
    const tags = useSelector(state => state.contentTags);

    const dispatch = useDispatch();

    // 에디터 value 관리 함수
    const hadleContentValue = (e) =>{
        dispatch(handleContentValue(e))
    };

    //이미지 관리 함수
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
        reader.readAsDataURL(file);
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
      <ContentForm
        hadleContentValue={hadleContentValue}
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        image={image}
        value={value}
        setIsOpen={setIsOpen}
      />
    );
}