// Callbacks - A function Passing a function as a parameter to another function.

function fetchData(callback) {
  setTimeout(() => {
    let data = "Data Fetched!";
    callback(data, null);
  }, 5000);
}

function dataHandle(data, error) {
  if(error) {
    console.error(error);
  }
  else {
    console.log(data);
  }
}

fetchData(dataHandle);

console.log("Hello here!");