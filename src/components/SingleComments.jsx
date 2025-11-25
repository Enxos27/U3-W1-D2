import Alert from 'react-bootstrap/Alert';

const SingleComment = ({ comment }) => (
  <Alert variant="secondary" className='shadow'>
      <Alert.Heading >{comment.rate}/5</Alert.Heading>
      
      <hr />
      <p className="mb-0">
        {comment.comment} <br />
      </p>
    </Alert>
);

export default SingleComment