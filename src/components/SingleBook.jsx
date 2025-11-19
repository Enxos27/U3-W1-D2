import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap" 
import { Component } from 'react';

class SingleBook extends Component {
     constructor(props) {
    super(props);
  }
  state = {
    selected : false
  }
   handleClick = () => {
    this.setState(prevState => ({
        selected : !prevState.selected

    }))

  }
  render() {
    return (
         <Col xs={6} md={4} lg={3} key={this.props.asin}  >
          <Card 
          className= {this.state.selected ? 'border border-3 border-danger' : ''} 
          onClick={this.handleClick}>
            <Card.Img variant="top" src={this.props.img} style={{ width: "100%", maxHeight: "300px" ,objectFit: 'cover' }} />
             <Card.Body>
               <Card.Title>{this.props.title}</Card.Title>
               <Card.Text>
                     Price: {this.props.price}$
               </Card.Text>
            </Card.Body> 
            </Card>
          </Col>
    )
  }
}

export default SingleBook;