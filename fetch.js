function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    //promise of response
    .then(res=>res.json())
    //promise of json data
    .then(mydata=>console.log(mydata));
};

const postData=() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((post)=>post.json())
    .then((data)=> {
        console.log(data);
        displayPost(data);
    })
};

const displayPost = (posts)=>{
    posts.forEach((posts) =>{
        console.log(posts);
    })
}