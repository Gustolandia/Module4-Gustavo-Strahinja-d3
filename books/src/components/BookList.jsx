import React , {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
    
    constructor(props) {
        super(props);
    }
      
    render(){
        return(
            <Row className="row row-cols-3">{
                this.props.books.map( (e) => {
                    return(
                        <Col className="mb-3">
                            <SingleBook book={e}/>
                        </Col>
                    )
                })
            }
            </Row>
                
        )
    }
}
export default BookList;