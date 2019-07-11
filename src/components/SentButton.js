import React from 'react';
import {Send} from '../assets/assets';

export const SentButton = ({state, size, parent, onClick}) => {
  return (
    <div class={`gs-chat__sent-button gs-chat__sent-button_parent-${parent} gs-chat__sent-button_size-${size}`}>
      <button onClick={onClick}>
        <Send/>
      </button>
      <span>Нажмите, чтобы начать разговор</span>
    </div>
  );
};
