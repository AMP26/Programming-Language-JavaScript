function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data Fetched!');
    }, 5000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  }
  catch(error) {
    console.error(error);
  }
}