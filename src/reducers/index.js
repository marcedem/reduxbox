import { combineReducers } from 'redux';
import BooksRecuder from './reducer_books';


const rootReducer = combineReducers({
    books: BooksRecuder
});

export default rootReducer;