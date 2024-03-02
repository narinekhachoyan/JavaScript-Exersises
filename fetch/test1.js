// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

  const urlss = [
    'https://jsonplaceholder.typicode.com/posts/24',
    'https://jsonplaceholder.typicode.com/posts/35',
    'https://jsonplaceholder.typicode.com/posts/88'
]

function fetchData(url){
    return fetch(url)
    .then((response) => response.json()) 
}

function fetchFromUrls(urls){
     const promises = urls.map(url => fetchData(url))
    return Promise.allSettled(promises)
}

fetchFromUrls(urlss)
    .then(results => {
        console.log('Combined Results:', results);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });

// the same with async

// async function fetchAPI(){
//     return await Promise.all([
//         fetchData('https://jsonplaceholder.typicode.com/posts/5'),
//         fetchData('https://jsonplaceholder.typicode.com/posts/8')
//     ])
// }

// async function fetchFromAPI(){
//     const result = await fetchAPI();
//     return result;
// }

// fetchFromAPI().then(resp => console.log(resp));
