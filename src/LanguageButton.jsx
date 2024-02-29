import './index.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import englishFlag from '/img/english.png'
import spanishFlag from '/img/spanish.png'

function LanguageButton() {
    
    const [t, i18n] = useTranslation('global');
    const [flag, setFlag] = useState(englishFlag)
    const [language, setLanguage] = useState('en')

    const changeLanguage = (lan) => {
        setFlag(lan === 'en' ? spanishFlag : englishFlag);
        setLanguage(language == 'en' ? 'es' : 'en')
        i18n.changeLanguage(lan);
    }
    return (
        <div onClick={() => changeLanguage(language)}
        className="absolute top-12 right-24 border-gray-700 hover:border-gray-500 cursor-pointer duration-[350ms] border-[4px] p-1 rounded-[100%]">
            <img className='h-16 w-16 saturate-[1]' src={flag} alt="" />
        </div>
    );
}

export default LanguageButton;