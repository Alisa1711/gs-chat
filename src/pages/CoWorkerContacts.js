import React from 'react';
import {avatars} from '../assets/avatars';
import {TopPanel} from '../components/TopPanel';
import {UserInfo} from '../components/UserInfo';
import {BlockedPanel} from '../components/BlockedPanel';
import {BackPanel} from '../components/BackPanel';

export const CoWorkerContacts = () => {

  return (
    <div className="gs-chat">
      <TopPanel newChat={true} chat={true}/>
      <BackPanel size="min"/>
      <div className="gs-chat__content">
        <UserInfo email="mail@mfdfdfdf.ru"
                  tel="+7 911 775 63 17"
                  job="Менеджер"
                  name="Константин Константинопольский"
                  url={avatars[1]}/>
      </div>
    </div>
  );
};