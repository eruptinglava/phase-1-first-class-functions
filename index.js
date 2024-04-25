const receivesAFunction = (callback) => {
    callback();
  };
  
  const returnsANamedFunction = () => {
    return function func1() {
  
    };
  };
  
  const returnsAnAnonymousFunction = () => {
    return function() {
  
    };
  };