export const getCounter = () => {
  let counter = 0;
  return (): number => {
    return ++counter;
  };
};

export const getIncrementor = (init: number, increment: number) => {
  const counter = getCounter();
  return () => init + counter() * increment;
};
