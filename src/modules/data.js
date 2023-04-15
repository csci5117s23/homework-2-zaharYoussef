const backend_base = process.env.NEXT_PUBLIC_API_ENDPOINT;


// Get calls
export const getTodosItems = async (authToken, userId) => {
    const result = await fetch(backend_base+"/tasks?user="+userId+"&doneStatus=false", {
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json()
}

export const getTodosInCategory = async (authToken, userId, category) => {
    const result = await fetch(`${backend_base}/tasks?user=${userId}&doneStatus=false&category=${category}`, {
        'method': 'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json()
}

export const getDoneItems = async (authToken, userId) => {
    const result = await fetch(backend_base+"/tasks?user="+userId+"&doneStatus=true", {
        'method': 'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json()
}

export const getDoneInCategory = async (authToken, userId, category) => {
    const result = await fetch(`${backend_base}/tasks?user=${userId}&doneStatus=true&category=${category}`, {
        'method': 'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json()
}

export const getTodoItem = async (authToken, todoId) => {
    console.log(todoId);
    const result = await fetch(backend_base+"/tasks/"+todoId, {
        'method':'GET',
        'headers': {'Authorization': 'Bearer ' + authToken}
    })
    return await result.json()
}

export const getCategories = async (authToken, userId) => {
    const result = await fetch(backend_base+"/taskCategories?user="+userId, {
        'method': 'GET',
        'headers': {
            'Authorization': 'Bearer ' + authToken
        }
    })
    // const responseText = await result.text();
    // console.log(responseText);
    return await result.json()
}


//Add Calls
export const addTodoItem = async (authToken, todoItem) => {
    // console.log(todoItem)
    const result = await fetch(backend_base+"/tasks/", {
        'method':'POST',
        'headers': {'Authorization': 'Bearer ' + authToken,
        'Content-Type': 'application/json'},
        'body': JSON.stringify(todoItem)
    })
    return await result.json();
}

export const addCategory = async (authToken, newCategory) => {
    const result = await fetch(backend_base+"/taskCategories", {
        'method':'POST',
        'headers': {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(newCategory)
    })
    return await result.json();
}


// Edit calls
export const editTodoItem = async (authToken, todoId, newTodo) => {
    const result = await fetch(backend_base+"/tasks/"+todoId, {
        'method': 'PATCH',
        'headers': {
            'Authorization': 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(newTodo)
    })
}