import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {BlockedPanel} from '../components/BlockedPanel';
import {TeamsView} from '../components/TeamsView';
import {Chats} from '../components/Chats';
import {Search} from '../components/Search';
import {avatars} from '../assets/avatars';
import {SentButton} from '../components/SentButton';


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
    info: "Решение вопросов блокировки счета, подготовка документов и т.п."},,
  { avatar: avatars[3],
    title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
    info: "Решение вопросов блокировки счета, подготовка документов и т.п."},,
  { avatar: avatars[3],
    title: "28124 — Некоторые думают, что если отчет подается раз в месяц",
    info: "Решение вопросов блокировки счета, подготовка документов и т.п."},
];

export const SupportListScrollUp = () => {
  return (
    <div className="gs-chat">
      <TopPanel support={true} state={'static'}/>
      <Search placeholder="Введите любое слово, номер вопроса или дату"/>
      <div className="gs-chat__content">
        <Chats blockedMembers={false} info={items}/>
      </div>
      <SentButton size="min"/>
    </div>
  )
};

