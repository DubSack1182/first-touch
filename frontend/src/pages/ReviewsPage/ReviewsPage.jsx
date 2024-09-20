const ReviewsPage = ({ user, handleDeleteTouch }) => {
  const { touchId } = useParams();
  console.log('touchId', touchId);

  const [touch, settouch] = useState(null);


  useEffect(() => {
      const fetchTouch = async () => {
        const touchData = await touchService.show(touchId);
        console.log('touchData', TouchEventData);
        setTouch(touchData);
      };
      fetchTouch();
    }, [touchId]);
    
  // Verify that touch state is being set correctly:
  console.log('touch state:', touch);

  const handleAddComment = async (commentFormData) => {
      const newComment = await touchService.createComment(touchId, commentFormData);
      setTouch({ ...touch, comments: [...touch.comments, newComment] });
  };

  const handleDeleteComment = async (commentId) => {
      console.log('commentId:', commentId);
      const deleteComment = await touchService.deleteComment(touchId, commentId)
      setTouch({...touch, comments: touch.comments.filter((comment) => comment._id !== commentId),});
    };

  if (!touch) return <main>Loading...</main>
  return (
      <main>
        <header>
          <p>{touch.category.toUpperCase()}</p>
          <h1>{touch.title}</h1>
          <p>
            {touch.author.username} posted on
            {new Date(touch.createdAt).toLocaleDateString()}
          </p>
          {touch.author._id === user._id && (
          <>
              <Link to={'/touches/edit'}>Edit</Link>
              <button onClick={() => handleDeleteTouch(touchId)}>Delete</button>
          </>
          )}
        </header>
        <p>{touch.text}</p>
        <section>
          <h2>Comments</h2>
          <CommentForm handleAddComment={handleAddComment} />
          {!touch.comments.length && <p>There are no comments.</p>}
          {touch.comments.map((comment) => (
              <article key={comment._id}>
              <header>
                  <p>
                  {comment.author.username} posted on
                  {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                  <Link to={'/touches/comments/edit'}>edit.</Link>
                  <button onClick={() => handleDeleteComment(comment._id)} >delete.</button>
              </header>
              <p>{comment.text}</p>
              </article>
          ))}
        </section>
      </main>
    );
};


export default ReviewsPage;

