import Card from 'react-bootstrap/Card';
import libriHorror from '../data/books/horror.json'
import { Container, Row, Col} from "react-bootstrap" 

function AllTheBooks() {
  return (
     <Container className="mt-3">
        <Row className='g-4'>
        
            {libriHorror.map((libro) => {

            return (   
                <Col xs={6} md={4} lg={3} key={libro.asin} >
          <Card className='h-100'>
            <Card.Img variant="top" src={libro.img} style={{ width: "100%", maxHeight: "300px" ,objectFit: 'cover' }} />
             <Card.Body>
               <Card.Title>{libro.title}</Card.Title>
               <Card.Text>
                     Price: {libro.price}$
               </Card.Text>
            </Card.Body> 
            </Card>
          </Col>
            ) 
           })}
      </Row>
      </Container>
  );
}

export default AllTheBooks;