import Footer from '../components/Footer';
import ContentListContainer from '../containers/ContentListContainer';

export default function Home({match,location}) {
    let category = match.params.category;
    if(category === undefined){
        category = '';
    }

    return(
        <>
            <ContentListContainer category = {category}/> 
            <Footer/>
        </>
        );    
}