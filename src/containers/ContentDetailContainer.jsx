import ContentDetail from "../components/ContentDetail";
import { useEffect } from 'react';
import { getContentDetailFail, getContentDetailSuccess, getContentDetailStart } from '../redux/moduels/contents';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { tagList } from "../sampleData";



export const sempleContent = {
  id: 0,
  title : "고양이는 cat 강아지는 dog",
  createdAt:"2015-12-12",
  tags:[tagList[0],tagList[3],tagList[2]],
  article:"<p>asdddd</p>",
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

    const dispatch = useDispatch();
    
    // GET /content/contentId API 요청
    useEffect(()=>{
      getContent(dispatch,match.params.contentId);
    },[match,dispatch])  

    return <ContentDetail loading = {loading} match={ match } content = { content }/>;
}