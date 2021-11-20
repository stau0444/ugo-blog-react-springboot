// import '../Chat.scss';
import { ChatEngine } from 'react-chat-engine';
import { useSelector } from 'react-redux';


export default function ChattingModal() {
    const user = useSelector(state=>state.login.userInfo);
    return <ChatEngine
            projectID='efceb88f-d825-4c90-99de-9d5dbb1dcd4a'
            userName={user.username}
            userSecret='asdasd12'
        />
}
