import { useDispatch } from "react-redux";
import SearchListContainer from "../containers/SearchListContainer";
import { handlePageNum } from "../redux/moduels/searchList";
import Footer from '../components/common/Footer';

export default function Search({match,location}) {
    const dispatch = useDispatch();
    dispatch(handlePageNum(1))
    return(      
        <>
            <SearchListContainer keyword={match.params.keyword}/>
            <Footer/>
        </>
    );
}