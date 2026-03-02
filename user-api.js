const userApi = () =>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch (url).then((response)=>response.json()).then((data)=>displayUserApi(data));
};

const displayUserApi = (users) =>{
    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML = '';

    users.forEach((user) =>{
        const newUserContainer = document.createElement('div');
        newUserContainer.innerHTML = `
        <div class="user-card">
            <p>${user.name}</p>
        `
        userContainer.append(newUserContainer)
    }) 
};
userApi()