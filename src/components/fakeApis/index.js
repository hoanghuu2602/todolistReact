import { createServer } from "miragejs"

export const setupServer = () => {
    let server = createServer();
    server.get('/api/todos', {
        todos: [
            { id: 1, name: "Lear Yago", completed: false, priority: "Medium" },
            { id: 2, name: "Lear Redux", completed: true, priority: "High" },
            { id: 3, name: "Lear jvascript", completed: false, priority: "Low" },
        ]
    })
}