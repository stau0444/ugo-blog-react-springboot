import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import SearchList from "../components/SearchList";
import { getSearchListFail, getSearchListStart, getSearchListSuccess, handlePageNum } from "../redux/moduels/searchList";
import {contents} from '../sampleData'


export default function SearchListContainer({keyword}) {
    const dispatch = useDispatch();
    const searchList = useSelector(state => state.searchList);
    const totalCount = useSelector(state => state.searchList.totalCount);
    const page = useSelector(state => state.searchList.page);


    const handlePageChange = (page) => {
        dispatch(handlePageNum(page))
    };

    useEffect(()=>{
      // if(searchList.keyword !== keyword){
      //   dispatch(handlePageNum(1))
      // }
      const getSearchList= () => {
        async function getSearchList(){
            try{
              dispatch(getSearchListStart());
              const data = contents;
              const totalCount = 30;
              console.log("data 요청")
              // const data = await axios.get(`/contents?keyword=${keyword?keyword:""}&page=${page}`);  
              if(data.length === 0){
                throw new Error(keyword+"로 검색된 결과가 없습니다.")
              }
              dispatch(getSearchListSuccess(data,keyword,page,totalCount));      
            }catch(error){
                dispatch(getSearchListFail(error));
            }
        }
        getSearchList();
      };
      getSearchList();
  },[keyword,dispatch,page])
    return (
      <SearchList
        keyword={keyword}
        totalCount={totalCount}
        page={page}
        searchList={searchList}
        handlePageChange={handlePageChange}
      />
    );
}