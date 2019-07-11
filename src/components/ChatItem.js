import React, {useState} from 'react';
import {Trash} from '../assets/assets';

export const ChatItem = ({avatar, title, info, time, newMessage, unsent, blocked, alignItem}) => {
  const [stateMessage, setStateMessage] = useState('');
  if (newMessage) setStateMessage('gs-chat__chat-item_new');
  if (unsent) setStateMessage('gs-chat__chat-item_notsent');

  return (
    <div
      class={`gs-chat__chat-item ${stateMessage} ${alignItem && `gs-chat__chat-item_align-${alignItem}`} ${blocked && `gs-chat__chat-item_blocked`}`}>
      <a href="#" class="gs-chat__chat-item__avatar">
        <img src={avatar} alt="avatar"/>
      </a>
      <div class="gs-chat__chat-item__descr-wrapper">
        <div class="gs-chat__chat-item__descr">
          <div class="gs-chat__chat-item__title">
            <span>{title}</span>
          </div>
          <div class="gs-chat__chat-item__info">{info}</div>
        </div>
        <div class="gs-chat__chat-item__time">{time}</div>
        <div class="gs-chat__chat-item__trash"><Trash/></div>
      </div>
    </div>
  );
};
