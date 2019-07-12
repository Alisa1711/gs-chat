import React from 'react';
import {Send} from '../assets/assets';

export const SentButton = ({state, mod, size, parent, disabled, onClick}) => {
  return (
    <div class={`gs-chat__sent-button gs-chat__sent-button--${mod} gs-chat__sent-button_parent-${parent} gs-chat__sent-button_size-${size}`}>
      <button onClick={onClick} disabled={disabled}>
        <Send/>
      </button>
    </div>
  );
};
