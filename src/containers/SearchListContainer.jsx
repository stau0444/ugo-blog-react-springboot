import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import SearchList from "../components/SearchList";
import { getSearchListFail, getSearchListStart, getSearchListSuccess, handlePageNum } from "../redux/moduels/searchList";


export default function SearchListContainer({keyword}) {
    const dispatch = useDispatch();
    const searchList = useSelector(state => state.searchList);
    const totalCount = useSelector(state => state.searchList.totalCount);
    const page = useSelector(state => state.searchList.page);


    const handlePageChange = (page) => {
        dispatch(handlePageNum(page))
    };

    useEffect(()=>{
      const getSearchList= () => {
        async function getSearchList(){
            try{
              dispatch(getSearchListStart());
              const resp = await axios.get(`/api/content/search?keyword=${keyword?keyword:""}&page=${page-1}&size=6`);  
              if(resp.data.length === 0){
                throw new Error(keyword+"로 검색된 결과가 없습니다.")
              }
              dispatch(getSearchListSuccess(resp.data.content,keyword,page,resp.data.totalElements));      
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