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

//fetch('../data/restaurants.json')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.then(error => {
    console.log("There was a error");
})