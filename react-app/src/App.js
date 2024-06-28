import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { formatDate } from './utils/formatDate';
import { formatNumber } from './utils/formatNumber';
import { getLocaleFromUrl } from './utils/changeLocale';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [dateFormat, setDateFormat] = useState('one');
  const [numberValue, setNumberValue] = useState();

  useEffect(() => {
    const locale = getLocaleFromUrl();
    i18n.changeLanguage(locale);
  }, [i18n]);

  const handleLocaleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    window.location.hash = selectedLanguage;
  };

  const handleDateChange = (e) => {
    const selectedFormat = e.target.value;
    setDateFormat(selectedFormat);
  }

  return (
    <div className="app">
      <h1 className="title">{t('translation.welcome')}</h1>
      <div className="control-group">
        <select className="select" value={i18n.language} onChange={handleLocaleChange}>
          <option value="en">English</option>
          <option value="ua">Ukrainian</option>
          <option value="fr">French</option>
        </select>
        <div>
          <label htmlFor="multiOptions" className=''>{t('translation.label')}</label>
          <select className="select" name="multiOptions" id='multiOptions' onChange={handleDateChange}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
            <option value="four">four</option>
          </select>
        </div>
      </div>
      <div className="date">{t('translation.numberFormat', { value: formatDate(new Date(), dateFormat) })}</div>
      <input
        className="input"
        placeholder={t('translation.placeholder')}
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
      />
      {numberValue && <div className="formatted-number">{formatNumber(numberValue, dateFormat)}</div>}
      <div className="units">{t('translation.units')}</div>
      <div className="unit">{t('translation.unit.length', { value: 12 })}</div>
      <div className="unit">{t('translation.unit.weight', { value: 24 })}</div>
      <div className="unit">{t('translation.unit.volume', { value: 36 })}</div>
    </div>
  );
}

export default App;
