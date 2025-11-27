import { render, screen } from '@testing-library/react';
import { describe, expect, it} from 'vitest';// Uso Vitest come negli esempi
import Welcome from '../components/Welcome';
import BookList from '../components/BookList';
import SingleBook from '../components/SingleBook';
import CommentArea from '../components/CommentArea';
import libriHorror from '../data/books/horror.json';
import LibraryNavbar from '../components/LibraryNavbar';


describe('Test 1: Verifica montaggio Welcome', () => {
  it('checks if the Welcome component is mounted correctly', () => {
    // 1) Montaggio
    render(<Welcome />);
    
    // 2) Individuazione:
    // Cerchiamo l'elemento con il ruolo 'alert' (il contenitore)
    const welcomeAlert = screen.getByRole('alert');
    
    // E verifichiamo che l'alert contenga il testo desiderato.
    expect(welcomeAlert).toHaveTextContent(/EpiLibrary/i);
});
});

describe('Test 2', () => {
  
  it('should render the correct number of book cards', () => {
    // 1) Montaggio
    render(<BookList books={libriHorror} changeAppState={() => {}} selectedId={null} />);
    
    // 2) Individuazione (Cerchiamo le immagini)
    // Usiamo getAllByRole per trovare tutti gli elementi di un certo tipo
    const bookImages = screen.getAllByRole('img');
    
    // 4) Verifica
    expect(bookImages).toHaveLength(libriHorror.length); // libriHorror ha 50 libri
  });
});

describe('Test 3 : CommentArea Montaggio Iniziale', () => {
  
  it('checks if the CommentArea placeholder is rendered when no book is selected', () => {
    // 1) Montaggio
    render(<CommentArea bookId={null} />);
    
    // 2) Individuazione
    const placeholder = screen.getByText(/Seleziona un libro per le recensioni/i);
    
    // 4) Verifica
    expect(placeholder).toBeInTheDocument();
  });

});

describe('Test 7 : non ci devono essere istanze del componente SingleComment all’interno del DOM.', () => {

it('should not show comment instances (SingleComment) before a book is clicked', () => {
    // 1) Montaggio
    render(<CommentArea bookId={null} />);
    
    // 2) Individuazione (queryBy per l'assenza)
    // Cerchiamo l'intestazione della sezione commenti, che non dovrebbe esserci
    const commentsHeader = screen.queryByText(/Valutazioni e recensioni/i);
    
    // 4) Verifica
    expect(commentsHeader).toBeNull(); 
    expect(commentsHeader).not.toBeInTheDocument();
  });
});