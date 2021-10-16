import { useEffect, useRef, useState } from "react";

export default function TestContainer({content}) {
    const titleRef = useRef('');
    const imgRef = useRef(null);
    const [image , setImage] = useState({file:null,imagePreviewUrl:""})
    
    //text highlight 함수
    // const highlightedText = (text, query) => {
    //     if (query !== '' && text.includes(query)) {
    //       const parts = text.split(new RegExp(`(${query})`, 'gi'));      
    //       console.log('parts' , parts)
    //       return (
    //         <>
    //           {parts.map((part, index) =>
    //             part.toLowerCase() === query.toLowerCase() ? (
    //               <mark key={index}>{part}</mark>
    //             ) : (
    //               part
    //             ),
    //           )}
    //         </>
    //       );
    //     }
    //     return text;
    //   };
     //이미지 관리 함수
     const handleImageChange = (e)=>{
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        
        reader.onloadend = () => {
            setImage({
            file: file,
            imagePreviewUrl: url
            });
        }
        reader.readAsDataURL(file);
        fillImageFile();

    }
    const fillImageFile = () => { 
        imgRef.current.files.item(1,image.file)
        console.log('2',imgRef.current.files[0]);
    }

    useEffect(()=>{
        titleRef.current.value = content.title
    })
    return(
    <div>
        <input ref = {titleRef} type="text" />
        <input type="file"  onChange={handleImageChange}/>
        <input ref = {imgRef} type="file"/>
        {image.imagePreviewUrl}
        <img width = '100px'src={image.imagePreviewUrl} alt="" />
        
        test Container
    </div>
    );
}