import React from 'react';
import {SentButton} from './SentButton';

import {Attach, Send} from '../assets/assets';

export const Input = ({value}) => {
  return (
    <div class="gs-chat__input">
      <textarea value={value} placeholder="Ваше сообщение" rows="1">{value}</textarea>
      <div class="gs-chat__input__icons">
        <button className="gs-chat__input__attach"><Attach/></button>
        {value ? <SentButton position="absolute" parent="input" size="min"/> :
          <SentButton parent="input" size="nano" disabled="true"/>}
      </div>
    </div>
  );
};
