import React from 'react';
import {TopPanel} from '../components/TopPanel';
import {Search} from '../components/Search';
import {SentButton} from '../components/SentButton';
import {ErrorView} from '../components/ErrorView';

export const SearchEmtyState = () => {
  return (
    <div className="gs-chat">
      <TopPanel support={true} state={'static'}/>
      <Search value="2323" state="empty" placeholder="Введите любое слово, номер вопроса или дату"/>
      <div className="gs-chat__content">
        <ErrorView/>
      </div>
      <SentButton size="min"/>
    </div>
  );
};
