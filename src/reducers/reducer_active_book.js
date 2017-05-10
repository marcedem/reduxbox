
// State argument is not application state, only the state this reducer is responsible for
// in other words, a local state
// state = null is a magic from ES6, to set undefined state to null
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state;
}