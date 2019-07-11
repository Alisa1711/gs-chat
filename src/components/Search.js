import React from 'react';
import {Search as Icon, Cross} from '../assets/assets';

export const Search = ({state, value, placeholder, children}) => {
  return (
    <div className={`gs-chat__search gs-chat__search_${state}`}>
      <div className="gs-chat__search__input">
        <input value={value} placeholder={placeholder} type="text"/>
      </div>
      <div className="gs-chat__search__icon">{state === 'empty' ? <Cross/> : <Icon/>}</div>
    </div>
  );
};