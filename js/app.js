if('serviceWorker' in navigator){
    
    navigator.serviceWorker 
    .register('/service-worker.js', {scope: './'})
    .then(function(registration) {
        console.log("serviceWorker is registered", registration);
    })
    .catch(function(err){
        console.log("serviceWorker is not registered" ,err);
    })
}

fetch('../data/restaurants.json')
.then(checkStauts)
.then(response => response.json())
.then(data => {
    console.log(data);
})
.then(error => {
    console.log("There was a error", error);
})

function checkStauts(response){
    if(response.ok){
        return response;
    }
    let error = new Error(response.statusText);
    erro.response = response;
    return Promise.reject(error);
}