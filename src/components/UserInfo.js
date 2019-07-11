import React from 'react';

export const UserInfo = ({url, name, job, tel, email}) => {
  return (
    <div class="gs-chat__user-info">
      <div class="gs-chat__user-info__avatar">
        <img src={url} alt=""/>
      </div>
      <div class="gs-chat__user-info__descr">
        <div class="gs-chat__user-info__name">
          {name}
        </div>
        <div class="gs-chat__user-info__job">{job}</div>
        <a href="tel:000" class="gs-chat__user-info__tel">{tel}</a>
        <a href="mailto:test@mail.ru" class="gs-chat__user-info__email">{email}</a>
      </div>
    </div>
  );
};