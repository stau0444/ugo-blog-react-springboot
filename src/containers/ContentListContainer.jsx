import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentList from "../components/ContentList";
import { getContentListStart, getContentListSuccess, getContentListFail, handlePageNum } from '../redux/moduels/contentList';
import {contents } from "../sampleData";

export default function ContentListContainer({category}) {
    const dispatch = useDispatch();
    const contentList = useSelector(state => state.contentList);
    const totalCount = useSelector(state => state.contentList.totalCount);
    const page = useSelector(state => state.contentList.page);
    
    const handlePageChange = (page) => {
        dispatch(handlePageNum(page));
    };

    
    useEffect(()=>{
        const getContentList= () => {
          async function getContentList(){
              try{
                dispatch(getContentListStart())
                const data = contents;
                // const data = await axios.get(`/contents?keyword=${keyword?keyword:""}&page=${page}`);  
                console.log('데이터 요청')
                dispatch(getContentListSuccess(data,category,page,totalCount));      
              }catch(error){
                  dispatch(getContentListFail(error));
              }
          }
          getContentList();
        };
        getContentList();
    },[category,dispatch,page,totalCount])

    return <ContentList totalCount={totalCount} page={page} handlePageChange={handlePageChange} contentList = {contentList}/>;
}