import { Container, Row, Form, Button } from "react-bootstrap" 
import SingleBook from './SingleBook';
import { useState} from 'react';


const BookList = (props) => {
  const [search, setSearch] = useState('')
 const originalBooks = props.books || [];
    const filteredBooks = originalBooks.filter((book) => {
        // Converte sia il titolo del libro che la stringa di ricerca in minuscolo 
        // per far in modo che la ricerca non fa distinzione tra maiuscole e minuscole (case-insensitive)
        return book.title.toLowerCase().includes(search.toLowerCase());
    });

     return (
     <Container >
        <Row className="justify-content-center mb-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Cerca un libro per titolo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il titolo"
                        // Collega il valore all'input allo stato
                        value={search}
                        // Aggiorna lo stato ogni volta che l'utente digita
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form.Group>
            </Row>
        <Row className='g-4'>
        
            {filteredBooks.map((libro) => {

            return (   
              // passo a single boock tutte le props di libro + la funzione per cambiare lo stato di app + se è selezionato o no, in base al confronto tra l'id selezionato in app e l'asin del libro
                <SingleBook {...libro} key={libro.asin}  changeAppState={props.changeAppState} isSelected={props.selectedId === libro.asin}> </SingleBook>
            ) 
           })}
      </Row>
      </Container>
  );


  } 

export default BookList;