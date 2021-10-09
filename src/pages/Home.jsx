import ContentListContainer from '../containers/ContentListContainer';

export default function Home({match}) {
    let keyword = match.params.keyword;
    
    if(keyword === undefined){
        keyword = '';
    }
    return(
        <>
        <ContentListContainer keyword = {keyword}/>
        </>
    );
}