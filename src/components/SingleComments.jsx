
const SingleComment = ({ comment }) => (
  <div className="single-comment border p-2 mb-2">
    <p>{comment.comment}</p>
    <p>rate: {comment.rate}/5</p>
  </div>
);

export default SingleComment