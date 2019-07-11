import React, {useState} from 'react';
import {TopPanel} from '../components/TopPanel';
import {BackPanel} from '../components/BackPanel';
import {avatars} from '../assets/avatars';
import {ChatView, Data, Divider} from '../components/ChatView';
import {Link, Message, MessageStatus, Notification} from '../components/Message';
import {Input} from '../components/Input';
import {ToLast} from '../components/ToLast';
import {Questions} from '../components/Questions';

const qustions = [
  {
    text: 'Как понять эффективность рекламы',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
];

export const SupportNewConversation = () => {

  return (
    <div className="gs-chat">
      <TopPanel support={true}/>
      <BackPanel text="Новый разговор"/>
      <div className="gs-chat__content">
        <ChatView>
          <Data data="12 дек, вторник"/>
          <Message name="Наталья Ивченко" avatar={avatars[0]}>
            Это сообщение содержит ссылку на<Link href="#" text="Грузчики в СПб | Услуги грузчиков от 177 рублей"/>Адрес
            ссылки подменяется на
          </Message>
          <Divider/>
          <Message name="Василиса" avatar={avatars[0]}
                   text="Это сообщение содержит ссылку на <Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <Message name="Екатерина зверева" avatar={avatars[2]}
                   text="Это сообщение содержит ссылку на Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <MessageStatus state='unread' text="Непрочитанное сообщение"/>
          <MessageStatus state='loading' text="Сообщение отправляется"/>
          <MessageStatus state='notsent' text="Сообщение не отправлено"/>
          <Notification size="medium" text={<div>
            <div>Дорогой Константин,</div>
            <div>много полезного вы найдете в <span><Link text="Справке." href="#"/></span></div>
          </div>}/>
        </ChatView>
        <Questions data={qustions}/>
        <Input value="Скажите, а какого хрена никто не идет из гугла?"/>
        <ToLast/>
      </div>
    </div>
  );
};