import axios from "axios";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentList from "../components/ContentList";
import { getContentListStart, getContentListSuccess, getContentListFail, handlePageNum } from '../redux/moduels/contentList';

export default function ContentListContainer({category}) {
    const dispatch = useDispatch();
    const contentList = useSelector(state => state.contentList);
    const totalCount = useSelector(state => state.contentList.totalCount);
    const page = useSelector(state => state.contentList.page);
    const isOn = useSelector(state => state.nightMode);
    const handlePageChange = (page) => {
        dispatch(handlePageNum(page));
    };

    
    useEffect(()=>{
        const getContentList= () => {
            async function getContentList(){
                try{
                    dispatch(getContentListStart())
                    console.log("리스트 요청")
                    await axios.get(`/api/contents?category=${category?category:""}&page=${page-1}&size=6`)
                    .then(resp => {
                        console.log("리스트 요청 데이터" , resp)
                        dispatch(getContentListSuccess(resp.data.content,category,page,resp.data.totalElements))
                    });
                }catch(error){
                    console.log("리스트 요청 실페" , error)
                    dispatch(getContentListFail(error));
                }
            } 
            getContentList();
        };
        getContentList();
    },[category,dispatch,page,isOn])

    return (
        <ContentList totalCount={totalCount} page={page} handlePageChange={handlePageChange} contentList = {contentList}/>
    )
}