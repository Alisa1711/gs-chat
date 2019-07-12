import React from 'react';
import {avatars} from '../assets/avatars';
import {TopPanel} from '../components/TopPanel';
import {ChatView, Divider, Data} from '../components/ChatView';
import {Input} from '../components/Input';
import {Message, MessageStatus, Link, ImageMessage, FileMessage, Notification} from '../components/Message';
import {BackPanel} from '../components/BackPanel';
import {ToLast} from '../components/ToLast';
import {DatePanel} from '../components/DatePanel';

const Members = [
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Екатерина', avatar: avatars[1]},
  {name: 'Наталья', avatar: avatars[2]},
];


export const CommonChat = () => {
  return (
    <div className="gs-chat">
      <TopPanel state='static' newChat={true} chat={true}/>
      <BackPanel memberSize="min" members={Members} state='static' text="Общий чат" avatar={avatars[2]}/>
      <DatePanel text="12 дек, вторник"/>
      <div className="gs-chat__content">
        <ChatView>
          <Data data="12 дек, вторник"/>
          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]}>
            Здравствуйте, Анатолий.
            <br/>
            <p>
            Некоторые думают, что если отчет подается раз в месяц, то и работа бухгалтера проводится раз в месяц. У бухгалтера помимо подготовки декларации, есть еще формирование 1С базы по поступлениям и реализации, кассовая дисциплина по вашей выписке, все данные берутся из вашей системы бухгалтером самостоятельно каждый месяц и переносятся в 1С, с разносом по статьям дебета/кредита. Договором предусмотрена формулировка "услуг бухгалтера по подготовке и сдаче ежеквартальной отчетности юридического лица или ИП Франчайзи", пункт 3.3. Более подробных сведений мы вам предоставить не можем, так как договором все действия не конкретизируются, а не потому что мы не хотим :) Это громадный комплекс мер, направленных на то, чтобы к вам не было вопросов у контролирующих органов. В данную услугу входит решение вопросов,
            </p>
            <p>
            общение с налоговым органом, фондами (социального страх, пенсионный, статистики), банком, системой подачи эл отчетности за любой период работы вашего ИП/ООО. Решение вопросов блокировки счета, подготовка документов и т.п. Расчет и подготовка СЗВМ отчетов в случае необходимости, также проводится на ежемесячной основе. Поэтому услуга оказывается на постоянной основе на основе абонентской платы, и пропущенных месяцев платежа быть не должно. Все наши услуги (роялти, смс, бухгалтерия) являются абонентскими. Формулировка договора 3.3. Франчайзи уплачивает Грузчиков-Сервис ежемесячную плату 5 000 (пять тысяч) руб.00 копеек. В нее входит оплата услуг бухгалтера по подготовке и сдаче ежеквартальной отчетности юридического лица или ИП Франчайзи. Данная сумма может быть изменена Грузчиков-Сервис в одностороннем порядке, но не более чем на 20 (Двадцать)% в год путем направления Франчайзи уведомления.</p>
          </Message>
          <Message date="11:30" position='right'>
            Идейные соображения высшего порядка, а <Link href="#" text="Грузчики в СПб | Услуги грузчиков от 177 рублей"/> также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка.
          </Message>
          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]} imageMessage={<ImageMessage loading={true}/>}/>
          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]} imageMessage={<ImageMessage loaded={true} src={avatars[2]}/>}/>
          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]} fileMessage={<FileMessage filename="filename.zip"/>}/>

          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]}>
            <Link href="#" text="Грузчики в СПб | Услуги грузчиков от 177 рублей"/>
            <div>spb.gruzchik-online.ru</div>
          </Message>
          <Data data="Сегодня"/>

          <Message date="11:30" name="Наталья Ивченко" avatar={avatars[0]}>
            Это сообщение содержит ссылку на<Link href="#" text="Грузчики в СПб | Услуги грузчиков от 177 рублей"/>Адрес ссылки подменяется на
          </Message>
          <Divider/>
          <Message date="11:30" name="Василиса" avatar={avatars[0]} text="Это сообщение содержит ссылку на <Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <Message date="11:30" name="Екатерина зверева" avatar={avatars[2]} text="Это сообщение содержит ссылку на Грузчики в СПб | Услуги грузчиков от 177 рублей. Адрес ссылки подменяется на"/>
          <MessageStatus date="11:30" state='unread' text="Непрочитанное сообщение"/>
          <MessageStatus state='loading' text="Сообщение отправляется"/>
          <MessageStatus state='notsent' text="Сообщение не отправлено"/>
          <Message name="Василиса" avatar={avatars[0]} typing={true} />
          <Notification questions={true} text={<div>
            <div>Вы довольны полученным ответом?</div>
            <div>Это анонимный опрос, чтобы повысить качество
            консультаций.</div>
          </div>}/>
        </ChatView>
        <Input/>
        <ToLast/>
      </div>
    </div>
  );
};
