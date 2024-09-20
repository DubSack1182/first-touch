import { Link } from 'react-router-dom'

export default function ReviewsPage(props) {
      console.log(props)
  return (
    <div class="flex-container">
    <h1>Reviews</h1>
      <main>
  {props.comments.filter(comment => (
    <Link key={comment._id} to={`/touches/${touch._id}/comment`}>
      <article>
      <div class="box one">{touch.Session}</div> 
      <div class="box two">{touch.Location}</div> 
      <div class="box three">{touch.Date}</div> 
      <div class="box four">{touch.Time}</div>
      <button onClick={() => props.handleUpdateTouch(touch._id)} >UPDATE</button> 
      <button onClick={() => props.handleDeleteTouch(touch._id)} >DELETE</button>
      </article>
      </Link>
    ))} 
    </main>
    </div>
  )
}