import MessageComponent from "../component/MessageComponent.tsx";

type Message={
    id: string;
    text:string;
};

type Props = {
    messages:Message[];
}

function Messages(props:Props){
    
    const messages= props.messages;
    return(
       messages.map( (messages:Message) => <MessageComponent text={messages.text}/> )
    )
}
export default Messages;