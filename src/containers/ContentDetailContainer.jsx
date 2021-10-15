import ContentDetail from "../components/ContentDetail";
import { useEffect } from 'react';
import { getContentDetailFail, getContentDetailSuccess, getContentDetailStart, deleteContentStart, deleteContentSuccess, deleteContentFail } from '../redux/moduels/contents';
import { useDispatch, useSelector } from 'react-redux';
import { tagList } from "../sampleData";
import { useHistory } from "react-router";



export const sempleContent = {
  id: 0,
  title : "고양이는 cat 강아지는 dog",
  createdAt:"2015-12-12",
  tags:[tagList[0],tagList[3],tagList[2]],
  article:"<p>asdddd</p>",
  description:"description12333",
  imageUrl: "https://ugo-blog-image-bucket.s3.ap-northeast-2.amazonaws.com/등기부등본(건물).jpeg"
}

export const getContent = (dispatch,contentId) => {
  async function getContent(){
    try{
      dispatch(getContentDetailStart());
      // const resp = await axios.get("/content/"+contentId)
      const resp = sempleContent;
      setTimeout(()=>{
        dispatch(getContentDetailSuccess(resp));
      },3000);
    }catch(error){
      dispatch(getContentDetailFail(error));
    }
  }
  getContent();
}

export default function ContentDetailContainer({match}) {
    const content = useSelector(state=>state.contents);
    const loading = useSelector(state=>state.contents.loading);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(()=>{
      console.log('contentDetail' , content)
    })
    //컨텐츠 삭제 함수
    const deleteContent = (contentId) =>{
      async function deleteContent(){
        try{
          dispatch(deleteContentStart());
          // setTimeout(()=>{
          // },3000);
          // const resp = await axios.delete("/content/"+contentId)
          const isDelete = window.confirm("삭제하시겠습니까?");
          if(isDelete){
            const resp = contentId + "컨텐츠 삭제됨"
            dispatch(deleteContentSuccess(resp));
            history.push("/");
            console.log('after delete', content)
          }
          return;
        }catch(error){
          dispatch(deleteContentFail(error));
        }
      }
      deleteContent();
    }

    // GET /content/contentId API 요청
    useEffect(()=>{
      getContent(dispatch,match.params.contentId);
    },[match,dispatch])  

    return <ContentDetail deleteContent={deleteContent} loading = {loading} match={ match } content = { content }/>;
}