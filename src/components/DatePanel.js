import React from 'react';

export const DatePanel = ({text}) => {

  return (
    <div class="gs-chat__date-panel">
      <div className="gs-chat__date-panel__inner">
        {text}
      </div>
    </div>
  )
};