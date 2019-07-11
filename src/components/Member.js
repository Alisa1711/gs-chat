import React from 'react';

export const Member = ({src, name, size}) => {
  return (
    <div class={`gs-chat__member gs-chat__member_size-${size}`}>
      <a href="#" class="gs-chat__member__avatar">
        <img src={src} alt=""/>
      </a>
      <div class="gs-chat__member__name">
        {name}
      </div>
    </div>
  );
};

export const MoreMembers = ({count}) => {
  return (
    <button class="gs-chat__member-more">
      +{count}
    </button>
  )
};
