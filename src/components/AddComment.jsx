import { Component } from 'react';
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    newComment: {
      comment: '',
      rate: '1', // Voto predefinito
      elementId: this.props.bookId // L'ID del libro (ASIN)
    }
  };

   sendComment = () => {
     const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
     
    fetch(URL,
         {
        method: 'POST',
          body: JSON.stringify(this.state.newComment),
         headers: {
            'Content-Type': 'application/json',
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGU4MjIzZTc0MDAwMTVmN2ZkYjIiLCJpYXQiOjE3NjM2NDMwMTAsImV4cCI6MTc2NDg1MjYxMH0.6BLdSJxayDJINHrg5qO77D3pYxo_AlIZMwKn4m2-F7s"
          }
        })
      .then((response) => {
        if (response.ok) {
           alert('Commento inviato con successo!');
            this.setState({
                 newComment : {
                     comment: "",
                     rate : "1",
                     elementId : this.props.bookId
                              } 
                   })
        } else {
          throw new Error('la chiamata non è ok: ' + response.status)
        }
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
      })
  } //Fine fetch

  componentDidUpdate(prevProps) {
    // Controllo se la prop bookId è effettivamente cambiata
    if (prevProps.bookId !== this.props.bookId) {
        
        // Aggiorno elementId nello stato con il NUOVO bookId
        this.setState({
            newComment: {
                ...this.state.newComment, // Mantieni comment e rate
                elementId: this.props.bookId // Imposta il nuovo ID
            }
        });
    }
  }

 
  render() {
    const { newComment } = this.state;

    return(

         <Form
              onSubmit={(e) => {
                e.preventDefault()
                this.sendComment()
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Aggiungi recensione</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="commento"
                  value={newComment.comment} // '' ???
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment, 
                        comment: e.target.value, 
                      },
                    })
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rate</Form.Label>
                <Form.Select
                  aria-label="number of stars"
                  value={newComment.rate}
                  onChange={(e) => {
                    this.setState({
                      newComment: {
                        ...this.state.newComment, 
                        rate: e.target.value
                      },
                    })
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
              <Button variant="success" type="submit" > Salva </Button>
            </Form>

    )
  }

//   Fine classe
}

export default AddComment