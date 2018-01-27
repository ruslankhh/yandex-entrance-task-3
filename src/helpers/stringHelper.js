export const roomCapacityTemplate = (strings, ...values) => {
  if (values[0] === undefined) return;

  const lastNumeral = Number(values[0].toString().slice(-1));
  const lastTwoNumerals = Number(values[0].toString().slice(-2));

  if (lastTwoNumerals >= 10 && lastTwoNumerals <= 20) {
    return `${values[0]} человек`;
  }

  switch (lastNumeral) {
    case 0:
    case 2:
    case 3:
    case 4:
      return `${values[0]} человека`;
    default:
      return `${values[0]} человек`;
  }
};
