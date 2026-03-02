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
            <p>${user.email}</p>
            <p>${user.address.suite}</p>
            <p>${user.address.street}</p>
            <p>${user.address.city}</p>
            <p>${user.phone}</p>
            <p>${user.website}</p>
            <p>${user.address.geo.lng}</p>
            <p>${user.company.name}</p>
            <p>${user.company.catchPhrase}</p>
            <p>${user.company.bs}</p>
        `
        userContainer.append(newUserContainer)
    }) 
};
userApi()