const loadTodo = () =>{
    const url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url).then((response)=>response.json()).then((data)=>displayTodo(data));
}; 
const displayTodo = (todos)=>{
    //step 1--> get the container
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = '';

    todos.forEach((todo) =>{
        console.log(todo);

        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class = "todo-card">
            <h4>${todo.title}</h4>
            <p>${todo.completed == true? `<i class="fa-solid fa-square-check"></i>`: `<i class="fa-regular fa-square-check"></i>`}  </p>
        </div>    
        `
        todoContainer.append(todoCard)
    })
};
loadTodo()