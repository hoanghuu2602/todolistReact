const initSatate = {
    filters: {
        search: '',
        status: '',
        priority:[]
    },
    todoList: [
        {id: 1,name:"Lear Yago", completed:false,priority:"Medium"},
        {id: 2,name:"Lear Redux", completed:true,priority:"High"},
        {id: 3,name:"Lear jvascript", completed:false,priority:"Low"},
    ]
}

const rootReducer = (state=initSatate,action) => {
    /**
     * action:{
     * type: ''
     * payload: {id: 1,name:"Lear yog", completed:false,priority:"Medium"},
     * }
     */

    switch (action.type) {
        case "todoList/addTodo": {
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                   action.payload
                ]
            }
    }
        default: return state
    }
    



}

export default rootReducer;