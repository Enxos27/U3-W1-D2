import { useState, useEffect } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment'

const CommentArea = (props) => {
  const [comments, setComments] = useState([]); // Array dove salveremo i commenti ottenuti

  const fetchComments = () => {
     const URL = `https://striveschool-api.herokuapp.com/api/comments/${props.bookId}`;
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
        setComments(arrayOfComments);
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
      })
  } 

    useEffect(() => {
      fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.bookId])
  


    // Se non è selezionato nessun libro, mostra un messaggio
    if (!props.bookId) {
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
        <CommentsList comments={comments} /> 
        <AddComment bookId={props.bookId} />
      </div>
    );
  }


export default CommentArea