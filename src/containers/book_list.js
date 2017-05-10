import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

    renderList(){
        // map over array of books
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        // console.log(this.props.asdf)
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}

// take our application state as an argument
function mapStateToProps(state){
    // whatever is returned will show up as props inside of BookList
    return{ 
        books: state.books  // connection between redux and our component
    }; 
}

// connect take a function and a component and produces a container
export default connect(mapStateToProps)(BookList);