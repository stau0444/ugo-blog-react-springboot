import { useDispatch } from 'react-redux';
import ContentListContainer from '../containers/ContentListContainer';
import {resetContentListState } from '../redux/moduels/contentList';

export default function Home({match,location}) {
    let category = match.params.category;
    console.log('location',location)
    if(category === undefined){
        category = '';
    }
    const dispatch = useDispatch();
    // dispatch(handlePageNum(1))
    dispatch(resetContentListState());
    return<ContentListContainer category = {category}/> ;
}