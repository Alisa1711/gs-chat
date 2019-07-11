import React from 'react';
import {avatars} from '../assets/avatars';
import {TopPanel} from '../components/TopPanel';
import {ChatView, Divider, Data} from '../components/ChatView';
import {Input} from '../components/Input';
import {Message, MessageStatus, Link} from '../components/Message';
import {BackPanel} from '../components/BackPanel';
import {ToLast} from '../components/ToLast';
import {Dropdown} from '../components/Dropdown';

export const DropdownPage = () => {
  return (
    <div className="gs-chat">
      <TopPanel/>
      <div className="gs-chat__content">
        <ChatView>
          <Data data="12 дек, вторник"/>
          <Message name="Наталья Ивченко" avatar={avatars[0]}>
            Это сообщение содержит ссылку на<Link href="#" text="Грузчики в СПб | Услуги грузчиков от 177 рублей"/>Адрес ссылки подменяется на
          </Message>
          <Divider/>
          <Message name="Василиса" avatar={avatars[0]} text="Это сообщение содержит ссылку на <Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <Message name="Екатерина зверева" avatar={avatars[2]} text="Это сообщение содержит ссылку на Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <MessageStatus state='unread' text="Непрочитанное сообщение"/>
          <MessageStatus state='loading' text="Сообщение отправляется"/>
          <MessageStatus state='notsent' text="Сообщение не отправлено"/>
        </ChatView>
        <Input/>
        <ToLast/>
        <Dropdown/>
      </div>
    </div>
  );
};