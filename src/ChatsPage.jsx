import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic('cb2d511b-8a98-4ec5-89f4-7c1a79b91701',props.user.username,props.user.secret)
    return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
    )
}

export default ChatsPage;