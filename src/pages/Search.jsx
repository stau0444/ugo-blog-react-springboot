import { useDispatch } from "react-redux";
import SearchListContainer from "../containers/SearchListContainer";
import { handlePageNum } from "../redux/moduels/searchList";

export default function Search({match}) {
    const dispatch = useDispatch();
    dispatch(handlePageNum(1))
    return(
        <SearchListContainer keyword={match.params.keyword}/>
    );
}