import {current, prior} from './months';

describe.only('months', () => {

  const oldDate = Date;

  beforeEach(() => {
    const today = new Date(2012, 8); // Sept 2012

    // eslint-disable-next-line no-native-reassign
    Date = () => {
      return today;
    };
  });

  afterEach(() => {
    // eslint-disable-next-line no-native-reassign
    Date = oldDate;
  });

  it('canary test for architecture', () => {
   true.should.be.true();
  });

  it('current()', () => {
   current().should.equal(9);
  });

  it('prior()', () => {
   prior().should.equal(8);
  });
});
