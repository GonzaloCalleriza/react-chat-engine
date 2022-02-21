import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = ({ props }) => {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);  // Keys are the IDs of messages

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index ===0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {
                            isMyMessage ?
                            <MyMessage />
                            :
                            <TheirMessage />
                        }
                    </div>
                    <div className='read-receipts' style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        Read-receipts
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            
        </div>
    );
}

export default ChatFeed;
