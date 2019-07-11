import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {BackPanel} from '../components/BackPanel';
import {ChatView, Data, Divider} from '../components/ChatView';
import {Link, Message, MessageStatus, Notification} from '../components/Message';
import {avatars} from '../assets/avatars';
import {Questions} from '../components/Questions';
import {Input} from '../components/Input';
import {ToLast} from '../components/ToLast';


const qustions = [
  {
    text: 'Как понять эффективность рекламы',
    link: '#',
  },
  {
    text: 'Черный список исполнителей',
    link: '#',
  },
];

export const SupportConversation = () => {
  return (
    <div className="gs-chat">
      <TopPanel support={true}/>
      <BackPanel text="28124 — Здравствуйте, подскажите, пожалуйста, как я..."/>
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
          <Notification text={<div>
              <span>Вы довольны полученным ответом?</span>
              <span>Это анонимный опрос, чтобы повысить качество
            консультаций.</span>
          </div>}/>
        </ChatView>
        <Input value="Скажите, а какого хрена никто не идет из гугла?"/>
        <ToLast/>
      </div>
    </div>
  );
};