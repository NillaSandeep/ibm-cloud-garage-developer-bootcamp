import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = current();
  const priorMonth = prior();

  const currentMonthPayments = api(userId, currentMonth);
  const priorMonthPayments = api(userId, priorMonth);

  return priorMonthPayments.concat(currentMonthPayments);
};

export {fetch};
