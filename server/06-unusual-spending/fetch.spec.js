import {replace, when} from '../../test-helper';

describe('fetch', () => {
  it('canary test', () => {
     true.should.be.true();
  });
  it('orchestrate the months and api', () => {
    const userID = 'user-id';
    const currentMonth = 'current-month';
    const priorMonth = 'prior-month';
    const priorPayments = [{ id: 1 }];
    const currentPayments = [{ id: 2 }];

    const months = replace('./months');
    const api = replace('./api').api;
    const fetch = require('./fetch').fetch;

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(api(userID, currentMonth)).thenReturn(currentPayments);
    when(api(userID, priorMonth)).thenReturn(priorPayments);

    fetch(userID).should.deepEqual(
      priorPayments.concat(currentPayments)
    );
  });

});
