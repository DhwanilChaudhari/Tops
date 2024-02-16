// Write a program of promises and handle that promises also
// Use fetch method for calling an api https://fakestoreapi.com/products

// Function to fetch data from the API
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data); // Resolve the promise with the data
      })
      .catch((error) => {
        reject(error); // Reject the promise with the error
      });
  });
}

// Call the fetchData function
fetchData()
  .then((data) => {
    // Handle successful response
    console.log("Data:", data);
    // Process the data further if needed
  })
  .catch((error) => {
    // Handle error
    console.error("Error:", error.message);
  });
