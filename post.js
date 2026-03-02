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
    // for(Post of posts){
    //     console.log(Post);
    // };
    // 1. get the ul container
    const postContainer = document.getElementById('post-container');
    posts.forEach((Post)=>{
        console.log(Post.title);
        //create li item
        const li = document.createElement('li');
        //set innertext 
        li.innerText = Post.title;
        //append li item
        postContainer.appendChild(li);
    })
}