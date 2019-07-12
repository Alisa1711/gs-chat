import React from 'react';
import {Member, MoreMembers} from './Member';
import {avatars} from '../assets/avatars';

export const TeamsView = ({state, members, memberSize, moreMembers, title, subtitle, sentButton, buttonTip, children}) => {
  return (
    <div class={`gs-chat__teams-view gs-chat__teams-view_${state}`}>
      <div class="gs-chat__teams-view__title">{title}</div>
      <div class="gs-chat__teams-view__subtitle">{subtitle}</div>
      <div className="gs-chat__teams-view__list">
        {members.map(({name, avatar}, i, array) => {
          return (
            <div className="gs-chat__teams-view__member">
              <Member size={memberSize} src={avatar} name={name}/>
            </div>
          );
        })}
        <div className="gs-chat__teams-view__member">
          {moreMembers}
        </div>
      </div>
      <div class="gs-chat__teams-view__sent">
        {sentButton}
        {buttonTip}
      </div>
    </div>
  );
};
