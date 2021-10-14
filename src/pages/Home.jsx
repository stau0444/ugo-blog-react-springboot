import ContentListContainer from '../containers/ContentListContainer';

export default function Home({match}) {
    let category = match.params.category;
    if(category === undefined){
        category = '';
    }
    return(
        <>
            <ContentListContainer category = {category}/>
        </>
    );
}