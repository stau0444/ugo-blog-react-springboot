import TextEditor from '../components/content/TextEditor';

export default function UpdateContent() {
    return (
    <>
        <div className="text-editor">
            <TextEditor isUpdate={true}/>
        </div>
    </>
    );
}