import SingleComment from './SingleComments';

const CommentsList = ({ comments }) => (
  <div className="comments-list">
    {comments.length === 0 ? (
      <p>Nessuna recensione ancora. Sii il primo!</p>
    ) : (
      comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))
    )}
  </div>
);

export default CommentsList