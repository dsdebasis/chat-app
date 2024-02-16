
import useGetConversations from "../../hooks/useGetConversations"
import Conversation from './Conversation.jsx';
const Conversations = () => {
  const { loading, conversations } = useGetConversations()
  
  return (
    <div className='mt-5 p-2 flex flex-col overflow-auto text-yellow-50'>
     {conversations.map((conversation,idx) => (
        (<Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={idx === conversations.length - 1}
        />)
      ))}
      {loading?<span className='loading loading-spinner'></span> :null}
    </div>
  )
}

export default Conversations;
