import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
// import PageTransition from "../components/PageTransition";
import SearchListContainer from "../containers/SearchListContainer";
import { handlePageNum } from "../redux/moduels/searchList";

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