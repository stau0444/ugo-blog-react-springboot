import { useDispatch } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import SearchListContainer from "../containers/SearchListContainer";
import { handlePageNum } from "../redux/moduels/searchList";

export default function Search({match,location}) {
    const dispatch = useDispatch();
    dispatch(handlePageNum(1))
    return(
            <PageTransition location={location} match={match}>
                <SearchListContainer keyword={match.params.keyword}/>
                <Footer/>
            </PageTransition>
    );
}