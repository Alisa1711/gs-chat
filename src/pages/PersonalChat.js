import React from 'react';
import {avatars} from '../assets/avatars';
import {TopPanel} from '../components/TopPanel';
import {ChatView, Divider, Data} from '../components/ChatView';
import {Input} from '../components/Input';
import {Message, MessageStatus, Link} from '../components/Message';
import {BackPanel} from '../components/BackPanel';
import {ToLast} from '../components/ToLast';

export const PersonalChat = () => {
  return (
    <div className="gs-chat gs-chat_clapped">
      <TopPanel newChat={true} chat={true}/>
      <BackPanel text="Общий чат" avatar={avatars[2]}/>
      <div className="gs-chat__content">
      </div>
    </div>
  );
};