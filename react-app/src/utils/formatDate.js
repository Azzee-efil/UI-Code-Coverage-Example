import i18n from 'i18next';

export const formatDate = (date, formatKey) => {
  const dateObj = new Date(date);

  const formats = {
    one: new Intl.DateTimeFormat(i18n.language, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(dateObj),
    two: new Intl.DateTimeFormat(i18n.language, { day: '2-digit', month: 'long', year: 'numeric' }).format(dateObj),
    three: new Intl.DateTimeFormat(i18n.language, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(dateObj),
    four: new Intl.DateTimeFormat(i18n.language, { hour: 'numeric', minute: 'numeric' }).format(dateObj)
  };

  return formats[formatKey];
};
