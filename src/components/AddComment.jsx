import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'

const AddComment = (props) => {
    const [newComment, setNewComment] = useState({
       comment: '',
      rate: '1',
      elementId: props.bookId 
     })

   const sendComment = () => {
        const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
     
        fetch(URL,
         {
        method: 'POST',
          body: JSON.stringify(newComment),
         headers: {
            'Content-Type': 'application/json',
             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGU4MjIzZTc0MDAwMTVmN2ZkYjIiLCJpYXQiOjE3NjM2NDMwMTAsImV4cCI6MTc2NDg1MjYxMH0.6BLdSJxayDJINHrg5qO77D3pYxo_AlIZMwKn4m2-F7s"
          }
        })
      .then((response) => {
        if (response.ok) {
           alert('Commento inviato con successo!');
                   setNewComment({
                     comment: "",
                     rate : "1",
                     elementId : props.bookId
                   })
        } else {
          throw new Error('la chiamata non è ok: ' + response.status)
        }
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
      })
  } //Fine fetch

  useEffect(() => {
    console.log("vediamo se entra due volte")
    sendComment()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookId])



    return(
      
         <Form
              onSubmit={(e) => {
                e.preventDefault()
                sendComment()
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
                      setNewComment({
                    ...newComment,
                    comment: e.target.value,
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
                    setNewComment({
                      ...newComment,
                      rate: e.target.value,
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

export default AddComment