import React from 'react';
import {Loader, NotSent, Error, Success, File, FileMin} from '../assets/assets';

export const Message = ({children, avatar, name, text, date, position, fileMessage, imageMessage, typing}) => {
  return (
    <div
      class={`gs-chat__message gs-chat__message_position-${position} ${typing && `gs-chat__message_typing`} ${fileMessage && `gs-chat__message_type-file`} ${imageMessage && `gs-chat__message_type-image`}`}>
      <div class="gs-chat__message__top">
        <div class="gs-chat__message__avatar">
          <img src={avatar} alt=""/>
        </div>
        <div class="gs-chat__message__name">
          {name}
        </div>
      </div>
      <div className="gs-chat__message__text">
        {typing && <div className="gs-chat__message__dots"></div>}
        {text || imageMessage || fileMessage || children}
        <div className="gs-chat__message__date">
          {date}
        </div>
      </div>
    </div>
  );
};

export const MessageStatus = ({state, text, date, children}) => {
  return (
    <div class={`gs-chat__message__status ${state === 'notsent' && `gs-chat__message__status_notsent`}`}>
      {text || children}
      <div class="gs-chat__message__status-icon">
        {state === 'unread' && <div class="gs-chat__message__status-icon-unread"/>}
        {state === 'loading' && <div class="gs-chat__message__status-icon_loader">

        </div>}
        {state === 'notsent' && <div class="gs-chat__message__status-icon_notsent"><NotSent/></div>}
      </div>
      <div class="gs-chat__message__status-date">{date}</div>
    </div>
  );
};

export const FileMessage = ({filename}) => {
  return (
    <div class="gs-chat__file-message">
      <div className="gs-chat__file-message__icon">
        <FileMin/>
      </div>
      <div className="gs-chat__file-message__text">
        {filename}
      </div>
    </div>
  );
};

export const ImageMessage = ({loading, loaded, src}) => {
  return (
    <div
      class={`gs-chat__image-message ${loaded && `gs-chat__image-message_loaded`} ${loading && `gs-chat__image-message_loading`}`}>
      <div className="gs-chat__image-message__inner">
        <div className="gs-chat__image-message__loader">
        </div>
        <div className="gs-chat__image-message__img">
          <img src={src} alt=""/>
        </div>
      </div>
    </div>
  );
};

export const Link = ({text, href}) => {
  return (
    <span class="gs-chat__message__link">
      <a href={href}>{text}</a>
    </span>
  );
};

export const Notification = ({text, size, questions}) => {
  return (
    <div class={`gs-chat__message__notification ${size && `gs-chat__message__notification_${size}`}`}>
      <div className="gs-chat__message__notification-info">
        <p className="gs-chat__message__notification-text">
          {text}
        </p>
      </div>
      {questions && <div className="gs-chat__message__notification-buttons">
        <button className="gs-chat__message__notification-no"><Error/><span>Нет</span></button>
        <button className="gs-chat__message__notification-yes"><Success/><span>Да</span></button>
      </div>}
    </div>
  );
};
