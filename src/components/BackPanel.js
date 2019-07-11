import {Arrow} from '../assets/assets';
import React, {useState} from 'react';
import {Member} from './Member';

export const BackPanel = ({state, size, text, avatar, children, onClick, members, memberSize}) => {
  const [fullHeader, setFullHeader] = useState(false);

  return (
    <a onClick={() => {
      if (typeof onClick === 'function') onClick();
      setFullHeader(!fullHeader);
    }}
       className={`gs-chat__back-panel ${fullHeader && 'gs-chat__back-panel_fullheader'} gs-chat__back-panel_${state} gs-chat__back-panel_size-${size}`}>
      <div className="gs-chat__back-panel__icon"><Arrow/></div>
      {avatar && <div className="gs-chat__back-panel__avatar">
        <img src={avatar} alt=""/>
      </div>}
      <div className="gs-chat__back-panel__text">{text || children}</div>

      <div class="gs-chat__back-panel__full">
        <div className="gs-chat__back-panel__icon"><Arrow/></div>
        <div className="gs-chat__back-panel__full__members">
          { members && members.map(({name, avatar}, i, array) => {
            return (
              <div className="gs-chat__back-panel__full__member">
                <Member size={memberSize} src={avatar} name={name}/>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
};
