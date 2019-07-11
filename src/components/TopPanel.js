import React, {useState} from 'react';
import {SupportUnactive, SupportActive, ChatActive, ChatUnactive, Sound, Mute} from '../assets/assets';

export const TopPanel = ({state, support, chat, newChat, newSupport, mute}) => {
  const [sound, setSound] = useState(mute);

  return (
    <div
      class={`gs-chat__top-panel 
       ${newSupport && `gs-chat__top-panel_new-support`}
       ${newChat && `gs-chat__top-panel_new-chat`} 
       ${chat && `gs-chat__top-panel_chat`} 
       ${support && `gs-chat__top-panel_support`} 
       ${'gs-chat__top-panel_' + state}`}>
      <div class="gs-chat__tabs">
        <div class="gs-chat__tab gs-chat__tab-support">
          <div className="gs-chat__tab-icon">
            <SupportUnactive/>
            <SupportActive/>
          </div>
          <span>Поддержка</span>
        </div>
        <div class="gs-chat__tab gs-chat__tab-chat">
          <div className="gs-chat__tab-icon">
            <ChatUnactive/>
            <ChatActive/>
          </div>
          <span>Чат</span>
        </div>
      </div>
      <div class="gs-chat__top-panel-sound" onClick={() => setSound(!sound)}>
        {sound ? <Mute/> : <Sound/>}
      </div>
    </div>
  );
};