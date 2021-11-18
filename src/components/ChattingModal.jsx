import '../Chat.scss';
import {ChatEngine} from 'react-chat-engine';

export default function ChattingModal() {
    return(
        <ChatEngine
            style
            height="70vh"
            projectID="efceb88f-d825-4c90-99de-9d5dbb1dcd4a"
            userName="UGO"
            userSecret="12345"
        />
    );
}
