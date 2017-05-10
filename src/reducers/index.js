import { combineReducers } from 'redux';
import BooksRecuder from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksRecuder,
    activeBook: ActiveBook
});

export default rootReducer;