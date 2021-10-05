import { Grid } from "@mui/material";
import ContentCard from './ContentCard';

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
    imgLink : "IMG_1708.JPG",
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
    tags:[tags[0],tags[1],tags[2]]
  },
  {

    id: 1,
    title : "자바 스크립트 무엇인가?",
    imgLink : "IMG_1708.JPG",
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
    tags:[tags[0],tags[1],tags[2]]
  },
  {

    id: 2,
    title : "JPA란 무엇인가?",
    imgLink : "IMG_1708.JPG",
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
    tags:[tags[0],tags[1],tags[2]]
  },
  {

    id: 3,
    title : "REACT란 무엇인가?",
    imgLink : "IMG_1708.JPG",
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
    tags:[tags[0],tags[1],tags[2]]
  }
] 

export default function ContentList() {
    return(
        <>
          <Grid container sx={{width:"100%" ,margin:"0 auto" , padding:0}}>
            {contents.map((content)=>
              <Grid item xs={24}>
                <ContentCard content = {content}/>
              </Grid>
            )}
          </Grid>
        </>
    );
}