import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap" 
import CommentArea from './CommentArea';
  
const SingleBook = (props) => {
  const gestioneClick = () => {
    // Determino lo stato di selezione attuale tramite la prop passata da BookList
    const currentlySelected = props.isSelected; 
    // Se è attualmente selezionato (true), vogliamo deselezionarlo (passa '')
    // Altrimenti (è false) quindi vogliamo selezionarlo (passa l'asin)
    const nextAsin = currentlySelected ? '' : props.asin;
    // Aggiorno con il NUOVO ASIN il componente App
    props.changeAppState(nextAsin);
  }

    const isSelected = props.isSelected;
    return (
         <Col xs={6} md={4} lg={3} key={props.asin}  >
          <Card 
          className= {"h-100 shadow" +  (isSelected ? ' border border-3 border-danger' : '')} 
          onClick={gestioneClick}>
            <Card.Img variant="top" src={props.img} style={{ width: "100%", maxHeight: "300px" ,objectFit: 'cover' }} />
             <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>
                     Price: {props.price}$
               </Card.Text>
              
            </Card.Body> 
            </Card>
          </Col>
    )
}

export default SingleBook;