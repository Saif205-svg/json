const postData=() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((post)=>post.json())
    .then((data)=> {
        // console.log(data);
        displayPost(data);
    })
};

const displayPost = (posts) =>{
    //get the container and set empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";
    posts.forEach((post)=>{
        //create new div
        const postCard = document.createElement('div');
        postCard.innerHTML= `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `
        postContainer.append(postCard)
    });
    loadPost()
}