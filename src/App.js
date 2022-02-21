import React from 'react';
import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID='14ee195f-9ca5-4e56-938c-06c8350aaee0'
            userName='Gonzlo'
            userSecret='123456'
            renderChatFeed={(chatAppProps) => 
                <ChatFeed {...chatAppProps} />}
        >
            
        </ChatEngine>
    );
}

export default App;
