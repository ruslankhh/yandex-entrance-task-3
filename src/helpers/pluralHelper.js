// Plural Helper
// Source: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html

const getPluralRule = (lang) => {
  const pluralRules = [
    (n) => 0,
    (n) => Number(n !== 1),
    (n) => Number(n > 1),
    (n) =>
      n % 10 === 1 && n % 100 !== 11 ? 0 :
      n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2
  ];

  switch (lang) {
    case 'ru':
      return pluralRules[3];

    default:
      return pluralRules[0];
  }
};

export const createPluralTemplate = (lang, titles) => {
  const pluralRule = getPluralRule(lang);

  return (strings, ...values) => {
    const filteredStrings = strings[0] === '' ? strings.slice(1) : strings;
    const newStrings = filteredStrings.map((string, i) => {
      const replacer = (match, substr) => {
        const titles = substr.split(', ');
        const titleIndex = pluralRule(Math.abs(values[i]));

        return titles[titleIndex] || titles[0] || '';
      };

      return string.replace(/\s?{(.*?)}/g, replacer);
    });

    return values.map((value, i) => `${values[i]} ${newStrings[i]}`).join('');
  }
}
