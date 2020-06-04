import React , {Component} from 'react';
import {Row, Col, FormControl} from 'react-bootstrap';
import SingleBook from './SingleBook';
let books = require("./data/fantasy.json");
let filteredBooks= require("./data/fantasy.json");



class BookList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          books: books.slice(0, 12),
        };
      }

    handleSearchQuery = (searchQuery) => {

        if (searchQuery) {
            filteredBooks = books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          this.setState({ books: filteredBooks.slice(0, 12) });
        } else {
          this.setState({ books: books.slice(0, 12) });
        }
      };
    render(){
        return(
            
            <>
            <FormControl
              placeholder="Search Books by Title"
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => this.handleSearchQuery(e.target.value, books)}
            />
            <Row className="row row-cols-3">
                {
                filteredBooks.map( (es) => {
                    return(
                        <Col key={es.asin} className="mb-3">
                            <SingleBook book={es}/>
                        </Col>
                    )
                })
            }
            </Row>
            </>
                
        )
    }
}
export default BookList;