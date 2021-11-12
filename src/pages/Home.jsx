import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import ContentListContainer from '../containers/ContentListContainer';
import {resetContentListState } from '../redux/moduels/contentList';

export default function Home({match,location}) {
    let category = match.params.category;
    
    if(category === undefined){
        category = '';
    }
    const dispatch = useDispatch();
    dispatch(resetContentListState());
    return(
        <>
            <ContentListContainer category = {category}/> 
            <Footer/>
        </>
        );    
}