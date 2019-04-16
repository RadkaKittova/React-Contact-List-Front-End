const initData = {
    items: [],
}

const loadData = 'LOAD_DATA'

//if doesnt work, get previous state

function reducer(state = initData, action) {
    if (action.type == loadData) {
        return {
            ...state,
            items: action.items,
        }
    }
    return state;
}

export default reducer;