// Part 4

const todoList = [ 

    {todo : "clone repository for starter code", status : "complete"},

    {todo : "modify app.js file to include a for loop", status : "started"}

]

let completedTodos = []

// Part 5

for (const obj of todoList) {
    if (obj["status"] === "complete") {
        completedTodos.push(obj)
    }
}


// Part 6

