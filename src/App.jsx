
import 'bootstrap/dist/css/bootstrap.min.css'
import LibraryNavbar from './components/LibraryNavbar'
import Footer from './components/LibraryFooter'
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import libriHorror from './data/books/horror.json'
import { Col,Container, Row } from "react-bootstrap" 
import { Component } from 'react';
import CommentArea from './components/CommentArea'


class App extends Component {
  state = {
   idLibro: '', 
  }

  changeAppState = (value) => {
    this.setState({
      idLibro: value,
    })
  }
  
  render() {
    return (
      <>
       <LibraryNavbar illuminaLink="Home"></LibraryNavbar>
     <Welcome></Welcome>
     <Container fluid>
      <Row>
        {/* passo a BookList il file json dei libri, il metodo per cambiare lo stato di app nel quale è contenuto l'id del libro corrente ed infine passo il libro corrente */}
      <Col xs={8} > <BookList books={libriHorror}  changeAppState={this.changeAppState} selectedId={this.state.idLibro} ></BookList> </Col>
      <Col xs={4} > <CommentArea bookId={this.state.idLibro} ></CommentArea> </Col> 
      </Row>
     </Container>
     <Footer></Footer>
    </>
  )
}
}

export default App
