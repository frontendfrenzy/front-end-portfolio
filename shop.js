//allpromise


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    }, 1 * 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);
  });
  
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });

  //output
  //The first promise has resolved
  //The second promise has resolved
  //The third promise has resolved
  //Results: 10,20,30
  //Total: 60
  


  
  const a1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const a2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([a1, a2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));


    /*output
    The first promise has resolved
     Resolved: 10
     The second promise has resolved*/
 





//callback and fetch api 


//fetch api method
// Make a GET request to a URL and handle the response using a callback
fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Handle the JSON data returned from the server
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch operation
    console.error('Fetch error:', error);
  });
