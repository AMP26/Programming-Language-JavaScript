function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Fetched!');
    }, 5000);
  });
}

fetchData()
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        })