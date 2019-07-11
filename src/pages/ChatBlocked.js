import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {BackPanel} from '../components/BackPanel';
import {Chats} from '../components/Chats';
import {avatars} from '../assets/avatars';

const items = [
  {
    avatar: avatars[0],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[2],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[3],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[4],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[1],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[4],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[4],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[1],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[5],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[5],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
  {
    avatar: avatars[6],
    blocked: true,
    time: '11:23',
    title: 'Общий чат',
    info: 'Решение вопросов блокировки счета, подготовка',
  },
];

export const ChatBlocked = () => {
  return (
    <div className="gs-chat gs-chat_blocked">
      <TopPanel state='static' chat={true}/>
      <BackPanel state='static' text="Заблокированые"/>
      <div className="gs-chat__content">
        <Chats info={items}/>
      </div>
    </div>
  );
};