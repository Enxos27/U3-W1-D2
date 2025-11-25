
import 'bootstrap/dist/css/bootstrap.min.css'
import LibraryNavbar from './components/LibraryNavbar'
import Footer from './components/LibraryFooter'
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import libriHorror from './data/books/horror.json'
import { Col,Container, Row } from "react-bootstrap" 

import CommentArea from './components/CommentArea'
import { useState } from 'react'


const App = () => {
  const [idLibro, setIdLibro] = useState('')

  const changeAppState = (value) => {
    setIdLibro(value)
  }
  
  
    return (
      <>
       <LibraryNavbar illuminaLink="Home"></LibraryNavbar>
     <Welcome></Welcome>
     <Container fluid>
      <Row>
        {/* passo a BookList il file json dei libri, il metodo per cambiare lo stato di app nel quale è contenuto l'id del libro corrente ed infine passo il libro corrente */}
      <Col xs={8} > <BookList books={libriHorror}  changeAppState={changeAppState} selectedId={idLibro} ></BookList> </Col>
      <Col xs={4} > <CommentArea bookId={idLibro} ></CommentArea> </Col> 
      </Row>
     </Container>
     <Footer></Footer>
    </>
  )

}

export default App
