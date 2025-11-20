import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap" 
import { Component } from 'react';
import CommentArea from './CommentArea';

class SingleBook extends Component {
  state = {
    selected : false
  }
   gestioneClick = () => {
    this.setState({
        selected : !this.state.selected
    })

  }
  render() {
    return (
         <Col xs={6} md={4} lg={3} key={this.props.asin}  >
          <Card 
          className= {"h-100" +  (this.state.selected ? ' border border-3 border-danger' : '')} 
          onClick={this.gestioneClick}>
            <Card.Img variant="top" src={this.props.img} style={{ width: "100%", maxHeight: "300px" ,objectFit: 'cover' }} />
             <Card.Body>
               <Card.Title>{this.props.title}</Card.Title>
               <Card.Text>
                     Price: {this.props.price}$
               </Card.Text>
                 {this.state.selected && <CommentArea bookId={this.props.asin} />}
            </Card.Body> 
            </Card>
          </Col>
    )
  }
}

export default SingleBook;