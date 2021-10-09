import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentList from "../components/ContentList";
import { getContentListStart, getContentListSuccess, getContentListFail } from '../redux/moduels/contentList';


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
  
  const contents = [
    {
  
      id: 0,
      title : "자바란 무엇인가?",
      imgLink : "/IMG_1708.JPG",
      article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
      tags:[tags[0],tags[1],tags[2]]
    },
    {
  
      id: 1,
      title : "자바 스크립트 무엇인가?",
      imgLink : "/IMG_1708.JPG",
      article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam,"
                +"laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus "
                +"officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
      tags:[tags[0],tags[1],tags[2]]
    },
    {
  
      id: 2,
      title : "JPA란 무엇인가?",
      imgLink : "/IMG_1708.JPG",
      article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
      tags:[tags[0],tags[1],tags[2]]
    },
    {
  
      id: 3,
      title : "REACT란 무엇인가?",
      imgLink : "/IMG_1708.JPG",
      article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
      tags:[tags[0],tags[1],tags[2]]
    }
  ] 
  

export default function ContentListContainer({keyword}) {
    const dispatch = useDispatch();
    const contentList = useSelector(state => state.contentList);
    
    useEffect(()=>{
        const getContentList= () => {
          async function getContentList(){
              try{
                  dispatch(getContentListStart());
                  const data = contents;
                  setTimeout(()=>{
                    dispatch(getContentListSuccess(data,keyword));
                  },3000)
                  // const data = await axios.get(`/content/`+keyword);
              }catch(error){
                  dispatch(getContentListFail(error));
              }
          }
          getContentList();
        };
        getContentList();
    },[keyword,dispatch])

    
    

    return <ContentList contentList = {contentList}/>;
}