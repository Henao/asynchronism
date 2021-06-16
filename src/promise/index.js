const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

somethingWillHappen_2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

somethingWillHappen_2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// Promesas encadenadas

Promise.all([somethingWillHappen(), somethingWillHappen_2()])
  .then((response) => {
    console.log("Array of results ", response);
  })
  .catch((err) => {
    console.error(err);
  });
