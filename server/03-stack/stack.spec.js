const makeStack = () => {
  let stackSize = 0;
  return {
    isEmpty: () => stackSize === 0,
    size: () => stackSize,
    push: () => {
      if (stackSize === 3) throw new Error('Stack Size Cannot Exceed 3');
      stackSize++;
    },
  pop: () => {
    if (stackSize === 0) throw new Error('Stack size cannot be less than 0');
    stackSize--;
    }
  };
};

let stack;

describe.only('the stack spec', () => {
  beforeEach(() => {
    stack = makeStack();
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
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
