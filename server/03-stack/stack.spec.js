const makeStack = (capacity) => {
  if (capacity <= 0) throw new Error('Size should be a positive integer');
  const stackValues = [];
  return {
    isEmpty: () => stackValues.length === 0,
    size: () => stackValues.length,
    push: (pushVal) => {
      if (stackValues.length === capacity) throw new Error('Stack Size Cannot Exceed ' + capacity);
      stackValues.push(pushVal);
    },
    pop: () => {
      if (stackValues.length === 0) throw new Error('Stack size cannot be less than 0');
      return stackValues.pop();
    },
  };
};

let stack;

describe('the stack spec', () => {
  beforeEach(() => {
    stack = makeStack(3);
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  it('overflows', () => {
    const doOverflow = () => {stack.push();};
    stack.push();
    stack.push();
    stack.push();
    doOverflow.should.throw('Stack Size Cannot Exceed 3');
  });

  it('under-flows', () => {
    const doUnderflow = () => {stack.pop();};
    doUnderflow.should.throw('Stack size cannot be less than 0');
  });

  it('pops the same one pushed', () => {
    const testVal = 'blue';
    stack.push(testVal);
    stack.pop().should.equal(testVal);
  });

  it('pops the same two pushed', () => {
    stack.push('blue');
    stack.push('red');
    stack.pop().should.equal('red');
    stack.pop().should.equal('blue');
  });

  it('accepts only positive capacity', () => {
    const checkCapacity = () => {makeStack(-1);};
    checkCapacity.should.throw('Size should be a positive integer');
  });
});
