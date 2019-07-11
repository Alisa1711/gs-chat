import React from 'react';

export const Divider = ({text = 'Новые сообщения'}) => {
  return (
      <div class="gs-chat__chat-view__divider">
        <div className="gs-chat__chat-view__divider__inner">
          <span> {text}</span>
        </div>
      </div>
  )
};

export const Data = ({data}) => {
  return (
    <div class="gs-chat__chat-view__data">
      {data}
    </div>
  )
};

export const ChatView = ({children}) => {

  return (
    <div class="gs-chat__chat-view">
      <div className="gs-chat__chat-view__loader">

      </div>
      {children}
    </div>
  )
};
