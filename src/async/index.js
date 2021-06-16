const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log('Primera: ',something);
};

console.log("Before");
doSomething();
console.log("After");

// capturar el error

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log('Segunda: ', something);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before 1");
anotherFunction();
console.log("After 2");
