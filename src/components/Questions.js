import React, {useState} from 'react';
import {Question as Icon, Points} from '../assets/assets';

export const Questions = ({data}) => {
  const [questionOpen, setQuestionOpen] = useState(false);

  return (
    <div
      class={`gs-chat__questions ${questionOpen ? `gs-chat__questions_open` : ''} ${!questionOpen ? `gs-chat__questions_close` : ''}`}>
      <div class="gs-chat__questions__title">
        Подходящие вопросы
      </div>
      <div class="gs-chat__questions__list">
        {data.map((({text, link}) => {
          return (
            <div className="gs-chat__questions__question">
              <div class="gs-chat__questions__question-icon">
                <Icon/>
              </div>
              <a href={link} className="gs-chat__questions__question-text">{text}</a>
            </div>
          );
        }))}
        <div className="gs-chat__questions__question">
          <div className="gs-chat__questions__question-more">
            <div className="gs-chat__questions__question-icon">
              <Points/>
            </div>
            <a onClick={(e) => {
              e.preventDefault();
              console.log(e);
              setQuestionOpen(!questionOpen);
            }} href="#" className="gs-chat__questions__question-text"> Еще 4</a>
          </div>
        </div>
      </div>
    </div>
  );
};

