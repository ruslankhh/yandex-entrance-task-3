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
  let valueIndex = 0;

  return (strings, ...values) => {
    const newStrings = strings.map((string, i) => {
      const regexp = /\s?{(.*?)}/g;

      if (~string.search(regexp)) {
        const value = values[valueIndex];
        const replacer = (match, substr) => {
          const titles = substr.split(', ');
          const titleIndex = pluralRule(Math.abs(value));

          const title = titles[titleIndex] || titles[0] || '';

          return `${value} ${title}`;
        };
        
        valueIndex++;

        return string.replace(regexp, replacer);
      }

      return string;
    });

    return newStrings.join('');
  }
}
