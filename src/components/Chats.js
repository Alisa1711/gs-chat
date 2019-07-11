import React, {useState} from 'react';
import {ChatItem} from './ChatItem';

export const Chats = ({blockedMembers, info, top, alignItem}) => {

  return (
    <div class="gs-chat__chats">
      {top}
      {info.map((item) => {
        return (
          <ChatItem alignItem={alignItem} {...item}/>
        );
      })}
      {blockedMembers && <div className="gs-chat__chats__blocked">
        Заблокированные сотрудники
      </div>}
    </div>
  );
};