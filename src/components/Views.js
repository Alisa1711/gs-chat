import React from 'react';

export const Views = ({children}) => {
  return (
    <div class="gs-chat__views">
      {children}
    </div>
  );
};

export const View = ({children, state}) => {
  return (
    <div className={`gs-chat__view gs-chat__view_${state}`}>
      {children}
    </div>
  );
};