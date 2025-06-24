async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    console.log("Try block!");
    console.log(data);
  }
  catch(error) {
    console.log("Catch block!")
    console.error("Facing Error in Fetching Data: " + error);
  }
  finally {
    console.log("Finally block!");
  }
}
fetchData();