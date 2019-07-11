import React, {useState} from 'react';
import {Error} from '../assets/assets'

export const StatusMessage = () => {
  const [state, setState] = useState(true);

  return (
    <div class={`gs-chat__status-message ${!state ? 'gs-chat__status-message_close' : ''}`}>
      <div className="gs-chat__status-message__icon">
          <Error/>
      </div>
      <div className="gs-chat__status-message__content">
        <div className="gs-chat__status-message__text">Ваше сообщение для поддержки не было отправлено</div>
        <div className="gs-chat__status-message__buttons">
          <button onClick={() => setState(false)} className="gs-chat__status-message__close">Закрыть</button>
          <button className="gs-chat__status-message__action">Отправить еще раз</button>
        </div>
      </div>
    </div>
  );
};