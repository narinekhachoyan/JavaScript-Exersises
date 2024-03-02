// pure fetch
// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));    



function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

//  the same with async

// async  function res () {
    //       const bubu = await result();
    //       console.log(bubu)
    //   }
    
    //   res()
    
    //   //result().then(res => console.log(res))

// async function result () {
//     return  await Promise.all(
//          [
//                   fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/2'),
//                   fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts/3')
//                 ]
//           )
//   }



function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetchDataFromAPI(url));
    console.log(promises, 'promises')
    return Promise.all(promises);
}


// // Example usage:
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });



