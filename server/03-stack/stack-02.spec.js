const createStack = (capacity) => {
  if (capacity <= 0) throw new Error('Stack capacity should be a positive value');
  let stackSize = 0;
  let stackArray = [];
  return {
    isEmpty: () => stackSize === 0,
    size: () => stackSize,
    push: (pushVal) => {
      if (stackSize === 3) throw new Error('Stack size should not exceed 3');
      stackSize++;
      return stackArray.push(pushVal);
    },
    pop: () => {
      stackSize--;
      if (stackSize < 0) throw new Error('Stack size should not be below 0');
      return stackArray.pop();
    }
  };
};

let stack;

describe('the stack spec', () => {
  beforeEach(() => {
    stack = createStack();
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
    stack.push();
    stack.push();
    stack.push();
    (() => {
     stack.push();
    }).should.throw('Stack size should not exceed 3');
  });
  it('under-flows', () => {
    (() => {
      stack.pop();
    }).should.throw('Stack size should not be below 0');
  });
  it('pops the same one pushed', () => {
    stack.push('blue');
    stack.pop().should.equal('blue');
  });
  it('pops the same two pushed', () => {
    stack.push('blue');
    stack.push('red');
    stack.pop().should.equal('red');
    stack.pop().should.equal('blue');
  });
  it('accepts only positive capacity', () => {
    (() => {
      createStack(0);
    }).should.throw('Stack capacity should be a positive value');
  });
});
