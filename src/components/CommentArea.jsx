import { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [], // Array dove salveremo i commenti ottenuti
    isLoading: true,
    isError: false,
  };

  fetchComments = () => {
     const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
     const id = this.props.bookId;
    fetch(URL+id, {
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

  render() {
    return (
      <div className="comment-area mt-4">
        <h3>Recensioni</h3>
        <CommentsList comments={this.state.comments} /> 
        <AddComment bookId={this.props.bookId} />
      </div>
    );
  }


  }

export default CommentArea