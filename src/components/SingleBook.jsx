import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap" 
import { Component } from 'react';
import CommentArea from './CommentArea';

class SingleBook extends Component {
  gestioneClick = () => {
    // Determino lo stato di selezione attuale tramite la prop passata da BookList
    const currentlySelected = this.props.isSelected; 
    // Se è attualmente selezionato (true), vogliamo deselezionarlo (passa '')
    // Altrimenti (è false) quindi vogliamo selezionarlo (passa l'asin)
    const nextAsin = currentlySelected ? '' : this.props.asin;
    // Aggiorno con il NUOVO ASIN il componente App
    this.props.changeAppState(nextAsin);
  }
  render() {
    const isSelected = this.props.isSelected;
    return (
         <Col xs={6} md={4} lg={3} key={this.props.asin}  >
          <Card 
          className= {"h-100" +  (isSelected ? ' border border-3 border-danger' : '')} 
          onClick={this.gestioneClick}>
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