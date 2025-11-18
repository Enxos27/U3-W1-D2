
import 'bootstrap/dist/css/bootstrap.min.css'
import LibraryNavbar from './components/LibraryNavbar'
import Footer from './components/LibraryFooter'
import AllTheBooks from './components/AllTheBooks'
import Welcome from './components/Welcome'

function App() {
  

  return (
    <>
     <LibraryNavbar></LibraryNavbar>
     <Welcome></Welcome>
     <AllTheBooks></AllTheBooks>
     <Footer ></Footer>
    </>
  )
}

export default App
