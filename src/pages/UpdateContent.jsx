import ContentFormUpdateContainer from "../containers/ContentFormUpdateContainer";

export default function UpdateContent() {
    const isUpdate = true ;
    return <ContentFormUpdateContainer isUpdate={isUpdate} setIsOpen={()=>{alert('열림')}}/>;
}