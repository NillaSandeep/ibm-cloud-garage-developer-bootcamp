import {replace, when, verify} from "../../test-helper"

describe('unusual spending', () => {
  it('canary test', () => {
     true.should.be.true();
  });
  it('orchestrates fetch, categorize and email', () => {
    const userId = {};
    const payments = [];
    const categorized = {};
    const fetch = replace('./fetch').fetch;
    const categorize = replace('./categorize').categorize;
    const email = replace('./email').email;

    let unusualSpending;


    when(fetch(userId)).thenReturn(payments);
    when(categorize(payments)).thenReturn(categorized);

    unusualSpending = require('./unusual-spending').unusualSpending;
    unusualSpending(userId);
    verify(email(userId,categorized));
  });

});
