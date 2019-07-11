import React from 'react';

export const Info = ({title, theme}) => {
  return (
    <div className={`gs-chat__info gs-chat__info_theme-${theme}`}>
      <div className="gs-chat__info__title">
        {title}
      </div>
    </div>
  );
};