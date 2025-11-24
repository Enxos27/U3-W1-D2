import { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [], // Array dove salveremo i commenti ottenuti
  };

  fetchComments = () => {
     const URL = `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`;
    fetch(URL, {
         headers: {
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGU4MjIzZTc0MDAwMTVmN2ZkYjIiLCJpYXQiOjE3NjM2NDMwMTAsImV4cCI6MTc2NDg1MjYxMH0.6BLdSJxayDJINHrg5qO77D3pYxo_AlIZMwKn4m2-F7s"
          }
        })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è ok: ' + response.status)
        }
      })
      .then((arrayOfComments) => {
        console.log("aaa", arrayOfComments)
        this.setState({
          comments: arrayOfComments
        })
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
      })
  } 

  componentDidMount() {
    this.fetchComments();
  }

  // Controlla se la prop bookId è cambiata, e se sì, effettua una nuova fetch
  componentDidUpdate(prevProps) {

    if (prevProps.bookId !== this.props.bookId) {

      if (this.props.bookId) {
        this.fetchComments(this.props.bookId);
      } else {
        this.setState({ comments: [] });
      }
    }
  }

  render() {
    // Se non è selezionato nessun libro, mostra un messaggio
    if (!this.props.bookId) {
        return (
            <div className="comment-area mt-4 text-center">
                <h3>Seleziona un libro per le recensioni</h3>
            </div>
        );
    }
    return (
      // Mostra l'area dei commenti solo se è selezionato un libro
      <div className="comment-area mt-4 position-sticky overflow-auto" style={{ top: "30px", maxHeight: "90vh" }}>
        <h3>Recensioni</h3>
        <CommentsList comments={this.state.comments} /> 
        <AddComment bookId={this.props.bookId} />
      </div>
    );
  }


  }

export default CommentArea