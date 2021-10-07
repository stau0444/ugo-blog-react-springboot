import axios from "axios";
import ContentDetail from "../components/ContentDetail";
import { useEffect } from 'react';
import { getContentDetailFail, getContentDetailSuccess, getContentDetailStart } from '../redux/moduels/contents';
import { useDispatch, useSelector } from 'react-redux';

const tags = [
    {
      id: 0,
      tagName: "JAVA",
    },
    {
      id: 2,
      tagName: "JAVASCIPT",
    },
    {
      id: 3,
      tagName: "JPA",
    },
    {
      id: 4,
      tagName: "SPRING-BOOT",
    },
    {
      id: 5,
      tagName: "JPA",
    },
    {
      id: 6,
      tagName: "REACT",
    },
  ];
const sempleContent = {
  id: 0,
  title : "자바란 무엇인가?",
  createdAt:"2015-12-12",
  tags:[tags[0],tags[1],tags[2]],
  article:"<h2>자바는 블라블라블라</h2>"
}

export default function ContentDetailContainer({match}) {
    const content = useSelector(state=>state.contents);
    const dispatch = useDispatch();

    console.log('content',content)
    
    useEffect(()=>{
      const getContent = () => {
        const contentId = match.params.contentId;
        async function getContent(){
          try{
            dispatch(getContentDetailStart());
            // const resp = await axios.get("/content/"+contentId)
            const resp = sempleContent;
            dispatch(getContentDetailSuccess(resp));
          }catch(error){
            dispatch(getContentDetailFail(error));
          }
        }
        getContent();
      }
      getContent();
    },[match,dispatch])  
    

    
    
  
    
    
    return <ContentDetail match={ match } content = { content }/>;
}