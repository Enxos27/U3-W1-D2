import { Container, Row, Form, Button } from "react-bootstrap" 
import SingleBook from './SingleBook';
import { Component } from 'react';


class BookList extends Component {
     constructor(props) {
    super(props);
  }
  state = {
    search : ''
  } 

  render() {
    const originalBooks = this.props.books || [];
    const filteredBooks = originalBooks.filter((book) => {
        // Converte sia il titolo del libro che la stringa di ricerca in minuscolo 
        // per far in modo che la ricerca non fa distinzione tra maiuscole e minuscole (case-insensitive)
        return book.title.toLowerCase().includes(this.state.search.toLowerCase());
    });
  return (
     <Container className="mt-3">
        <Row className="justify-content-center my-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cerca un libro per titolo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il titolo"
                        // Collega il valore all'input allo stato
                        value={this.state.search}
                        // Aggiorna lo stato ogni volta che l'utente digita
                        onChange={(e) => this.setState({ search: e.target.value })}
                    />
                </Form.Group>
            </Row>
        <Row className='g-4'>
        
            {filteredBooks.map((libro) => {

            return (   
                <SingleBook {...libro} key={libro.asin}> </SingleBook>
            ) 
           })}
      </Row>
      </Container>
  );
}
}

export default BookList;