const initSatate = {
    search: '',
    status: 'All',
    priorities: []
}

const filtersReducer = (state = initSatate, action) => {
    /**
     * action:{
     * type: ''
     * payload: {id: 1,name:"Lear yog", completed:false,priority:"Medium"},
     * }
     */

    switch (action.type) {
        case "filters/searchFilter": {
            return {
                ...state,
                search: action.payload
            }
        }
        case "filters/statusFilterChange": {
            return {
                ...state,
                status: action.payload
            }
        }
        case "filters/prioritiesFilterChange": {
            return {
                ...state,
                priorities: action.payload
            }
        }
        default: return state
    }




}

export default filtersReducer;