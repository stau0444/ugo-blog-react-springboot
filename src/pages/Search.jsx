import SearchListContainer from "../containers/SearchListContainer";

export default function Search({match}) {
    return(
        <SearchListContainer keyword={match.params.keyword}/>
    );
}