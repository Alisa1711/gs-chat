import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {BlockedPanel} from '../components/BlockedPanel';
import {Chats} from '../components/Chats';
import {avatars} from '../assets/avatars';
import {ToLast} from '../components/ToLast';

const items = [
  { avatar: avatars[0], time: "11:23" , title: "Общий чат", info: "Решение вопросов блокировки счета, подготовка"},
  { avatar: avatars[1], time: "11:23" , title: "Общий чат", info: "Решение вопросов блокировки счета, подготовка"},
  { avatar: avatars[2], title: "Алиса Пахомова"},
  { avatar: avatars[3], title: "Екатерина Зверева"},
];

export const Chat = () => {

  return (
    <div className="gs-chat">
      <TopPanel chat={true} newChat={true} state={'static'}/>
      <div className="gs-chat__content">
        <Chats info={items}/>
      </div>
      <BlockedPanel/>
    </div>
  )
};