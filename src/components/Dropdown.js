import React from 'react';
import {File, FileLoader,Error} from '../assets/assets';

export const Dropdown = ({state}) => {
  return (
    <div className={`gs-chat__dropdown gs-chat__dropdown_state-${state}`}>
      <div className="gs-chat__dropdown__inner">
        <div className="gs-chat__dropdown__center">
          <div class="gs-chat__dropdown__icon">
            <div className="gs-chat__dropdown__icon-file">
              <File/>
            </div>
            <div className="gs-chat__dropdown__icon-loader">
              <FileLoader/>
            </div>
            <div className="gs-chat__dropdown__icon-error">
              <Error/>
            </div>
          </div>
          <div class="gs-chat__dropdown__text">
            Отпустите файлы, чтобы <br/> их отправить
          </div>
          <div class="gs-chat__dropdown__text-error">Пожалуйста, отправляйте <br/> не более 10 файлов за раз, <br/> весом не более 5 МБ каждый</div>
        </div>
        <div className="gs-chat__dropdown__bottom">Макисмум 10 файлов за раз, весом не более 5 МБ каждый</div>
      </div>
    </div>
  );

};