import React from 'react';
import {Error} from '../assets/assets';


export const ErrorView = () => {
  return (
    <div class="gs-chat__error-view">
      <div class="gs-chat__error-view__inner">
        <div class="gs-chat__error-view__icon">
          <Error/>
        </div>
        <div className="gs-chat__error-view__text">
          Совпадений не найдено
        </div>
      </div>
    </div>
  );
};