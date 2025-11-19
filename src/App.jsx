
import 'bootstrap/dist/css/bootstrap.min.css'
import LibraryNavbar from './components/LibraryNavbar'
import Footer from './components/LibraryFooter'
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import libriHorror from './data/books/horror.json'

function App() {
  

  return (
    <>
     <LibraryNavbar illuminaLink="Home"></LibraryNavbar>
     <Welcome></Welcome>
     {/* <AllTheBooks></AllTheBooks> */}
     <BookList books={libriHorror} ></BookList>
     <Footer ></Footer>
    </>
  )
}

export default App
