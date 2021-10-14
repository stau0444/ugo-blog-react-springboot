import {useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentList from "../components/ContentList";
import { getContentListStart, getContentListSuccess, getContentListFail } from '../redux/moduels/contentList';
import {contents } from "../sampleData";

export default function ContentListContainer({category}) {
    const dispatch = useDispatch();
    const contentList = useSelector(state => state.contentList);
    const totalCount = useSelector(state => state.contentList.totalCount);
    const [page,setPage] = useState(1);
    
    const handlePageChange = useCallback((page) => {
        setPage(page);
    },[]);
    
    useEffect(()=>{
        const getContentList= () => {
          async function getContentList(){
              try{
                dispatch(getContentListStart());
                const data = contents;
                const totalCount = 40;
                // const data = await axios.get(`/contents?keyword=${keyword?keyword:""}&page=${page}`);  
                setTimeout(()=>{
                    dispatch(getContentListSuccess(data,category,page,totalCount));      
                },3000)

              }catch(error){
                  dispatch(getContentListFail(error));
              }
          }
          getContentList();
        };
        getContentList();
    },[category,dispatch,page])

    
    

    return <ContentList totalCount={totalCount} page={page} handlePageChange={handlePageChange} contentList = {contentList}/>;
}