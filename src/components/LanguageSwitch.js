import React from 'react';
import swal from 'sweetalert';

import { useDispatch } from 'react-redux';
import { switchJapanese, switchEnglish, switchFarsi } from '../util/languageSlice';

const LanguageSwitch = () => {
  const dispatch = useDispatch();

  return(
  <div className='navigation__language'>
    <div className='navigation__language__container'>
      <button className='navigation__language__dropbtn'>
        <svg>
          <use href="#languageSVG" />
        </svg>
      </button>
      <div id='languageDropdown' className='navigation__language__dropdown'>
        <a onClick={function() {
          dispatch(switchEnglish());
        }} id='englishLanguage'>
          <svg>
            <use href="#gbSVG" />
          </svg>
        </a>
        <a onClick={function() {
          dispatch(switchFarsi());
        }} id='farsiLanguage'>
          <svg>
            <use href="#irSVG" />
          </svg>
        </a>
        <a onClick={function() {
          dispatch(switchJapanese());
          swal('申し訳ありませんが、日本語はまだ開発中です. 私は日本語を勉強しています');
        }} id='japaneseLanguage'>
          <svg>
            <use href="#jpSVG" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  );
};

export default LanguageSwitch;