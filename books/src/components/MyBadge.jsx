import React , {Component} from 'react';
import {Badge} from 'react-bootstrap';

class MyBadge extends Component {
    
    constructor(props) {
        super(props);
    }
      
    render(){
        return(
            <h3>
                <Badge variant={this.props.color}>{this.props.text}</Badge>
            </h3>
        )
    }
}
export default MyBadge;