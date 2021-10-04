//function getContent(id)
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

const content = {
    id: 0,
    title : "자바란 무엇인가?",
    imgLink : "../IMG_1708.JPG",
    article : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est tempora ea assumenda numquam, laudantium pariatur cum optio quisquam? Voluptatem nesciunt nulla consequuntur doloribus officia cum ullam assumenda enim incidunt sunt. ",
    tags:[tags[0],tags[1],tags[2]]
}
export default function ContentDetail() {
    console.log(content)
    return(
        <div>
            <ContentCard content={content}/>
        </div>
    );
}