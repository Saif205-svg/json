function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response
    .then(res=>res.json())
    //promise of json data
    .then(mydata=>console.log(mydata));
};

