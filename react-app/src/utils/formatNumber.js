import i18n from 'i18next';

export function formatNumber(num, formatType) {
  let number = parseInt(num);
  const formats = {
    one: new Intl.NumberFormat(i18n.language).format(number),
    two: new Intl.NumberFormat(i18n.language, { style: 'currency', currency: 'USD' }).format(number),
    three: new Intl.NumberFormat(i18n.language, { maximumSignificantDigits: 1 }).format(number),
    four: new Intl.NumberFormat(i18n.language, { notation: 'scientific' }).format(number)
  };

  return formats[formatType];
}
