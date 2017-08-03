const current = () => {
  return (new Date().getMonth() + 1);
};
const prior = () => {
  return new Date().getMonth();
};

export {current, prior};
