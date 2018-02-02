const dateNow = (state = null, action) => {
  switch (action.type) {
    case 'SET_DATE_NOW':
      const newDateNow = action.dateNow.toString();
      const newDateNowTime = newDateNow.slice(16, 21);
      const oldDateNowTime = state.toString().slice(16, 21);
      const isChanged = oldDateNowTime !== newDateNowTime;

      return !isChanged ? state : new Date(action.dateNow);

    default:
      const dateNow = new Date();

      return state || dateNow;
  }
};

export default dateNow;
