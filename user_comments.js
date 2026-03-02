const url = "https://jsonplaceholder.typicode.com/comments";
fetch(url).then((response)=>response.json()).then((data)=>displayComment(data));

const displayComment = (comments) =>{
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerHTML = '';

    comments.forEach((comment)=>{
        const newComment = document.createElement('div');
        newComment.innerHTML = `
        <div class ="comment-card">
            <p>${comment.postId}</p>
            <p>${comment.name}</p>
            <p>${comment.email}</p>
            <p>${comment.body}</p>
        `
        commentContainer.append(newComment)
    })
}