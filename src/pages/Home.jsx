import { useDispatch } from 'react-redux';
import ContentListContainer from '../containers/ContentListContainer';
import {resetContentListState } from '../redux/moduels/contentList';

export default function Home({match}) {
    let category = match.params.category;
    
    if(category === undefined){
        category = '';
    }
    const dispatch = useDispatch();
    // dispatch(handlePageNum(1))
    dispatch(resetContentListState());
    return<ContentListContainer category = {category}/> ;
}