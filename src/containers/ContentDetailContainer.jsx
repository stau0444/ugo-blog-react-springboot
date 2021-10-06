import ContentDetail from "../components/ContentDetail";




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


export default function ContentDetailContainer({match}) {
    const content = {
        id: 0,
        title : "자바란 무엇인가?",
        createdAt:"2015-12-12",
        tags:[tags[0],tags[1],tags[2]],
        article:"<h2>자바는 블라블라블라</h2>"
    }
    return <ContentDetail content = { content }/>;
}