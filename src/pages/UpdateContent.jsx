import TextEditor from '../components/TextEditor';

export default function UpdateContent() {
    return (
    <>
        <div className="text-editor">
            <TextEditor isUpdate={true}/>
        </div>
    </>
    );
}