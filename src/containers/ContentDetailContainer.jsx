import ContentDetail from "../components/ContentDetail";
import { useEffect } from 'react';
import { getContentDetailFail, getContentDetailSuccess, getContentDetailStart, deleteContentStart, deleteContentSuccess, deleteContentFail } from '../redux/moduels/contents';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import axios from "axios";


export const getContent = (dispatch,contentId) => {
  async function getContent(){
    try{
      dispatch(getContentDetailStart());
      delete axios.defaults.headers.common['Authorization'];
      const resp = await axios.get("/api/content/"+contentId)
      dispatch(getContentDetailSuccess(resp.data));
    }catch(error){
      console.log('get detail Error',error.response)
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
    //컨텐츠 삭제 함수
    const deleteContent = (contentId) =>{
      async function deleteContent(){
        try{
          dispatch(deleteContentStart());
          const isDelete = window.confirm("삭제하시겠습니까?");
          if(isDelete){
            await axios.delete("/api/content/"+contentId)
            const resp = contentId + "컨텐츠 삭제됨"
            dispatch(deleteContentSuccess(resp));
            history.push("/");
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

    return (
      <ContentDetail
        deleteContent={deleteContent}
        loading={loading}
        match={match}
        content={content}
      />
    );
}