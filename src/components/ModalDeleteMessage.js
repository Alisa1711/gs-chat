import React from 'react';
import {avatars} from '../assets/avatars';

export const ModalDeleteMessage = () => {
  return (
    <div class="gs-chat__modal-delete-message">
      <div className="gs-chat__modal-delete-message__inner">
        <div className="gs-chat__modal-delete-message__top">
          <div className="gs-chat__modal-delete-message__avatar">
            <img src={avatars[2]} alt=""/>
          </div>
          <div className="gs-chat__modal-delete-message__name">Александр Пушкин</div>
        </div>
        <div className="gs-chat__modal-delete-message__text">
          Удалить всю переписку?
        </div>
        <div className="gs-chat__modal-delete-message__descr">
          Ее нельзя будет восстановить
        </div>
        <div className="gs-chat__modal-delete-message__buttons">
          <button className="gs-chat__modal-delete-message__button">Отменить</button>
          <button className="gs-chat__modal-delete-message__button">Удалить</button>
        </div>
      </div>
    </div>
  );
};