import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentList from "../components/ContentList";
import { getContentListStart, getContentListSuccess, getContentListFail } from '../redux/moduels/contentList';
import {contents } from "../sampleData";

export default function ContentListContainer({keyword}) {
    const dispatch = useDispatch();
    const contentList = useSelector(state => state.contentList);
    
    useEffect(()=>{
        const getContentList= () => {
          async function getContentList(){
              try{
                  dispatch(getContentListStart());
                  const data = contents;
                  setTimeout(()=>{
                    dispatch(getContentListSuccess(data,keyword));
                  },3000)
                  // const data = await axios.get(`/content/`+keyword);
              }catch(error){
                  dispatch(getContentListFail(error));
              }
          }
          getContentList();
        };
        getContentList();
    },[keyword,dispatch])

    
    

    return <ContentList contentList = {contentList}/>;
}