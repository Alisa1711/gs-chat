import React, {useState} from 'react';
import {TopPanel} from '../components/TopPanel';
import {TeamsView} from '../components/TeamsView';
import {SentButton} from '../components/SentButton';
import {MoreMembers} from '../components/Member';
import {Views, View} from '../components/Views';
import {avatars} from '../assets/avatars';
import {BackPanel} from '../components/BackPanel';
import {ChatView, Data, Divider} from '../components/ChatView';
import {Link, Message, MessageStatus} from '../components/Message';
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
const Members = [
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[2]},
  {name: 'Наталья', avatar: avatars[1]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Константин', avatar: avatars[2]},
  {name: 'Дима', avatar: avatars[1]},
  {name: 'Константин', avatar: avatars[2]},
];


export const SupportEmtyState = () => {
  const [state, setState] = useState(false); // for example
  const [firstView, setFirstView] = useState('');
  const [secondView, setSecondView] = useState('');

  const SlideIn = () => {
    setFirstView('slide-right');
    setSecondView('slide-right-second');
  };

  const SlideOut = () => {
    setFirstView('slide-left');
    setSecondView('slide-left-second');
  };

  return (
    <Views>
      <View state={firstView}>
        <div className="gs-chat">
          <TopPanel state="static" support={true}/>
          <div className="gs-chat__content">
            <TeamsView moreMembers={<MoreMembers count={5}/>}
                       sentButton={<SentButton onClick={SlideOut} mod="animation" parent="teamsview" size="big"/>}
                       members={Members} title="Константин, доброе утро" subtitle="Команда отвечает в течении часа"
                       buttonTip={<span>Нажмите, чтобы начать разговор</span>}/>
          </div>
        </div>
      </View>

      <View state={secondView}>
        <div className="gs-chat">
          <TopPanel support={true}/>
          <BackPanel onClick={SlideIn} text="Новый разговор"/>
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
            </ChatView>
            <Questions data={qustions}/>
            <Input value="Скажите, а какого хрена никто не идет из гугла?"/>
            <ToLast/>
          </div>
        </div>
      </View>
    </Views>
  );
};
