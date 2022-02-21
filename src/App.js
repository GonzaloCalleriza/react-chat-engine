import React from 'react';
import {ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height='100vh'
            projectID='14ee195f-9ca5-4e56-938c-06c8350aaee0'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => 
                <ChatFeed {...chatAppProps} />}
        >
            
        </ChatEngine>
    );
}

export default App;
