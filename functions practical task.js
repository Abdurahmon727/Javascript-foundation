function outerFunction() {
    const outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
      return 0;
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
console.log(closureFunction); // Output: "I am from the outer function"
  