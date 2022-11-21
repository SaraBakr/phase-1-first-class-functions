

const receivesAFunction = (one) => {
    returnsANamedFunction();
    return one();
  };
  const returnsANamedFunction = function () {
    return function add() {
      1 + 1;
    };
  };
  const returnsAnAnonymousFunction = () => {
    return function () {
      1 + 1;
    };
  };