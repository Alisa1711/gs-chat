import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {BlockedPanel} from '../components/BlockedPanel';
import {TeamsView} from '../components/TeamsView';
import {MoreMembers} from '../components/Member';
import {SentButton} from '../components/SentButton';
import {Chats} from '../components/Chats';
import {Info} from '../components/Info';
import {avatars} from '../assets/avatars';




const items = [
  { avatar: avatars[0], time: "11:23" ,
    title: "28124 — Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в ",
    info: "Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в",
    newMessage: true,
  },
  { avatar: avatars[1], time: "11:23" ,
    title: "28124 — может быть вы найдете дешевле услуги бухгалтера, но вряд ли ваш новый бухгалтер будет понимать специфику оказываемых",
    info: "Сообщение не отправлено",
    unsent: true
  },
  { avatar: avatars[2],
    title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
    info: "Решение вопросов блокировки счета, подготовка документов и т.п."
  },
  { avatar: avatars[3],
    title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
    info: "Решение вопросов блокировки счета, подготовка документов и т.п."},
];



const Members = [
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[2]},
  {name: 'Наталья', avatar: avatars[2]},
];

export const HappyBirthday = () => {
  return (
    <div className="gs-chat">
      <TopPanel state={'static'}/>
      <Info theme="bear" title="С Днем Рождения, Константин!"/>
      <div className="gs-chat__content">
        <Chats blockedMembers={false} info={items}/>
      </div>
      <SentButton size="min"/>
    </div>
  )
};